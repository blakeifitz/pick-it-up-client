export const getItemsForCategory = (items = [], category) => {
  return !category ? items : items.filter((item) => item.category === category);
};

export const getItem = (items = [], itemName) =>
  items.find((item) => item.name === itemName);

export const getLocation = (item = [], locations = []) => {
  return locations.find((location) => location.id === item.location);
};
