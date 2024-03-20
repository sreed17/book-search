import { FC } from "react";
import { IoAdd } from "react-icons/io5";

const filters = [
  {
    name: "novels",
  },
];

const Header: FC = () => {
  return (
    <header>
      {/* Search bar and main action buttons */}
      <div className="flex flex-row items-center justify-center gap-4 p-2">
        <button>Add Book</button>
        <input type="text" name="q" placeholder="Search library" />
        <button>Menu</button>
      </div>
      {/* Filters */}
      <div className="flex flex-row items-center justify-center gap-4">
        {filters.map((val) => {
          return (
            <div
              key={val.name}
              className="p-2 border-solid border-white border-2 rounded-full "
            >
              {val.name}
            </div>
          );
        })}
        <IoAdd size={32} />
      </div>
    </header>
  );
};

export default Header;
