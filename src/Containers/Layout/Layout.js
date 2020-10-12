import React, { useState } from 'react';

// CSS
import Styles from './Layout.module.css';

// COMPONENTS
import Toolbar from '../../Components/Toolbar/Toolbar';
import Sidedrawer from '../../Components/Sidedrawer/Sidedrawer';
import Backdrop from '../../Elements/Backdrop/Backdrop';

// SECTIONS
import Hero from '../../Components/Hero/Hero';
import About from '../../Components/About/About';
import Projects from '../../Components/Projects/Projects';
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';

const Layout = props => {

  const [isShowSidebar, toggleSidebar] = useState(false);

  const toggleSidedrawerHandler = () => {
    console.log("toggle");
    toggleSidebar(!isShowSidebar);
  };

  var sideDrawerJSX = null;
  var backDropJSX = null;
  if (isShowSidebar) {
    backDropJSX = <Backdrop
      toggleSideDrawer={toggleSidedrawerHandler} />
    sideDrawerJSX =
      <Sidedrawer
        NavItemsStyle={Styles.SidedrawerNavitems}
        NavItemStyle={Styles.SidedrawerNavItem}
        closeSidedrawer={toggleSidedrawerHandler} />
  }


  return (
    <div>
      <Toolbar
        NavItemsStyle={Styles.ToolbarNavitems}
        toggleSideDrawer={toggleSidedrawerHandler} />
      {backDropJSX}
      {sideDrawerJSX}

      <Hero />


      <About />



      <Projects />



      <Contact />

      <Footer />

    </div>
  )
}

export default Layout;