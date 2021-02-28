export const getItemsForCategory = (items = [], category) => {
  return !category ? items : items.filter((item) => item.category === category);
};

export const getItem = (items = [], itemId) => {
  return items.find((item) => item.id.toString() === itemId);
};
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
export const getSliderData = (items) => {
  let sliderData = [];
  items.map((item) => sliderData.push(item.img_src));
  return sliderData;
};
