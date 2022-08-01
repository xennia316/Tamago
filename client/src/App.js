import React from "react";
import LodgingCard from "./Components/LodgingCard/LodgingCard";
import SideNav from "./Components/SideNav/SideNav";
import HotelCard from "./Components/SortHotelCard/HotelCard";

const App = () => {
  return (
    <section>
      <HotelCard />
      <LodgingCard />
      {/* <SideNav /> */}
    </section>
  );
};

export default App;
