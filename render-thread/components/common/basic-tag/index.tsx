import type { DetailedHTMLProps, FC, HTMLAttributes } from "react";

export const Div: FC<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ ...props }) => <div {...props} />;

export const P: FC<HTMLAttributes<HTMLParagraphElement>> = ({ ...props }) => (
  <p {...props} />
);
