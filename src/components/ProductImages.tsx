import { useState } from "react";
import { ImageModel } from "./ImageModel";
export default function ProductImages({
  thums,
  originalImage,
}: {
  thums: string[];
  originalImage: string[];
}) {
  const [index, setIndex] = useState(0);
  const [showModel, setShowModel] = useState(false);
  function handleShowModel() {
    setShowModel(true);
  }
  function handleRemoveModel() {
    setShowModel(false);
  }

  return (
    <div className="image-wrapper">
      <div className="main-image" onClick={handleShowModel}>
        <img src={originalImage[index]} alt="main product image" />
      </div>
      <div className="thams-list">
        {thums.map((img, idx) => (
          <div key={idx} className="img" onClick={() => setIndex(idx)}>
            <img src={img} alt="product image thum" />
          </div>
        ))}
      </div>
      {showModel && (
        <ImageModel
          originalImage={originalImage}
          thums={thums}
          imageIndex={index}
          onClose={handleRemoveModel}
        />
      )}
    </div>
  );
}
