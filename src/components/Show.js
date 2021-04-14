import React, { Component } from 'react';
import firebase from '../Firebase';
import { Link } from 'react-router-dom';

class Show extends Component {

  constructor(props) {
    super(props);
    this.state = {
      price: {},
      key: ''
    };
  }

  componentDidMount() {
    const ref = firebase.firestore().collection('prices').doc(this.props.match.params.id);
    ref.get().then((doc) => {
      if (doc.exists) {
        this.setState({
          price: doc.data(),
          key: doc.id,
          isLoading: false
        });
      } else {
        console.log("No such document!");
      }
    });
  }

  delete(id){
    firebase.firestore().collection('prices').doc(id).delete().then(() => {
      console.log("Document successfully deleted!");
      this.props.history.push("/")
    }).catch((error) => {
      console.error("Error removing document: ", error);
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
            <dl>
              <dt>2.5kg:</dt>
              <dd>${this.state.price.two}</dd>
              <dt>5kg:</dt>
              <dd>${this.state.price.five}</dd>
              <dt>8kg:</dt>
              <dd>${this.state.price.eight}</dd>
            </dl>
            <Link to={`/edit/${this.state.key}`} class="btn btn-success">Edit</Link>&nbsp;
          </div>
        </div>
</div>
</div>
      </div>
    );
  }
}

export default Show;