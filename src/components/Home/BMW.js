import React, { useEffect, useState } from "react";
import { BMW as BMWItems } from "../items"; // Rename import for clarity
import { FaThumbsUp, FaRegThumbsUp } from "react-icons/fa"; // Import thumbs up icons

export default function BMW({ liked, toggleHearts }) {
  const [showItems, setShowItems] = useState([]);
  const [loading, setLoading] = useState(true); // Default loading state should be true

  useEffect(() => {
    setTimeout(() => {
      setShowItems(BMWItems); // Use the renamed import
      console.log(BMWItems);
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
