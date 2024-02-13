import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleClick = () => {
    setShowItems(!showItems);
  };

  // console.log({ categorydata: data });
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 p-4 shadow-lg rounded-lg">
        {/* Header */}

        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-gray-500 text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>

        {/* Accrodion Body */}

        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default RestaurantCategory;
