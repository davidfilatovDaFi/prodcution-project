type Mods = Record<string, string | boolean>

export const classNames = (cls: string, mods: Mods = {}, additional: (string | undefined)[] = []): string => [cls, Object.entries(mods).filter(([className, value]) => value).map(([className, value]) => className), ...additional.filter((add) => Boolean(add))].join(' ');
