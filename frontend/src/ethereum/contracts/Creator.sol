pragma solidity ^0.4.21;

contract Factory {
    
    address[] public deployedCreators;

    function createCampaign(address acc) public {
        
        address newCreator = new Creator(acc);
        deployedCreators.push(newCreator);

    }

  
}

contract Creator {
    
      address public acc;
      
      function Creator(address _acc) public {
        acc = _acc;
    }
}