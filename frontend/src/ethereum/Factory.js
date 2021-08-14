import web3 from "./web3";
import Manager from "./build/Factory.json";

const instance = new web3.eth.Contract(
  JSON.parse(Manager.interface),
  "0x92B577cFC0D8d3402c1b1023182D62D48E340fdb"
);

export default instance;
