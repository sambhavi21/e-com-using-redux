export function getPriceAfterDiscount(price, disPercentage) {
    var p = price - price * (disPercentage / 100);
    return p.toFixed(2);
  }
  export function getPrecisionNumber(no, precision = 2) {
    return parseFloat(no).toFixed(precision);
  }
  // export function isProductIdInCart(cartItems, product_id) {
  //   for (let i = 0; i < cartItems.length; i++) {
  //     if (cartItems[i].product_id == product_id) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }
  // export function addProductInCart(cartItems, product) {
  //   for (let i = 0; i < cartItems.length; i++) {
  //     if (cartItems[i].product.id == product.id) {
  //       cartItems[i].quantity += 1;
  //       return;
  //     }
  //   }
  //   cartItems.push({ product: product, quantity: 1 });
  // }
  
  export function removeProductfromCart(cartItems, product_id) {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].product.id == product_id) {
        cartItems.splice(i, 1);
        return;
      }
    }
  }
  export function increaseQuantity(cartItems, product_id) {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].product.id == product_id) {
        cartItems[i].quantity += 1;
        return;
      }
    }
  }
  
  export function decreaseQuantity(cartItems, product_id) {
    for (let i = 0; i < cartItems.length; i++) {
      if (cartItems[i].product.id == product_id) {
        if (cartItems[i].quantity == 1) {
          cartItems.splice(i, 1);
        } else {
          cartItems[i].quantity -= 1;
        }
        return;
      }
    }
  }
  
  export function getTotalPriceOfCart(cartItems) {
    let price = 0.0;
    for (let i = 0; i < cartItems.length; i++) {
      price +=
        getPriceAfterDiscount(
          cartItems[i].product.price,
          cartItems[i].product.discountPercentage
        ) * cartItems[i].quantity;
    }
    return price;
  }
  export function getTotalDiscountOfCart(cartItems) {
    let discountPrice = 0.0;
    for (let i = 0; i < cartItems.length; i++) {
      discountPrice +=
        getPriceAfterDiscount(
          cartItems[i].product.price,
          cartItems[i].product.discountPercentage
        ) * cartItems[i].quantity;
    }
    return discountPrice;
  }
  
  export function getProductByProductId(allProducts, product_id) {
    for (let i = 0; i < allProducts.length; i++) {
      if (allProducts[i].id == product_id) {
        return allProducts[i];
      }
    }
  }
  export function getProductByCategory(allProducts, category = "all") {
    if (category == "all") return allProducts;
    var products = [];
    if (!allProducts) return undefined;
    for (let i = 0; i < allProducts.length; i++) {
      if (allProducts[i].category == category) {
        products.push(allProducts[i]);
      }
    }
    return products;
  }
  
  export function getPriceRangeArray(allProducts) {
    if (!allProducts) return undefined;
    var arr_price = allProducts.map((p) => parseInt(p.price));
    arr_price.sort((a, b) => a - b);
    let small = arr_price[0];
  
    let big = arr_price[arr_price.length - 1];
    let small_range =
      parseInt(small.toString()[0]) * 10 ** (small.toString().length - 1);
    let big_range =
      (parseInt(big.toString()[0]) + 1) * 10 ** (big.toString().length - 1);
    let range = parseInt(big_range / 5);
    let div_range =
      parseInt(range.toString()[0]) * 10 ** (range.toString().length - 1);
    var arr_range = [];
    let value = small_range;
    for (let i = 1; i <= 5; i++) {
      var count = 0;
      if (i == 1) {
        // count=allProducts.filter(product=>{
        //    return product.price%2==0
        // }).length;
        count = allProducts.filter((product) => {
          return product.price >= value && product.price <= div_range;
        }).length;
        arr_range.push({ start: value, end: div_range, count: count });
        value = div_range;
      } else if (i == 5) {
        count = allProducts.filter((product) => {
          return product.price >= value && product.price <= value + div_range;
        }).length;
        arr_range.push({ start: value, end: value + div_range, count: count });
      } else {
        count = allProducts.filter((product) => {
          return product.price >= value && product.price <= value + div_range;
        }).length;
        arr_range.push({ start: value, end: value + div_range, count: count });
        value += div_range;
      }
    }
  
    return arr_range;
  }
  export function getCategoryArray(allProducts, allCategory) {
    if (!allProducts) return undefined;
    if (!allCategory) return undefined;
    var arr_cat = [];
  
    for (let i = 0; i < allCategory.length; i++) {
      arr_cat.push({
        cat_name: allCategory[i],
        count: allProducts.filter((p) => p.category == allCategory[i]).length,
      });
    }
    return arr_cat;
  }
  export function getFilterByCatAndPrice(allProducts, price_category) {
    if (price_category.price.length == 0) {
      if (price_category.category.length == 0) {
        return [...allProducts];
      } else {
        let arr = [];
        for (let c of price_category.category) {
          arr = arr.concat(allProducts.filter((p) => p.category == c));
        }
        return arr;
      }
    } else if (price_category.category.length == 0) {
      let arr = [];
        for (let p_range of price_category.price) {
          arr = arr.concat(allProducts.filter((p) => ((p.price>=p_range.start)&&(p.price<=p_range.end))));
        }
        return arr;
    }
    else{
      let arr = [];
      for (let p_range of price_category.price) {
        arr = arr.concat(allProducts.filter((p) => ((p.price>=p_range.start)&&(p.price<=p_range.end))));
      }
      //let arr2 = [];
      for (let c of price_category.category) {
          arr = arr.concat(allProducts.filter((p) => p.category == c));
        }
      return arr;
    }
  }
  //    else{
  
  //    } {
  
  //    }
  //     else if((price_category.price.length==0) && (price_category.price.end==-1)){
  //         return allProducts.filter(p=>{
  //             return (p.category==price_category.category)
  //         });
  //    }
  //    else if((price_category.category=='all')){
  //     return   allProducts.filter(p=>{
  //         return ((p.price>=price_category.price.start)&& (p.price<=price_category.price.end))
  //     });
  //    }
  //    else{
  //     return   allProducts.filter(p=>{
  //         return ((p.category==price_category.category) && (p.price>=price_category.price.start)&& (p.price<=price_category.price.end))
  //     });
  
  //    }
  // }
  