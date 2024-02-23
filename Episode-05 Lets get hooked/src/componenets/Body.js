import Card from "./Card";
import allRestaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants] = useState(allRestaurants);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurants(allRestaurants);
          }}
        >
          Reset
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setRestaurants(
              restaurants.filter((restaurant) => restaurant.rating > 4)
            );
          }}
        >
          Top Rated Resturents
        </button>
      </div>
      <div className="card-container">
        {restaurants.map((restaurant) => (
          <Card key={restaurant.id} data={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
