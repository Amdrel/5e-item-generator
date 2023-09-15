import {
  Category,
  NodeType,
  makeAttribute,
  makeAttributes,
  makeCategories,
} from "./types";

// NOTE: Remove damage increase from armor but keep it for weapons.

const Stat: Category = {
  type: NodeType.Category,
  name: "Stat",
  children: makeAttributes([
    "Strength",
    "Dexterity",
    "Constitution",
    "Charisma",
    "Wisdom",
    "Intellect",
  ]),
};

const Skill: Category = {
  type: NodeType.Category,
  name: "Skill",
  children: makeAttributes([
    "Athletics",
    "Acrobatics",
    "Sleight of Hand",
    "Stealth",
    "Arcana",
    "History",
    "Investigation",
    "Nature",
    "Religion",
    "Animal Handling",
    "Insight",
    "Medicine",
    "Perception",
    "Survival",
    "Deception",
    "Intimidation",
    "Performance",
    "Persuation",
  ]),
};

const PhysicalDamage: Category = {
  type: NodeType.Category,
  name: "PhysicalDamage",
  children: makeAttributes(["Slashing", "Piercing", "Bludgeoning"]),
};

const MagicalDamage: Category = {
  type: NodeType.Category,
  name: "MagicalDamage",
  children: makeAttributes([
    "Acid",
    "Cold",
    "Fire",
    "Force",
    "Lightning",
    "Necrotic",
    "Poison",
    "Psychic",
    "Radiant",
    "Thunder",
  ]),
};

const Damage: Category = {
  type: NodeType.Category,
  name: "Damage",
  children: [PhysicalDamage, MagicalDamage],
};

const Resistance: Category = {
  type: NodeType.Category,
  name: "Resistance",
  children: [PhysicalDamage, MagicalDamage],
};

const SavingThrow: Category = {
  type: NodeType.Category,
  name: "SavingThrow",
  children: Stat.children,
};

const ArmorEffect: Category = {
  type: NodeType.Category,
  name: "ArmorEffect",
  children: [
    Stat,
    Damage,
    Resistance,
    SavingThrow,
    Skill,
    makeAttribute("Initiative"),
    makeAttribute("Armor Class"),
  ],
};

const ArmorSlot: Category = {
  type: NodeType.Category,
  name: "ArmorSlot",
  children: makeCategories(
    ["Helmet", "Shoulders", "Chest", "Legs", "Boots"],
    ArmorEffect.children
  ),
};

const Armor: Category = {
  type: NodeType.Category,
  name: "Armor",
  children: makeCategories(
    ["Clothes", "Light", "Medium", "Heavy"],
    ArmorSlot.children
  ),
};

export const ItemGraph: Category = {
  type: NodeType.Category,
  name: "Equipment",
  children: [Armor],
};

// {
//   type: NodeType.Category,
//   name: "Weapon",
// },
// {
//   type: NodeType.Category,
//   name: "Trinket",
// },
