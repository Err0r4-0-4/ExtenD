import web3 from "./web3";
import Manager from "./build/Factory.json";

const instance = new web3.eth.Contract(
  JSON.parse(Manager.interface),
  "0xAbD73c0f54b18Aead14Ba93B63BebCfb34cff7a9"
);

export default instance;
