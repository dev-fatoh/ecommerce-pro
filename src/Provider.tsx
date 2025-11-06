import { createContext, useState, type ReactNode } from "react";
import Image1 from "./assets/images/image-product-1.jpg";
import Image2 from "./assets/images/image-product-2.jpg";
import Image3 from "./assets/images/image-product-3.jpg";
import Image4 from "./assets/images/image-product-4.jpg";
import ImageTham1 from "./assets/images/image-product-1-thumbnail.jpg";
import ImageTham2 from "./assets/images/image-product-2-thumbnail.jpg";
import ImageTham3 from "./assets/images/image-product-3-thumbnail.jpg";
import ImageTham4 from "./assets/images/image-product-4-thumbnail.jpg";
export interface AppContext {
  thums: string[];
  originalImage: string[];
  currentProduct: string;
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  productPrice: number;
}
type Props = {
  children: ReactNode;
};
const thums = [ImageTham1, ImageTham2, ImageTham3, ImageTham4];
const originalImage = [Image1, Image2, Image3, Image4];
const currentProduct: string = "Full limited edition sneakers";
const productPrice: number = 125;

export const AppProvider = createContext<AppContext | null>(null);
export default function Provider({ children }: Props) {
  const [counter, setCounter] = useState(0);
  return (
    <AppProvider.Provider
      value={{
        thums,
        originalImage,
        currentProduct,
        counter,
        setCounter,
        productPrice,
      }}
    >
      {children}
    </AppProvider.Provider>
  );
}
