import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";

export const HomeScreen = () => {
  // by default bgMode is set to jayce
  const [bgMode, setBgMode] = useState("jayce");
  return (
    <div>
      {/* passing the value necessary to determine which background we want */}
      <SearchBar bgMode={bgMode} />
      {/* passing the set function to header as its the trigger of the changing mode is */}
      <Header setBgMode={setBgMode} />
      <Footer />
    </div>
  );
};
