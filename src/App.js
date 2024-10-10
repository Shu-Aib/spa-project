import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import UserProfile from "./components/UserProfile/UserProfile";
import BMW from "./components/Home/BMW";
import AUDI from "./components/Home/AUDI";
import { useState } from "react";


function App() {
  const [liked, setLiked] = useState([]); // Initialize `liked` state with an empty object
  const [addLikedItems, setAddLikedItems] = useState([]); // Initialize `likedItems` state with an empty array

  function toggleHearts(item) {
    const updatedLiked = {...liked }; // Create a shallow copy of `liked`
    updatedLiked[item.id] = !updatedLiked[item.id]; // Toggle the value of the item
    setLiked(updatedLiked); // Update `liked` state with the new value

    if (updatedLiked[item.id]) {
      setAddLikedItems((prevLikedItems) => [...prevLikedItems, item]);// Add the item to `likedItems`
    } else {
      setAddLikedItems((prevLikedItems) =>
        prevLikedItems.filter((likedItem) => likedItem.id !== item.id)
      );
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />}>
          <Route path="bmw" element={<BMW liked={liked} toggleHearts={toggleHearts}/>} />
          <Route path="audi" element={<AUDI liked={liked} toggleHearts={toggleHearts}/>} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/user/:userName" element={<UserProfile  liked={liked} likedItems={addLikedItems} toggleHearts={toggleHearts} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;