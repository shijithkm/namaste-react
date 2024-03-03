import { useEffect, useState } from "react";
import { CARD_DETIALS_URL, CDN_URL } from "../utils/constants";

const useCardDetails = (cardId) => {
  const [cardDetails, setCardDetails] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CARD_DETIALS_URL + cardId);
    const json = await data.json();
    setCardDetails(json.data);
  };

  return cardDetails;
};

export default useCardDetails;
