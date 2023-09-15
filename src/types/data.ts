import {
  CategoryNode,
  NodeType,
  ResistanceNode,
  SavingThrowNode,
  makeAttribute,
  makeAttributes,
  makeCategories,
  makeItems,
  makeProficiencies,
} from "./nodes";

// NOTE: Remove damage increase from armor but keep it for weapons.

const Stat: CategoryNode = {
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

const Skill: CategoryNode = {
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

const PhysicalDamage: CategoryNode = {
  type: NodeType.Category,
  name: "PhysicalDamage",
  children: makeAttributes(["Slashing", "Piercing", "Bludgeoning"]),
};

const MagicalDamage: CategoryNode = {
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

const Damage: CategoryNode = {
  type: NodeType.Category,
  name: "Damage",
  children: [PhysicalDamage, MagicalDamage],
};

const Resistance: ResistanceNode = {
  type: NodeType.Resistance,
  name: "Resistance",
  children: [PhysicalDamage, MagicalDamage],
};

const SavingThrow: SavingThrowNode = {
  type: NodeType.SavingThrow,
  name: "SavingThrow",
  children: Stat.children,
};

const ArmorEffect: CategoryNode = {
  type: NodeType.Category,
  name: "ArmorEffect",
  children: [
    Stat,
    Resistance,
    SavingThrow,
    Skill,
    makeAttribute("Initiative"),
    makeAttribute("Armor Class"),
  ],
};

const ArmorSlot: CategoryNode = {
  type: NodeType.Category,
  name: "ArmorSlot",
  children: makeItems(
    ["Helmet", "Shoulders", "Chest", "Legs", "Boots"],
    ArmorEffect.children
  ),
};

const Armor: CategoryNode = {
  type: NodeType.Category,
  name: "Armor",
  children: makeProficiencies(
    ["Clothes", "Light", "Medium", "Heavy"],
    ArmorSlot.children
  ),
};

const WeaponEffect: CategoryNode = {
  type: NodeType.Category,
  name: "WeaponEffect",
  children: [Damage, makeAttribute("Initiative")],
};

const SimpleMelee: CategoryNode = {
  type: NodeType.Category,
  name: "SimpleMelee",
  weight: 2,
  children: makeItems(
    [
      "Club",
      "Dagger",
      "Greatclub",
      "Handaxe",
      "Javelin",
      "Light Hammer",
      "Mace",
      "Quarterstaff",
      "Sickle",
      "Spear",
    ],
    WeaponEffect.children
  ),
};

const MartialMelee: CategoryNode = {
  type: NodeType.Category,
  name: "MartialMelee",
  weight: 3,
  children: makeItems(
    [
      "Battleaxe",
      "Flail",
      "Glaive",
      "Greataxe",
      "Greatsword",
      "Halbard",
      "Lance",
      "Longsword",
      "Maul",
      "Morningstar",
      "Pike",
      "Rapier",
      "Scimitar",
      "Short Sword",
      "Trident",
      "War Pick",
      "Warhammer",
      "Whip",
      "Kyoketsu",
    ],
    WeaponEffect.children
  ),
};

const SimpleRanged: CategoryNode = {
  type: NodeType.Category,
  name: "SimpleRanged",
  weight: 1,
  children: makeItems(
    ["Light Crossbow", "Darts", "Shortbow", "Sling"],
    WeaponEffect.children
  ),
};

const MartialRanged: CategoryNode = {
  type: NodeType.Category,
  name: "MartialRanged",
  weight: 1,
  children: makeItems(
    ["Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow", "Net"],
    WeaponEffect.children
  ),
};

const Weapon: CategoryNode = {
  type: NodeType.Category,
  name: "Weapon",
  children: [SimpleMelee, MartialMelee, SimpleRanged, MartialRanged],
};

const JewelryEffect: CategoryNode = {
  type: NodeType.Category,
  name: "JewelryEffect",
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

const Jewelry: CategoryNode = {
  type: NodeType.Category,
  name: "Jewelry",
  children: makeItems(
    ["Necklace", "Ring", "Bracelet", "Earring"],
    JewelryEffect.children
  ),
};

export const ItemGraph: CategoryNode = {
  type: NodeType.Category,
  name: "Equipment",
  children: [Armor, Weapon, Jewelry],
};
