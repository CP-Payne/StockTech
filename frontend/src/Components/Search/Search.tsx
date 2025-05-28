import { JSX, SyntheticEvent } from "react";

type Props = {
  onSearchSubmit: (e: SyntheticEvent) => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string | undefined;
};

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}: Props): JSX.Element => {
  return (
    <section className="">
      <div className="max-w-4xl mx-auto">
        <form
          className=" form relative flex flex-col w-full px-10 space-y-4   md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={onSearchSubmit}
        >
          <input
            className="flex-1 p-3 border-2 rounded-lg placeholder-black focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
          ></input>
        </form>
      </div>
    </section>
  );
};

export default Search;
