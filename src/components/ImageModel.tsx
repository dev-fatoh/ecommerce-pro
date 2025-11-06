import Close from "../assets/images/icon-close.svg";
import { MainImage } from "./MainImage";
export function ImageModel({
  thums,
  originalImage,
  imageIndex,
  onClose,
}: {
  thums: string[];
  originalImage: string[];
  imageIndex: number;
  onClose: () => void;
}) {
  return (
    <div className="model">
      {/* button to close the model */}
      <button className="close-model" onClick={onClose}>
        <img src={Close} alt="close icon" />
      </button>
      <MainImage
        thums={thums}
        imageIndex={imageIndex}
        originalImage={originalImage}
      />
    </div>
  );
}
