import Icon from "./Icon";
import "./styles/search.css";

const Search = () => {
  return (
    <>
      <div id="search">
        <div className="search_icon">
          <Icon
            width={20}
            height={20}
            fill="#717171"
            viewBox="0 0 24 24"
            path="M11 2C15.968 2 20 6.032 20 11C20 15.968 15.968 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2ZM11 18C14.8675 18 18 14.8675 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18ZM19.4853 18.0711L22.3137 20.8995L20.8995 22.3137L18.0711 19.4853L19.4853 18.0711Z"
          />
        </div>
        <input type="text" placeholder="جستجو فرش" />
      </div>
    </>
  );
};

export default Search;
