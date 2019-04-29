import React from 'react';
import Contact from './contact/contact.js';
import StartPage from './home/home.js'; 
import '../App.css';
import { Booking } from './booking/booking.js';
import AdminPage from './admin/admin.js';
import {
  Switch,
  BrowserRouter,
  Route
} from 'react-router-dom';

function App() {
  return(
     <div>
       <BrowserRouter>
        <Switch>
          <div>
              <Route path="/" component={StartPage} exact/>
              <Route path="/AdminPage" component={AdminPage} />
              <Route path="/Booking" component={Booking} />
              <Route path="/Contact" component={Contact} /> 
            </div>
          </Switch>
        </BrowserRouter>
      </div>
  );
}


export default App;