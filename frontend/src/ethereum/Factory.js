import web3 from "./web3";
import Manager from "./build/Factory.json";

const instance = new web3.eth.Contract(
  JSON.parse(Manager.interface),
  "0x425763425797D6a72b93BDC503E8d6598baEdaE0"
);

export default instance;
