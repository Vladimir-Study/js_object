export function orderByPeriod(obj, sortOrder) {
  let returnLst = [];
  const temporaryLst = [];
  const keys = Object.keys(obj);
  keys.forEach((key) => {
    if (sortOrder.includes(key)) {
      returnLst.push({ key, value: obj[key] });
    } else {
      temporaryLst.push({ key, value: obj[key] });
    }
    return 0;
  });
  returnLst.sort((a, b) => {
    if (sortOrder.indexOf(a.key) > sortOrder.indexOf(b.key)) {
      return 1;
    }
    if (sortOrder.indexOf(a.key) < sortOrder.indexOf(b.key)) {
      return -1;
    }
    return 0;
  });
  temporaryLst.sort((a, b) => {
    if (a.key > b.key) {
      return 1;
    }
    if (a.key < b.key) {
      return -1;
    }
    return 0;
  });
  returnLst = [...returnLst, ...temporaryLst];
  return returnLst;
}
