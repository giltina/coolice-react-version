import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Edit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      key: '',
      two: '',
      five: '',
      eight: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('prices').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        const price = doc.data();
        this.setState({
          key: doc.id,
          two: price.two,
          five: price.five,
          eight: price.eight
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState({price:state});
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { two, five, eight } = this.state;

    const updateRef = firebase.firestore().collection('prices').doc(this.state.key);
    updateRef.set({
      two,
      five,
      eight
    }).then((docRef) => {
      this.setState({
        key: '',
        two: '',
        five: '',
        eight: ''
      });
      this.props.history.push("/show/"+this.props.match.params.id)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <div class="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-md-offset-3">
        <div class="panel panel-default" style={{marginTop: '5%'}}>
        <div className="panel-heading">
         <div className="panel-title pull-left">
         PRICE LIST
         </div>
        <div className="panel-title pull-right"><button onClick={() => firebase.auth().signOut()}>Sign out</button></div>
        <div className="clearfix"></div>
    </div>
          <div class="panel-body">
            <form onSubmit={this.onSubmit}>
            <div class="form-group">
                <label for="title">2.5kg:</label>
                <input type="text" class="form-control" name="two" value={this.state.two} onChange={this.onChange} placeholder="2.5kg" />
              </div>
              <div class="form-group">
                <label for="description">5kg:</label>
                <input type="text" class="form-control" name="five" value={this.state.five} onChange={this.onChange} placeholder="5kg" />
              </div>
              <div class="form-group">
                <label for="author">8kg:</label>
                <input type="text" class="form-control" name="eight" value={this.state.eight} onChange={this.onChange} placeholder="8kg" />
              </div>
              <button type="submit" class="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Edit;