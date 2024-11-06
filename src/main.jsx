import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Root from "./routes/root";
import Root from './componants/Root/Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './componants/Home/Home';
import Statistics from './componants/statistics/Statistics';
import Dashboard from './componants/Dashboard/Dashboard';
// import Category from './componants/Home/Category';
// import Allcards from './componants/Home/Allcards';
import Categories from './componants/Home/Categories';
import DetailsCategory from './componants/Home/DetailsCategory';
import Cart from './componants/Dashboard/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('../Category.json'),
        children: [
          {
            path: "/category/:category",
            element: <Categories></Categories>,
            loader : ()=> fetch('../Data.json')

            
          },
          // {
          //   path: "/categories",
          //   element: <Categories></Categories>,
          //   loader : ()=> fetch('../Data.json')
            
            
          // },
          

        ]
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: ()=>fetch('../Data.json'),
        

      },
      {
        path: "/details/:detailId",
        element: <DetailsCategory></DetailsCategory> ,
        loader: ()=>fetch('../Data.json')
      },
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
