import { ItemGraph } from "./data";
import { generate } from "./graph";

for (let i = 0; i < 10; i++) {
  const attributes = generate(ItemGraph);
  console.log(attributes.join(", "));
}
