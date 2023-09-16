import { ItemAttribute } from "./item-attribute";

export interface Item {
  name: string;
  proficiency?: string;
  attributes: ItemAttribute[];
}
