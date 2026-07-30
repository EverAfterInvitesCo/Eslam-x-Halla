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
    const saved = localStorage.getItem('pearl_ivory_invitation_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.couplePhoto && parsed.couplePhoto.includes('wedding_couple_portrait')) {
          parsed.couplePhoto = DEFAULT_INVITATION.couplePhoto;
        }
        if (parsed.bridePhoto && parsed.bridePhoto.includes('wedding_bride_portrait')) {
          parsed.bridePhoto = DEFAULT_INVITATION.bridePhoto;
        }
        return { ...DEFAULT_INVITATION, ...parsed };
      } catch {
        return DEFAULT_INVITATION;
      }
    }
    return DEFAULT_INVITATION;
  });

  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState<boolean>(false);
  const [isPersonalizeModalOpen, setIsPersonalizeModalOpen] = useState<boolean>(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  // Save invitation data to localStorage
  useEffect(() => {
    localStorage.setItem('pearl_ivory_invitation_data', JSON.stringify(invitationData));
  }, [invitationData]);

  // Control audio playback based on musicEnabled state
  useEffect(() => {
    if (audioRef.current) {
      if (invitationData.musicEnabled) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [invitationData.musicEnabled]);

  const handleUpdateInvitation = (newData: Partial<InvitationData>) => {
    setInvitationData((prev) => ({ ...prev, ...newData }));
  };

  const handleOpenInvitation = () => {
    setIsEnvelopeOpen(true);
    // Automatically turn on music when the user clicks the intro screen/seal
    setInvitationData((prev) => ({ ...prev, musicEnabled: true }));
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#2C2A29] font-sans antialiased relative overflow-x-hidden pt-12 pb-0 selection:bg-[#E2D4C3]">
      {/* Global Background Audio Element */}
      <audio
        ref={audioRef}
        src={`${import.meta.env.BASE_URL}Sounds.mp3`}
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
        onReplayVideo={() => setIsEnvelopeOpen(false)}
      />

      {/* Video Intro Overlay Screen (Fade Out transition to scroll site) */}
      <AnimatePresence>
        {!isEnvelopeOpen && (
          <VideoIntroScreen
            data={invitationData}
            onOpenInvitation={handleOpenInvitation}
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

        {/* Quranic Verse Section (Placed directly below Envelope section) */}
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
