import React, { Component } from 'react'
import Price from './Price'
import firebase from '../Firebase';



export class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = { value1: '' };
        this.state = { value2: '' };
        this.state = { value3: '' };
        this.ref = firebase.firestore().collection('prices');
    this.unsubscribe = null;
    this.state = {
      prices: []
    };
      }
      mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting " + this.state.value);
      }
      nameChangeHandler = (event) => {
        this.setState({value1: event.target.value});
      }

      surnameChangeHandler = (event) => {
        this.setState({value2: event.target.value});
      }

      surname2ChangeHandler = (event) => {
        this.setState({value3: event.target.value});
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
<form className="form-horizontal" onSubmit={this.mySubmitHandler}>
<div class="form-group">
<label htmlFor="exampleInputEmail1" className="col-sm-2 col-md-offset-2">2.5kg</label>
<div class="col-sm-6">
  <input type="text" class="form-control" name="value1" onChange={this.nameChangeHandler} placeholder="Enter Number Of Units" />
</div>
</div>
<div class="form-group">
<label htmlFor="exampleInputEmail1" className="col-sm-2 col-md-offset-2">5kg</label>
<div class="col-sm-6">
  <input type="text" class="form-control" name="value2" onChange={this.surnameChangeHandler} placeholder="Enter Number Of Units" />
</div>
</div>
<div class="form-group">
<label htmlFor="exampleInputEmail1" className="col-sm-2 col-md-offset-2">8kg</label>
<div class="col-sm-6">
  <input type="text" class="form-control" name="value3" onChange={this.surname2ChangeHandler} placeholder="Enter Number Of Units" />
</div>
</div>
<div class="form-group">
<label for="exampleInputPassword1" class="col-sm-2 col-md-offset-2">TOTAL ($)</label>
<div class="col-sm-6">
<input type="text" class="form-control" id="answer" name="answer" value={this.state.prices.map(price => (((Number(this.state.value1) * price.two ) || 0 ) + ((Number(this.state.value2) * price.five) || 0 ) + ((Number(this.state.value3) * price.eight) || 0 )).toFixed(2))} />
</div>
</div>
</form>
           
        )
    }
}

export default Calculator
