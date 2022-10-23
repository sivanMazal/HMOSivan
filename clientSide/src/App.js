import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router';

import AddCust from './component/AddCust';
import AllCusts from './component/AllCusts';
import Cust from './component/Cust';
import HomePage from './component/HomePage';
import UpdateCustomer from './component/UpdateCustomer';
import CoronaDetails from './component/CoronaDetails';
import NavBar from './component/NavBar';






function App() {
  return (
    <>
    <NavBar/>
    <HomePage/>
      {/* <AllCusts/> */}
      <Routes>
      <Route path="addCust" element={<AddCust />} />
      <Route path="cust/:id" element={<Cust />} />
      <Route path="updateCustomer/:id" element={<UpdateCustomer />} />
      <Route path="coronaDetails/:id" element={<CoronaDetails />} />

      <Route path="allCusts" element={<AllCusts />} />
      <Route path="homePage" element={<HomePage />} />
      <Route path="*" element={<HomePage />} />


      {/* <Route path="updateCustomer/:id" element={<UpdateCustomer />} /> */}

        {/* <Route path="list" element={<List />} /> 
        <Route path="homePage" element={<HomePage />} />
        <Route path="" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="advert" element={<Advert />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="note" element={<Note />} /> */}
        {/* <Route path="addParticipate" element={<AddParticipate />} />
        <Route path="allDetailsForEventManager" element={<AllDetailsForEventManager />} />
        <Route path="addItem" element={<AddItem />} />
        <Route path="addNote" element={<AddNote />} />
        <Route path="orderedEvents" element={<OrderedEvents />} />
        <Route path="createdEvents" element={<CreatedEvents />} />
        <Route path="myEvent" element={<MyEvent />} />
        <Route path="describeOfEvent" element={<DescribeOfEvent />} />
        <Route path="about" element={<About />} />
        <Route path="exit" element={<Exit />} /> */}


        {/* <Route path="aboutedit" element={<AboutEdit />} />
        <Route path="listActions" element={<ListActions />} />
        <Route path="managerHomePage" element={<ManagerHomePage />} />
        <Route path="eventApprovals" element={<EventApprovals />} /> */}
      </Routes>
    </>
  );
}

export default App;
