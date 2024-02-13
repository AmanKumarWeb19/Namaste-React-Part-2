import { CDN_URL } from "../utils/constant";

const ResturantCard = (props) => {
  const { resData } = props;

  // console.log({ resData });
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.info;

  return (
    <div className="m-4 p-4 w-[250px] bg-gray-200 hover:bg-gray-300">
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-image"
      />
      <h3 className="font-bold">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

// High Order Component:-

// input => ResturantCard (as a component) ==> return RestaurantCardOnline (as a new component)

export const withOnlineLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-green-400 text-white m-2 px-3 py-1 rounded-lg">
          Open
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
