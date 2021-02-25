import React from 'react';
import AddLocation from './add-location';
import FormInputs from '../form-inputs';
import axios from 'axios';

class AddForm extends React.Component {
  state = {
    location: null,
    items: [{ name: '', desc: '', img: '' }],
  };
  uploadHandler = (data) => {
    const imgData = new FormData();
    imgData.append('file', data, data.name);
    axios.post('http://localhost:8000/image', imgData).then((res) => {
      console.log('RESPONSE', res.data);
    });
  };

  //check to see if its nested in state and change proper value in state
  handleChange = (e) => {
    if (['name', 'desc'].includes(e.target.className)) {
      let items = [...this.state.items];
      items[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      this.setState({ items });
    } else if (['img'].includes(e.target.className)) {
      let items = [...this.state.items];
      items[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      this.uploadHandler(e.target.files[0]);
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };

  addItem = (e) => {
    e.preventDefault(e);
    this.setState((prevState) => ({
      items: [...prevState.items, { name: '', desc: '' }],
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.items, 'SUBMITTED');
  };
  handleLocation = (location) => {
    console.log('LOCATION SUBMITTED', location);
    this.setState({ location: location });
  };
  render() {
    let { items } = this.state;
    return (
      <div>
        {this.state.location === null ? (
          <AddLocation
            locations={this.props.locations}
            handleLocation={(location) => {
              this.handleLocation(location);
            }}
          />
        ) : (
          <div>
            {' '}
            <form onChange={this.handleChange}>
              <button onClick={this.addItem}>Add another item</button>
              <FormInputs items={items} />
            </form>
            <button onClick={this.handleSubmit}>Save</button>
          </div>
        )}
      </div>
    );
  }
}
export default AddForm;
