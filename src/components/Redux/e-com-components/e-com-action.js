import { ADD_ITEN_INTO_CART, DECREASE_ITEM_QUANTITY, FAILED_CATEGORY, FAILED_PRODUCT, FETCH_REQUIEST_CATEGORY, FETCH_REQUIEST_PRODUCT, INCREASE_ITEM_QUANTITY, REMOVE_ITEM_QUANTIT, SUCCESS_CATEGORY, SUCCESS_PRODUCT, UPDATE_CATEGORY} from "./e-com-types"
//CATEGORY....
const fetchCategory=()=>{
    return {type:FETCH_REQUIEST_CATEGORY}
 }
 const successCategory=(data)=>{
    return {type:SUCCESS_CATEGORY,payload:data}
 }
 const failedCategory=(error)=>{
    return {type:FAILED_CATEGORY,payload:error}
 }
export const fetchSuccessCatategory=()=>{
   return (dispatch)=>{
      dispatch(fetchCategory())
       
      
        var p=fetch('https://dummyjson.com/products/categories');
        p.then((response)=>{
          response.json().then(result=>{
                
               dispatch(successCategory(result))
          });
         }).catch(err=>{
           dispatch(failedCategory(err))
        });

      }
   }
  export const updateSelectedProducts=(category)=>{
    return {type:UPDATE_CATEGORY,payload:category}
   }
   // PRODUCT....
   export const fetchProducts=()=>{
    return {type:FETCH_REQUIEST_PRODUCT}
 }
export  const successProducts=(data)=>{
    return {type:SUCCESS_PRODUCT,payload:data}
 }
  export const failedProducts=(error)=>{
    return {type:FAILED_PRODUCT,payload:error}
 }
export const fetchSuccessProducts=()=>{
   return (dispatch)=>{
      dispatch(fetchProducts())
       
      
        var p=fetch('https://dummyjson.com/products?limit=100');
        p.then((response)=>{
          response.json().then(result=>{
                
               dispatch(successProducts(result.products))
          });
         }).catch(err=>{
           dispatch(failedProducts(err))
        });

      }
   }
   // Action for carts.....
   export const addItemIntoCart=(item)=>{
      return {type:ADD_ITEN_INTO_CART,payload:item}
   }
   export const IncreaseItemquantity=(product)=>{
      return {type:INCREASE_ITEM_QUANTITY,payload:product}
   }
   export const DecreaseItemquantity=(product)=>{
      return {type:DECREASE_ITEM_QUANTITY,payload:product}
   }
   export const RemoveItemquantity=(product)=>{
     return {type:REMOVE_ITEM_QUANTIT,payload:product}
   }