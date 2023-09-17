import { DamageType } from "./item/damage-type";
import { Proficiency } from "./item/proficiency";

export enum NodeType {
  Category = "Category",
  Item = "Item",
  Proficiency = "Proficiency",
  Attribute = "Attribute",
  Resistance = "Resistance",
  SavingThrow = "SavingThrow",
  DamageType = "DamageType",
}

export interface CategoryNode {
  type: NodeType.Category;
  name: string;
  weight?: number;
  children?: GraphNode[];
}

export function makeCategory(
  name: string,
  children?: GraphNode[],
  weight?: number
): CategoryNode {
  return { type: NodeType.Category, name, children, weight };
}

export function makeCategories(
  names: string[],
  children?: GraphNode[],
  weight?: number
): CategoryNode[] {
  return names.map((name) => makeCategory(name, children, weight));
}

export interface ItemNode extends Omit<CategoryNode, "type"> {
  type: NodeType.Item;
}

export function makeItem(
  name: string,
  children?: GraphNode[],
  weight?: number
): ItemNode {
  return { type: NodeType.Item, name, children, weight };
}

export function makeItems(
  names: string[],
  children?: GraphNode[],
  weight?: number
): ItemNode[] {
  return names.map((name) => makeItem(name, children, weight));
}

export interface ProficiencyNode extends Omit<CategoryNode, "type" | "name"> {
  type: NodeType.Proficiency;
  name: Proficiency;
}

export function makeProficiency(
  name: Proficiency,
  children?: GraphNode[],
  weight?: number
): ProficiencyNode {
  return { type: NodeType.Proficiency, name, children, weight };
}

export function makeProficiencies(
  names: Proficiency[],
  children?: GraphNode[],
  weight?: number
): ProficiencyNode[] {
  return names.map((name) => makeProficiency(name, children, weight));
}

export interface DamageTypeNode extends Omit<AttributeNode, "type" | "name"> {
  type: NodeType.DamageType;
  name: DamageType;
}

export function makeDamageType(
  name: DamageType,
  weight?: number
): DamageTypeNode {
  return { type: NodeType.DamageType, name, weight };
}

export function makeDamageTypes(
  names: DamageType[],
  weight?: number
): DamageTypeNode[] {
  return names.map((name) => makeDamageType(name, weight));
}

export interface AttributeNode {
  type: NodeType.Attribute;
  name: string;
  weight?: number;
}

export function makeAttribute(name: string, weight?: number): AttributeNode {
  return { type: NodeType.Attribute, name, weight };
}

export function makeAttributes(
  names: string[],
  weight?: number
): AttributeNode[] {
  return names.map((name) => makeAttribute(name, weight));
}

export interface ResistanceNode extends Omit<CategoryNode, "type"> {
  type: NodeType.Resistance;
}

export function makeResistance(
  name: string,
  children?: GraphNode[],
  weight?: number
): ResistanceNode {
  return { type: NodeType.Resistance, name, children, weight };
}

export function makeResistances(
  names: string[],
  children?: GraphNode[],
  weight?: number
): ResistanceNode[] {
  return names.map((name) => makeResistance(name, children, weight));
}

export interface SavingThrowNode extends Omit<CategoryNode, "type"> {
  type: NodeType.SavingThrow;
}

export function makeSavingThrow(
  name: string,
  children?: GraphNode[],
  weight?: number
): SavingThrowNode {
  return { type: NodeType.SavingThrow, name, children, weight };
}

export function makeSavingThrows(
  names: string[],
  children?: GraphNode[],
  weight?: number
): SavingThrowNode[] {
  return names.map((name) => makeSavingThrow(name, children, weight));
}

export type GraphNode =
  | CategoryNode
  | ItemNode
  | ProficiencyNode
  | AttributeNode
  | ResistanceNode
  | SavingThrowNode
  | DamageTypeNode;

export function isCategory(object: GraphNode): object is CategoryNode {
  return object.type === NodeType.Category;
}

export function isItem(object: GraphNode): object is ItemNode {
  return object.type === NodeType.Item;
}

export function isProficiency(object: GraphNode): object is ProficiencyNode {
  return object.type === NodeType.Proficiency;
}

export function isAttribute(object: GraphNode): object is AttributeNode {
  return object.type === NodeType.Attribute;
}

export function isResistance(object: GraphNode): object is ResistanceNode {
  return object.type === NodeType.Resistance;
}

export function isSavingThrow(object: GraphNode): object is SavingThrowNode {
  return object.type === NodeType.SavingThrow;
}

export function isDamageType(object: GraphNode): object is DamageTypeNode {
  return object.type === NodeType.DamageType;
}
