import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Splash = React.lazy(() => import("./screens/Splash"));
const Explore = React.lazy(() => import("./screens/Explore"));
const StockDetails = React.lazy(() => import("./screens/StockDetails"));

const App = () => {
  return (
    <Suspense fallback={<Splash />}>
      <BrowserRouter>
        <Routes>
          {" "}
          <Route path="/" element={<Explore />}></Route>
          <Route path="/details" element={<StockDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
