import React from 'react';
import { render, screen } from '@testing-library/react';
import Shadow from './Shadow';

describe('Shadow', () => {
  beforeEach(() => {
    render(<Shadow value="15px 15px 27px #e1e1e3" name="boxShadow" />);
  });

  it('render given Shadow', () => {
    const ShadowredElement = screen.getByTestId('box');
    const styles = window.getComputedStyle(ShadowredElement);

    expect(styles['box-shadow']).toBe('15px 15px 27px #e1e1e3');
  });

  it('render variable name', () => {
    const variableElement = screen.getByText('boxShadow');

    expect(variableElement.textContent).toBe('boxShadow');
  });

  it('render variable value', () => {
    const variableElement = screen.getByText('15px 15px 27px #e1e1e3');

    expect(variableElement.textContent).toBe('15px 15px 27px #e1e1e3');
  });
});