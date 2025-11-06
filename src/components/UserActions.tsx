import { useContext, useState } from "react";
import CartIcon from "../assets/images/icon-cart.svg";
import { AppProvider } from "../Provider";
export default function UserActions() {
  const context = useContext(AppProvider);
  if (context === null) {
    throw new Error("context must be valid");
  }
  const [countItem, setCountItem] = useState(context.counter);
  return (
    <div className="flex">
      <div className="count-product">
        <button
          className="decrement"
          onClick={() => setCountItem((prev) => (prev === 0 ? 0 : prev - 1))}
        >
          -
        </button>
        {countItem}
        <button
          className="increment"
          onClick={() => setCountItem((prev) => prev + 1)}
        >
          +
        </button>
      </div>
      <button
        className="add-cart-btn"
        onClick={() => {
          context.setCounter(countItem);
          setCountItem(0);
        }}
      >
        <img src={CartIcon} alt="cart icon" />
        add to cart
      </button>
    </div>
  );
}
