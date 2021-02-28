export const getItemsForCategory = (items = [], category) => {
  return !category ? items : items.filter((item) => item.category === category);
};

export const getItem = (items = [], itemName) =>
  items.find((item) => item.name === itemName);

export const getLocation = (item = [], locations = []) => {
  return locations.find((location) => location.id === item.location);
};

export const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(function (word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(' ');
};
