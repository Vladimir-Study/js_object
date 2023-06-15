export function specialCharacters(obj) {
  const { special } = obj;
  const keys = Object.keys(special);
  keys.forEach((key) => {
    if (special[key].description === undefined) {
      special[key].description = 'Описание недоступно';
    }
  });
  return special;
}
