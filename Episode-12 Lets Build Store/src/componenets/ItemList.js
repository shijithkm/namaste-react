import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    console.log("item", item);
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => {
        const { id, name, price, description, imageId } = item?.card?.info;
        return (
          <div key={id} className="p-2 m-2 border-b-2 flex justify-between">
            <div className="flex-col justify-start text-left w-9/12">
              <div className="text-gray-800 font-bold">{name}</div>
              <div className="border-l"> ₹ {price / 100}</div>
              <p>{description}</p>
            </div>
            <div className="w-3/12">
              <img className="w-32" src={CDN_URL + imageId} />
              <div className="absolute">
                <button
                  onClick={() => handleAddItem(item)}
                  className="w-32 p-2 bg-black opacity-75 text-white my-28 shadow"
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
