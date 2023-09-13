import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchSuccessCatategory, updateSelectedProducts } from './Redux/e-com-components/e-com-action';
import DisplayItemCountInCart from './DisplayItemCountInCart';
import { NavLink } from 'react-router-dom';
 
 

export default function NavBar(props) {
  var categories=useSelector((state=>state.categories))
  var loading_category=useSelector((state=>state.loading_category))
  var error_category=useSelector((state=>state.error_category))
  var dispatch=useDispatch();
    
    useEffect(()=>{
      dispatch(fetchSuccessCatategory());  
    },[]);
    function changeCategory(e){
      dispatch(updateSelectedProducts(e.target.value));
        // setSingleCategory(e.target.value);
    }
  if (loading_category){
return(
  <h1>Loading.....</h1>
)
  }
  else if(error_category){
    return(
    <h1>some  error is coming {error_category} </h1>
    )
  }
  else{

  return(
    <>
    {/* Navbar Start */}
    <div className="container-fluid bg-dark mb-30">
      <div className="row px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a
            className="btn d-flex align-items-center justify-content-between bg-primary w-100"
            data-toggle="collapse"
            href="#navbar-vertical"
            style={{ height: 65, padding: "0 30px" }}
          >
            <h6 className="text-dark m-0">
              <i className="fa fa-bars mr-2" />
              Categories
            </h6>
            <i className="fa fa-angle-down text-dark" />
          </a>
          <nav
            className=  "row px-xl-0 text-dark m-0 orange-background"
            data-toggle="collapse" 
            id="navbar-vertical"
            // style={{ width: "calc(100% - 30px)", zIndex: 999 }}
            style={{width: "calc(100% - 30px)", zIndex: 999 }}
          >
            <select onChange={changeCategory} className="navbar-nav w-100">
              
               {categories.map(e=>(<option><a href=""  className=" fa fa-angle-down text-dark">
                 {e}
             </a></option>))}  
               
              
            </select>
          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
            <a href="" className="text-decoration-none d-block d-lg-none">
              <span className="h1 text-lowercase text-dark bg-light px-2">
                e
              </span>
              <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                BAZAAR
              </span>
            </a>
            <button
              type="button"
              className="navbar-toggler"
              data-toggle="collapse"
              data-target="#navbarCollapse"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarCollapse"
            >
              <div className="navbar-nav mr-auto py-0">
                <NavLink to="/" className="nav-item nav-link active">
                  Home
                </NavLink>
                <NavLink to="/shop" className="nav-item nav-link">
                  Shop
                </NavLink>
                <NavLink to="/shopdetail" className="nav-item nav-link">
                  Shop Detail
                </NavLink>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Pages <i className="fa fa-angle-down mt-1" />
                  </a>
                  <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                    <NavLink to="/cart" className="dropdown-item">
                      Shopping Cart
                    </NavLink>
                    <NavLink to="/checkout" className="dropdown-item">
                      Checkout
                    </NavLink>
                  </div>
                </div>
                <NavLink to="/contact" className="nav-item nav-link">
                  Contact
                </NavLink>
              </div>
              <DisplayItemCountInCart/>
            </div>
          </nav>
        </div>
      </div>
    </div>
    {/* Navbar End */}
    {/* <FeaturedProducts category={singleCategory}/>  */}
  </>
  )
  
  }
}
