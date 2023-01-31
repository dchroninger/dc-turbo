
import React from "react";
import {render} from '@testing-library/react';

import { Button, Props as ButtonProps } from "./Button";

describe('Button', () => {
  let props: ButtonProps;
  beforeEach(() => {
    props = {
      intent: 'primary',
      variant: 'outlined'
    };
  });

  test('should render with Label', () => {
    const label = "With Label";
    const {getByText, findByLabelText} = render(<Button label={label}{...props} />);
    const button = getByText(label);
    expect(button).toBeVisible();
    expect(findByLabelText(label)).toBeTruthy();
    expect(button).toHaveTextContent(label);
  });

  test('should render with children', () => {
    const children = "With Children";
    const {getByText} = render(<Button {...props}>{children}</Button>);
    const button = getByText(children);
    expect(button).toBeVisible();
    expect(button).toHaveTextContent(children);
  });

});