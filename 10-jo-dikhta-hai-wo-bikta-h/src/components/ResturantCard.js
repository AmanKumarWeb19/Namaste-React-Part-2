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
    <div className="m-4 p-4 w-[250px]" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt="res-image"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
export default ResturantCard;
