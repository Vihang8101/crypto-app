import React from "react";
import { Link } from "react-router-dom";


const Coin = ({ image, name, price, pricechange, marketcap,}) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol"></p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Rs.{price}</p>

          {pricechange < 0 ? (
              <div className="xyz"> 
              <p className="coin-percent red">{pricechange.toFixed(2)}%</p>
              </div>
          ) : (
              <div className="xyz">
            <p className="coin-percent green">{pricechange.toFixed(2)}%</p>
            </div>
          )}
          <p className="coin-marketcap m-2">Mkt Cap: Rs.{marketcap}</p>
        </div>
        <Link to="/xyz">

        <button type="button" className="btn btn-primary">
          Click For More
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Coin;
