import { generate, ItemGraph } from "@/lib/generator";
import { DamageType } from "@/lib/generator/model/item/damage-type";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import "./generator.css";

function Field({
  name,
  className,
  children,
}: React.PropsWithChildren<{ name: string; className?: string }>) {
  return (
    <p className={className}>
      <strong>{name}:</strong> {children}
    </p>
  );
}

function Generator() {
  const [item, setItem] = useState(generate(ItemGraph));
  console.log(item);

  return (
    <Box>
      <Field className="field" name="Name">
        {item.name}
      </Field>
      {item.proficiency ? (
        <Field className="field" name="Armor Proficiency">
          {item.proficiency}
        </Field>
      ) : null}
      {item.damageType && item.damage != null ? (
        <Field className="field" name="Damage">
          {item.damage} {item.damageType}
        </Field>
      ) : null}

      {item.attributes ? (
        <Field className="field" name="Modifiers">
          {item.attributes.map((attribute) => {
            if (attribute.damageType) {
              if (attribute.name === DamageType.SamePhysical) {
                return `+${attribute.value}`;
              }

              return `+${attribute.value} ${attribute.damageType} ${
                attribute.variant ?? "Damage"
              }`;
            }

            return `+${attribute.value} ${attribute.name} ${
              attribute.variant ? attribute.variant : ""
            }`;
          })}
        </Field>
      ) : null}

      <Button
        sx={{ marginTop: "8px" }}
        variant="contained"
        onClick={() => setItem(generate(ItemGraph))}
      >
        Generate
      </Button>
    </Box>
  );
}

export default Generator;
