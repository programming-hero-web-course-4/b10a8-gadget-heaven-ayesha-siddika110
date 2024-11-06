

const getStorageToCartList = ()=>{
    const storageListstr = localStorage.getItem('cart-list')
    if(storageListstr){
        const storageList = JSON.parse(storageListstr);
        return storageList;
    }
    else{
        return []
    }
}


const addToLocalStorage = (cart) => {
    const storageList = getStorageToCartList()
    const isExist = storageList.find(item=> item.product_id === cart.product_id)
    if(isExist){
        alert('id already axixst')
    }
    else{
        storageList.push(cart);
        const storageListstr = JSON.stringify(storageList);
        localStorage.setItem('cart-list', storageListstr);
        alert('success')
    }
}
const removecartData = id => {
    const olddata = getStorageToCartList()
    const remaining = olddata.filter(cart => cart.product_id != id)
    localStorage.setItem('cart-list', JSON.stringify(remaining))
    alert('Successfully Removed!')
  } 



//   wish list
const getStorageToWishList = ()=>{
    const storageListstr = localStorage.getItem('wish-list')
    if(storageListstr){
        const storageList = JSON.parse(storageListstr);
        return storageList;
    }
    else{
        return []
    }
}


const addWishListToLocalStorage = (cart) => {
    const storageList = getStorageToWishList()
    const isExist = storageList.find(item=> item.product_id === cart.product_id)
    if(isExist){
        alert('id already axixst')
    }
    else{
        storageList.push(cart);
        const storageListstr = JSON.stringify(storageList);
        localStorage.setItem('wish-list', storageListstr);
        alert('success')
    }
}
const removeWishListData = id => {
    const olddata = getStorageToWishList()
    const remaining = olddata.filter(cart => cart.product_id != id)
    localStorage.setItem('wish-list', JSON.stringify(remaining))
    alert('Successfully Removed!')
  } 

  

export {addToLocalStorage, getStorageToCartList, removecartData, getStorageToWishList, addWishListToLocalStorage, removeWishListData}