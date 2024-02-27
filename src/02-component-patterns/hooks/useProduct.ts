import { useEffect, useRef, useState } from "react";
import { InitialValues, OnChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: OnChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}
export const useProduct = ({
  product,
  onChange,
  value = 0,
  initialValues,
}: useProductArgs) => {
  const [counter, setcounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues?.maxCount);
    }

    if (initialValues?.count) {
      if (initialValues?.count > newValue) {
        newValue = Math.max(newValue, initialValues?.count);
      }
    }
    setcounter(newValue);

    onChange &&
      onChange({
        product,
        count: newValue,
      });
  };

  const reset = () => {
    setcounter(initialValues?.count || value);
  };

  useEffect(() => {
    if (!isMounted.current) {
      return;
    }
    setcounter(initialValues?.count || value);
  }, [value]);

  return {
    counter,
    initialValues,
    maxCount: initialValues?.maxCount,
    isMaxCountReached:
      !!initialValues?.count && initialValues?.maxCount === counter,

    increaseBy,
    reset,
  };
};
