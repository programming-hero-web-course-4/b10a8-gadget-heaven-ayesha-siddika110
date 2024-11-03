import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Root from "./routes/root";
import Root from './componants/Root/Root';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import Statistics from './componants/statistics/Statistics';
import Dashboard from './componants/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
