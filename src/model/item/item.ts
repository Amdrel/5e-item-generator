import { Attribute } from "./attribute";
import { Proficiency } from "./proficiency";

export interface Item {
  name: string;
  proficiency?: Proficiency;
  attributes: Attribute[];
}
