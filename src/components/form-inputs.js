import React from 'react';
const FormInputs = (props) => {
  return props.items.map((val, i) => {
    let itemId = `item-${i}`,
      descId = `desc-${i}`,
      imgId = `img-${i}`;
    return (
      <div key={i}>
        <label htmlFor={itemId}>{`${i + 1}. Name: `}</label>
        <input
          type="text"
          name={itemId}
          data-id={i}
          id={itemId}
          defaultValue={props.items[i].name}
          className="name"
        />
        <label htmlFor={descId}>Description:</label>
        <input
          type="text"
          name={descId}
          data-id={i}
          id={descId}
          defaultValue={props.items[i].desc}
          className="desc"
        />
        <label htmlFor={imgId}>Choose an image for this item</label>
        <input
          type="file"
          name={imgId}
          data-id={i}
          id={imgId}
          defaultValue={props.items[i].desc}
          className="img"
        />
      </div>
    );
  });
};
export default FormInputs;
