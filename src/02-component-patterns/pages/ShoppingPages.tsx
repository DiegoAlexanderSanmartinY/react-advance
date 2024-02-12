import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug",
  img: "./coffee-mug.png",
};

export const ShoppingPages = () => {
  return (
    <div>
      Shopping Store
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product} className="bg-dark text-white">
          <ProductCard.Image
            className="custom-image"
            style={{ boxShadow: "10px 10px 10px gray" }}
          />
          <ProductCard.Title title={"Hello World"} className="text-bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard product={product} className="bg-dark text-white">
          <ProductImage className="custom-image" />
          <ProductTitle className="text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product}
          style={{
            backgroundColor: "red",
          }}
        >
          <ProductImage style={{ boxShadow: "10px 10px 10px gray" }} />
          <ProductTitle style={{ fontWeight: "bold" }} />
          <ProductButtons
            style={{ display: "flex", justifyContent: "center" }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
