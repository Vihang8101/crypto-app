import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Getdata } from "../Actions/Actions";


function Home({getdataAction, data }) {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      getdataAction();
      console.log("connect")
    },1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    getdataAction();
  }, []);
// input value 
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  console.log("this is filter",data);
  // search data
  const filteredCoins = data.filter((coin) =>
 
    coin.name.toLowerCase().includes(search.toLowerCase())
    
  );
  console.log("in the home page-->", data);
  console.log(filteredCoins,"filterrrrrrrrrrr");
  var CurrencyFormat = require("react-currency-format");
  console.log(data,"herlllllll");
  return (
    <div className="new ">
      <div className="header">
     
        <div className="container w-100">
          <div className="navbaras ">
            <div className="logo ">
            {/* header part of the app in this part see the best 5  */}
            <marquee>
              <div className="marquee"> {data.map((bitcoin) => {
                {/* console.log(bitcoin.price_change_24h,"bitcoin ") */}
                return (
                  <div className="lmv " key={bitcoin.id}>
                    {bitcoin.price_change_24h < 0 ? (
                      <div className="bitcoinnavbar d-inline">
                        <h5 className="m-2">
                          {bitcoin.name}:
                          <div className="coin-percent red d-print-inline mx-2">
                            {bitcoin.price_change_24h.toFixed(2)}

                            <i className="fa-solid fa-caret-down"></i>
                          </div>
                        </h5>
                      </div>
                    ) : (
                      <h5>
                        {bitcoin.name}:
                        <div className="coin-percent green">
                          {bitcoin.price_change_24h.toFixed(2)}
                          <i className="fa-solid fa-caret-up"></i>
                        </div>
                      </h5>
                    )}
                  </div>
                );
              })}</div></marquee>
              {/* {data.slice(0, 5).map((bitcoin) => {
                console.log(bitcoin.price_change_24h,"bitcoin ")
                return (
                  <div className="lmv" key={bitcoin.id}>
                    {bitcoin.price_change_24h < 0 ? (
                      <div className="bitcoinnavbar">
                        <h5>
                          {bitcoin.name}:
                          <div className="coin-percent red">
                            {bitcoin.price_change_24h.toFixed(2)}

                            <i className="fa-solid fa-caret-down"></i>
                          </div>
                        </h5>
                      </div>
                    ) : (
                      <h5>
                        {bitcoin.name}:
                        <div className="coin-percent green">
                          {bitcoin.price_change_24h.toFixed(2)}
                          <i className="fa-solid fa-caret-up"></i>
                        </div>
                      </h5>
                    )}
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
      </div>

      <div className="coin-app container-fluid m-0 p-0">
        <div className="coin-search row " >
          <form action=""  className="col-12" >
            <input
              type="text"
              className="coin-input"
              placeholder="type the coin name"
              onChange={handleChange}
            />
          </form>
        </div>

        {filteredCoins.map((coin) => {
          return (
            <div className="xop" key={coin.id}>
              <div className="coin-container container-fluid m-0 p-0 text-center">
                <div className="coin-row row no-gutters m-0 p-0">
                  <Link to={`/xyz/${coin.id}`} className="link  col-md-4  col-sm-4 col-12 text-center" >
                  <div className="coin" >
                    <img src={coin.image} alt="crypto" className="ml-md-0 ml-5"/>
                    <h1>{coin.name}</h1>
                  </div>
                    </Link>
                    <p className="coin-symbol "></p>
                  <div className="coin-data col-md-4  col-sm-6 col-12  ">
                    <div className="coin-price">
                      <CurrencyFormat
                        value={coin.current_price}
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(value) => <div>${value}</div>}
                      />
                    </div>

                    {coin.price_change_percentage_24h < 0 ? (
                      <div className="coin-percent red">
                        {coin.price_change_percentage_24h.toFixed(2)}%
                      </div>
                    ) : (
                      <div className="coin-percent green">
                        +{coin.price_change_percentage_24h.toFixed(2)}%
                      </div>
                    )}
                    <div className="coin-marketcap m-2">
                      <CurrencyFormat
                        value={coin.market_cap}
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(value) => <div>Mkt Cap: ${value}</div>}
                      />
                    </div>
                  </div>
                  <Link to={`/xyz/${coin.id}`} className="col-md-3 col-sm-12 col-12 pb-md-0  text-center">
                    <button type="button" className="btn btn-primary">
                      Click For More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.BitReducer.items,
  };
};
const mapDispatchToProps = (dispatch) => {

  return {
    getdataAction: () => dispatch(Getdata()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
