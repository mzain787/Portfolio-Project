// // Sidebar.js
// "use client"
// import React, {useState, useRef, useEffect} from "react";
// import "./Sidebar.css"
// import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { faPlay , faArrowLeft, faTimes} from "@fortawesome/free-solid-svg-icons";
// import {
//   faFacebook,
//   faTwitter,
//   faInstagram,
//   faLinkedin,
// } from "@fortawesome/free-brands-svg-icons";
// import logo from "../../assets/images/logo.png"
// import sidebarimg1 from "../../assets/images/sidebar-img1.png"
// import sidebarimg2 from "../../assets/images/sidebar-img2.png"
// import sidebarimg3 from "../../assets/images/sidebar-img3.png"
// import sidebarimg4 from "../../assets/images/sidebar-img4.png"
// import sidebarimg5 from "../../assets/images/sidebar-img5.png"
// import sidebarimg6 from "../../assets/images/sidebar-img6.png"

// const Sidebar = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(false);
//   const sidebarRef = useRef(null);

//   const handleScrollDown = () => {
//     window.scrollBy(0, 300);
//   }

//   useEffect(() => {
//     // Function to close the sidebar when clicking outside
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setSidebarVisible(false);
//       }
//     };

//     // Add event listener when component mounts
//     document.addEventListener("mousedown", handleClickOutside);

//     // Remove event listener when component unmounts
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const toggleSidebar = () => {
//     setSidebarVisible(!sidebarVisible);
//   };

//   const closeSidebar = () => {
//     setSidebarVisible(false);
//   };
  
//   return (
//     <>
//       {/* Sidebar */}
//       <div className="sidebar text-white w-20 flex flex-col h-screen fixed z-50" style={{borderRight:"1px solid #494F55"}}>
//        <div className="sidebar-to-show">
//         {/* Hamburger Icon */}
//         <button className="sidebar-main-icon p-5 focus:outline-none mb-60" onClick={toggleSidebar}>
//           <svg
//             className="w-10 h-10"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M4 6h16M4 12h16m-7 6h7"
//             ></path>
//           </svg>
//         </button>
//         <div className="transform -rotate-90 p-2 cursor-pointer flex items-center mb-40">
//         <span className="text-black text-sm space-x-1 mr-2 bg-orange-300 w-5 h-5 rounded-full flex items-center justify-center">
//             <FontAwesomeIcon className="m-1 mx-2" icon={faPlay} />
//           </span>
//           <button className="whitespace-nowrap text-md font-semibold tracking-wide" style={{ color: "#534b7a"}}>
//             Watch My Profile
//           </button>
//         </div>
//         <div className="transform -rotate-90 p-2 cursor-pointer flex items-center">
//         <span className="text-orange-300 text-xl mr-2 flex items-center justify-center">
//             <FontAwesomeIcon icon={faArrowLeft} />
//           </span>
//           <button className="whitespace-nowrap text-md font-semibold tracking-wide" style={{ color: "#534b7a"}} onClick={handleScrollDown}>Scroll Down</button>
//         </div>
//         </div>
//         <div ref={sidebarRef} className={`sidebar-content flex flex-col items-center absolute h-screen p-8 ${sidebarVisible ? "sidebar-open" : "sidebar-close"}`}>
//          <div className="cross-icon absolute right-2 top-2 cursor-pointer" onClick={closeSidebar}>
//          <FontAwesomeIcon className="text-orange-300 text-2xl" icon={faTimes} />
//          </div>
//          <div className="sidebar-content-data">
//          <div className="brand-details mb-16">
//           <img src={logo.src} alt="logo" className="h-12 w-32 mb-16" />
//           <h3 className="text-purple-200 text-2xl mb-7 font-medium">Contact Me Today</h3>
//           <h4 className="text-orange-300 text-xl font-semibold">hi@crevidy.dom</h4>
//          </div>
//          <div className="meet-me-section gap-1 mb-16">
//           <h2 className="text-purple-200 tracking-wider text-sm font-bold mb-5">MEET ME</h2>
//           <h3 className="text-purple-200 tracking-widest text-base font-medium mb-5"> Suzy Suzy Queue 4455 Landing Lange, Louisville, KY 40018-1234</h3>
//           <div className="sidebar-images flex flex-wrap gap-2 items-center">
//           <img src={sidebarimg1.src} alt="sidebar-img" className="w-36"/>
//           <img src={sidebarimg2.src} alt="sidebar-img" className="w-36"/>
//           <img src={sidebarimg3.src} alt="sidebar-img"  className="w-36"/>
//           <img src={sidebarimg4.src} alt="sidebar-img"  className="w-36"/>
//           <img src={sidebarimg5.src} alt="sidebar-img"  className="w-36"/>
//           <img src={sidebarimg6.src} alt="sidebar-img"  className="w-36"/>
//           </div>
//          </div>
//          <div className="social-media-section">
//           <h2 className="text-base font-semibold tracking-widest text-purple-200 mb-6">FOLLOW ME</h2>
//           <div className="flex items-center">
//           <a href="#" className="text-white mx-2">
//             <FontAwesomeIcon
//               icon={faFacebook}
//               className="text-xl text-purple-200 hover:text-orange-300 "
//             />
//           </a>
//           <a href="#" className="text-white mx-2">
//             <FontAwesomeIcon
//               icon={faTwitter}
//               className="text-xl text-purple-200 hover:text-orange-300"
//             />
//           </a>
//           <a href="#" className="text-white mx-2">
//             <FontAwesomeIcon
//               icon={faInstagram}
//               className="text-xl text-purple-200 hover:text-orange-300"
//             />
//           </a>
//           <a href="#" className="text-white mx-2">
//             <FontAwesomeIcon
//               icon={faLinkedin}
//               className="text-xl text-purple-200 hover:text-orange-300"
//             />
//           </a>
//         </div>
//          </div>
//          </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Sidebar;





// Sidebar.js
"use client"
import React, {useState, useRef, useEffect} from "react";
import "./Sidebar.css"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css';
import { faPlay , faArrowLeft, faTimes} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../assets/images/logo.png"
import sidebarimg1 from "../../assets/images/sidebar-img1.png"
import sidebarimg2 from "../../assets/images/sidebar-img2.png"
import sidebarimg3 from "../../assets/images/sidebar-img3.png"
import sidebarimg4 from "../../assets/images/sidebar-img4.png"
import sidebarimg5 from "../../assets/images/sidebar-img5.png"
import sidebarimg6 from "../../assets/images/sidebar-img6.png"
import ProfileModal from "../Childcomps/ProfileModal/ProfileModal";

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const closeSidebar = () => {
    setSidebarVisible(false);
  };

  const openProfileModal = () => {
    setProfileModalOpen(true);
  };

  const closeProfileModal = () => {
    setProfileModalOpen(false);
  };


  const handleScrollDown = () => {
    window.scrollBy(0, 300);
  }

  useEffect(() => {
    // Function to close the sidebar when clicking outside
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebarVisible(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Sidebar */}
      <div className="sidebar text-white w-20 flex flex-col h-screen fixed z-50" style={{borderRight:"1px solid #494F55"}}>
       <div className="sidebar-to-show">
        {/* Hamburger Icon */}
        <button className="sidebar-main-icon p-5 focus:outline-none mb-60" onClick={toggleSidebar}>
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <div onClick={openProfileModal} className="transform -rotate-90 p-2 cursor-pointer flex items-center mb-40">
        <span className="text-black text-sm space-x-1 mr-2 bg-orange-300 w-5 h-5 rounded-full flex items-center justify-center">
            <FontAwesomeIcon className="m-1 mx-2" icon={faPlay}/>
          </span>
          <button  className="whitespace-nowrap text-md font-semibold tracking-wide" style={{ color: "#534b7a"}}>
            Watch My Profile
          </button>
        </div>
        <div onClick={handleScrollDown} className="transform -rotate-90 p-2 cursor-pointer flex items-center">
        <span className="text-orange-300 text-xl mr-2 flex items-center justify-center">
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
          <button className="whitespace-nowrap text-md font-semibold tracking-wide" style={{ color: "#534b7a"}}>Scroll Down</button>
        </div>
        </div>
        <div ref={sidebarRef} className={`sidebar-content flex flex-col items-center absolute h-screen p-8 ${sidebarVisible ? "sidebar-open" : "sidebar-close"}`}>
         <div className="cross-icon absolute right-2 top-2 cursor-pointer" onClick={closeSidebar}>
         <FontAwesomeIcon className="text-orange-300 text-2xl" icon={faTimes} />
         </div>
         <div className="sidebar-content-data">
         <div className="brand-details mb-16">
          <img src={logo.src} alt="logo" className="h-12 w-32 mb-16" />
          <h3 className="text-purple-200 text-2xl mb-7 font-medium">Contact Me Today</h3>
          <h4 className="text-orange-300 text-xl font-semibold">hi@crevidy.dom</h4>
         </div>
         <div className="meet-me-section gap-1 mb-16">
          <h2 className="text-purple-200 tracking-wider text-sm font-bold mb-5">MEET ME</h2>
          <h3 className="text-purple-200 tracking-widest text-base font-medium mb-5"> Suzy Suzy Queue 4455 Landing Lange, Louisville, KY 40018-1234</h3>
          <div className="sidebar-images flex flex-wrap gap-2 items-center">
          <img src={sidebarimg1.src} alt="sidebar-img" className="w-36"/>
          <img src={sidebarimg2.src} alt="sidebar-img" className="w-36"/>
          <img src={sidebarimg3.src} alt="sidebar-img"  className="w-36"/>
          <img src={sidebarimg4.src} alt="sidebar-img"  className="w-36"/>
          <img src={sidebarimg5.src} alt="sidebar-img"  className="w-36"/>
          <img src={sidebarimg6.src} alt="sidebar-img"  className="w-36"/>
          </div>
         </div>
         <div className="social-media-section">
          <h2 className="text-base font-semibold tracking-widest text-purple-200 mb-6">FOLLOW ME</h2>
          <div className="flex items-center">
          <a href="#" className="text-white mx-2">
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-xl text-purple-200 hover:text-orange-300 "
            />
          </a>
          <a href="#" className="text-white mx-2">
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-xl text-purple-200 hover:text-orange-300"
            />
          </a>
          <a href="#" className="text-white mx-2">
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-xl text-purple-200 hover:text-orange-300"
            />
          </a>
          <a href="#" className="text-white mx-2">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-xl text-purple-200 hover:text-orange-300"
            />
          </a>
        </div>
         </div>
         </div>
        </div>
      </div>
      <ProfileModal isOpen={profileModalOpen} closeModal={closeProfileModal} />
    </>
  );
};

export default Sidebar;





