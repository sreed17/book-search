export function saveRecord(key: string, data: Record<string, any>) {
  const serializedData: string = JSON.stringify(data);
  if (!localStorage) throw new Error("No localstorage");
  localStorage.setItem(key, serializedData);
}

export function getRecord(key: string) {
  const serializedData = localStorage.getItem(key);
  if (!serializedData) return null;
  return JSON.parse(serializedData);
}

export function removeRecord(key: string) {
  localStorage.removeItem(key);
}

export function clearAllRecords() {
  localStorage.clear();
}
