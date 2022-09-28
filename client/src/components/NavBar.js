import { Link } from "react-router-dom";
import React from "react";

const NavigationBar = () => {
    return (
        <>
        <div className="navigation"> 
        <br></br>
            <Link to=""> Home Page</Link>
        <br></br>
        <br></br>
            <Link to="/species"> Species Information</Link>
        <br></br>
            {/* <Routes>
              <Route path='/species' element={<Species />}></Route>
          </Routes> */}
        </div>
        </>
    );
};

export default NavigationBar;