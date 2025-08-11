import React from "react";
import "./App.css";

import Mcode from "./components/Mcode";
import Productcard from "./components/Productcard";
import Wada from "./components/Wada";
import Wadafun from "./components/Wadafun";
import Watch from "./components/Watch";
import Event from "./components/Event";
import Parent from "./components/Parent";
import Functi from "./components/Functi";
import Conditional from "./components/Conditional";
import List from "./components/List";
import PeopleList from "./components/PeopleList";
import Parentlist from './components/Parentlist'
import Styleshet from './components/Styleshet'
import StatusCard from './components/StatusCard'
import LifecycleA from "./components/LifecycleA";
import General from "./components/General";
import Getdata from "./components/Getdata";
import Postdata from "./components/Postdata";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import About from "./page/About";
import Contact from "./page/Contact";
import Services from "./page/Services";
import Blog from "./page/Blog";
// This is the main App component that renders various components and pages
// It includes a list of students, product cards, and various other components
// It also sets up routing for different pages like Home, About, Contact, etc.
// The App component is the root component of the application and is rendered in index.js
// It imports various components and styles to create a cohesive user interface
// The App component is structured to display a list of students, product cards, and various other components
// It also sets up routing for different pages like Home, About, Contact, etc.
// The App component is the root component of the application and is rendered in index.js
// It imports various components and styles to create a cohesive user interface

function App() {
  return (
    <div className="App">
      <h1>This is the student in our class:</h1>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Mcode name="wada" sex="male" age={20}>
          <button>Wada koo</button>
        </Mcode>
        <Mcode name="tola" sex="male" age={20}>
          <button>Tolaa koo</button>
        </Mcode>

        <Mcode name="beka" sex="male" age={20}>
          
          <button>Beka koo</button>
        </Mcode>

      </div>

      <Wada />

      <Wadafun />

      <Watch />

      <h1>Available Products:</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Productcard
          name="iPhone XY98"
          image="https://via.placeholder.com/250x150?text=iPhone+14"
          description="iPhone with amazing camera and battery"
          price={999}
          instock={true}
        />

        <Productcard
          name="Samsung Galaxy S43"
          image="https://via.placeholder.com/250x150?text=Galaxy+S43"
          description="High-end Android phone with powerful performance"
          price={965}
          instock={false}
        />

        <Productcard
          name="Google Pixel 8"
          image="https://via.placeholder.com/250x150?text=Pixel+8"
          description="Smooth Android experience with latest updates"
          price={769}
          instock={true}
        />
        
      </div>
      <Event></Event>
      <Parent></Parent>
      <Functi></Functi>
      <Conditional></Conditional>
      <List></List>
      <PeopleList></PeopleList>
      <Parentlist></Parentlist>
      <Styleshet myclass={true}></Styleshet>
      <StatusCard></StatusCard>
      
      <LifecycleA></LifecycleA>
      
      <General></General>
      <Getdata></Getdata>
      <Postdata></Postdata>
      <Router>

        <div>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/services" element={<Services></Services>}></Route>
            <Route path="/blog" element={<Blog></Blog>}></Route>
          </Routes>
        </div>
      </Router> 

    </div>
  );
}

export default App;
