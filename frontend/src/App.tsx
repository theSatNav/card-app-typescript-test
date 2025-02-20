import React from "react";

// need to import useState
import { useState } from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Settings from "./components/Settings";
import AllEntries from "./routes/AllEntries";
import EditEntry from "./routes/EditEntry";
import NewEntry from "./routes/NewEntry";
import { EntryProvider } from "./utilities/globalContext";

export default function App() {
  return (
    <section>
      <Router>
        <EntryProvider>
          <Settings></Settings>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<AllEntries />}></Route>
            <Route path="create" element={<NewEntry />}></Route>
            <Route path="edit/:id" element={<EditEntry />}></Route>
          </Routes>
        </EntryProvider>
      </Router>
    </section>
  );
}
