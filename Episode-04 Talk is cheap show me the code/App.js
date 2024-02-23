import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-app-icon-food-explorer-design-template-8ae900e41ccbc0a2e1b48a85d239e389_screen.jpg?ts=1585237320"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const CardStyle = {
  backgroundColor: "#f0f0f0",
};

const Card = (props) => {
  // Destructure data from props
  const { name, cuisine, imageId, rating, deliveryTime, amount } = props?.data;
  return (
    <div className="card" style={CardStyle}>
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/${imageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{deliveryTime}</h4>
      <h4>{amount}</h4>
    </div>
  );
};

const resurents = [
  {
    id: 196047,
    name: "Kairali",
    cuisine: "Dosa, South Indian",
    imageId: "ye4ke3cyek7vmb2q71ep",
    rating: 4.5,
    deliveryTime: "50 minutes",
    amount: "$15",
  },
  {
    id: 77966125,
    name: "Chicken Biryani",
    cuisine: "Dosa, South Indian",
    imageId: "38e8775e07940a24c20f24a594ed4a9d",
    rating: 4.5,
    deliveryTime: "50 minutes",
    amount: "$15",
  },
  {
    id: 435207,
    name: "Donne Biriyani Naty Style Hotel",
    cuisine: "Dosa, South Indian",
    imageId: "uipyyasf5imyhvooj1iy",
    rating: 4.5,
    deliveryTime: "50 minutes",
    amount: "$15",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="card-container">
        {resurents.map((resurent) => (
          <Card key={resurent.id} data={resurent} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
