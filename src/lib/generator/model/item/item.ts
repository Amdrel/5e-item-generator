import { Attribute } from "./attribute";
import { DamageType } from "./damage-type";
import { Proficiency } from "./proficiency";

export interface Item {
  name: string;
  damage?: string | number;
  damageType?: DamageType;
  proficiency?: Proficiency;
  attributes: Attribute[];
}
