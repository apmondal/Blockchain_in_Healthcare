// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Doctors {
    uint256 numOfDoctors;

    event added(address doctorAddress, uint256 regId, string name);
    address owner;

    constructor() {
        owner = msg.sender;
    }

    modifier isOwner() {
        require(msg.sender == owner, "Access is not allowed");
        _;
    }
    struct Doctor {
        uint256 regId;
        address doctorAddress;
        string name;
        string specialization;
        uint256 timestamp;
    }

    Doctor[] doctors;
    mapping(uint256 => Doctor) public doctorsMap;

    // mapping(address => mapping(address => Doctor)) doctorsMap;

    function addDoctor(
        uint256 regId,
        string memory name,
        string memory specialization
    ) public isOwner {
        numOfDoctors += 1;
        doctorsMap[regId] = Doctor(regId, msg.sender, name, specialization, block.timestamp);
        doctors.push(Doctor(regId, msg.sender, name, specialization, block.timestamp));
        emit added(msg.sender, regId, name);
    }

    function getAllDoctors() public view returns (Doctor[] memory) {
        return doctors;
    }

    function getDoctorByRegId(uint256 regId) public view returns (Doctor memory) {
        return doctorsMap[regId];
    }

    function getDoctorCount() public view returns (uint256) {
        return numOfDoctors;
    }
}
