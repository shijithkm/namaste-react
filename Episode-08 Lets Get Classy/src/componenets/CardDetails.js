import { useEffect, useState } from "react";
import { CARD_DETIALS_URL, CDN_URL } from "../utils/constants";
import Shimmer from "../componenets/Shimmer";
import { useParams } from "react-router-dom";
const CardDetails = () => {
  const [cardDetails, setCardDetails] = useState(null);
  const { cardId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CARD_DETIALS_URL + cardId);
    const json = await data.json();
    console.log(json);
    setCardDetails(json.data);
  };

  if (cardDetails == null) {
    return <Shimmer />;
  }

  console.log(cardDetails);
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
          const { id, category, description, imageId } = item?.card.info;
          return (
            <li key={id}>
              {/* <img src={CDN_URL + "/" + imageId} /> */}
              <h4>{description}</h4>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CardDetails;
