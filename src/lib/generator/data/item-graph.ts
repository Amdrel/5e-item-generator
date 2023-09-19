import { DamageType } from "../model/item/damage-type";
import { Proficiency } from "../model/item/proficiency";
import {
  CategoryNode,
  NodeType,
  ResistanceNode,
  SavingThrowNode,
  makeAttribute,
  makeAttributes,
  makeDamageType,
  makeDamageTypes,
  makeItem,
  makeItems,
  makeProficiencies,
} from "../model/nodes";

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
    "Persuasion",
  ]),
};

const WeaponPhysicalDamage: CategoryNode = {
  type: NodeType.Category,
  name: "WeaponPhysicalDamage",
  children: [makeDamageType(DamageType.SamePhysical)],
};

const ArmorPhysicalDamage: CategoryNode = {
  type: NodeType.Category,
  name: "ArmorPhysicalDamage",
  children: makeDamageTypes([DamageType.Slashing, DamageType.Piercing, DamageType.Bludgeoning]),
};

const MagicalDamage: CategoryNode = {
  type: NodeType.Category,
  name: "MagicalDamage",
  children: makeDamageTypes([
    DamageType.Acid,
    DamageType.Cold,
    DamageType.Fire,
    DamageType.Force,
    DamageType.Lightning,
    DamageType.Necrotic,
    DamageType.Poison,
    DamageType.Psychic,
    DamageType.Radiant,
    DamageType.Thunder,
  ]),
};

const Damage: CategoryNode = {
  type: NodeType.Category,
  name: "Damage",
  children: [WeaponPhysicalDamage, MagicalDamage],
};

const Resistance: ResistanceNode = {
  type: NodeType.Resistance,
  name: "Resistance",
  children: [ArmorPhysicalDamage, MagicalDamage],
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
  children: makeItems(["Helmet", "Shoulders", "Chest", "Legs", "Boots"], ArmorEffect.children),
};

const Armor: CategoryNode = {
  type: NodeType.Category,
  name: "Armor",
  children: makeProficiencies(
    [Proficiency.Clothes, Proficiency.Light, Proficiency.Medium, Proficiency.Heavy],
    ArmorSlot.children
  ),
};

const WeaponEffect: CategoryNode = {
  type: NodeType.Category,
  name: "WeaponEffect",
  children: [Damage],
};

const SimpleMelee: CategoryNode = {
  type: NodeType.Category,
  name: "SimpleMelee",
  weight: 2,
  children: [
    makeItem("Club", WeaponEffect.children, 1, "1d4", DamageType.Bludgeoning),
    makeItem("Dagger", WeaponEffect.children, 1, "1d4", DamageType.Piercing),
    makeItem("Greatclub", WeaponEffect.children, 1, "1d8", DamageType.Bludgeoning),
    makeItem("Handaxe", WeaponEffect.children, 1, "1d6", DamageType.Slashing),
    makeItem("Javelin", WeaponEffect.children, 1, "1d6", DamageType.Piercing),
    makeItem("Light Hammer", WeaponEffect.children, 1, "1d4", DamageType.Bludgeoning),
    makeItem("Mace", WeaponEffect.children, 1, "1d6", DamageType.Bludgeoning),
    makeItem("Quarterstaff", WeaponEffect.children, 1, "1d6", DamageType.Bludgeoning),
    makeItem("Sickle", WeaponEffect.children, 1, "1d4", DamageType.Slashing),
    makeItem("Spear", WeaponEffect.children, 1, "1d6", DamageType.Piercing),
  ],
};

const MartialMelee: CategoryNode = {
  type: NodeType.Category,
  name: "MartialMelee",
  weight: 3,
  children: [
    makeItem("Battleaxe", WeaponEffect.children, 1, "1d8", DamageType.Slashing),
    makeItem("Flail", WeaponEffect.children, 1, "1d8", DamageType.Bludgeoning),
    makeItem("Glaive", WeaponEffect.children, 1, "1d10", DamageType.Slashing),
    makeItem("Greataxe", WeaponEffect.children, 1, "1d12", DamageType.Slashing),
    makeItem("Greatsword", WeaponEffect.children, 1, "2d6", DamageType.Slashing),
    makeItem("Halbard", WeaponEffect.children, 1, "1d10", DamageType.Slashing),
    makeItem("Lance", WeaponEffect.children, 1, "1d12", DamageType.Piercing),
    makeItem("Longsword", WeaponEffect.children, 1, "1d8", DamageType.Slashing),
    makeItem("Maul", WeaponEffect.children, 1, "2d6", DamageType.Bludgeoning),
    makeItem("Morningstar", WeaponEffect.children, 1, "1d8", DamageType.Piercing),
    makeItem("Pike", WeaponEffect.children, 1, "1d10", DamageType.Piercing),
    makeItem("Rapier", WeaponEffect.children, 1, "1d8", DamageType.Piercing),
    makeItem("Scimitar", WeaponEffect.children, 1, "1d6", DamageType.Slashing),
    makeItem("Shortsword", WeaponEffect.children, 1, "1d6", DamageType.Piercing),
    makeItem("Trident", WeaponEffect.children, 1, "1d6", DamageType.Piercing),
    makeItem("War pick", WeaponEffect.children, 1, "1d8", DamageType.Piercing),
    makeItem("Warhammer", WeaponEffect.children, 1, "1d8", DamageType.Bludgeoning),
    makeItem("Whip", WeaponEffect.children, 1, "1d4", DamageType.Slashing),
    makeItem("Kyoketsu", WeaponEffect.children, 1, "1d6", DamageType.Slashing),
  ],
};

const SimpleRanged: CategoryNode = {
  type: NodeType.Category,
  name: "SimpleRanged",
  weight: 1,
  children: [
    makeItem("Light Crossbow", WeaponEffect.children, 1, "1d8", DamageType.Piercing),
    makeItem("Darts", WeaponEffect.children, 1, "1d4", DamageType.Piercing),
    makeItem("Shortbow", WeaponEffect.children, 1, "1d6", DamageType.Piercing),
    makeItem("Sling", WeaponEffect.children, 1, "1d4", DamageType.Bludgeoning),
  ],
};

const MartialRanged: CategoryNode = {
  type: NodeType.Category,
  name: "MartialRanged",
  weight: 1,
  children: [
    makeItem("Blowgun", WeaponEffect.children, 1, 1, DamageType.Piercing),
    makeItem("Hand Crossbow", WeaponEffect.children, 1, "1d6", DamageType.Piercing),
    makeItem("Heavy Crossbow", WeaponEffect.children, 1, "1d10", DamageType.Piercing),
    makeItem("Longbow", WeaponEffect.children, 1, "1d8", DamageType.Piercing),
    makeItem("Net", WeaponEffect.children, 1),
  ],
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
    MagicalDamage,
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
  children: makeItems(["Necklace", "Ring", "Bracelet", "Earring"], JewelryEffect.children),
};

export const ItemGraph: CategoryNode = {
  type: NodeType.Category,
  name: "Equipment",
  children: [Armor, Weapon, Jewelry],
};
