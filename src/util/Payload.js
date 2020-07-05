
export const hasData = (item) => {
  return item && Object.keys(item).length !== 0;
}

export const castPokemonResponse = (data) => {
  data.height.minimum = parseFloat(data.height.minimum.slice(0, data.height.minimum.lastIndexOf('m')));
  data.height.maximum = parseFloat(data.height.maximum.slice(0, data.height.maximum.lastIndexOf('m')));
  data.weight.minimum = parseFloat(data.weight.minimum.slice(0, data.weight.minimum.lastIndexOf('kg')));
  data.weight.maximum = parseFloat(data.weight.maximum.slice(0, data.weight.maximum.lastIndexOf('kg')));
  return data;
}

export const castPokemonPayload = (data) => {
  const backup = Object.assign({}, data);
  backup.height.minimum = backup.height.minimum + 'm';
  backup.height.maximum = backup.height.maximum + 'm';
  backup.weight.minimum = backup.weight.minimum + 'kg';
  backup.weight.maximum = backup.weight.maximum + 'kg';
  backup.active = true;
  backup.shown = true;
  return backup;
}

