import { cva, VariantProps } from 'class-variance-authority';
import { ButtonOrLink, Props as ButtonOrLinkProps } from '../ButtonOrLink';

export const Link = ({ intent, href, ...props }: Props) => {
  return (
    <ButtonOrLink className={linkStyles({ intent })} href={href} {...props} />
  );
}
const linkStyles = cva(
  'flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none focus:ring-1 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80',
  {
    variants: {
      intent: {
        primary: 'text-blue-600 dark:text-blue-300',
        secondary: 'text-green-600 dark:text-green-300',
        danger: 'text-red-500 dark:text-red-300',
      },
    },
    defaultVariants: {
      intent: 'primary',
    }
  },
);

export interface Props
  extends ButtonOrLinkProps,
    VariantProps<typeof linkStyles> {}


