import Card from "./Card";
// import allRestaurants from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  console.log("Body Rendered");

  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.log("Body Componenet useEffect Called");
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
    setFilteredRestaurants(formatedData);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) return <h1>Looks like you are offline!</h1>;

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurants = restaurants.filter((restaurant) => {
                return restaurant.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>

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
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.id} to={"/details/" + restaurant.id}>
            <Card data={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
