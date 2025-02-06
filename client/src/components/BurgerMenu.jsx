export default function BurgerMenu({ isOpen }) {
  return (
    <div className="group flex h-20 w-20 cursor-pointer items-center justify-center">
      <div className="space-y-2">
        <span
          className={`${
            isOpen
              ? "translate-y-1.5 rotate-45"
              : "group-hover:translate-y-1.5 group-hover:rotate-45"
          } block h-1 w-9 origin-center rounded-full bg-slate-800 transition-transform ease-in-out `}
        ></span>
        <span
          className={`${
            isOpen
              ? "hidden"
              : "block h-1 w-9 origin-center rounded-full bg-green-500 transition-transform ease-in-out group-hover:w-10 group-hover:hidden"
          }`}
        ></span>
        <span
          className={`${
            isOpen
              ? "-translate-y-1.5 -rotate-45"
              : "group-hover:-translate-y-1.5 group-hover:-rotate-45"
          } block h-1 w-9 origin-center rounded-full bg-slate-800 transition-transform ease-in-out `}
        ></span>
      </div>
    </div>
  );
}
