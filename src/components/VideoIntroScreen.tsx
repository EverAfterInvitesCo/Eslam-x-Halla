import React, { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { InvitationData } from '../types';

interface VideoIntroScreenProps {
  data: InvitationData;
  onOpenInvitation: () => void;
  onStartAudio: () => void; // Added callback to start audio on tap
}

export const VideoIntroScreen: React.FC<VideoIntroScreenProps> = ({
  data,
  onOpenInvitation,
  onStartAudio,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(false);

  const handleStartExperience = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current && !isPlayingVideo) {
      setIsPlayingVideo(true);
      
      // Start the music instantly on the very first tap
      onStartAudio();
      
      // Play the video on screen
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error);
        onOpenInvitation();
      });
    }
  };

  const handleVideoEnded = () => {
    // Enter the site once the video finishes playing
    onOpenInvitation();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black text-white select-none overflow-hidden cursor-pointer"
    >
      {/* Full Frame Video & Thumbnail Container */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Static Thumbnail */}
        <motion.img
          src={`${import.meta.env.BASE_URL}envelope-cover.png`}
          alt="Invitation Thumbnail"
          className={`absolute inset-0 w-full h-full object-cover z-[5] transition-opacity duration-300 ${isPlayingVideo ? 'opacity-0' : 'opacity-100'}`}
        />
        
        {/* The video element */}
        <video
          ref={videoRef}
          src={`${import.meta.env.BASE_URL}Envelope.mp4`}
          muted
          playsInline
          onEnded={handleVideoEnded}
          className="absolute inset-0 w-full h-full object-cover z-10"
        />
        
        {/* Subtle Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/25 pointer-events-none z-[15]" />
      </div>

      <div className="relative z-10" />

      {/* "Tap to Enter" text positioned at the bottom */}
      {!isPlayingVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleStartExperience}
          className="absolute inset-x-0 bottom-12 z-30 flex items-center justify-center cursor-pointer pb-6"
        >
          <p className="font-cormorant text-sm sm:text-base tracking-[0.4em] uppercase text-white/90 font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] hover:text-white transition-colors">
            Tap to Enter
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};