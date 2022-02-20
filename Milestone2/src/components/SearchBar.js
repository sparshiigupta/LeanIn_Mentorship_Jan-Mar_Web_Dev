import classes from "./SearchBar.module.css";
const SearchBar = ({ query, onChange }) => {
  return (
    <div className={classes.container}>
      <div className={classes.input_box}>
        <label htmlFor="search">Search</label>
        <input
          type="number"
          id="search"
          value={query}
          onChange={onChange}
          placeholder="enter the year whose expenses are to be searched"
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default SearchBar;
