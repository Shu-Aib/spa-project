// import React, { useEffect, useState } from "react";
// import { Link, Outlet } from "react-router-dom";
// import "./UserProfile.css";
// import { FaHeart, FaRegHeart } from "react-icons/fa";

// export default function UserProfile({ liked, likedItems, toggleHearts }) {
//   const [loading, setLoading] = useState([]);

//   useEffect(() => {
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//   }, []);
//   const displayLikeditems = likedItems.map((item) => {
//     return (
//       <div key={item.id}>
//         <div className="items-box">
//           <img src={item.imageSrc} alt={item.name} className="items" />
//           <p>{item.name}</p>
//           {liked[item.id] ? (
//             <FaHeart
//               className="heart-icon"
//               onClick={() => toggleHearts(item)}
//             />
//           ) : (
//             <FaRegHeart
//               className="heart-icon"
//               onClick={() => toggleHearts(item)}
//             />
//           )}
//         </div>
//       </div>
//     );
//   });
//   return (
//     <div>
//       <header className="user-header">
//         <div className="user-header__content">
//           <h1>USER PROFILE</h1>
//           <p>
//             <Link to={"/"} className="user-nav__headings">
//               Home
//             </Link>{" "}
//             /
//             <Link to={"/about"} className="user-nav__headings">
//               About
//             </Link>
//           </p>
//         </div>
//         <Outlet />
//       </header>
//       {loading ? (
//         <p className="loading-state">Loading...</p>
//       ) : (
//         <div className="items-container user-items__container ">
//           {displayLikeditems.length > 0 ? (
//             displayLikeditems
//           ) : (
//             <p>You do not have any liked items :(</p>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./UserProfile.css";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa"; // Import thumbs up icons

export default function UserProfile({ liked, likedItems, toggleHearts }) {
  const [loading, setLoading] = useState(true); // Default loading state should be true

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const displayLikeditems = likedItems.map((item) => {
    return (
      <div key={item.id}>
        <div className="items-box">
          <img src={item.imageSrc} alt={item.name} className="items" />
          <p>{item.name}</p>
          {liked[item.id] ? (
            <FaThumbsUp
              className="thumbs-up-icon"
              onClick={() => toggleHearts(item)}
            />
          ) : (
            <FaRegThumbsUp
              className="thumbs-up-icon"
              onClick={() => toggleHearts(item)}
            />
          )}
        </div>
      </div>
    );
  });

  return (
    <div>
      <header className="user-header">
        <div className="user-header__content">
          <h1>USER PROFILE</h1>
          <p>
            <Link to={"/"} className="user-nav__headings">
              Home
            </Link>{" "}
            /
            <Link to={"/about"} className="user-nav__headings">
              About
            </Link>
          </p>
        </div>
        <Outlet />
      </header>
      {loading ? (
        <p className="loading-state">Loading...</p>
      ) : (
        <div className="items-container user-items__container">
          {displayLikeditems.length > 0 ? (
            displayLikeditems
          ) : (
            <p>You do not have any liked items :(</p>
          )}
        </div>
      )}
    </div>
  );
}
