export default function groceriesList() {
  const dictionary = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  const map = new Map();
  /* no-prototype-builtins */
  for (const key in dictionary) {
    if (Object.prototype.hasOwnProperty.call(dictionary, 'key')) {
      map.set(key, dictionary[key]);
    }
  }
  return map;
}
