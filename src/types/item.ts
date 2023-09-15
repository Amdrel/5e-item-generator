export interface Item {
  name: string;
  proficiency?: string;
  attributes: ItemAttribute[];
}

export interface ItemAttribute {
  name: string;
  variant?: string;
  value?: number;
}

export function renderItem(item: Item): string {
  let output = "";

  output += item.proficiency ? `${item.proficiency} ${item.name}` : item.name;

  item.attributes.forEach((attribute) => {
    output += attribute.variant
      ? ` (+${attribute.value} ${attribute.name} ${attribute.variant})`
      : ` (+${attribute.value} ${attribute.name})`;
  });

  return output;
}
