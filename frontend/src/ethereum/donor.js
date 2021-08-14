import web3 from "./web3";
import Donor from "./build/Donor.json";

const donor = (address) => {
  return new web3.eth.Contract(JSON.parse(Donor.interface)
  , address);
};
export default donor;
