import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { Bitcoin, Bitcoin_graph, Getdata } from "../Actions/Actions";
import { Chart } from "react-charts";
import moment from "moment";

function Bitcoin_Detail({
  getdataAction,
  Bitcoin,
  items,
  Bitcoin_graph,
  Data_graph,
  Bitcoin_data,
}) {
  const { id } = useParams();

  const [currency, setcurrency] = useState("aed");
  const asset = (e) => {
    setcurrency(e.target.value);
  };

  const [Time, setTime] = useState("5");
  const days = (e) => {
    setTime(e.target.value);
  };

  useEffect(() => {
    getdataAction();
  }, );

  useEffect(() => {
    const interval = setInterval(() => {
      getdataAction();
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   console.log("in the state-->", Time);
  //   Bitcoin_graph(id, Time, currency);
  // }, [Time, currency]);

  useEffect(() => {
    Bitcoin(id);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      Bitcoin(id);
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // const jarvis = [];

  // Data_graph.prices &&
  //   Data_graph.prices.forEach((xx) => {
  //     return jarvis.push([parseInt(moment(xx[0]).format("DD-MM")), xx[1]]);
  //   });

  // console.log("in the graph section---", jarvis);

  // const datas = [
  //   {
  //     label: "Series 1",
  //     data:
  //       jarvis && jarvis ? (
  //         jarvis && jarvis
  //       ) : (
  //         <div>
  //           <h3>Loading...</h3>
  //         </div>
  //       ),
  //   },
  // ];

  // const axes = React.useMemo(
  //   () => [
  //     { primary: true, type: "linear", position: "bottom" },
  //     { type: "linear", position: "left" },
  //   ],
  //   []
  // );

  // const lineChart = (
  //   <div className="graph">
  //     <Chart data={datas} axes={axes} />
  //   </div>
  // );
// console.log("tjhias is objewct-->",items.market_data);
  var CurrencyFormat = require("react-currency-format");
  return items ? (
    <div className="Product_img" key={items.id}>
      <div className="wrapper">
        <div className="header">
          <div className="container">
            <div className="navbaras">
              <div className="logo">
                {/* {Bitcoin_data.slice(0, 5).map((bitcoin) => {
                  return (
                    {/* <div className="lmv" key={bitcoin.id}>
                      {bitcoin.price_change_24h < 0 ? (
                        <div className="bitcoinnavbar">
                          <h5>
                            {bitcoin.name}
                            <p className="coin-percent red">
                              {bitcoin.price_change_24h.toFixed(2)}
                              <i className="fa-solid fa-caret-down"></i>
                            </p>
                          </h5>
                        </div>
                      ) : (
                        <h5>
                          {bitcoin.name}
                          <p className="coin-percent green">
                            {bitcoin.price_change_24h.toFixed(2)}
                            <i className="fa-solid fa-caret-up"></i>
                          </p>
                        </h5>
                      )}
                    </div>
                  );
                {/* })} */}
                {/* header part of the app in this part see the best 5  */}
            <marquee>
              <div className="marquee"> {Bitcoin_data.map((bitcoin) => {
               
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


              </div>
            </div>
          </div>
        </div>
        <section className="main">
          <div className="container">
            <div className="lop">
              <div className="aside">
                <div className="bitcoin">
                  <img src={items.image.small} style={{ height: "100px" }} />
                  <h1>{items.name}</h1>
                  <h3>{items.symbol}</h3>
                </div>
                <div className="dropdown">
                  <form>
                    <select onChange={asset}>
                      {Object.keys(items.market_data.current_price).map(

                        function (key1) {
                          {/* {console.log(key1,"hey i am objkect")} */}
                          <div className="hskajd" key={key1}></div>;
                          return (
                            <>
                              <option key={key1} value={key1}>
                                {" "}
                                {key1}{" "}
                                
                              </option>
                            </>
                          );
                        }
                      )}
                    </select>
                  </form>
                </div>
              </div>
              <p>{items.description.en}</p>
            </div>

            <div className="ooop">
              <div className="site-banner">
                <div className="rank">
                  <h3>Aims Score:{items.coingecko_score.toFixed(2)}%</h3>
                  <h3> market-cap rank:{items.market_cap_rank}</h3>
                </div>
              </div>
            </div>

            <div className="qwe">
              <div className="banner">
                <div className="left-content">
                  <h2>
                    <CurrencyFormat
                      value={items.market_data.current_price[currency]}
                      displayType={"text"}
                      thousandSeparator={true}
                      renderText={(value) => <div>Current Price-{value}</div>}
                    />
                  </h2>

                  <div className="llo">
                    <h3>
                      category: {items.categories[0] ?? items.categories[1]}
                    </h3>
                  </div>
                </div>
                <div className="content">
                  <div className="mid-content">
                    <h3>24H</h3>
                    <h3>
                      24H Low{" "}
                      <a href="#" style={{ color: "white", fontsize: "22px" }}>
                        <i className="fa-solid fa-info"></i>
                      </a>
                    </h3>
                    <h3>
                      24H High{" "}
                      <a href="#" style={{ color: "white", fontsize: "22px" }}>
                        <i className="fa-solid fa-info"></i>
                      </a>
                    </h3>
                  </div>
                  <div className="right-content" style={{ padding: "0 21px" }}>
                    <h4>
                      {items.market_data.price_change_percentage_24h_in_currency[
                        currency
                      ].toFixed(2)}
                      %
                    </h4>
                    <h2 style={{ padding: "4px 0" }}>
                      <CurrencyFormat
                        value={items.market_data.low_24h[currency]}
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(value) => <div>{value}</div>}
                      />
                    </h2>
                    <h2>
                      <CurrencyFormat
                        value={items.market_data.high_24h[currency]}
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(value) => <div>{value}</div>}
                      />
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropmenu">
              <h3>Last</h3>
              <form>
                <select onChange={days}>
                  <option>5</option>
                  <option>10</option>
                  <option>15</option>
                  <option>20</option>
                  <option>25</option>
                </select>
              </form>
              <h3>Days of graph</h3>

            </div>
          </div>
        </section>
      </div>
      {/* <div className="xyzo">{lineChart}</div> */}
    </div>
  ) : (
    <></>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    Bitcoin: (id) => dispatch(Bitcoin(id)),
    Bitcoin_graph: (id, Time, currency) =>
      dispatch(Bitcoin_graph(id, Time, currency)),
    getdataAction: () => dispatch(Getdata()),
  };
};

const mapStateToProps = (state) => {
  console.log( "in the state to props-->",state);
  return {
    items: state.BitReducer.Bitcoin_detail[0],
    Data_graph: state.BitReducer.Graph_data,
    Bitcoin_data: state.BitReducer.items,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Bitcoin_Detail);
