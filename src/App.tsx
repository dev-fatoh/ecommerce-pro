import Navbar from "./components/Navbar";
import ProductImages from "./components/ProductImages";
import Content from "./components/Content";
import { MainImage } from "./components/MainImage";
import { useContext } from "react";
import { AppProvider } from "./Provider";
function App() {
  const context = useContext(AppProvider);
  if (context === null) {
    throw new Error("conntext must be used");
  }
  return (
    <main className="container">
      <Navbar />
      <div className="flex">
        <ProductImages
          thums={context.thums}
          originalImage={context.originalImage}
        />
        <MainImage
          thums={context.thums}
          originalImage={context.originalImage}
          mobile="mobile"
        />
        <Content />
      </div>
    </main>
  );
}

export default App;
