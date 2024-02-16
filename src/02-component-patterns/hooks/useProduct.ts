import { useEffect, useState } from "react";
import { OnChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
}
export const useProduct = ({
  product,
  onChange,
  value = 0,
}: useProductArgs) => {
  const [counter, setcounter] = useState(value);
  useEffect(() => {
    setcounter(value);
  }, [value]);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setcounter(newValue);
    console.log("aca toy");
    onChange &&
      onChange({
        product,
        count: newValue,
      });
  };
  return {
    counter,
    increaseBy,
  };
};
