export default function hasValuesFromArray(setItems, arrItems) {
    return arrItems.every(element => setItems.has(element));
  }
  