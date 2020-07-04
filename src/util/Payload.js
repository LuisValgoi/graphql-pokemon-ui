
export const hasData = (item) => {
  return item && Object.keys(item).length !== 0;
}

export const castResponse = (data) => {
  data.height.minimum = parseFloat(data.height.minimum.slice(0, data.height.minimum.lastIndexOf('m')));
  data.height.maximum = parseFloat(data.height.maximum.slice(0, data.height.maximum.lastIndexOf('m')));
  data.weight.minimum = parseFloat(data.weight.minimum.slice(0, data.weight.minimum.lastIndexOf('kg')));
  data.weight.maximum = parseFloat(data.weight.maximum.slice(0, data.weight.maximum.lastIndexOf('kg')));
  debugger;
  return data;
}

export const castPayload = (data) => {
  debugger;

  return data;
}
