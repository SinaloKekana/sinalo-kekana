import React, { createContext, useContext, useState, useEffect } from 'react';
import defaultPortrait from '../assets/images/sinalo_portrait_exact.jpg';

interface PhotoContextType {
  photoUrl: string;
  isCustomPhoto: boolean;
  fitMode: 'cover' | 'contain';
  setFitMode: (mode: 'cover' | 'contain') => void;
  updatePhotoFromFile: (file: File) => Promise<boolean>;
  resetToDefault: () => void;
  isUploaderOpen: boolean;
  setIsUploaderOpen: (open: boolean) => void;
}

const STORAGE_KEY = 'sinalo_portfolio_custom_photo_v2';
const FIT_KEY = 'sinalo_portfolio_photo_fit_v2';

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(defaultPortrait);
  const [isCustomPhoto, setIsCustomPhoto] = useState<boolean>(false);
  const [fitMode, setFitModeState] = useState<'cover' | 'contain'>('cover');
  const [isUploaderOpen, setIsUploaderOpen] = useState<boolean>(false);

  useEffect(() => {
    // Check localStorage for previously saved photo
    try {
      localStorage.removeItem('sinalo_portfolio_custom_photo_v1');
      const savedPhoto = localStorage.getItem(STORAGE_KEY);
      if (savedPhoto) {
        setPhotoUrl(savedPhoto);
        setIsCustomPhoto(true);
      }
      const savedFit = localStorage.getItem(FIT_KEY);
      if (savedFit === 'contain' || savedFit === 'cover') {
        setFitModeState(savedFit);
      }
    } catch {
      // Storage access may fail in restricted iframes; ignore gracefully
    }
  }, []);

  const setFitMode = (mode: 'cover' | 'contain') => {
    setFitModeState(mode);
    try {
      localStorage.setItem(FIT_KEY, mode);
    } catch {
      // ignore
    }
  };

  const updatePhotoFromFile = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file (PNG, JPG, JPEG, WEBP).');
        resolve(false);
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          setPhotoUrl(result);
          setIsCustomPhoto(true);
          try {
            localStorage.setItem(STORAGE_KEY, result);
          } catch {
            // If quota exceeded, compress for persistent storage while keeping full in state
            try {
              const img = new Image();
              img.onload = () => {
                const canvas = document.createElement('canvas');
                const maxDim = 1200;
                let w = img.width;
                let h = img.height;
                if (w > maxDim || h > maxDim) {
                  if (w > h) {
                    h = Math.round((h * maxDim) / w);
                    w = maxDim;
                  } else {
                    w = Math.round((w * maxDim) / h);
                    h = maxDim;
                  }
                }
                canvas.width = w;
                canvas.height = h;
                const ctx = canvas.getContext('2d');
                ctx?.drawImage(img, 0, 0, w, h);
                const compressed = canvas.toDataURL('image/jpeg', 0.88);
                try {
                  localStorage.setItem(STORAGE_KEY, compressed);
                } catch {
                  // Ignore
                }
              };
              img.src = result;
            } catch {
              // Ignore
            }
          }
          resolve(true);
        } else {
          resolve(false);
        }
      };
      reader.onerror = () => resolve(false);
      reader.readAsDataURL(file);
    });
  };

  const resetToDefault = () => {
    setPhotoUrl(defaultPortrait);
    setIsCustomPhoto(false);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  return (
    <PhotoContext.Provider
      value={{
        photoUrl,
        isCustomPhoto,
        fitMode,
        setFitMode,
        updatePhotoFromFile,
        resetToDefault,
        isUploaderOpen,
        setIsUploaderOpen,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhoto = (): PhotoContextType => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhoto must be used within a PhotoProvider');
  }
  return context;
};
