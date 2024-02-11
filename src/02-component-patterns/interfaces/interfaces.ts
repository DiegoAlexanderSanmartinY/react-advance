import { ReactElement } from "react";

export interface ProductCarProps {
  product: Product;
  children?: ReactElement | ReactElement[];
}
export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCarProps): JSX.Element;
  Buttons: () => JSX.Element;
  Image: ({ img }: { img?: string }) => JSX.Element;
  Title: ({ title }: { title?: string }) => JSX.Element;
}
