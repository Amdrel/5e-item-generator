import { DamageType } from "./damage-type";
import { Variant } from "./variant";

export interface Attribute {
  name: string;
  variant?: Variant;
  damageType?: DamageType;
  value?: string | number;
}
