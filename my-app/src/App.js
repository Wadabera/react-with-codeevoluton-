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

    </div>
  );
}

export default App;
