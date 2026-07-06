type Mods = Record<string, string | boolean>;

export const classNames = (
  cls: string,
  mods: Mods = {},
  additional: (string | undefined)[] = [],
): string => [
  cls,
  ...Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([className]) => className),
  ...additional.filter(Boolean),
].join(' ');
