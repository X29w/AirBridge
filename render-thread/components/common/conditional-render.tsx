import { ReactNode, type FC } from "react";

interface ConditionalRenderProps {
  condition: boolean;

  children: ReactNode;

  fallback?: ReactNode;
}

const ConditionalRender: FC<ConditionalRenderProps> = ({
  condition = true,
  children,
  fallback,
}) => (condition ? children : fallback);

export default ConditionalRender;
