import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.ref = firebase.firestore().collection('prices');
    this.state = {
      two: '',
      five: '',
      eight: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { two, five, eight } = this.state;

    this.ref.add({
      two,
      five,
      eight
    }).then((docRef) => {
      this.setState({
        title: '',
        description: '',
        author: ''
      });
      this.props.history.push("/")
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    const { two, five, eight } = this.state;
    return (
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD PRICE
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/" class="btn btn-primary">Price List</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="title">2.5kg:</label>
                <input type="text" class="form-control" name="two" value={two} onChange={this.onChange} placeholder="2.5kg" />
              </div>
              <div class="form-group">
                <label for="description">5kg:</label>
                <input type="text" class="form-control" name="five" value={five} onChange={this.onChange} placeholder="5kg" />
              </div>
              <div class="form-group">
                <label for="author">8kg:</label>
                <input type="text" class="form-control" name="eight" value={eight} onChange={this.onChange} placeholder="8kg" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>

            
          </div>
        </div>
      </div>
    );
  }
}

export default Create;