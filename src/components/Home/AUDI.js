import React, { useEffect, useState } from "react";
import { AUDI } from "../items.js";
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa"; 

export default function Audi({ liked, toggleHearts }) {
  const [showItems, setShowItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowItems(AUDI);
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
    <div className="items-container">
      {loading ? <h1 className="loading-state">Loading...</h1> : displayItems}
    </div>
  );
}
