import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../Firebase';

class Price extends Component {
  constructor(props) {
    super(props);
    this.ref = firebase.firestore().collection('prices');
    this.unsubscribe = null;
    this.state = {
      prices: []
    };
  }

  onCollectionUpdate = (querySnapshot) => {
    const prices = [];
    querySnapshot.forEach((doc) => {
      const { two, five, eight } = doc.data();
      prices.push({
        key: doc.id,
        doc, // DocumentSnapshot
        two,
        five,
        eight,
      });
    });
    this.setState({
      prices
   });
  }

  componentDidMount() {
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-md-offset-3">
        <div className="panel panel-default" style={{marginTop: '5%'}}>
        <div className="panel-heading">
         <div className="panel-title pull-left">
         PRICE LIST
         </div>
        <div className="panel-title pull-right"><button onClick={() => firebase.auth().signOut()}>Sign out</button></div>
        <div className="clearfix"></div>
    </div>
          <div className="panel-body">
            <h4><Link to="/create">Add Board</Link></h4>
            <table className="table">
              <thead>
                <tr>
                  <th>2.5kg</th>
                  <th>5kg</th>
                  <th>8kg</th>
                </tr>
              </thead>
              <tbody>
                
                {this.state.prices.map(price =>
                  <tr>
                    <td>$ {price.two}</td>
                    <td>$ {price.five}</td>
                    <td>$ {price.eight}</td>
                    <td><Link to={`/show/${price.key}`}><button type="button" class="btn btn-danger">Review Price</button></Link></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default Price;
