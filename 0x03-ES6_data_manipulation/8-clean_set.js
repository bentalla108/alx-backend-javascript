export default function cleanSet(set, startString) {
  if (!startString || !startString.length) {
    return '';
  }

  const isStarted = [];

  [...set].forEach((element) => {
    if (element && element.startsWith(startString)) {
      isStarted.push(element
        .substring(startString.length));
    }
  });

  return isStarted.join('-');
}
