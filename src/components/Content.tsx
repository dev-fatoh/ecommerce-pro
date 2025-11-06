import { useContext } from "react";
import { AppProvider } from "../Provider";
import UserActions from "./UserActions";

export default function Content() {
  const context = useContext(AppProvider);
  return (
    <div className="content">
      <h4>sneacker company</h4>
      <h1>{context?.currentProduct}</h1>
      <p>
        This low-profile sneakers are your perfect casual waer companion
        .Featuring a durable rubber outer sole,they'll withstand everything the
        weather can offer
      </p>
      <h3 className="price">
        $125.00 <span className="discout-mount">50%</span>
      </h3>
      <UserActions />
    </div>
  );
}
