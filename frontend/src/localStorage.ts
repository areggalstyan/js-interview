export const lsGetOrCompute = (key: string, computeDefaultValue: () => string): string => {
  const storedValue = localStorage.getItem(key);
  if (storedValue) {
    return storedValue;
  }
  const defaultValue = computeDefaultValue();
  localStorage.setItem(key, defaultValue);
  return defaultValue;
};

export const lsSet = (key: string, value: string) => {
  localStorage.setItem(key, value);
};
