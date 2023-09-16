import { ItemGraph } from "./data/item-graph";
import { generate } from "./generate";
import { Item } from "./model/item";

function renderItem(item: Item): string {
  let output = "";

  output += item.proficiency ? `${item.proficiency} ${item.name}` : item.name;

  item.attributes.forEach((attribute) => {
    output += attribute.variant
      ? ` (+${attribute.value} ${attribute.name} ${attribute.variant})`
      : ` (+${attribute.value} ${attribute.name})`;
  });

  return output;
}

function main() {
  for (let i = 0; i < 10; i++) {
    const item = generate(ItemGraph);
    console.log(renderItem(item));
  }
}

main();
