type Mods = Record<string, string | boolean>

export const classNames = (cls: string, mods: Mods, additional: string[]): string => {
  return [cls, Object.entries(mods).filter(([className, value]) => value).map(([className, value]) => className), ...additional].join(' ')
}