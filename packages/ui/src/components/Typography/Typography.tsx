import { cva, VariantProps } from 'class-variance-authority';
import type { ReactNode } from "react";

export const Typography = ({ intent, children, ...props }: Props) => {
  return (
    <span className={typographyStyles({ intent })}  {...props}>{children}</span>
  );
}

const typographyStyles = cva(undefined,
  {
    variants: {
      intent: {
        text: 'text-black dark:text-gray-100',
        muted: 'text-gray-500 dark:text-gray-400',
        primary: 'text-blue-600 dark:text-blue-300',
        secondary: 'text-green-600 dark:text-green-300',
        danger: 'text-red-500 dark:text-red-300',
      },
    },
    defaultVariants: {
      intent: 'text',
    }
  },
);

type TypographyProps = VariantProps<typeof typographyStyles> & {children?: ReactNode};
export interface Props
  extends TypographyProps {}


