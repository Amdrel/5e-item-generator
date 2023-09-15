import { ItemGraph } from "./types/data";
import { generate } from "./generate";

for (let i = 0; i < 10; i++) {
  const attributes = generate(ItemGraph);
  console.log(attributes.join(", "));
}
