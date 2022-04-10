const HelloWorld = artifacts.require("HelloWorld");
const primitives = artifacts.require("Primitives");

module.exports = function(deployer) {
  deployer.deploy(HelloWorld);
  deployer.deploy(primitives);
};
