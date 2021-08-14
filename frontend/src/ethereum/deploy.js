const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/Factory.json");

const provider = new HDWalletProvider(
  "client diagram mixed butter soon gospel isolate foster ship finish symptom burger",
  // remember to change this to your own phrase!
  "https://rinkeby.infura.io/v3/80d7ab148b8a43839ec7cc6b90d31915"
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface)
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};
deploy();
