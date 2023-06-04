export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return function (this: any, ...args: Parameters<T>) {
    const ctx = this;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(ctx, args), wait);
  };
};
