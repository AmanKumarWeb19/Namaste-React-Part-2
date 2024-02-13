import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0].card?.card?.info;

  const { itemCards } = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR
    .cards[1].card.card.itemCards
    ? resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
    : resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  // console.log({ itemscard: itemCards });

  const categories =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("categroiesss", categories);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
     
    </div>
  );
};
export default RestaurantMenu;

/*** 
 * <h2>Menu</h2>
<ul>
  {itemCards && itemCards.length > 0 ? (
    itemCards.map((item) => (
      <li key={item?.card?.info?.id}>
        {item?.card?.info?.name} -{" Rs."}
        {item?.card?.info?.price / 100 ||
          item?.card?.info?.defaultPrice / 100}
      </li>
    ))
  ) : (
    <li>No items found in the menu</li>
  )}
</ul> 
*/
