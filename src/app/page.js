"use client";
import { useState } from "react";
import PopupBanner from "@/app/header/PopupBanner";
import HeaderSearch from "@/app/header/HeaderSearch";

const Home = () => {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  const closeBanner = () => {
    setIsBannerOpen(false);
  };

  return (
    <div>
      <PopupBanner isOpen={isBannerOpen} onClose={closeBanner} />
      <HeaderSearch />
    </div>
  );
};
export default Home;
