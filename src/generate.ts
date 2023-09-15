import { GraphNode, isAttribute, isCategory } from "./types/nodes";

interface WeightedItem {
  weight?: number;
}

/**
 * Generate a random item using data from a provided graph.
 */
export function generate(node: GraphNode, attributes?: string[]): string[] {
  if (isAttribute(node)) {
    return [...(attributes ?? []), node.name];
  } else if (isCategory(node) && node.children) {
    return generate(weightedRandom(node.children), [
      ...(attributes ?? []),
      node.name,
    ]);
  }

  throw new Error("Got a node with an unhandled type.");
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
