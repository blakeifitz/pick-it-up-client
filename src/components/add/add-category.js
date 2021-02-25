import React, { Component } from 'react';

export class AddCategory extends Component {
  render() {
    return (
      <section className="add-category">
        <h2>Create a folder</h2>
        <form>
          <div className="field">
            <label htmlFor="category-name-input">Name</label>
            <input type="text" id="category-name-input" />
          </div>
          <div className="buttons">
            <button type="submit">Add folder</button>
          </div>
        </form>
      </section>
    );
  }
}

export default AddCategory;
