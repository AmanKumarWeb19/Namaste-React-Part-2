import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("menujson", json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwo } =
    resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]
      ?.info;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwo}
      </p>

      <h2>menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Pizza</li>
        <li>cold drink</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;

// const restaurantInfo =
// resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants[0]
//   ?.info;

// const name = restaurantInfo?.name || "Unknown";
// const cuisines = restaurantInfo?.cuisines || "Unknown";
// const costForTwo = restaurantInfo?.costForTwo || "Unknown";

// https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=

// https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING
