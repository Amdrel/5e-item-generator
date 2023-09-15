import { Item } from "./types/item";
import {
  GraphNode,
  isAttribute,
  isCategory,
  isItem,
  isProficiency,
  isResistance,
  isSavingThrow,
} from "./types/nodes";

interface WeightedItem {
  weight?: number;
}

enum Variant {
  Unspecified = "",
  Resistance = "Resistance",
  SavingThrow = "Saving Throws",
}

interface Context {
  variant?: Variant;
}

/**
 * Generate a random item using data from a provided graph.
 */
export function generate(
  node: GraphNode,
  item?: Item,
  context?: Context
): Item {
  if (!item) item = { name: "Unnamed", attributes: [] };

  if (isAttribute(node)) {
    item.attributes.push({
      name: node.name,
      value: 1,
      variant: context?.variant,
    });
    return item;
  } else if (isCategory(node) && node.children) {
    return generate(weightedRandom(node.children), item, context);
  } else if (isItem(node) && node.children) {
    item.name = node.name;
    return generate(weightedRandom(node.children), item, context);
  } else if (isProficiency(node) && node.children) {
    item.proficiency = node.name;
    return generate(weightedRandom(node.children), item, context);
  } else if (isResistance(node) && node.children) {
    return generate(weightedRandom(node.children), item, {
      ...context,
      variant: Variant.Resistance,
    });
  } else if (isSavingThrow(node) && node.children) {
    return generate(weightedRandom(node.children), item, {
      ...context,
      variant: Variant.SavingThrow,
    });
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
