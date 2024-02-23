import Card from "./Card";
// import allRestaurants from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    console.log("useEffect Called");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const formatedData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
        (data) => {
          return {
            id: data.info.id,
            name: data.info.name,
            cuisine: data.info.cuisines.join(","),
            imageId: data.info.cloudinaryImageId,
            rating: data.info.avgRating,
            deliveryTime: data.info.sla.deliveryTime,
            amount: data.info.costForTwo,
          };
        }
      );

    console.log(formatedData);  
    setRestaurants(formatedData);
  };

  if(restaurants.length === 0){
    return <Shimmer/>
  }

  console.log("body rendered");

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
