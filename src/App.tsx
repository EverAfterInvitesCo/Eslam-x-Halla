import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'motion/react';
import { DEFAULT_INVITATION } from './constants';
import { InvitationData } from './types';
import { HeaderBar } from './components/HeaderBar';
import { EnvelopeSection } from './components/EnvelopeSection';
import { QuranVerseSection } from './components/QuranVerseSection';
import { DetailsSection } from './components/DetailsSection';
import { PersonalizeModal } from './components/PersonalizeModal';
import { VideoIntroScreen } from './components/VideoIntroScreen';
import { Footer } from './components/Footer';

export default function App() {
  const [invitationData, setInvitationData] = useState<InvitationData>(() => {
    const saved = localStorage.getItem('eslam_halla_invitation_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.couplePhoto && parsed.couplePhoto.includes('wedding_couple_portrait')) {
          parsed.couplePhoto = DEFAULT_INVITATION.couplePhoto;
        }
        if (parsed.bridePhoto && parsed.bridePhoto.includes('wedding_bride_portrait')) {
          parsed.bridePhoto = DEFAULT_INVITATION.bridePhoto;
        }
        return { ...DEFAULT_INVITATION, ...parsed, musicEnabled: false };
      } catch {
        return { ...DEFAULT_INVITATION, musicEnabled: false };
      }
    }
    return { ...DEFAULT_INVITATION, musicEnabled: false };
  });

  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState<boolean>(false);
  const [isPersonalizeModalOpen, setIsPersonalizeModalOpen] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  // Save invitation data to localStorage
  useEffect(() => {
    localStorage.setItem('eslam_halla_invitation_data', JSON.stringify(invitationData));
  }, [invitationData]);

  // Control audio playback strictly based on musicEnabled state
  useEffect(() => {
    if (audioRef.current) {
      if (invitationData.musicEnabled) {
        audioRef.current.play().catch((err) => {
          console.log("Audio play deferred:", err);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [invitationData.musicEnabled]);

  const handleUpdateInvitation = (newData: Partial<InvitationData>) => {
    setInvitationData((prev) => ({ ...prev, ...newData }));
  };

  // Called instantly on tap to start music alongside the video
  const handleStartAudio = () => {
    setInvitationData((prev) => ({ ...prev, musicEnabled: true }));
    if (audioRef.current) {
      audioRef.current.play().catch((err) => {
        console.log("Audio play on tap failed:", err);
      });
    }
  };

  // Called when video finishes to reveal the rest of the site
  const handleOpenInvitation = () => {
    setIsEnvelopeOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2A29] font-sans antialiased relative overflow-x-hidden pt-12 pb-0 selection:bg-[#E2D4C3]">
      {/* Global Background Audio Element */}
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}El-leila.mp3`}
        preload="auto"
        loop
      />

      {/* Background Soft Grain & Glow */}
      <div className="fixed inset-0 bg-radial from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] pointer-events-none -z-10" />

      {/* Header Bar Controls */}
      <HeaderBar
        musicEnabled={invitationData.musicEnabled}
        onToggleMusic={() =>
          setInvitationData((prev) => ({ ...prev, musicEnabled: !prev.musicEnabled }))
        }
        onReplayVideo={() => {
          setIsEnvelopeOpen(false);
          setInvitationData((prev) => ({ ...prev, musicEnabled: false }));
          if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
          }
        }}
      />

      {/* Video Intro Overlay Screen */}
      <AnimatePresence>
        {!isEnvelopeOpen && (
          <VideoIntroScreen
            data={invitationData}
            onOpenInvitation={handleOpenInvitation}
            onStartAudio={handleStartAudio}
          />
        )}
      </AnimatePresence>

      {/* Main Interactive Digital Save the Date Content */}
      <main className="w-full">
        {/* Envelope & Open Reveal Section */}
        <EnvelopeSection
          data={invitationData}
          isOpen={isEnvelopeOpen}
          onToggleOpen={() => setIsEnvelopeOpen(!isEnvelopeOpen)}
        />

        {/* Quranic Verse Section */}
        <QuranVerseSection />

        {/* Details & Location Section */}
        <DetailsSection
          data={invitationData}
        />
      </main>

      {/* Silk Background Footer */}
      <Footer />

      {/* Personalization / Customizer Modal */}
      <PersonalizeModal
        isOpen={isPersonalizeModalOpen}
        onClose={() => setIsPersonalizeModalOpen(false)}
        data={invitationData}
        onUpdateData={handleUpdateInvitation}
        guests={[]}
        onClearGuests={() => {}}
        onDeleteGuest={() => {}}
      />
    </div>
  );
}