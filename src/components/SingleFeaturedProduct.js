import React from 'react'
 import {getPriceAfterDiscount,getPrecisionNumber} from './utility'
  
 import {useDispatch} from 'react-redux'
import { addItemIntoCart } from './Redux/e-com-components/e-com-action';
export default function SingleFeaturedProduct(props) {
  //  var cart_items=useSelector(state=>state.cart_items);
   var dispatch=useDispatch();
   function  addToCartHandler(product){
     dispatch(addItemIntoCart(product))
   }
  return (
    <>
    <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
    <div className="product-item bg-light mb-4">
      <div className="product-img position-relative overflow-hidden">
        <img className="img-fluid w-100" src= {props.product.thumbnail} alt="" />
        <div className="product-action">
          <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-shopping-cart" />
          </a>
          <a className="btn btn-outline-dark btn-square" href="">
            <i className="far fa-heart" />
          </a>
          <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-sync-alt" />
          </a>
          <a className="btn btn-outline-dark btn-square" href="">
            <i className="fa fa-search" />
          </a>
        </div>
      </div>
      <div className="text-center py-4">
        <a className="h6 text-decoration-none text-truncate" href="">
          {props.product.title}
        </a>
        <div className="d-flex align-items-center justify-content-center mt-2">
          <h5>${getPriceAfterDiscount(props.product.price,props.product.discountPercentage)}</h5>
          <h6 className="text-muted ml-2">
            <del>${getPrecisionNumber(props.product.price)}</del>
          </h6>
          <h6 className='ml-2'>{props.product.discountPercentage} % off</h6>
        </div>
        <div>
        <button onClick={()=>addToCartHandler(props.product)} className='btn btn-success mb-2'>Add to Cart</button>
        </div>
        <div className="d-flex align-items-center justify-content-center mb-1">
          <small className="fa fa-star text-primary mr-1" />
          <small className="fa fa-star text-primary mr-1" />
          <small className="fa fa-star text-primary mr-1" />
          <small className="fa fa-star text-primary mr-1" />
          <small className="fa fa-star text-primary mr-1" />
          <small>(99)</small>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
