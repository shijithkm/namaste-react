import Card, { withPromotedLabel } from "./Card";
// import allRestaurants from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  console.log("Body Rendered");

  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const PromotedCard = withPromotedLabel(Card);
  const { setUsername, loggedInUser } = useContext(UserContext);

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
            promoted: true,
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
      <div className="flex align-middle justify-center">
        <div className="m-4 p-4 bg-slate-100 rounded">
          <input
            type="text"
            className="p-4 border border-gray-500"
            value={loggedInUser}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="text"
            className="p-4 border border-gray-500"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="p-4 m-4 bg-green-300 rounded-lg"
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
          <button
            className="p-4 m-4 bg-green-300 rounded-lg"
            onClick={() => {
              setRestaurants(
                restaurants.filter((restaurant) => restaurant.rating > 4)
              );
            }}
          >
            Top Rated Resturents
          </button>
        </div>
      </div>
      <div className="flex flex-wrap align-middle justify-center ">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.id} to={"/details/" + restaurant.id}>
            {restaurant.promoted === true ? (
              <PromotedCard data={restaurant} />
            ) : (
              <Card data={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
