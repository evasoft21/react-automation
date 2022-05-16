import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import {Provider} from 'react-redux';


import store from './store'
import { BrowserRouter, Routes, Route } from "react-router-dom";


// import EmployersTable from "./components/Employee/EmployersTable"

// import PrintComponent from "./components/PrintComponent"

// import MyForm from './components/MyForm'

// import Profile from './components/Profile'


// import SimpleModal from "./Employee/components/demo"

export default function App() {
  return (
    <Provider store={store}>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* <Route index element={<EmployersTable />} />
          <Route path="employee" element={<EmployersTable />} />
          <Route path="print_leave" element={<MyForm />} />

          <Route path="employee111" element={<PrintComponent />} />

          <Route path="employer/:id" element={<Profile />} /> */}


        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>

  );
}

import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/employee">Employee</Link>
          </li>

          <li>
            <Link to="/print_leave">Print_Leave</Link>
          </li>


          <li>
            <Link to="/demo">Demo</Link>
          </li>


          <li>
            <Link to="/employer">Employee Profile</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

const Home = () => {
  return <h1>Home</h1>;
};


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}