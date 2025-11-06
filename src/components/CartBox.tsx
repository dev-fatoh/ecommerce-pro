import { useContext } from "react";
import { AppProvider } from "../Provider";

export default function CartBox({ onCheckout }: { onCheckout: () => void }) {
  const context = useContext(AppProvider);
  if (context === null) {
    throw new Error("context must be valid");
  }
  if (context.counter === 0) {
    return (
      <div className="cart-model">
        <h4>cart</h4>
        <div className="cart-model-empty">
          <h4>Your Cart is empty</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart-model">
        <h4>cart</h4>
        <div className="product-cart">
          <img src={context.thums[0]} alt="product image" />
          <div className="product-cart-details">
            <h4>{context.currentProduct}</h4>
            <p>
              ${context.productPrice.toFixed(2)} x {context.counter}
              <span>
                ${(context.productPrice * context.counter).toFixed(2)}
              </span>
            </p>
          </div>
        </div>
        <button className="checkout-btn" onClick={onCheckout}>
          checkout
        </button>
      </div>
    );
  }
}
