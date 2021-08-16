import web3 from "./web3";
import Manager from "./build/Factory.json";

const instance = new web3.eth.Contract(
  JSON.parse(Manager.interface),
  "0x4Ce80C52290bCF1e167C308f6853B4AAc6cE7878"
);

export default instance;
