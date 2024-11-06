import { useEffect, useState } from "react";
import { NavLink, useLoaderData, useParams } from "react-router-dom";
import { Tabs, TabList, } from 'react-tabs';
import AllsigleCard from "./AllsigleCard";

const Categories = () => {



    const { category } = useParams([])
    const [data, setdata] = useState([])
    useEffect(() => {
        fetch('/Data.json')
            .then(res => res.json())
            .then(data => setdata(data))
    }, [])
    // console.log(data);

    const categoryData = useLoaderData()
    // console.log(data);
    // console.log(category)


    const [item, setitem] = useState([])

    useEffect(() => {
        if (category === 'All') {
            setitem(data)
        }
        else if (category) {
            const filteredByCategory = [...data].filter(
                item => item.category === category
            )
            setitem(filteredByCategory)
        }
        else {
            setitem(data.slice(0, 6))
        }

    }, [data, category])
    // console.log(item);



    // console.log(allData);

    //    let [selectedCategory, setSelectedCategory] = useState('All')

    //     // const filterData = selectedCategory ==='All'? allData : allData.filter(item => item.category === selectedCategory)
    //     // console.log(selectedCategory);


    //     console.log(filterData);





    return (
        <div className="w-[80%] gap-7 m-auto flex">

            <div className="w-[100%]">
                {/* categories */}
                <Tabs className={`flex flex-col lg:flex-row  gap-5`}>
                    <TabList className={`lg:w-[20%] flex flex-col gap-3 bg-white px-5 py-8 rounded-2xl text-black h-[480px]`}>
                        {/* <NavLink to={`/`} className={`hover:text-white bg-red-50 hover:bg-[#9538E2] hover:border-[#9538E2] border-2 text-center rounded-3xl font-semibold  py-2`}>All</NavLink> */}
                        {
                            categoryData.map(category => (
                                <NavLink to={`/category/${category.category}`} key={category.product_id
                                } className={`hover:text-white bg-red-50 hover:bg-[#9538E2] hover:border-[#9538E2] border-2 text-center rounded-3xl font-semibold  py-2`}>{category.category}</NavLink>
                            ))

                        }

                    </TabList>
                    <div className="w-[100%] gap-5 grid grid-cols-1 lg:grid-cols-3 bg-gray300">
                        {
                            item.length === 0 && <div className=" text-center mt-52 w-[500px] text-5xl font-semibold text-gray-400">No Items here</div> 
                        }

                        {
                            item.map(category => (
                                <AllsigleCard key={category.product_id} category={category}></AllsigleCard>
                            ))
                        }







                    </div>

                </Tabs>
            </div>


        </div>
    );
};

export default Categories;