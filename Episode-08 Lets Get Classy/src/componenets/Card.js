import { CDN_URL } from "../utils/constants";

const Card = (props) => {
  // Destructure data from props
  const { name, cuisine, imageId, rating, deliveryTime, amount } = props?.data;
  return (
    <div className="card">
      <img src={CDN_URL + imageId} />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{amount}</h4>
    </div>
  );
};

export default Card;
