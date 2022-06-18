// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Hospitals {
    uint256 numOfHospitals;

    event Registered(address hospitalAddress, string name);

    struct Hospital {
        uint256 id;
        address contractAddress;
        string name;
        string hospitalAddress;
        string email;
        string password;
        uint256 timestamp;
        // doctors
        // patients
    }

    Hospital[] hospitals;
    mapping(uint256 => Hospital) public hospitalsMap;

    // mapping(address => mapping(address => Doctor)) doctorsMap;

    function addToBlockChain(
        uint256 id,
        string memory name,
        string memory hospitalAddress,
        string memory email,
        string memory password
    ) public {
        numOfHospitals += 1;
        Hospital memory h = Hospital(
            id,
            msg.sender,
            name,
            hospitalAddress,
            email,
            password,
            block.timestamp
        );
        hospitalsMap[id] = h;
        hospitals.push(h);
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
