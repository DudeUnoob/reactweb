import React from 'react';
import Logo from '../../images/logo.svg';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';


const Navbar = () => {
return (
	<>
	<Nav>
		<NavLink to="/">
		<img src={Logo} alt='logo' />
		</NavLink>
		<Bars onClick={() => {
			alert('This function is still in development on mobile')
		}}/>

		<NavMenu>
		
		<NavLink to='/about' activestyle="true">
			About
		</NavLink>
		<NavLink to='/events' activestyle="true">
			Events
		</NavLink>
		<NavLink to='/annual' activestyle="true">
			Annual Report
		</NavLink>
		<NavLink to='/team' activestyle="true">
			Teams
		</NavLink>
		<NavLink to='/blogs' activestyle="true">
			Blogs
		</NavLink>
		<NavLink to='/sign-up' activestyle="true">
			Sign Up
		</NavLink>
		{/* Second Nav */}
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;