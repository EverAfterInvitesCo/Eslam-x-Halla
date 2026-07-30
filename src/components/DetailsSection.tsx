import React from 'react';
import { InvitationData } from '../types';

interface DetailsSectionProps {
  data: InvitationData;
  onOpenAddressModal?: () => void;
}

export const DetailsSection: React.FC<DetailsSectionProps> = ({ data }) => {
  return (
    <section className="relative w-full max-w-4xl mx-auto px-4 py-16 flex flex-col items-center text-center select-none">
      {/* Divider Ornament */}
      <div className="flex items-center justify-center space-x-3 mb-8 opacity-60">
        <div className="h-[1px] w-16 bg-[#C5B5A1]" />
        <span className="text-[#8C7A66] text-xs">✦</span>
        <div className="h-[1px] w-16 bg-[#C5B5A1]" />
      </div>

      {/* Meet Us In Subtitle */}
      <p className="font-cormorant text-xs md:text-sm tracking-[0.4em] uppercase text-[#7A7167] font-medium mb-4">
        Meet Us In
      </p>

      {/* Main City Title */}
      <h2 className="font-script text-5xl sm:text-7xl md:text-8xl text-[#3D352E] font-normal tracking-wide mb-6 leading-tight">
        6th of October <br /> City
      </h2>

      {/* Date & Time */}
      <div className="space-y-2 mb-8">
        <p className="font-cormorant text-sm sm:text-base tracking-[0.25em] uppercase text-[#6B5F53] font-medium">
          On Thursday, 19 November 2026
        </p>
        <p className="font-cormorant text-sm sm:text-base tracking-[0.2em] text-[#8C7A66]">
          7:00 PM
        </p>
      </div>

      {/* Venue Name / Link (Enlarged & Clickable) */}
      <div className="mt-2">
        <a
          href="https://maps.app.goo.gl/x5rsGxkJNT94fo1H8?g_st=ic"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 font-cormorant text-base sm:text-xl tracking-[0.15em] text-[#5A4E42] hover:text-[#3D352E] transition-colors border-b border-[#C5B5A1] pb-0.5 group"
        >
          <span className="text-[#8C7A66] group-hover:scale-110 transition-transform">📍</span>
          <span className="font-medium">Mountain rose / one view</span>
        </a>
      </div>
    </section>
  );
};
