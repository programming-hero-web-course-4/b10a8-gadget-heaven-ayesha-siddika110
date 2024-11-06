/* eslint-disable react-hooks/rules-of-hooks */
import { useLoaderData } from 'react-router-dom';
import React, { PureComponent } from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

const data = [
    {
      product_id: "P1001",
      product_title: "Dell XPS 13 Laptop",
      price: 1299.99,
    },
    {
      product_id: "P1002",
      product_title: "HP Spectre x360 Laptop",
      price: 1499.99,
    },
    {
      product_id: "P1003",
      product_title: "Samsung Galaxy S23 Ultra",
      price: 1199.99,
    },
    {
      product_id: "P1004",
      product_title: "iPhone 15 Pro Max",
      price: 1599.99,
    },
    {
      product_id: "P1005",
      product_title: "Apple AirPods Pro 2",
      price: 249.99,
    },
    {
      product_id: "P1006",
      product_title: "Samsung Galaxy Buds Pro",
      price: 199.99,
    },
    {
      product_id: "P1007",
      product_title: "Garmin Fenix 7 Smartwatch",
      price: 699.99,
    },
    {
      product_id: "P1008",
      product_title: "Apple Watch Ultra",
      price: 799.99,
    },
    {
      product_id: "P1009",
      product_title: "MacBook Pro 16-inch (M2)",
      price: 2399.99,
    },
    {
      product_id: "P1010",
      product_title: "MacBook Air M2 (2023)",
      price: 1299.99,
    }
  ];
  
  



const Statistics = () => {
    return (
        <div>
            <div style={{ width: '80%', margin: 'auto', backgroundColor: 'white',marginBottom: '50px',marginTop: '50px', height: 400 }}>
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={data}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="product_title" scale="band" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="price" fill="#c97aee" stroke="#8518b8" />
            <Bar dataKey="price" barSize={20} fill="#9c23d4" />
            <Line type="monotone" dataKey="uv" stroke="#ff7300" />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
      <h1 className='bg-[#8518b8]'></h1>
            
            
        </div>
    );
};

export default Statistics;