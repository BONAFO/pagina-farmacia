"use client";
import Footer from "../components/Footer";
import BannerContainer from "../containers/BannerContainer";
import { NavigationProvider } from "../context/NavigationContext";
import { ScreenProvider } from "../context/ScreenContext";

export default function MainLayout({ children }) {
  return (
    <NavigationProvider>
      <ScreenProvider>
        <BannerContainer></BannerContainer>
        {children}
        <Footer />
      </ScreenProvider>
    </NavigationProvider>
  );
}
