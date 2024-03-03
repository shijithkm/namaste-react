import Shimmer from "../componenets/Shimmer";
import { useParams } from "react-router-dom";
import useCardDetails from "../utils/useCardDetails";
import CardCategory from "./CardCategory";
import { useState } from "react";
const CardDetails = () => {
  const { cardId } = useParams();
  const cardDetails = useCardDetails(cardId);
  const [showIndex, setShowIndex] = useState(null);

  console.log("cardDetails", cardDetails);

  if (cardDetails == null) {
    return <Shimmer />;
  }

  const { name, city, description, cuisines } =
    cardDetails?.cards[0]?.card?.card?.info;

  const categories =
    cardDetails?.cards[2].groupedCard.cardGroupMap.REGULAR?.cards?.filter(
      (c) =>
        c.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold m-1 text-2xl">{name}</h1>
      <h2 className="font-bold">{city}</h2>
      <h3 className="font-bold">{description}</h3>
      <h3 className="font-bold">{cuisines.join(",")}</h3>

      {categories.map((category, index) => {
        return (
          <CardCategory
            data={category.card.card}
            showItems={index === showIndex && true}
            setShowIndex={() => {
              // This condition is to check accordion is already open then close
              setShowIndex(index === showIndex ? null : index);
            }}
          />
        );
      })}
    </div>
  );
};

export default CardDetails;
