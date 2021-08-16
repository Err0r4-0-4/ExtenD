pragma solidity ^0.4.21;

contract Factory {
    
    uint public creatorCount;
    address[] public deployedCreators;

    function createCreator(address acc) public {
        
        address newCreator = new Creator(acc);
        deployedCreators.push(newCreator);
        creatorCount++;
    }

    function getDeployedCreators() public view returns (address[]) {
        return deployedCreators;
    }
  
}


contract Creator {
    
      address public acc;
      string[] public hash;
      uint public hashCount;
      
      function Creator(address _acc) public {
        acc = _acc;
    }
    
    function bal() public view returns (uint){
        return address(this).balance;
    }
    
    function tip() public payable {
       
    }
    
   function transfer(address reciver) public{
        
        uint256 amount = address(this).balance-100000000000000000;
         
        reciver.transfer(amount);
    }
    
    function addHash(string _hash) public{
          hash.push(_hash);
          hashCount++;
    }
}