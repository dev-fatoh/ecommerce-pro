import { useState } from "react";
import PrevIcon from "../assets/images/icon-previous.svg";
import NextIcon from "../assets/images/icon-next.svg";

export function MainImage({
  originalImage,
  thums,
  imageIndex,
  mobile,
}: {
  thums: string[];
  imageIndex?: number;
  originalImage: string[];
  mobile?: string;
}) {
  const [index, setIndex] = useState(imageIndex || 0);
  return (
    <div className={`model-image ${mobile ? "mobile" : ""}`}>
      <button
        className="btn-right"
        onClick={() =>
          setIndex((prev) => (prev === thums.length - 1 ? 0 : prev + 1))
        }
      >
        <img
          src={NextIcon}
          alt="next icon"
          style={{
            width: "20px",
            height: "20px",
          }}
        />
      </button>
      <img src={originalImage[index]} alt="main product image" />
      <button
        className="btn-left"
        onClick={() =>
          setIndex((prev) => (prev === 0 ? thums.length - 1 : prev - 1))
        }
      >
        <img
          src={PrevIcon}
          alt="previous icon"
          style={{
            width: "20px",
            height: "20px",
          }}
        />
      </button>
    </div>
  );
}
