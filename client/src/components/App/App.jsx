import React from 'react';
import Header from '../Header/Header';
import SideNavBar from '../SideNavBar/SideNavBar';
import AdminProduct from '../AdminProduct/AdminProduct';
import './App.scss';

function App() {
  return (
    <div className="app">
      {/* <div style={{background: 'green', height: '50px'}}>
      </div> */}

      <header className="App-header">
        <Header />
      </header>

      
      <main>
        <div className="sidebar">
          <SideNavBar />
        </div>
        <div className="content">
          <AdminProduct />
        </div>
      </main>

      <footer>
        <div>
          [FOOTER]
        </div>
      </footer>
    </div>
  );
}

export default App;
