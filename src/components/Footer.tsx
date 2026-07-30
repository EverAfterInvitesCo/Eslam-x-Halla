import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative w-full py-10 px-4 border-t border-[#E3D6C3] text-center select-none overflow-hidden bg-[#FAF6EE]">
      
      {/* Silk Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-60 pointer-events-none"
        style={{ backgroundImage: `url('/silk.jpg')` }}
      />
      
      {/* Soft warm gradient blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF6EE]/70 via-[#F4EBDC]/60 to-[#EAE0CD]/80 pointer-events-none" />

      <div className="relative max-w-xl mx-auto flex flex-col items-center space-y-4">
        
        {/* Monogram Initials Circle */}
        <div className="w-12 h-12 rounded-full border border-[#C5B5A1] bg-[#FAF6EE]/90 backdrop-blur-xs flex items-center justify-center shadow-xs">
          <span className="font-cormorant text-sm font-bold tracking-widest text-[#3D352E]">
            H & E
          </span>
        </div>

        {/* Names Header */}
        <div className="space-y-0.5">
          <h3 className="font-script text-3xl sm:text-4xl text-[#3D352E]">
            Halla & Eslam
          </h3>
          <p className="font-cormorant text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#7A7167] font-medium">
            Thursday, 19 November 2026
          </p>
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center space-x-3 opacity-60 w-24">
          <div className="h-[1px] w-full bg-[#C5B5A1]" />
          <span className="text-[#8C7A66] text-[10px]">✦</span>
          <div className="h-[1px] w-full bg-[#C5B5A1]" />
        </div>

        {/* Made with love by Everafterinvites & Socials */}
        <div className="space-y-2">
          <p className="font-cormorant text-[11px] tracking-[0.2em] uppercase text-[#7A7167]">
            Made with love by <span className="font-semibold text-[#3D352E]">Everafterinvites</span>
          </p>

          <div className="flex items-center justify-center space-x-4">
            <a
              href="https://www.instagram.com/_everafterinvites_/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="font-cormorant text-[11px] uppercase tracking-[0.2em] text-[#7A7167] hover:text-[#3D352E] transition-colors"
            >
              Instagram
            </a>
            <span className="text-[#C5B5A1] text-[10px]">•</span>
            <a
              href="https://www.facebook.com/profile.php?id=61591686334310"
              target="_blank"
              rel="noopener noreferrer"
              className="font-cormorant text-[11px] uppercase tracking-[0.2em] text-[#7A7167] hover:text-[#3D352E] transition-colors"
            >
              Facebook
            </a>
            <span className="text-[#C5B5A1] text-[10px]">•</span>
            <a
              href="https://www.tiktok.com/@_everafterinvites_"
              target="_blank"
              rel="noopener noreferrer"
              className="font-cormorant text-[11px] uppercase tracking-[0.2em] text-[#7A7167] hover:text-[#3D352E] transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
