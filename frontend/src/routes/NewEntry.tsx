import { ChangeEvent, MouseEvent, useContext, useState } from "react";
import { Entry, EntryContextType } from "../@types/context";
import { EntryContext } from "../utilities/globalContext";

export default function NewEntry() {
  const emptyEntry: Entry = { title: "", description: "", created_at: new Date(), scheduled_date: new Date() };
  const { saveEntry } = useContext(EntryContext) as EntryContextType;
  const [newEntry, setNewEntry] = useState<Entry>(emptyEntry);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewEntry({
      ...newEntry,
      [event.target.name]: event.target.value,
    });
  };
  const handleSend = (e: MouseEvent<HTMLButtonElement>) => {
    saveEntry(newEntry);
    setNewEntry(emptyEntry);
  };
  return (
    <section className="flex justify-center flex-col w-fit ml-auto mr-auto mt-10 gap-5 bg-gray-300 dark:bg-gray-800 p-8 rounded-md text-black dark:text-white">
      Title:
      <input
        className="p-3 rounded-md bg-white dark:bg-gray-600"
        type="text"
        placeholder="Enter Title"
        name="title"
        value={newEntry.title}
        onChange={handleInputChange}
      />
      Description:
      <textarea
        className="p-3 rounded-md  bg-white dark:bg-gray-600"
        placeholder="Enter Description"
        name="description"
        value={newEntry.description}
        onChange={handleInputChange}
      />
      Created At:
      <input
        className="p-3 rounded-md  bg-white dark:bg-gray-600"
        type="date"
        name="created_at"
        value={new Date(newEntry.created_at).toISOString().split("T")[0]}
        onChange={handleInputChange}
      />
      Scheduled For: 
      <input
        className="p-3 rounded-md  bg-white dark:bg-gray-600"
        type="date"
        name="scheduled_date"
        value={new Date(newEntry.scheduled_date).toISOString().split("T")[0]}
        onChange={handleInputChange}
      />
      <button
        onClick={(e) => {
          handleSend(e);
        }}
        className="bg-blue-400 dark:bg-gray-600 hover:bg-blue-600 font-semibold text-white dark:text-gray-200 p-3 rounded-md"
      >
        Create
      </button>
    </section>
  );
}
