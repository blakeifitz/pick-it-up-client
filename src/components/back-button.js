import React from 'react';

export default function BackButton(props) {
  return (
    <div className="back-button-component">
      <button onClick={() => props.history.goBack()} className="add-button">
        Back
      </button>
      {/* <h3 className="back-category-name">{props.category.title}</h3> */}
    </div>
  );
}
