export const APP_PREFIX = '@SQUIRDLE2_APP_';

export function getFromLocalStorageByKey(key: string): any | undefined {
  const fullKey = APP_PREFIX + key;
  const storagedValue = window.localStorage[fullKey];
  return storagedValue ? JSON.parse(storagedValue) : undefined;
}

export function setToLocalStorageWithKey(key: string, value: string) {
  const fullKey = APP_PREFIX + key;
  window.localStorage[fullKey] = value;
}

export function clearLocalStorage() {
  window.localStorage.clear();
}
