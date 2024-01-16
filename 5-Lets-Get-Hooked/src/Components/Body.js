import resList from "../utils/mockData";
import RestuatantCard from "./RestuatantCard";
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
        <button
          className="filter-btn"
          onClick={() => {
            let filterRestro = listOfRestaurant.filter(
              (res) => res.info.avgRating < 4
            );
            setListOfResturant(filterRestro);
          }}
        >
          Less Rated Restuarant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restro) => (
          <RestuatantCard key={restro.info.id} resData={restro} />
        ))}
      </div>
    </div>
  );
};
export default Body;
