export enum RecipeUnits {
  dl = 'dl',
  ml = 'ml',
  l = 'l'
}

export const numToSymbol = (num?: number) => {
  switch (num) {
    case undefined:
      return ""
    case 0.25:
      return '¼';
    case 0.33:
      return '⅓';
    case 0.5:
      return '½';
    case 0.66:
      return '⅔';
    case 0.75:
      return '¾';
    default:
      return num;
  }
}