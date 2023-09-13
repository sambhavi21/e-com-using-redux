import React, { useEffect } from 'react'
import SingleFeaturedProduct from './SingleFeaturedProduct'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuccessProducts } from './Redux/e-com-components/e-com-action';

export default function FeaturedProducts(props) {
    var Selected_category=useSelector((state)=>state.Selected_category)
    var products=useSelector((state=>state.products))
    var loading_product=useSelector((state=>state.loading_product))
    var error_product=useSelector((state=>state.error_product))
    var dispatch=useDispatch();
    useEffect(()=>{
      dispatch(fetchSuccessProducts());  
    },[]);
    if (loading_product){
      return(
        <h1>Loading.....</h1>
      )
        }
        else if(error_product){
          return(
          <h1>some  error is coming {error_product} </h1>
          )
        }else{
  return (
    <>
    {/* Products Start */}
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Featured Products</span>
      </h2>
      <div className="row px-xl-5">
         {products.filter(e=>e.category==Selected_category).map ((e,index)=>(<SingleFeaturedProduct key={index} product={e}/>))}
        
      </div>
    </div>
    {/* Products End */}
  </>
  
  )
        }
}
