import CartImage from "../assets/images/icon-cart.svg";
import Avatar from "../assets/images/image-avatar.png";
import MenuIcon from "../assets/images/icon-menu.svg";
import CloseIcon from "../assets/images/icon-close.svg";
import { useContext, useState } from "react";
import CartBox from "./CartBox";
import { AppProvider } from "../Provider";
export default function Navbar() {
  const [toggleNav, setToggleNav] = useState(false);

  const [cartBox, setCartBox] = useState(false);
  const context = useContext(AppProvider);
  function handleCheckoutCart() {
    context?.setCounter(0);
  }
  return (
    <div className="navbar">
      {cartBox && <CartBox onCheckout={handleCheckoutCart} />}

      <button className="menu-icon" onClick={() => setToggleNav(true)}>
        <img src={MenuIcon} alt="menu icon" />
      </button>
      <h1 className="logo">sneakers</h1>
      <ul className="left-nav">
        <li>
          <a href="#">Collections</a>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      {toggleNav && (
        <div className="mobile-nav">
          <div className="inner">
            <button className="close-nav" onClick={() => setToggleNav(false)}>
              <img src={CloseIcon} alt="close icon" />
            </button>
            <ul>
              <li>
                <a href="#">Collections</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
      <div className="right-nav">
        <button className="cart-btn" onClick={() => setCartBox(!cartBox)}>
          {context?.counter != null && context?.counter > 0 ? (
            <div className="cart-notify">{context?.counter}</div>
          ) : null}
          <img src={CartImage} alt="cart image" />
        </button>
        <button className="avatar-btn">
          <img src={Avatar} alt="avatar image" />
        </button>
      </div>
    </div>
  );
}
