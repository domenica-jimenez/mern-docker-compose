import { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    fontWeightSemiBold: number;
    body3: CSSProperties;
    subtitle3: CSSProperties;
  }
  interface TypographyVariantsOptions {
    fontWeightSemiBold: number;
    body3: CSSProperties;
    subtitle3: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    fontWeightSemiBold: true;
    body3: true;
    subtitle3: true;
  }
}

export interface IColor {
  [key: string]: string;
}
