import Button from "@material-ui/core/Button";

import { CartItemType } from "../App";

import { Wrapper } from "./Item.styles";

type Props = {
  item: CartItemType;
  handleAddToCart: (clickItem: CartItemType) => void;
};

const Item = () => {
  return <div>Item</div>;
};

export default Item;
