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
      
      function Creator(address _acc) public {
        acc = _acc;
    }
    
    function bal() public view returns (uint){
        return address(this).balance;
    }

    function tip() public payable {
       
    }
}