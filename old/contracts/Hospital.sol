pragma solidity ^0.8.10;

contract Hospital {
    uint256 public hospitalCount = 0;

    struct HospitalInfo {
        uint256 hospitalId;
        string hospitalName;
        string hospitalAddress;
        string hospitalSpec;
    }

    mapping(uint256 => HospitalInfo) hospitals;

    function addHospital(
        uint256 _hospitalId,
        string memory _hospitalName,
        string memory _hospitalAddress,
        string memory _hospitalSpec
    ) public {
        hospitalCount++;
        hospitals[_hospitalId] = HospitalInfo(
            _hospitalId,
            _hospitalName,
            _hospitalAddress,
            _hospitalSpec
        );
    }

    function retreiveHospitalDetails(uint256 _hospitalId)
        public
        view
        returns (
            string memory hospitalName,
            string memory hospitalAddress,
            string memory hospitalSpec
        )
    {
        HospitalInfo memory h = hospitals[_hospitalId];
        return (h.hospitalName, h.hospitalAddress, h.hospitalSpec);
    }
}
