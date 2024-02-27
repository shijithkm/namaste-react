import Shimmer from "../componenets/Shimmer";
import { useParams } from "react-router-dom";
import useCardDetails from "../utils/useCardDetails";
const CardDetails = () => {
  const { cardId } = useParams();
  const cardDetails = useCardDetails(cardId);

  if (cardDetails == null) {
    return <Shimmer />;
  }

  const { name, city, description, cuisines } =
    cardDetails?.cards[2]?.card?.card?.info;

  const itemCards =
    cardDetails?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card
      .itemCards;

  return (
    <div className="card-details">
      <h1>{name}</h1>
      <h2>{city}</h2>
      <h3>{description}</h3>
      <h3>{cuisines.join(",")}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => {
          console.log(item);
          const { id, description } = item?.card.info;
          return (
            <li key={id}>
              <h4>{description}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardDetails;
