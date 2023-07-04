export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }

  const setToList = [...set];
  const isStarted = [];

  setToList.forEach((element) => {
    if (element.startsWith(startString)) {
      isStarted.push(element.substring(startString.length));
    }
  });

  return isStarted.join('-');
}
