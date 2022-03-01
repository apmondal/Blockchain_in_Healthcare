// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Hospitals {
    uint256 numOfHospitals;

    event Registered(address hospitalAddress, string name);

    struct Hospital {
        address hospitalAddress;
        string name;
        uint256 timestamp;
    }

    Hospital[] hospitals;

    function addToBlockChain(string memory name) public {
        numOfHospitals += 1;
        hospitals.push(Hospital(msg.sender, name, block.timestamp));
        emit Registered(msg.sender, name);
    }

    function getAllHospitals() public view returns (Hospital[] memory) {
        return hospitals;
    }

    function getHospitalCount() public view returns (uint256) {
        return numOfHospitals;
    }
}
