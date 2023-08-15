"use client";
import { useState } from "react";
import PopupBanner from "@/app/header/PopupBanner";
import HeaderSearch from "@/app/header/HeaderSearch";
import DropdownMenu from "@/app/header/DropdownMenu";

const Home = () => {
  const [isBannerOpen, setIsBannerOpen] = useState(true);

  const closeBanner = () => {
    setIsBannerOpen(false);
  };

  return (
    <div>
      <PopupBanner isOpen={isBannerOpen} onClose={closeBanner} />
      <HeaderSearch />
      <DropdownMenu />
    </div>
  );
};
export default Home;
