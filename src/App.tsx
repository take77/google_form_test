import React from "react";
import { Routes, Route } from "react-router-dom";

import Form from "./pages/Form";
import FormComplete from "./pages/FormComplete";

const App: React.VFC = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/complete" element={<FormComplete />} />
    </Routes>
  );
}

export default App;
