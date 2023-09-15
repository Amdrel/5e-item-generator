import {
  Category,
  NodeType,
  makeAttribute,
  makeAttributes,
  makeCategories,
} from "./nodes";

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

const WeaponEffect: Category = {
  type: NodeType.Category,
  name: "WeaponEffect",
  children: [Stat, Damage, makeAttribute("Initiative")],
};

const SimpleMelee: Category = {
  type: NodeType.Category,
  name: "SimpleMelee",
  weight: 2,
  children: makeCategories(
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

const MartialMelee: Category = {
  type: NodeType.Category,
  name: "MartialMelee",
  weight: 3,
  children: makeCategories(
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

const SimpleRanged: Category = {
  type: NodeType.Category,
  name: "SimpleRanged",
  weight: 1,
  children: makeCategories(
    ["Light Crossbow", "Darts", "Shortbow", "Sling"],
    WeaponEffect.children
  ),
};

const MartialRanged: Category = {
  type: NodeType.Category,
  name: "MartialRanged",
  weight: 1,
  children: makeCategories(
    ["Blowgun", "Hand Crossbow", "Heavy Crossbow", "Longbow", "Net"],
    WeaponEffect.children
  ),
};

const Weapon: Category = {
  type: NodeType.Category,
  name: "Weapon",
  children: [SimpleMelee, MartialMelee, SimpleRanged, MartialRanged],
};

const JewelryEffect: Category = {
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

const Jewelry: Category = {
  type: NodeType.Category,
  name: "Jewelry",
  children: makeCategories(
    ["Necklace", "Ring", "Bracelet", "Earring"],
    JewelryEffect.children
  ),
};

export const ItemGraph: Category = {
  type: NodeType.Category,
  name: "Equipment",
  children: [Armor, Weapon, Jewelry],
};

// {
//   type: NodeType.Category,
//   name: "Weapon",
// },
// {
//   type: NodeType.Category,
//   name: "Trinket",
// },
