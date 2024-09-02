import { TCart } from "@/types";

export function generateTotalProductPrice(cart: TCart[]) {
  const total = cart?.reduce((prev, curr) => {
    if (curr?.price) {
      return (prev += curr.price * curr?.quantity);
    }
    return 0;
  }, 0);

  return parseFloat(total.toFixed(2));
}
