import { GraphNode, isAttribute, isCategory } from "./types";

interface WeightedItem {
  weight?: number;
}

/**
 * Generate a random item using data from a provided graph.
 */
export function generate(node: GraphNode): void {
  if (isAttribute(node)) {
    console.log(node.name);
  } else if (isCategory(node) && node.children) {
    console.log(node.name);
    generate(weightedRandom(node.children));
  }
}

/**
 * Selects a random object from an array taking weight into account.
 *
 * Adapted from: https://stackoverflow.com/a/55671924
 */
function weightedRandom<T extends WeightedItem>(items: T[]): T {
  let i;

  const weights = [items[0].weight ?? 1];
  for (i = 1; i < items.length; i++) {
    weights[i] = (items[i].weight ?? 1) + weights[i - 1];
  }

  const random = Math.random() * weights[weights.length - 1];
  for (i = 0; i < weights.length; i++) {
    if (weights[i] > random) break;
  }

  return items[i];
}
