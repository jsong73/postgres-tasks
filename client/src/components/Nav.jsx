import React, { useState } from "react";
// import Orbo from "../assets/Orbo.png"
import { Link } from "react-router-dom"
import Auth from "../../utils/auth"
import { IoMenu } from "react-icons/io5";
import SideNav from "./SideNav";

function Nav() {
  const [ openSideNav, setOpenSideNav] = useState(false)

  const loggedIn = Auth.loggedIn();

  const handleLogout = () => {
    Auth.logout();
  }

  const showSideNav = () => {
    setOpenSideNav(true)
  }

  return (

    <nav className="w-full flex relative justify-between items-center mx-auto px-8 h-20">
  { loggedIn ? (
    <div className="inline-flex">
            <div className="hidden md:block">
            <IoMenu  className="text-xl" onClick={showSideNav} />
            </div>
    </div>
) : ( 
<div></div>
)}

    <SideNav openSideNav={openSideNav} setOpenSideNav={setOpenSideNav}/>

    {/* <!-- login --> */} 
    <div className="flex-initial">
      <div className="flex justify-end items-center relative">
      <div className="flex mr-4 items-center">

        {loggedIn ?  (

          <button onClick={handleLogout} className="sans inline-block py-2 px-3 hover:bg-gray-200 rounded-full">
            Log out
          </button>
        ) : (
   
          <Link to="/register" className="sans inline-block py-2 px-3 hover:bg-gray-200 rounded-full">
            <div className="text-base font-normal flex items-center relative cursor-pointer whitespace-nowrap"> Get started </div>
          </Link>

          )}

          <div className="block relative">
            <button type="button" className="inline-block py-2 px-3 hover:bg-gray-200 rounded-full relative ">
              <div className="flex items-center h-5">
                <div>
                 <a href="https://github.com/jsong73/postgres-tasks" target="_blank">
                  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", height: "16px", width: "16px", fill: "currentcolor"}}><path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path></svg>
                  </a>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="block">
            <div className="inline relative">
                <button type="button" className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg">
                    <div className="pl-1">
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{ display: "block", fill: "none", height: "12px", width: "12px", stroke: "currentcolor", strokeWidth: "5.33333", overflow: "visible" }}
                        >
                            <g fill="none" fillRule="nonzero">
                                <path d="m2 16h28"></path>
                                <path d="m2 24h28"></path>
                                <path d="m2 8h28"></path>
                            </g>
                        </svg>
                    </div>

                    <div className="block flex-grow-0 flex-shrink-0 h-10 w-12 pl-5">
                        <svg
                            viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            role="presentation"
                            focusable="false"
                            style={{display: "block", height: "100%", width: "100%", fill: "currentcolor"}}
                        >
                            <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
      </div>
    </div>

</nav>

  );
}

export default Nav;
