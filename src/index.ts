import { ItemGraph } from "./types/data";
import { generate } from "./generate";
import { renderItem } from "./types/item";

for (let i = 0; i < 10; i++) {
  const item = generate(ItemGraph);
  console.log(renderItem(item));
}
