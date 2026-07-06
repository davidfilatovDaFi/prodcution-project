import { classNames } from './classNames';

describe('className', () => {
  test('only main class', () => {
    expect(classNames('main')).toBe('main');
  });
  test('with additionals', () => {
    expect(classNames('main', {}, ['second'])).toBe('main second');
  });
  test('with mods', () => {
    expect(classNames(
      'main',
      { dark: true, scroll: true },
    )).toBe('main dark scroll');
  });
  test('with mods false', () => {
    expect(classNames('main', { dark: true, scroll: false })).toBe('main dark');
  });
  test('full className', () => {
    expect(classNames(
      'main',
      { dark: true },
      ['second'],
    )).toBe('main dark second');
  });
  test('with undefined', () => {
    expect(classNames('main', {}, [undefined])).toBe('main');
  });
});
