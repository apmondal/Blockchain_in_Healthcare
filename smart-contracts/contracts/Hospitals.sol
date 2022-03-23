// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Hospitals {
    uint256 numOfHospitals;

    event Registered(address hospitalAddress, string name);

    struct Hospital {
        uint256 id;
        address hospitalAddress;
        string name;
        uint256 timestamp;
    }

    Hospital[] hospitals;
    mapping(uint256 => Hospital) public hospitalsMap;

    // mapping(address => mapping(address => Doctor)) doctorsMap;

    function addToBlockChain(uint256 id, string memory name) public {
        numOfHospitals += 1;
        hospitalsMap[id] = Hospital(id, msg.sender, name, block.timestamp);
        hospitals.push(Hospital(id, msg.sender, name, block.timestamp));
        emit Registered(msg.sender, name);
    }

    function getAllHospitals() public view returns (Hospital[] memory) {
        return hospitals;
    }

    function getHospitalById(uint256 id) public view returns (Hospital memory) {
        return hospitalsMap[id];
    }

    function getHospitalCount() public view returns (uint256) {
        return numOfHospitals;
    }
}
