import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { InvitationData } from '../types';

interface VideoIntroScreenProps {
  data: InvitationData;
  onOpenInvitation: () => void;
}

export const VideoIntroScreen: React.FC<VideoIntroScreenProps> = ({
  data,
  onOpenInvitation,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);

  const handleStartExperience = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current && !isPlayingVideo) {
      setIsPlayingVideo(true);
      // Trigger the global site open & audio play simultaneously
      onOpenInvitation();
      
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
  };

  const handleVideoEnded = () => {
    // Optional fallback if needed, but opening on tap works best
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black text-white select-none overflow-hidden cursor-pointer"
    >
      {/* Full Frame Video & Thumbnail Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Static Thumbnail - Hidden once video starts playing */}
        <motion.img
          src={`${import.meta.env.BASE_URL}envelope-cover.png`}
          alt="Invitation Thumbnail"
          className={`absolute inset-0 w-full h-full object-cover z-[5] transition-opacity duration-500 ${isPlayingVideo ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* The video element - Muted so only the background music track plays */}
        <video
          ref={videoRef}
          src={`${import.meta.env.BASE_URL}Envelope.mp4`}
          muted
          playsInline
          onEnded={handleVideoEnded}
          className="w-full h-full object-cover z-0"
        />
        
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/25 pointer-events-none z-[1]" />
      </div>

      {/* "Tap to Enter" overlay button */}
      {!isPlayingVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleStartExperience}
          className="absolute inset-0 z-30 flex items-center justify-center bg-black/10 cursor-pointer"
        >
          <div className="bg-black/30 backdrop-blur-xs px-8 py-4 rounded-xl border border-white/15 shadow-2xl">
            <p className="font-cormorant text-lg sm:text-xl tracking-[0.5em] uppercase text-white font-semibold drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)]">
              Tap to Enter
            </p>
          </div>
        </motion.div>
      )}
      
      <div className="relative z-10" />
      <div className="relative z-10" />
    </motion.div>
  );
};