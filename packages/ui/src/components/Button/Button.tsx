import { cva, VariantProps } from 'class-variance-authority';
import { ButtonOrLink, Props as ButtonOrLinkProps } from '../ButtonOrLink';

export const Button = ({ intent, fullWidth, variant, ...props }: Props) => {
  return (
    <ButtonOrLink className={buttonStyles({ intent, fullWidth, variant })} {...props} />
  );
}
const buttonStyles = cva(
  'flex items-center justify-center px-4 py-2 rounded font-medium focus:outline-none focus:ring-1 focus:ring-offset-white dark:focus:ring-offset-black focus:ring-offset-1 disabled:opacity-60 disabled:pointer-events-none hover:bg-opacity-80',
  {
    variants: {
      intent: {
        primary: '',
        secondary:
          'bg-blue-200 text-gray-900 dark:bg-brand-secondary-dark dark:hover:bg-brand-secondary-light dark:text-gray-100',
        danger: 'bg-red-500 text-white focus:ring-red-500',
      },
      variant: {
        outlined: 'border border-brand-primary-light dark:border-brand-primary-dark text-gray-700 dark:text-gray-300',
        filled: 'bg-brand-primary-light dark:bg-brand-primary-dark text-gray-700 dark:text-gray-300',
        text: 'border border-transparent',
      },
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      intent: 'primary',
      fullWidth: false,
      variant: 'filled',
    },
    compoundVariants: [{

    }]
  },
);

export interface Props
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}


