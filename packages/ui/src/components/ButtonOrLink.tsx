import { ComponentProps } from 'react';
import Link from 'next/link';

type ButtonOrLinkProps = ComponentProps<'button'> & ComponentProps<'a'>;
export type Props = ButtonOrLinkProps & {label?: string};
// export interface Props extends ButtonOrLinkProps {}

/**
 * This is a base component that will render either a button or a link,
 * depending on the props that are passed to it. The link rendered will
 * also correctly get wrapped in a next/link component to ensure ideal
 * page-to-page transitions.
 */
export function ButtonOrLink({ href, label, ...props }: Props) {
  const isLink = typeof href !== 'undefined';
  const ButtonOrLink = isLink ? 'a' : 'button';

  let content = <ButtonOrLink {...props} />;

  if (isLink) {
    return <Link href={href}>{content}</Link>;
  }
  if(label) {
    return <ButtonOrLink {...props}>{label}</ButtonOrLink>;
  }

  return content;
}