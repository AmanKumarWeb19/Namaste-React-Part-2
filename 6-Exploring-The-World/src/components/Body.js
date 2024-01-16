import resList from "../utils/mockData";
import ResturantCard from "./ResturantCard";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurant, setListOfResturant] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            let filterRestro = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfResturant(filterRestro);
          }}
        >
          Top Rated Restuarant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restro) => (
          <ResturantCard key={restro.info.id} resData={restro} />
        ))}
      </div>
    </div>
  );
};
export default Body;
