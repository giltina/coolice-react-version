import logo from '../logo.png';
import '../App.css';
import Calculator from '../components/Calculator';
import Price from '../components/Price';
import Create from '../components/Create';
import Edit from '../components/Edit';
import Show from '../components/Show';

import React, { Component } from 'react'

export class Home extends Component {
    render() {
        return (
            <div className="site-wrapper">
        <div className="site-wrapper-inner">
          <div className="cover-container">	
            <div className="inner cover">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <img src={logo} className="img-responsive center-block logo" alt="Logo" />
                    
                    <ul className="nav nav-pills center-pills first">
                      <li role="presentation" data-toggle="modal" data-target="#myModal"><a href="#">PRODUCTS</a></li>
                      <li role="presentation" data-toggle="modal" data-target="#basicModal2"><a href="#">ABOUT US</a></li>
                      <li role="presentation" data-toggle="modal" data-target="#basicModal3" className="blink"><a href="#">ICE CALCULATOR</a></li>
                      <li role="presentation" data-toggle="modal" data-target="#basicModal4"><a href="#">CONTACT US</a></li>
                    </ul>
                    <ul className="nav nav-pills nav-stacked second">
                      <li role="presentation" data-toggle="modal" data-target="#myModal"><a href="#">PRODUCTS</a></li>
                      <li role="presentation" data-toggle="modal" data-target="#basicModal2"><a href="#">ABOUT US</a></li>
                      <li role="presentation" data-toggle="modal" data-target="#basicModal3" className="blink"><a href="#">ICE CALCULATOR</a></li>
                      <li role="presentation" data-toggle="modal" data-target="#basicModal4"><a href="#">CONTACT US</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*Modal 1 */}
              <div className="modal fade " id="myModal" tabIndex={-1} role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header modal-header-success">
                      <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                      <h4 className="modal-title" id="myModalLabel">PRODUCTS</h4>
                    </div>
                    <div className="modal-body text">
                      <p>Cool Ice is always pure,sparkling,easy to handle and perfectly shaped.<br />Our Ice is cylindrically shaped with a hole in the centre for the quickest and most efficient beverage cooling effect.</p>
                      <div className="row">
                        <div className="col-md-4">
                          <img src="images/25kg.png" />
                        </div>
                        <div className="col-md-4">
                          <img src="images/50.png" />
                        </div>
                        <div className="col-md-4">
                          <img src="images/80.png" />
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer modal-header-success">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
              {/*Modal 2 */}
              <div className="modal fade" id="basicModal2" tabIndex={-1} role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header modal-header-success ">
                      <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                      <h4 className="modal-title">ABOUT US</h4>
                    </div>
                    <div className="modal-body text">
                      <p>At Cool Ice we know and understand just how critical ice is to your needs. We have provided ice solutions for Zimbabwe and Zambia for over 11 years and continue to do so with vigour and passion in the industry.Cool Ice is your quality partner in ice and we will never disappoint. We have a 25 ton per day manufacturing facility in Harare. We manufacture and deliver countrywide on a Just in Time basis, ensuring a premium quality product each and every time.<br />We are largest Ice supplier in Zimbabwe to all major Supermarket chains, hotels, service stations, convenience shops, lodges, bars, restaurants, sausage manufacturers and hospitals. We also supply and deliver Ice for Weddings, Parties, Corporate and other Special events..</p>
                    </div>
                    <div className="modal-footer modal-header-success">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
              {/*Modal 3 */}
              <div className="modal fade" id="basicModal3" tabIndex={-1} role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header modal-header-success">
                      <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                      <h4 className="modal-title">ICE CALCULATOR</h4>
                    </div>
                    <div className="modal-body">
                    <h5>Enter The Required Units,Total Cost Willbe Generated Inclusive Of VAT</h5>
                      <Calculator />
                      <h3 style={{color: 'red'}}>CALL US NOW FOR AN ORDER !!</h3>
                      <h4>CELL: +263 772 685 936</h4>
                      <h4>LANDLINE: +263 8677 174 981</h4>
                      <h5>*Quoted prices are for Harare only</h5>
                    </div>
                    <div className="modal-footer modal-header-success">
                      <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
              {/*Modal 4 */}
              <div className="modal fade" id="basicModal4" tabIndex={-1} role="dialog" aria-labelledby="basicModal" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                  <div className="modal-content">
                    <div className="modal-header modal-header-success">
                      <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                      <h4 className="modal-title">CONTACT US</h4>
                    </div>
                    <div className="modal-body text">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="embed-responsive embed-responsive-4by3">
                            <iframe style={{border: 0}} className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3797.836724450838!2d31.125162114882947!3d-17.84628738780505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931bb818fe26093%3A0x70bba5e07945ef77!2sCool+Ice!5e0!3m2!1sen!2szw!4v1496227491035" allowFullScreen="allowfullscreen" width={600} height={450} frameBorder={0} />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <p>Factory 6 <br />248 Williams Way <br />Msasa Harare Zimbabwe</p>
                          <img src="images/callnow.png" className="pic" />
                          <p>+263 8677 174 981<br />+263 772 685 936</p>
                          <p>sales@coolice.co.zw</p>
                        </div>
                      </div>
                      <div className="modal-footer ">
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>      
            </div>     
          </div>
        </div>
      </div>
        )
    }
}

export default Home
