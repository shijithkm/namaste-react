import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  // Subscribing
  const items = useSelector((store) => store.cart.items);
  console.log("items", items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="m-2 p-2 bg-black text-white rounded"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {items.length === 0 && (
          <h1>Cart is Empty, please add items to the cart! </h1>
        )}
        <ItemList items={items} />
      </div>
    </div>
  );
};

export default Cart;
