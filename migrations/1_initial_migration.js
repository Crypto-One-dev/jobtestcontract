const TestContract = artifacts.require("TestContract");

module.exports = async function(deployer) {
  try {

    await deployer.deploy(TestContract, "TestToken", "TT");

  } catch (error) {
    console.log(error);
  }
};
