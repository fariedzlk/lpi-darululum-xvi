"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

useEffect(() => {
  const exitTimer = setTimeout(() => {
    setIsExiting(true);
  }, 650);

  const hideTimer = setTimeout(() => {
    setIsVisible(false);
    window.dispatchEvent(new Event("splashComplete"));
  }, 1000);

  return () => {
    clearTimeout(exitTimer);
    clearTimeout(hideTimer);
  };
}, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#075E3A] transition-opacity duration-350 ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex items-center justify-center gap-4 px-5">
        <div className="animate-[splashLogo_0.5s_ease-out_both]">
          <Image
            src="/images/logo/logo-yayasan.png"
            alt="Logo Yayasan"
            width={500}
            height={250}
            priority
            className="h-auto w-auto max-h-20 max-w-[180px] sm:max-h-32 sm:max-w-[280px] object-contain"
          />
        </div>

        <div className="animate-[splashLogo_0.5s_ease-out_0.05s_both]">
          <Image
            src="/images/logo/logo-lpi.png"
            alt="Logo LPI Darul Ulum XVI"
            width={300}
            height={300}
            priority
            className="h-auto w-auto max-h-20 max-w-[90px] sm:max-h-32 sm:max-w-[150px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}