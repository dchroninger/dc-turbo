
import React from "react";
import {render} from '@testing-library/react';

import { Button, Props as ButtonProps } from "./Button";

describe('Button', () => {
  let props: ButtonProps;
  beforeEach(() => {
    props = {
      intent: 'primary',
      label: 'Placeholder',
      variant: 'outlined'
    };
  });

  test('should render', () => {
    const {getByText} = render(<Button {...props} />);
    const label = getByText(props.label!);
    expect(label).toBeVisible();
  });

});