export enum NodeType {
  Category,
  Attribute,
}

export interface Category {
  type: NodeType.Category;
  name: string;
  weight?: number;
  children?: Node[];
}

export function makeCategory(
  name: string,
  children?: Node[],
  weight?: number
): Category {
  return { type: NodeType.Category, name, children, weight };
}

export function makeCategories(
  names: string[],
  children?: Node[],
  weight?: number
): Category[] {
  return names.map((name) => makeCategory(name, children, weight));
}

export interface Attribute {
  type: NodeType.Attribute;
  name: string;
  weight?: number;
}

export function makeAttribute(name: string, weight?: number): Attribute {
  return { type: NodeType.Attribute, name, weight };
}

export function makeAttributes(names: string[], weight?: number): Attribute[] {
  return names.map((name) => makeAttribute(name, weight));
}

export type Node = Category | Attribute;

export function isCategory(object: Node): object is Category {
  return object.type === NodeType.Category;
}

export function isAttribute(object: Node): object is Attribute {
  return object.type === NodeType.Attribute;
}
