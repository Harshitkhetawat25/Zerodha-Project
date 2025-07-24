import React, {useState} from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isprofileDrpdownOpen, setisProfileDropdownOpen] = useState(false);

  // This function handles the click event on a menu item
  const handleMenuClick = (index) => {
    // Update the state to reflect the currently selected menu item
    // 'index' is the position of the menu item that was clicked
    setSelectedMenu(index);
  }
  const handleProfileClick = (index) =>{
    setisProfileDropdownOpen(!isprofileDrpdownOpen);
    setSelectedMenu(index);
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          
          <li>
            <Link to="/" style={{textDecoration: 'none'}} onClick={() => handleMenuClick(0)}>
            <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>

          <li>
            <Link to="/orders" style={{textDecoration: 'none'}} onClick={() => handleMenuClick(2)}>
            <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
              Orders
            </p>
            </Link>
          </li>

          <li>
            <Link to="/holdings" style={{textDecoration: 'none'}} onClick={() => handleMenuClick(3)}>
            <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
              Holdings
            </p>
            </Link>
          </li>


          
          <li>
            <Link to="/positions" style={{textDecoration: 'none'}} onClick={() => handleMenuClick(4)}>
            <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
              Positions
            </p>
            </Link> 
          </li>
 
          <li>
            <Link to="/funds" style={{textDecoration: 'none'}} onClick={() => handleMenuClick(5)}>
            <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
              Funds
            </p>
            </Link>
          </li>

          <li>
            <Link to="/apps" style={{textDecoration: 'none'}} onClick={() => handleMenuClick}>
            <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
              Apps
            </p>
            </Link>
          </li>

        </ul>
        <hr />
        <div className="profile" onClick={() => handleProfileClick(7)}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );  
};

export default Menu;
