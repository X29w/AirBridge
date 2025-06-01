import type { FC, HTMLAttributes } from "react";

export const Div: FC<HTMLAttributes<HTMLDivElement>> = ({ ...props }) => (
  <div {...props} />
);

export const P: FC<HTMLAttributes<HTMLParagraphElement>> = ({ ...props }) => (
  <p {...props} />
);
