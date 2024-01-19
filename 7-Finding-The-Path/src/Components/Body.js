import RestuatantCard from "./RestuatantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestro, setFilteredRestro] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.93519229&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(
      "jsondata",
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setListOfResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestro(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search Here"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter the restaurant card and update the UI
              // Search Text
              console.log(searchText);
              const filterRestro = listOfRestaurant.filter((restro) =>
                restro.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestro(filterRestro);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Filter the restaurant card based on top-rated
            const filterRestro = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestro(filterRestro);
          }}
        >
          Top Rated Restuarant
        </button>
      </div>
      <div className="res-container">
        {filteredRestro.map((restro) => (
          <RestuatantCard key={restro.info?.id} resData={restro} />
        ))}
      </div>
    </div>
  );
};
export default Body;
