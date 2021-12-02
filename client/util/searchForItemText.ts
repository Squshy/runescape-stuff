import { ITEMS_API } from "../constants";

export const searchForItemText = (itemName: string) => {
  const item = (
    itemName.trim().toLowerCase().charAt(0).toUpperCase() + itemName.slice(1)
  ).replace(/ /g, "%20");
  return `${ITEMS_API}?where={"name":"${item}", "duplicate":"false"}`;
};
