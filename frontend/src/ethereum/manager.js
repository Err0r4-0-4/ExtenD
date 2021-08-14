import web3 from "./web3";
import Manager from "./build/Manager.json";

const instance = new web3.eth.Contract(
  JSON.parse(Manager.interface),
  "0x3A328A9b8071b43b88116A3a3D5e64F844FBcd36"
);

export default instance;
