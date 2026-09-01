import React, { useState, useEffect } from 'react';
import { InvitationData } from '../types';

interface DetailsSectionProps {
  data: InvitationData;
  onOpenAddressModal?: () => void;
}

export const DetailsSection: React.FC<DetailsSectionProps> = ({ data }) => {
  // Target date: November 19, 2026 at 19:00 (7:00 PM)
  const targetDate = new Date('2026-11-19T19:00:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full max-w-5xl mx-auto px-4 py-16 flex flex-col items-center text-center select-none space-y-12">
      
      {/* Countdown Section */}
      <div className="w-full max-w-2xl bg-[#FAF6EE] border border-[#E3D6C3] p-8 rounded-2xl card-lace-shadow space-y-6">
        <div className="space-y-2">
          <p className="font-cormorant text-xs md:text-sm tracking-[0.4em] uppercase text-[#7A7167] font-medium">
            Counting Down To The Big Day
          </p>
          <h3 className="font-script text-3xl sm:text-4xl text-[#3D352E]">
            Our Wedding Celebration
          </h3>
        </div>

        <div className="grid grid-cols-4 gap-3 sm:gap-6 pt-2">
          <div className="flex flex-col items-center bg-[#F4EBDC]/60 border border-[#E3D6C3]/60 py-4 px-2 rounded-xl">
            <span className="font-cormorant text-2xl sm:text-4xl font-bold text-[#3D352E]">
              {String(timeLeft.days).padStart(2, '0')}
            </span>
            <span className="font-cormorant text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#7A7167] mt-1">
              Days
            </span>
          </div>

          <div className="flex flex-col items-center bg-[#F4EBDC]/60 border border-[#E3D6C3]/60 py-4 px-2 rounded-xl">
            <span className="font-cormorant text-2xl sm:text-4xl font-bold text-[#3D352E]">
              {String(timeLeft.hours).padStart(2, '0')}
            </span>
            <span className="font-cormorant text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#7A7167] mt-1">
              Hours
            </span>
          </div>

          <div className="flex flex-col items-center bg-[#F4EBDC]/60 border border-[#E3D6C3]/60 py-4 px-2 rounded-xl">
            <span className="font-cormorant text-2xl sm:text-4xl font-bold text-[#3D352E]">
              {String(timeLeft.minutes).padStart(2, '0')}
            </span>
            <span className="font-cormorant text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#7A7167] mt-1">
              Minutes
            </span>
          </div>

          <div className="flex flex-col items-center bg-[#F4EBDC]/60 border border-[#E3D6C3]/60 py-4 px-2 rounded-xl">
            <span className="font-cormorant text-2xl sm:text-4xl font-bold text-[#3D352E]">
              {String(timeLeft.seconds).padStart(2, '0')}
            </span>
            <span className="font-cormorant text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[#7A7167] mt-1">
              Seconds
            </span>
          </div>
        </div>

        <p className="font-cormorant italic text-sm text-[#7A7167] pt-1">
          Thursday, November 19, 2026 at 7:00 PM
        </p>
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
                <p className="font-cormorant text-sm sm:text-base text-[#3D352E] font-medium">
                  Mountain Rose / One View
                </p>
                <p className="font-cormorant text-sm text-[#7A7167]">
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
            <iframe
              title="Venue Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0!2d30.9!3d30.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzAwLjAiTiAzMsKwNSAnMDAuMCJF!5e0!3m2!1sen!2seg!4v1620000000000!5m2!1sen!2seg"
              className="w-full h-full border-0 grayscale contrast-125 opacity-90"
              loading="lazy"
            />
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
