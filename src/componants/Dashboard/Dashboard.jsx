import { useEffect, useState } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getStorageToCartList, getStorageToWishList, removecartData, removeWishListData } from '../../utils/localStoreg';
import Cart from './Cart';
import Content from '../Home/content';
import CartWish from './cartWish';
import grpImg from '../../assets/Group.png'
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const Dashboard = () => {
    const data = useLoaderData()
    const navigate = useNavigate();
    useEffect(() => {
        document.title = 'Dashboard - Gadget Heaven';
      }, []);
     const goHome =()=>{
        navigate('/')
     }


    const [cartlist, setcartList] = useState([])
    useEffect(() => {

        const storedcartList = getStorageToCartList()
        setcartList(storedcartList)
    }, [data])
    const [cartlistp, setcartListp] = useState(0)
    useEffect(() => {
        const totalPrice = cartlist.reduce((sum, item) => sum + item.price, 0);
        setcartListp(totalPrice)

    }, [cartlist])
    // const [sort, setSort] = useState(data)

    // const handleSort = () => {
    //     const sortData = [...data].sort((a, b) => a.price - b.price)
    //     setSort(sortData)
    // }


    const [wishlist, setwishList] = useState([])
    useEffect(() => {

        const storedwishList = getStorageToWishList()
        setwishList(storedwishList)
    }, [data])

    const handleRemovedata = (id) => {
        removecartData(id)
        const storedcartList = getStorageToCartList()
        setcartList(storedcartList)

    }
    const handleWishListRemovedata = (id) => {
        removeWishListData(id)
        const storedwishList = getStorageToWishList()
        setwishList(storedwishList)

    }

    const handlePurchase = () => {
        // alert('data removed')
        // eslint-disable-next-line no-undef
        my_modal_1.showModal()
        localStorage.clear()
    }





    console.log(cartlist);
    return (
        <div>
            <Helmet>
                <title>Statistics - Gadget Heaven</title>
            </Helmet>
            <Tabs className={` m-auto`}>
                <TabList className={`bg-[#9538E2] space-y-5 py-14`}>
                    <Content h={`Dashboard`} p={`Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!`}></Content>

                    <div className='flex justify-center space-x-4'>

                        <Tab><Link className={`border-2 py-2 text-white rounded-3xl px-4 hover:bg-white hover:text-black`}>Read List</Link></Tab>
                        <Tab><Link className={`border-2 py-2 text-white rounded-3xl px-4 hover:bg-white hover:text-black`}>Wish List</Link></Tab>
                    </div>
                </TabList>

                <TabPanel>
                    <h2></h2>
                    <div className='mt-8 grid grid-cols-1 gap-8'>
                        <div className='w-[80%] m-auto'>
                            <div className='flex justify-between'>
                                <h1 className=' text-2xl'>Carts</h1>
                                <div className='space-x-4 flex items-center'>
                                    <p className='text-xl font-semibold'>Total Price : {cartlistp}</p>
                                    <NavLink className='py-2 px-3 rounded-3xl border-[#9538E2] border text-[#9538E2]' >Sort by Price</NavLink>
                                    <NavLink className='py-2 px-3 rounded-3xl border-[#9538E2] border text-[#9538E2]' onClick={handlePurchase}>Purchase</NavLink>
                                </div>
                            </div>


                        </div>

                        {
                            // eslint-disable-next-line react/jsx-key
                            cartlist.map(cart => <Cart handleRemovedata={handleRemovedata} cart={cart}></Cart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>

                    <div className='mt-8 grid grid-cols-1 gap-8'>
                        {
                            // eslint-disable-next-line react/jsx-key
                            wishlist.map(cart => <CartWish handleWishListRemovedata={handleWishListRemovedata} cart={cart}></CartWish>)
                        }
                    </div>


                </TabPanel>
            </Tabs>
            
            <dialog id="my_modal_1" className="modal rounded-2xl">
                <div className="modal-box flex flex-col justify-center items-center space-y-4 w-[450px] py-6 rounded-xl">
                    <img className='m-auto' src={grpImg} alt="" />
                    <h3 className="font-bold text-xl">Payment Successfull</h3>
                    <p className=" text-gray-500">thanks for purchasing</p>
                    <p className=" text-gray-500">total price : {cartlistp}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            
                            {/* if there is a button in form, it will close the modal */}
                            <button onClick={goHome}  className=" bg-[#9538E2] text-white py-2 px-5 rounded-3xl text">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Dashboard;