"use client";
import { useState } from "react";
import PopupBanner from "@/app/navbar/PopupBanner";

const Home = () => {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  const closeBanner = () => {
    setIsBannerOpen(false);
  };

  return (
    <div>
      <PopupBanner isOpen={isBannerOpen} onClose={closeBanner} />
    </div>
  );
};
export default Home;
