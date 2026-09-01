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
  const [hasStarted, setHasStarted] = useState<boolean>(false);

  const handleStartExperience = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.play().catch(error => console.error("Video play failed", error));
      setHasStarted(true);
      onOpenInvitation(); // This triggers the global App.tsx audio and opens the site
    }
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black text-white select-none overflow-hidden cursor-pointer"
    >
      {/* Full Frame Video & Thumbnail Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Static Thumbnail (Using renamed file without parentheses) */}
        <motion.img
          src={`${import.meta.env.BASE_URL}envelope-cover.png`}
          alt="Invitation Thumbnail"
          className={`absolute inset-0 w-full h-full object-cover z-[5] transition-opacity duration-700 ${hasStarted ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* The video element - Muted so it doesn't double-play audio */}
        <video
          ref={videoRef}
          src={`${import.meta.env.BASE_URL}Envelope.mp4`}
          loop
          muted // Keeps video silent so only El-leila.mp3 plays
          playsInline
          className="w-full h-full object-cover z-0"
        />
        
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none z-[1]" />
      </div>

      {/* Single "Tap to Enter" Call-to-Action overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hasStarted ? 0 : 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        onClick={handleStartExperience}
        className="absolute inset-0 z-30 flex items-center justify-center bg-black/20"
      >
        <p className="font-cormorant text-lg sm:text-xl tracking-[0.5em] uppercase text-white font-semibold drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] p-4 rounded-lg">
          Tap to Enter
        </p>
      </motion.div>
      
      <div className="relative z-10" />
      <div className="relative z-10" />
    </motion.div>
  );
};