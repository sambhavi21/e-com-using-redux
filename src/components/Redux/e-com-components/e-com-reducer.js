import { ADD_ITEN_INTO_CART,  DECREASE_ITEM_QUANTITY,  FAILED_CATEGORY, FAILED_PRODUCT, FETCH_REQUIEST_CATEGORY, FETCH_REQUIEST_PRODUCT, INCREASE_ITEM_QUANTITY, REMOVE_ITEM_QUANTIT, SUCCESS_CATEGORY, SUCCESS_PRODUCT,UPDATE_CATEGORY } from "./e-com-types"

const initialState={
    products:[],
    categories:[],
    cart_items:[],
    loading_category:false,
    error_category:'',
    Selected_category:'smartphones',
    loading_product:false,
    error_product:'',
}
const e_com_reducer=(state= initialState,action)=>{
    switch(action.type){
        // check categories....
        case  FETCH_REQUIEST_CATEGORY:{
            
          return {...state,loading_category:true} 
        }
        case  SUCCESS_CATEGORY:{
           return {...state,loading_category:false,categories:action.payload}
        }
        case  FAILED_CATEGORY:{
          return {...state,loading_category:false,error_category:action.payload}
        }
        case ADD_ITEN_INTO_CART:{
          var cart=[...state.cart_items]
          var itemExists=false;
           for( let item of cart){
            if(item.product.id==action.payload.id){
               item.quantity+=1
              itemExists=true;
              break; 
            }
           }
           if(itemExists==false){
            var item={product:action.payload,quantity:1}
            cart.push(item);
           }
          
          return {...state,cart_items:cart}
        }
        case   INCREASE_ITEM_QUANTITY:{
          var cart=[...state.cart_items]
          
          for( let item of cart){
           if(item.product.id==action.payload.id){
              item.quantity+=1
              break; 
           }
          }
          return {...state,cart_items:cart}
        }
        case   DECREASE_ITEM_QUANTITY:{
          var cart=[...state.cart_items] 
           
          for( let item of cart){
           if(item.product.id==action.payload.id){
              item.quantity-=1
               break; 
           }
          }
          return {...state,cart_items:cart}
        }
        case REMOVE_ITEM_QUANTIT:{
          var cart=[...state.cart_items] 
          for (let item of cart){
            if(item.product.id==action.payload.id){
              cart.splice(item,1)
            }
          }
          return {...state,cart_items:cart}
        }

        
        // check products.....
        // case  FETCH_REQUIEST_PRODUCT:{
            
        //   return {...state,cart_items:cart}
        //   }
          case  SUCCESS_PRODUCT:{
             return {...state,loading_product:false, products:action.payload}
          }
          case  FAILED_PRODUCT:{
            return {...state,loading_product:false,error_product:action.payload}
          }
         
          case  UPDATE_CATEGORY:{
            return {...state, Selected_category:action.payload}
          }
        default: 
        return state;
     }
}
export default e_com_reducer;