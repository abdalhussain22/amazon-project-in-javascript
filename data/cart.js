export const cart = [];

export function addToCart(productId,quantity){
    // Check if the product already exists in the cart
    let matchingItem;
    cart.forEach((item)=>{
      if(productId === item.productId){ 
        matchingItem = item;
      }
    });

    // Update quantity if item exists, otherwise add new item
    if(matchingItem){
      matchingItem.quantity = quantity;
    } else {
      cart.push({
        productId,
        quantity
      });
    }
}