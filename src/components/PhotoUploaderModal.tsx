import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Upload,
  X,
  Camera,
  Image as ImageIcon,
  Check,
  RotateCcw,
  Maximize2,
} from 'lucide-react';
import { usePhoto } from '../context/PhotoContext';

export const PhotoUploaderModal: React.FC = () => {
  const {
    photoUrl,
    isCustomPhoto,
    fitMode,
    setFitMode,
    updatePhotoFromFile,
    resetToDefault,
    isUploaderOpen,
    setIsUploaderOpen,
  } = usePhoto();

  const [isDragging, setIsDragging] = useState(false);
  const [successNotice, setSuccessNotice] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isUploaderOpen) return null;

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const ok = await updatePhotoFromFile(e.dataTransfer.files[0]);
      if (ok) {
        setSuccessNotice(true);
        setTimeout(() => setSuccessNotice(false), 3000);
      }
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const ok = await updatePhotoFromFile(e.target.files[0]);
      if (ok) {
        setSuccessNotice(true);
        setTimeout(() => setSuccessNotice(false), 3000);
      }
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsUploaderOpen(false)}
          className="fixed inset-0 bg-[#161412]/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-[#D7CEC5] text-[#171412] rounded-3xl p-6 sm:p-8 shadow-2xl border border-[#2E2824]/20 z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#2E2824]/20 pb-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#171412] text-[#D7CEC5] flex items-center justify-center">
                <Camera className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif-title font-bold text-lg text-[#171412]">
                  Set Your Exact Photo
                </h3>
                <p className="text-xs text-[#5F564F]">
                  Display your personal portrait untouched and uncropped
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsUploaderOpen(false)}
              className="p-2 rounded-xl text-[#5F564F] hover:text-[#171412] hover:bg-[#2E2824]/10 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drag & Drop Zone */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
              isDragging
                ? 'border-[#171412] bg-[#2E2824]/15 scale-[0.99]'
                : 'border-[#2E2824]/30 hover:border-[#171412] hover:bg-[#2E2824]/5'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/webp"
              onChange={handleFileChange}
              className="hidden"
            />

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#171412]/10 flex items-center justify-center text-[#171412]">
                <Upload className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#171412]">
                  Click to browse or drop your picture here
                </p>
                <p className="text-xs text-[#5F564F] mt-1">
                  Supports PNG, JPG, JPEG, WEBP (Original Quality)
                </p>
              </div>
            </div>
          </div>

          {/* Success notice */}
          {successNotice && (
            <div className="mt-4 p-3 rounded-xl bg-emerald-700/10 border border-emerald-700/30 text-emerald-900 text-xs font-semibold flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-700 flex-shrink-0" />
              <span>Your exact photo was loaded and applied to your portfolio!</span>
            </div>
          )}

          {/* Current Active Preview & Controls */}
          <div className="mt-6 pt-5 border-t border-[#2E2824]/20 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-[#5F564F] uppercase tracking-wider">
                Current Display Mode
              </span>

              {/* Fit Mode Toggle */}
              <div className="flex items-center gap-1 bg-[#2E2824]/10 p-1 rounded-xl">
                <button
                  type="button"
                  onClick={() => setFitMode('cover')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                    fitMode === 'cover'
                      ? 'bg-[#171412] text-[#D7CEC5] shadow-sm'
                      : 'text-[#5F564F] hover:text-[#171412]'
                  }`}
                >
                  Fill Frame
                </button>
                <button
                  type="button"
                  onClick={() => setFitMode('contain')}
                  className={`px-3 py-1 text-xs font-medium rounded-lg transition-all ${
                    fitMode === 'contain'
                      ? 'bg-[#171412] text-[#D7CEC5] shadow-sm'
                      : 'text-[#5F564F] hover:text-[#171412]'
                  }`}
                >
                  Fit / Uncropped
                </button>
              </div>
            </div>

            {/* Thumbnail Preview */}
            <div className="flex items-center gap-4 p-3 rounded-2xl bg-[#2E2824]/5 border border-[#2E2824]/15">
              <div className="w-16 h-20 rounded-xl overflow-hidden border border-[#2E2824]/30 bg-[#171412] flex-shrink-0">
                <img
                  src={photoUrl}
                  alt="Current preview"
                  className={`w-full h-full ${
                    fitMode === 'cover' ? 'object-cover object-top' : 'object-contain'
                  }`}
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-[#171412] truncate">
                  {isCustomPhoto ? 'Custom Uploaded Photo Active' : 'Default Sample Photo Active'}
                </p>
                <p className="text-[11px] text-[#5F564F] mt-0.5">
                  {fitMode === 'contain'
                    ? 'Displaying 100% of your photo without cropping'
                    : 'Framed cleanly to fill the portfolio card'}
                </p>
              </div>

              {isCustomPhoto && (
                <button
                  type="button"
                  onClick={resetToDefault}
                  title="Reset to default"
                  className="p-2 rounded-xl text-[#5F564F] hover:text-red-700 hover:bg-red-100 transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-6 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsUploaderOpen(false)}
              className="px-5 py-2.5 rounded-xl text-xs font-bold text-[#171412] bg-[#171412]/10 hover:bg-[#171412]/20 transition-all"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
