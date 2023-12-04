function orderByProps(obj, order) {
  const result = [];

  for (const prop of order) {
    if (obj.hasOwnProperty(prop)) {
      result.push({ key: prop, value: obj[prop] });
      delete obj[prop];
    }
  }

  const sortedKeys = Object.keys(obj).sort();
  for (const key of sortedKeys) {
    result.push({ key, value: obj[key] });
  }

  return result;
}

function extractAttackInfo({ special }) {
  return special.map(({ id, name, description = 'Описание недоступно', icon }) => ({
    id,
    name,
    description,
    icon,
  }));
}

export { orderByProps, extractAttackInfo }
