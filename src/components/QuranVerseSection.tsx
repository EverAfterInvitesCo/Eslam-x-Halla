import React from 'react';
import { motion } from 'motion/react';

export const QuranVerseSection: React.FC = () => {
  return (
    <section className="relative w-full max-w-4xl mx-auto px-6 py-16 md:py-24 flex flex-col items-center text-center select-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="w-full flex flex-col items-center space-y-8"
      >
        {/* Top Ornamental Divider */}
        <div className="flex items-center justify-center w-full max-w-xs space-x-4 opacity-60">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D3C4B0] to-transparent flex-1" />
          <span className="text-[#B39B7C] text-sm">❖</span>
          <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D3C4B0] to-transparent flex-1" />
        </div>

        {/* Arabic Calligraphy Ayah */}
        <div className="max-w-2xl px-2">
          <p className="font-arabic text-2xl sm:text-3xl md:text-4xl text-[#3D352E] leading-[2.2] md:leading-[2.4] font-normal tracking-wide">
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ
          </p>
        </div>

        {/* Center Heart Divider */}
        <div className="flex items-center justify-center w-full max-w-[120px] space-x-3 opacity-50 pt-2">
          <div className="h-[1px] bg-[#D3C4B0] flex-1" />
          <span className="text-[#B39B7C] text-xs">♥</span>
          <div className="h-[1px] bg-[#D3C4B0] flex-1" />
        </div>

        {/* English Translation & Reference */}
        <div className="max-w-xl space-y-4 pt-1">
          <p className="font-cormorant italic text-sm sm:text-base md:text-lg text-[#6B5E53] leading-relaxed font-light">
            "And among His Signs is this, that He created for you mates from among yourselves, that ye may dwell in tranquility with them, and He has put love and mercy between your (hearts): verily in that are Signs for those who reflect."
          </p>
          <p className="font-cormorant text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#968472] font-semibold pt-1">
            SURAH AR-RUM — 30:21
          </p>
        </div>
      </motion.div>
    </section>
  );
};
