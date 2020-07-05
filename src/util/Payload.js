
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
  data.height.minimum = data.height.minimum + 'm';
  data.height.maximum = data.height.maximum + 'm';
  data.weight.minimum = data.weight.minimum + 'kg';
  data.weight.maximum = data.weight.maximum + 'kg';
  return data;
}

