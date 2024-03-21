import React, { useState } from "react";
import Card from "./Components/Card";
import Menu from "./Api/Menu";

function App() {
  const [menuData, setMenuData] = useState(Menu);
  console.log(Menu);
  return menuData.map((curElement) => {
    return (
      <>
        <Card key={menuData.id} />
      </>
    );
  });
}

export default App;
