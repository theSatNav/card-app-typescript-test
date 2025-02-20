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
import Dialog from "./components/Dialog";

export default function App() {
  //this is for the state of settings dialog
  const [open, setOpen] = useState(false);

  //this is for darkmode state
  const [darkMode, setDarkMode] = useState(false);

  //to set darkmode
  const toggleDark = () => {
    setDarkMode(true);
  };

  //to set light mode
  const toggleLight = () => {
    setDarkMode(false);
  };
  return (
    <section className={`${darkMode && "dark"}`}>
      <div className="bg-white dark:bg-black">
      <Router>
        <EntryProvider>
        <div>
      <button
        className="m-3 p-1 text-xl bg-blue-400 dark:bg-gray-700 hover:bg-blue-500 rounded-md font-medium text-white dark:text-gray-100"
        onClick={() => setOpen(true)}
      >
        Settings
      </button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56 font-medium text-white dark:text-gray-100">Settings</div>
        <div className="flex gap-4">
          <button
            className="m-3 p-4 text-l bg-white dark:bg-gray-300 hover:bg-gray-500 rounded-md font-medium text-black dark:text-gray-800"
            onClick={toggleLight}
          >
            Light Mode
          </button>
          <button
            className="m-3 p-4 text-l bg-black dark:bg-gray-900 hover:bg-gray-500 rounded-md font-medium text-white dark:text-gray-200"
            onClick={toggleDark}
          >
            Dark Mode
          </button>
        </div>
      </Dialog>
    </div>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<AllEntries />}></Route>
            <Route path="create" element={<NewEntry />}></Route>
            <Route path="edit/:id" element={<EditEntry />}></Route>
          </Routes>
        </EntryProvider>
      </Router>
      </div>
    </section>
  );
}
