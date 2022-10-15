export const APP_PREFIX = '@SQUIRDLE2_APP_';

export function getFromLocalStorageByKey(key: string): string | undefined {
  const fullKey = APP_PREFIX + key;
  return window.localStorage[fullKey] || undefined;
}

export function setToLocalStorageWithKey(key: string, value: string) {
  const fullKey = APP_PREFIX + key;
  window.localStorage[fullKey] = value;
}
