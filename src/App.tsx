import React from "react";
import Unit from "./Components/Unit/Unit";

function App() {
  return (
    // Doashboard Content Container
    <div className="flex justify-center items-center m-5 flex-col">
      {/* Unit Component */}
      <Unit
        UnitName="Unit 1"
        UnitDescription="Basics of the German Language!"
      />
      <Unit UnitName="Unit 2" UnitDescription="Animal Names in German!" />
      <Unit UnitName="Unit 3" UnitDescription="Friends, Food, and Fun!" />
      <Unit UnitName="Unit 4" UnitDescription="Love, Life, and Laughter!" />
    </div>
  );
}

export default App;
