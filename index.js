const { spy } = require("chai");

function receivesAFunction(cb) {
  console.log(cb(spy));
}

receivesAFunction(function() {spy});


function returnsANamedFunction() {
  return function named() {
    
  }
};

function returnsAnAnonymousFunction() {
  return function() {

  };
};
