import React, { useState } from 'react';
import "../css/main.css"
import { Outlet } from 'react-router-dom';


const ResourceLayout = ()=>{

    return(
    <div id="container">
      <div id="wrapper">
        <header>
          <main>
            <nav>
              <ul>
                <li key="html">
                  <a href="html" >HTML</a>
                </li>
                <li key="css">
                  <a href="css">CSS</a>
                </li>
                <li key="javascript">
                  <a href="javascript">JAVASCRIPT</a>
                </li>
                <li key="react">
                  <a href="react">REACT</a>
                </li>
                <li key="sanity">
                  <a href="sanity">SANITY AND HEADLESS CMS</a>
                </li>
              </ul>
            </nav>

            <div id="content-area">
              <Outlet />
             
            </div>
          </main>
        </header>
      </div>
    </div>
    )
}


export default ResourceLayout;