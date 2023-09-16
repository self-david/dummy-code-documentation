/* eslint-disable header/header */



const theme = {
  plain: {
    color: "#e6e6e6",
    backgroundColor: "#1f2430"
  },
  styles: [
  // keywods
  {
    types: ["control"],
    style: { color: "#a48eff", }
  }, {
    types: ["declaration"],
    style: { color: "#ffa8e2" }
  }, {
    types: ["property"],
    style: { color: "#ff924d" }
  }, /** datatype */ {
    types: ["type"],
    style: { color: "#6ff4ee" }
  }, {
    types: ["operators", "operator"],
    style: { color: "#a8ffa8" }
  }, {
    types: ["constants"],
    style: { color: "#ffbfa8" }
  }, {
    types: ["functions", "function"],
    style: { color: "#a8d4ff" }
  }, {
    types: ["delimiter"],
    style: { color: "#a8c2ff" }
  }, {
    types: ["symbol"],
    style: { color: "#d4a8ff" }
  }, {
    types: ["string"],
    style: { color: "#fffb8a" }
  }, {
    types: ["number"],
    style: { color: "#a8ffc2" }
  }, {
    types: ["comment"],
    style: { color: "#a8ffa8" }
  }]
};

module.exports = theme