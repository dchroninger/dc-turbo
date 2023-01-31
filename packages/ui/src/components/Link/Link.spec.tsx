
import React from "react";
import {render} from '@testing-library/react';

import { Link, Props as LinkProps } from "./Link";

describe('Link with label', () => {
  let props: LinkProps;
  beforeEach(() => {
    props = {
      href: "#"
    };
  });

  test('should render primary link with label', () => {
    const label = "Primary";
    const {getByText, findByLabelText} = render(
      <Link label={label} intent={"primary"}{...props} />
    );

    const button = getByText(label);
    expect(button).toBeVisible();
    expect(findByLabelText(label)).toBeTruthy();
    expect(button).toHaveTextContent(label);
  });

  test('should render secondary link with label', () => {
    const label = "Secondary";
    const {getByText, findByLabelText} = render(
      <Link label={label} intent={"danger"}{...props} />
    );

    const button = getByText(label);
    expect(button).toBeVisible();
    expect(findByLabelText(label)).toBeTruthy();
    expect(button).toHaveTextContent(label);
  });

  test('should render danger link with label', () => {
    const label = "Danger";
    const {getByText, findByLabelText} = render(
      <Link label={label} intent={"danger"}{...props} />
    );

    const button = getByText(label);
    expect(button).toBeVisible();
    expect(findByLabelText(label)).toBeTruthy();
    expect(button).toHaveTextContent(label);
  });
});

describe('Link with children', () => {
  let props: LinkProps;
  beforeEach(() => {
    props = {
      href: "#"
    };
  });

  test('should render primary link', () => {
const children = "Primary";
    const {getByText} = render(
      <Link intent={"primary"}{...props}>{children}</Link>
    );

    const button = getByText(children);
    expect(button).toBeVisible();
    expect(button).toHaveTextContent(children);
  });

  test('should render secondary link', () => {
    const children = "Secondary";
    const {getByText} = render(
      <Link intent={"secondary"}{...props}>{children}</Link>
    );

    const button = getByText(children);
    expect(button).toBeVisible();
    expect(button).toHaveTextContent(children);
  });

  test('should render danger link', () => {
    const children = "Danger";
    const {getByText} = render(
      <Link intent={"danger"}{...props}>{children}</Link>
    );

    const button = getByText(children);
    expect(button).toBeVisible();
    expect(button).toHaveTextContent(children);
  });
});