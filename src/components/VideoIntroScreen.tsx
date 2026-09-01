import React, { useRef, useState, useEffect } from 'react';
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
  const audioRef = useRef<HTMLAudioElement>(null); // Added Audio Ref
  const [hasStarted, setHasStarted] = useState<boolean>(false);
  const [showTapToEnter, setShowTapToEnter] = useState<boolean>(true);

  // Start audio and video simultaneously when triggered
  const handleStartExperience = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current && audioRef.current) {
      videoRef.current.play().catch(error => console.error("Video play failed", error));
      audioRef.current.play().catch(error => console.error("Audio play failed", error));
      setHasStarted(true);
      setShowTapToEnter(false);
    }
  };

  // Sync audio volume with video playback state
  useEffect(() => {
    if (audioRef.current) {
      if (!hasStarted) {
        audioRef.current.volume = 0;
      } else {
        // Fade in volume over 0.5 seconds for a smoother start
        const fadeInInterval = setInterval(() => {
          if (audioRef.current && audioRef.current.volume < 1) {
            audioRef.current.volume = Math.min(1, audioRef.current.volume + 0.1);
          } else {
            clearInterval(fadeInInterval);
          }
        }, 50);
      }
    }
  }, [hasStarted]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black text-white select-none overflow-hidden cursor-pointer"
    >
      {/* Full Frame Video & Thumbnail Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Static Thumbnail - Hidden after play starts */}
        <motion.img
          src={`${import.meta.env.BASE_URL}envelope(1).png`}
          alt="Invitation Thumbnail"
          className={`absolute inset-0 w-full h-full object-cover z-[5] transition-opacity duration-500 ${hasStarted ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* The actual video element - Plays on tap */}
        <video
          ref={videoRef}
          src={`${import.meta.env.BASE_URL}Envelope.mp4`}
          loop // Set to true since original was looping, but it will only play AFTER tap
          muted={false} // Unmuted
          playsInline
          className="w-full h-full object-cover z-0"
        />
        
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none z-[1]" />
      </div>

      {/* Background Audio Element - Loaded silently */}
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}El-leila.mp3`}
        preload="auto"
        loop
        onCanPlayThrough={() => {
           console.log("Audio loaded and ready to play.");
        }}
      />

      {/* Single "Tap to Enter" Call-to-Action overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showTapToEnter ? 1 : 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        onClick={handleStartExperience}
        className="absolute inset-0 z-30 flex items-center justify-center bg-black/20"
      >
        <p className="font-cormorant text-lg sm:text-xl tracking-[0.5em] uppercase text-white font-semibold drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] p-4 rounded-lg">
          Tap to Enter
        </p>
      </motion.div>
      
      {/* Empty placeholders to maintain flex layout structure */}
      <div className="relative z-10" />
      <div className="relative z-10" />
    </motion.div>
  );
};