import { CDN_URL } from "../utils/constants";

const Card = (props) => {
  // Destructure data from props
  const { name, cuisine, imageId, rating, deliveryTime, amount } = props?.data;
  return (
    <div className="flex-col justify-around m-4 p-4 w-52 h-96 bg-gray-200 shadow-lg hover:bg-slate-200">
      <img className="rounded-lg w-44" src={CDN_URL + imageId} />
      <h3 className="text-2xl">{name}</h3>
      <h4 className="text-sm overflow-hidden">{cuisine}</h4>
      <h4 className="text-sm">{rating}</h4>
      <h4 className="text-sm">{deliveryTime}</h4>
      <h4 className="text-sm">{amount}</h4>
    </div>
  );
};

/**
 *
 * @param {componenet} Card
 * @returns componenet with promoted label
 */
export const withPromotedLabel = (Card) => {
  return (props) => {
    return (
      <div className="">
        <label className="absolute bg-black text-white m-1 p-1">
          Promoted Label
        </label>
        <Card {...props} />
      </div>
    );
  };
};

export default Card;
