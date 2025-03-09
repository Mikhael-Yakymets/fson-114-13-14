export function addDataTolocalStorage(key, value) {
  const normalisetData = JSON.stringify(value);

  localStorage.setItem(key, normalisetData);
}

export function getDataFromLocalStorage(key) {
  const lsData = localStorage.getItem(key);

  return lsData === null ? undefined : JSON.parse(lsData);
}

export function clearDadaFromLocalStorage(key) {
  localStorage.removeItem(key);
}

function removeAllDataFromLocalStorage() {
  localStorage.clear();
}
