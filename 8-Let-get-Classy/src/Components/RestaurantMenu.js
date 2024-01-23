import { useEffect } from "react";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
  };
  return (
    <div className="menu">
      <h1>name of the restaurant</h1>
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
