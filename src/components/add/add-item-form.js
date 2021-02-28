import React from 'react';
import AddLocation from './add-location';
import FormInputs from '../form-inputs';
import axios from 'axios';
import config from '../../config';
import TokenService from '../../services/token-service';

class AddForm extends React.Component {
  static default = {
    match: {
      params: {},
    },
  };
  state = {
    locationId: null,
    items: [{ name: '', desc: '', img: '' }],
    error: null,
  };
  uploadHandler = (data) => {
    const imgData = new FormData();
    imgData.append('file', data, data.name);
    axios.post(`${config.API_ENDPOINT}/image`, imgData).then((res) => {
      console.log('RESPONSE', res.data);
    });
  };
  setLocationId(location) {
    this.setState({ locationId: location });
  }
  //check to see if its nested in state and change proper value in state
  handleChange = (e) => {
    if (['name', 'desc'].includes(e.target.className)) {
      let items = [...this.state.items];
      items[e.target.dataset.id][e.target.className] = e.target.value;
      this.setState({ items });
    } else if (['img'].includes(e.target.className)) {
      let items = [...this.state.items];
      items[e.target.dataset.id][e.target.className] = e.target.value;
      this.uploadHandler(e.target.files[0]);
    } else {
      this.setState({ [e.target.name]: e.target.value });
    }
  };
  handleSubmit(e) {
    e.preventDefault(e);
    //category is the category user was in when pressing 'add item'

    const { category } = this.props.match.params;
    //if img url is empty or undefined set to 'no-image' default
    this.state.items.map((item) => {
      if (item.img === '' || !item.img) {
        item.img =
          'https://firebasestorage.googleapis.com/v0/b/pick-it-up-897da.appspot.com/o/images%2Fno-image.png?alt=media';
      }
      const newItem = {
        name: item.name,
        img_src:
          'https://firebasestorage.googleapis.com/v0/b/pick-it-up-897da.appspot.com/o/images%2F' +
          item.img.replace('C:\\fakepath\\', '') +
          '?alt=media',
        description: item.desc,
        category: category,
        location: parseFloat(this.state.locationId),
      };
      console.log('NEWITEM', newItem);
      fetch(`${config.API_ENDPOINT}/item`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${TokenService.getAuthToken()}`,
        },
        body: JSON.stringify(newItem),
      })
        .then((res) => {
          if (!res.ok) return res.json().then((e) => Promise.reject(e));
          return res.json();
        })
        .then((item) => {
          this.props.history.push(`/finds/${category}`);
        })
        .catch((res) => {
          this.setState({ error: res.error });
        });
    });
  }
  addItem = (e) => {
    e.preventDefault(e);
    this.setState((prevState) => ({
      items: [...prevState.items, { name: '', desc: '' }],
    }));
  };

  render() {
    let { items } = this.state;
    const { error } = this.state;
    return (
      <div>
        {this.state.locationId === null ? (
          <AddLocation
            history={this.props.history}
            locations={this.props.locations}
            setLocationId={(location) => {
              this.setLocationId(location);
            }}
          />
        ) : (
          <div>
            {' '}
            <form className="registration-content" onChange={this.handleChange}>
              <div role="alert">{error && <p>{error}</p>}</div>
              <button onClick={this.addItem}>Add another item</button>
              <FormInputs items={items} />
            </form>
            <button onClick={(e) => this.handleSubmit(e)}>Save</button>
          </div>
        )}
      </div>
    );
  }
}
export default AddForm;
