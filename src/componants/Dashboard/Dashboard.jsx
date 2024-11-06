import { useEffect, useState } from 'react';
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { getStorageToCartList, removecartData } from '../../utils/localStoreg';
import Cart from './Cart';
import Content from '../Home/content';


const Dashboard = () => {
    const data = useLoaderData()


    const [cartlist, setcartList] = useState([])
    useEffect(() => {
        
        const storedcartList = getStorageToCartList()
        setcartList(storedcartList)
    }, [data])

    const handleRemovedata =(id)=>{
        removecartData(id)
        const storedcartList = getStorageToCartList()
        setcartList(storedcartList)
        
    }

    


    console.log(cartlist);
    return (
        <div>
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
                                    <p className='text-xl font-semibold'>Total Price : </p>
                                    <Link className='py-2 px-3 rounded-3xl border-[#9538E2] border text-[#9538E2]'>Sort by Price</Link>
                                    <Link className='py-2 px-3 rounded-3xl border-[#9538E2] border text-[#9538E2]'>Purchase</Link>
                                </div>
                            </div>


                        </div>

                        {
                            cartlist.map(cart => <Cart handleRemovedata={handleRemovedata} cart={cart}></Cart>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    {/* <h2>{wishlist.length}</h2> */} heart
                    <div className='mt-8 grid grid-cols-3 gap-8'>
                        {/* {
                        wishlist.map(book => <Card card={book}></Card>)
                    } */}
                    </div>


                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Dashboard;