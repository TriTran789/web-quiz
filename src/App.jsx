import React from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./components";
import { Home } from "./pages";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
