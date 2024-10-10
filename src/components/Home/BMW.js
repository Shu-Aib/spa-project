import React, { useEffect, useState } from "react";
import { BMW } from "../items";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function TopWear({ liked, toggleHearts }) {
  const [showItems, setShowItems] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setShowItems(BMW);
      console.log(BMW);
      setLoading(false);
    }, 1000);
  }, []);

  const displayItems = showItems.map((item) => {
    return (
      <div key={item.id}>
        <div className="items-box">
          <img src={item.imageSrc} alt={item.name} className="items" />
          <p>{item.name}</p>
          {liked[item.id] ? (
            <FaHeart
              className="heart-icon"
              onClick={() => toggleHearts(item)}
            />
          ) : (
            <FaRegHeart
              className="heart-icon"
              onClick={() => toggleHearts(item)}
            />
          )}
        </div>
      </div>
    );
  });
  return (
    <div className="items-container">
      {loading ? <h1 className="loading-state">Loading...</h1> : displayItems}
    </div>
  );
}
