type SearchProps = {
  categories: string[];
  searchValue: string;
  setSearchValue: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
};

export const Search = ({
  categories,
  searchValue,
  selectedCategory,
  setSearchValue,
  setSelectedCategory,
}: SearchProps) => {
  return (
    <div className="mt-10">
      <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
        <div className="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">
          <img
            width="20"
            height="20"
            src="https://img.icons8.com/ios/50/search--v1.png"
            alt="search--v1"
          />
        </div>
        <input
          type="text"
          name="price"
          id="price"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
          placeholder="What would you like to cook today?"
        />
        <div className="grid shrink-0 grid-cols-1 focus-within:relative">
          <select
            id="currency"
            name="currency"
            aria-label="Currency"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pl-3 pr-7 text-base text-gray-500 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
          <svg
            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            viewBox="0 0 16 16"
            fill="currentColor"
            aria-hidden="true"
            data-slot="icon"
          >
            <path
              fill-rule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
