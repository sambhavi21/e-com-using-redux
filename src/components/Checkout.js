import React from 'react'
import Topbar from './Topbar'
import NavBar from './NavBar'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { getPriceAfterDiscount } from './utility'

function Checkout(props) {
    var cart=useSelector(state=>state.cart_items)

  return (
    <>
    <Topbar/>
    <NavBar/>
    <>
  {/* Checkout Start */}
  <div className="container-fluid">
    <div className="row px-xl-5">
      <div className="col-lg-8">
        <h5 className="section-title position-relative text-uppercase mb-3">
          <span className="bg-secondary pr-3">Billing Address</span>
        </h5>
        <div className="bg-light p-30 mb-5">
          <div className="row">
            <div className="col-md-6 form-group">
              <label>First Name</label>
              <input className="form-control" type="text" placeholder="John" />
            </div>
            <div className="col-md-6 form-group">
              <label>Last Name</label>
              <input className="form-control" type="text" placeholder="Doe" />
            </div>
            <div className="col-md-6 form-group">
              <label>E-mail</label>
              <input
                className="form-control"
                type="text"
                placeholder="example@email.com"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>Mobile No</label>
              <input
                className="form-control"
                type="text"
                placeholder="+123 456 789"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>Address Line 1</label>
              <input
                className="form-control"
                type="text"
                placeholder="123 Street"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>Address Line 2</label>
              <input
                className="form-control"
                type="text"
                placeholder="123 Street"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>Country</label>
              <select className="custom-select">
                <option selected="">United States</option>
                <option>Afghanistan</option>
                <option>Albania</option>
                <option>Algeria</option>
              </select>
            </div>
            <div className="col-md-6 form-group">
              <label>City</label>
              <input
                className="form-control"
                type="text"
                placeholder="New York"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>State</label>
              <input
                className="form-control"
                type="text"
                placeholder="New York"
              />
            </div>
            <div className="col-md-6 form-group">
              <label>ZIP Code</label>
              <input className="form-control" type="text" placeholder={123} />
            </div>
            <div className="col-md-12 form-group">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="newaccount"
                />
                <label className="custom-control-label" htmlFor="newaccount">
                  Create an account
                </label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="shipto"
                />
                <label
                  className="custom-control-label"
                  htmlFor="shipto"
                  data-toggle="collapse"
                  data-target="#shipping-address"
                >
                  Ship to different address
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="collapse mb-5" id="shipping-address">
          <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="bg-secondary pr-3">Shipping Address</span>
          </h5>
          <div className="bg-light p-30">
            <div className="row">
              <div className="col-md-6 form-group">
                <label>First Name</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="John"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Last Name</label>
                <input className="form-control" type="text" placeholder="Doe" />
              </div>
              <div className="col-md-6 form-group">
                <label>E-mail</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="example@email.com"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Mobile No</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="+123 456 789"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Address Line 1</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="123 Street"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Address Line 2</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="123 Street"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>Country</label>
                <select className="custom-select">
                  <option selected="">United States</option>
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label>City</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="New York"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>State</label>
                <input
                  className="form-control"
                  type="text"
                  placeholder="New York"
                />
              </div>
              <div className="col-md-6 form-group">
                <label>ZIP Code</label>
                <input className="form-control" type="text" placeholder={123} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <h5 className="section-title position-relative text-uppercase mb-3">
          <span className="bg-secondary pr-3">Order Total</span>
        </h5>
        {
            cart.map(item=>{
                return(
                    <div className="bg-light p-30 mb-5">
                    <div className="border-bottom">
                      <h6 className="mb-3">Products</h6>
                     
                      <div className="d-flex justify-content-between">
                        <p>{item.product.title}</p>
                        <p>${getPriceAfterDiscount(item.product.price,item.product.discountPercentage)}</p>
                      </div>
                      {/* <div className="d-flex justify-content-between">
                        <p>{item.product.title}</p>
                        <p>$150</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p> {item.product.title}</p>
                        <p>$150</p>
                      </div> */}
                    </div>
                    <div className="border-bottom pt-3 pb-2">
                      <div className="d-flex justify-content-between mb-3">
                        <h6>Subtotal</h6>
                        <h6>${getPriceAfterDiscount(item.product.price,item.product.discountPercentage)}</h6>
                      </div>
                      <div className="d-flex justify-content-between">
                        <h6 className="font-weight-medium">Shipping</h6>
                        <h6 className="font-weight-medium">$10</h6>
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="d-flex justify-content-between mt-2">
                        <h5>Total</h5>
                        <h5> ${getPriceAfterDiscount(item.product.price,item.product.discountPercentage)*item.quantity+10} </h5>
                      </div>
                    </div>
                  </div>

                )
            })
        }
       
        <div className="mb-5">
          <h5 className="section-title position-relative text-uppercase mb-3">
            <span className="bg-secondary pr-3">Payment</span>
          </h5>
          <div className="bg-light p-30">
            <div className="form-group">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="payment"
                  id="paypal"
                />
                <label className="custom-control-label" htmlFor="paypal">
                  Paypal
                </label>
              </div>
            </div>
            <div className="form-group">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="payment"
                  id="directcheck"
                />
                <label className="custom-control-label" htmlFor="directcheck">
                  Direct Check
                </label>
              </div>
            </div>
            <div className="form-group mb-4">
              <div className="custom-control custom-radio">
                <input
                  type="radio"
                  className="custom-control-input"
                  name="payment"
                  id="banktransfer"
                />
                <label className="custom-control-label" htmlFor="banktransfer">
                  Bank Transfer
                </label>
              </div>
            </div>
            <button className="btn btn-block btn-primary font-weight-bold py-3">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
  {/* Checkout End */}
</>

    </>
  )
}

export default Checkout
