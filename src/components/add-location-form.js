import React, { Component } from 'react';

export class AddLocationForm extends Component {
  handleSubmit(e) {
    e.preventDefault(e);
    console.log('submitted', this.props.position);
  }

  render() {
    return (
      <div>
        {' '}
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="button-group">
            <button>Submit</button>
            <button onClick={() => this.props.history.push('/deck')}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddLocationForm;
