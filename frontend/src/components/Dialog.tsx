export default function Dialog({ open, onClose, children }) {
  return (
    // this makes the backdrop visible when open and invisible otherwise
    <div
      onClick={onClose}
      className={`
            flex justify-center items bg-center
            transition-colors
            ${open ? "visible bg-gray-200 dark:bg-black" : "invisible"}
        `}
    >
      {" "}
      {/*settings  dialog with scale op pop up*/}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white dark:bg-gray-600 rounded-xl shadow p-6 transistion-all
                ${open ? "scale-100 opacity-100" : "scale-125 opacity-30"}`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 dark:gray-400 hover:bg-red-500 hover:text-gray-600"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
}
