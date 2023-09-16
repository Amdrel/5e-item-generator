import { ItemAttributeVariant } from "./item-attribute-variant";

export interface ItemAttribute {
  name: string;
  variant?: ItemAttributeVariant;
  value?: number;
}
