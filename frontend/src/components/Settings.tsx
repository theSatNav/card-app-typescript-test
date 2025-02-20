import { useState } from "react";
import Dialog from "./Dialog";

export default function Settings() {
  //this is for the state of dialog  
  const [open, setOpen] = useState(false);

  //this is for darkmode state
  const [darkMode, setDarkMode] = useState(false);

  //to set darkmode
  const toggleDark = () => {
    setDarkMode(true)
  }

  const toggleLight = () => {
    setDarkMode(false)
  }

  //to set light mode

  return (
    <div className={`${darkMode && "dark"}`}>
      <button
        className="m-3 p-4 text-xl bg-blue-400 dark:bg-gray-700 hover:bg-blue-500 rounded-md font-medium text-white dark:text-gray-100"
        onClick={() => setOpen(true)}
      >
        Settings
      </button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <div className="text-center w-56 font-medium text-white dark:text-gray-100">Settings</div>
        <div className="flex gap-4">
          <button className="m-3 p-4 text-l bg-white dark:bg-gray-300 hover:bg-gray-500 rounded-md font-medium text-black dark:text-gray-800"
          onClick={toggleLight}
          >
            Light Mode
          </button>
          <button className="m-3 p-4 text-l bg-black dark:bg-gray-900 hover:bg-gray-500 rounded-md font-medium text-white dark:text-gray-200"
          onClick={toggleDark}
          >
            Dark Mode
          </button>
        </div>
      </Dialog>
    </div>
  );
}
