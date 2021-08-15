import web3 from "./web3";
import Manager from "./build/Factory.json";

const instance = new web3.eth.Contract(
  JSON.parse(Manager.interface),
  "0x6D520e9FD662405D36C22f9E79ce6E9E027a1a05"
);

export default instance;
