import React from 'react';
import { InvitationData } from '../types';

interface DetailsSectionProps {
  data: InvitationData;
  onOpenAddressModal?: () => void;
}

export const DetailsSection: React.FC<DetailsSectionProps> = ({ data }) => {
  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 py-16 flex flex-col items-center text-center select-none space-y-12">
      
      {/* Quran Verse Section (Arabic + 1st English Translation) */}
      <div className="w-full flex flex-col items-center space-y-6">
        {/* Arabic Ayah */}
        <p className="font-arabic text-xl sm:text-2xl md:text-3xl text-[#3D352E] leading-loose tracking-wide max-w-3xl px-4">
          وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَwَوَدَّةً وَرَحْمَةً ۚ إِنَّ فِي ذَلِكَ لَآيَاتٍ لِقَوْمٍ يَتَفَكَّرُونَ
        </p>
        
        {/* Divider Ornament */}
        <div className="flex items-center justify-center space-x-3 opacity-60">
          <div className="h-[1px] w-12 bg-[#C5B5A1]" />
          <span className="text-[#8C7A66] text-xs">✦</span>
          <div className="h-[1px] w-12 bg-[#C5B5A1]" />
        </div>

        {/* English Translation */}
        <div className="max-w-xl mx-auto px-6 space-y-2">
          <p className="font-cormorant italic text-sm sm:text-base text-[#5A4E42] leading-relaxed">
            &ldquo;And among His Signs is this, that He created for you mates from among yourselves, that ye may dwell in tranquility with them, and He has put love and mercy between your (hearts): verily in that are Signs for those who reflect.&rdquo;
          </p>
          <p className="font-cormorant text-xs tracking-[0.3em] uppercase text-[#8C7A66] font-medium">
            Surah Ar-Rum — 30:21
          </p>
        </div>
      </div>

      {/* Section Title Header */}
      <div className="space-y-2 pt-6">
        <p className="font-cormorant text-xs md:text-sm tracking-[0.4em] uppercase text-[#7A7167] font-medium">
          The Location
        </p>
        <h2 className="font-script text-4xl sm:text-6xl text-[#3D352E] font-normal tracking-wide">
          The Wedding Venue
        </h2>
      </div>

      {/* Main Content: Info Card + Map Card Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch text-left">
        
        {/* LEFT CARD: Details & Get Directions */}
        <div className="bg-[#FAF6EE] border border-[#E3D6C3] p-8 rounded-2xl card-lace-shadow flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <p className="font-cormorant text-xs uppercase tracking-[0.3em] text-[#8C7A66] font-medium">
              Mountain Rose / One View
            </p>
            <h3 className="font-script text-3xl sm:text-4xl text-[#3D352E]">
              6th of October City
            </h3>
            <p className="font-cormorant text-sm sm:text-base text-[#6B5F53] leading-relaxed pt-2">
              Join us for our special celebration as we celebrate our wedding day surrounded by breathtaking landscape architectures and serene views.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#E8DFC2]/60">
            {/* Address Row */}
            <div className="flex items-start space-x-3">
              <span className="text-[#8C7A66] text-lg mt-0.5">📍</span>
              <div>
                <p className="font-cormorant text-xs tracking-[0.2em] uppercase text-[#8C7A66] font-semibold">
                  Address
                </p>
                <p className="font-cormorant text-sm sm:text-base text-[#5A4E42]">
                  6th of October City, Giza Governorate, Egypt
                </p>
              </div>
            </div>

            {/* Date & Time Row */}
            <div className="flex items-start space-x-3">
              <span className="text-[#8C7A66] text-lg mt-0.5">🕒</span>
              <div>
                <p className="font-cormorant text-xs tracking-[0.2em] uppercase text-[#8C7A66] font-semibold">
                  Schedule
                </p>
                <p className="font-cormorant text-sm sm:text-base text-[#5A4E42]">
                  Thursday, 19 November 2026 at 7:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Get Directions Button */}
          <div className="pt-2">
            <a
              href="https://maps.app.goo.gl/x5rsGxkJNT94fo1H8?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-full border border-[#D5C4B0] bg-[#FAF6EE] hover:bg-[#F4EBDC] text-[#3D352E] font-cormorant text-sm sm:text-base uppercase tracking-[0.25em] font-medium flex items-center justify-center space-x-2 transition-all shadow-xs"
            >
              <span>✈</span>
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* RIGHT CARD: Map Visual Preview */}
        <div className="bg-[#FAF6EE] border border-[#E3D6C3] p-3 rounded-2xl card-lace-shadow flex flex-col justify-between overflow-hidden relative min-h-[320px]">
          <div className="absolute inset-3 rounded-xl overflow-hidden border border-[#E3D6C3] bg-[#F4EBDC] flex items-center justify-center">
            {/* Map iframe or Interactive Preview Embed */}
            <iframe
              title="Venue Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0!2d30.9!3d30.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzAwLjAiTiAzMsKwNSAnMDAuMCJF!5e0!3m2!1sen!2seg!4v1620000000000!5m2!1sen!2seg"
              className="w-full h-full border-0 grayscale contrast-125 opacity-90"
              loading="lazy"
            />
            {/* Floating Pin Overlay Card simulating Google Maps popup */}
            <div className="absolute top-4 left-4 right-4 bg-[#FAF6EE]/95 backdrop-blur-sm border border-[#D5C4B0] p-3 rounded-lg shadow-md flex items-center justify-between">
              <div className="text-left">
                <p className="font-cormorant font-bold text-sm text-[#3D352E]">Mountain Rose / One View</p>
                <p className="font-cormorant text-xs text-[#7A7167]">6th of October City, Egypt</p>
              </div>
              <a
                href="https://maps.app.goo.gl/x5rsGxkJNT94fo1H8?g_st=ic"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-[#3D352E] text-[#FAF6EE] text-xs font-cormorant uppercase tracking-wider rounded-md hover:bg-[#5A4E42] transition-colors"
              >
                View
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
