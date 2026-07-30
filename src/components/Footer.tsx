import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full py-16 px-4 bg-gradient-to-b from-[#FAF6EE] via-[#F4EBDC] to-[#EAE0CD] border-t border-[#E3D6C3] text-center select-none overflow-hidden">
      
      {/* Subtle Silk / Shimmer Texture Overlay */}
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-[#D5C4B0] pointer-events-none" />

      <div className="relative max-w-xl mx-auto flex flex-col items-center space-y-6">
        
        {/* Monogram Initials Circle */}
        <div className="w-16 h-16 rounded-full border border-[#C5B5A1] bg-[#FAF6EE]/80 backdrop-blur-xs flex items-center justify-center shadow-xs">
          <span className="font-cormorant text-xl font-bold tracking-widest text-[#3D352E]">
            H & E
          </span>
        </div>

        {/* Names Header */}
        <div className="space-y-1">
          <h3 className="font-script text-4xl sm:text-5xl text-[#3D352E]">
            Halla & Eslam
          </h3>
          <p className="font-cormorant text-xs sm:text-sm tracking-[0.3em] uppercase text-[#7A7167] font-medium pt-1">
            Thursday, 19 November 2026
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center space-x-3 opacity-60 w-32">
          <div className="h-[1px] w-full bg-[#C5B5A1]" />
          <span className="text-[#8C7A66] text-xs">✦</span>
          <div className="h-[1px] w-full bg-[#C5B5A1]" />
        </div>

        {/* Made with love by Everafterinvites & Socials */}
        <div className="space-y-3 pt-1">
          <p className="font-cormorant text-xs tracking-[0.2em] uppercase text-[#7A7167]">
            Made with love by <span className="font-semibold text-[#3D352E]">Everafterinvites</span>
          </p>

          <div className="flex items-center justify-center space-x-6 pt-1">
            <a
              href="https://www.instagram.com/_everafterinvites_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="font-cormorant text-xs uppercase tracking-[0.2em] text-[#7A7167] hover:text-[#3D352E] transition-colors"
            >
              Instagram
            </a>
            <span className="text-[#C5B5A1] text-xs">•</span>
            <a
              href="https://www.facebook.com/profile.php?id=61591686334310"
              target="_blank"
              rel="noopener noreferrer"
              className="font-cormorant text-xs uppercase tracking-[0.2em] text-[#7A7167] hover:text-[#3D352E] transition-colors"
            >
              Facebook
            </a>
            <span className="text-[#C5B5A1] text-xs">•</span>
            <a
              href="https://www.tiktok.com/@_everafterinvites_"
              target="_blank"
              rel="noopener noreferrer"
              className="font-cormorant text-xs uppercase tracking-[0.2em] text-[#7A7167] hover:text-[#3D352E] transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>

        {/* Copyright / Closing */}
        <p className="font-cormorant text-[10px] tracking-[0.3em] uppercase text-[#8C7A66]/80 pt-2">
          Forever & Always
        </p>

      </div>
    </footer>
  );
};
