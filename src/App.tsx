import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import Sidebar from './Components/Sidebar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Components/Pages/ErrorPage';
import Dummy1 from './Components/Pages/Dummy1';
import Dummy2 from './Components/Pages/Dummy2';
import BasicDataTableExample from './Components/BasicDataTable/BasicDataTableExample';

const router = createBrowserRouter([
  {
    path: "",
    element: <Sidebar/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Dummy2/>,
      },
      {
        path: "datatablebasicexample",
        element: <BasicDataTableExample/>,
      },
      {
        path: "dummy1",
        element: <Dummy1/>,
      },
      {
        path: "dummy2",
        element: <Dummy2/>,
      },
    ],
  },
]);

function App() {
  
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
