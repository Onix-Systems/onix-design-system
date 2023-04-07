export const cn = (...classes: Array<string | boolean | undefined>): string => {
  const stringArray = classes.reduce((acc: string[], item: string | boolean | undefined): string[] => {
    if (item && item !== true) {
      return [...acc, item];
    }
    return [...acc];
  }, []);
  return stringArray.join(' ');
};

export default { cn };
