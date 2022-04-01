import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractAbi, contractAddress } from '../utils/constants';

export const HospitalContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const hospitalContract = new ethers.Contract(
    contractAddress,
    contractAbi,
    signer
  );
  console.log({ provider, signer, hospitalContract });
  return hospitalContract;
};

export const HospitalsProvider = ({ children }) => {
  const [connectedAccount, setConnectedAccount] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    id: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) alert('Please Install Metamask');

      const accounts = await ethereum.request({ method: 'eth_accounts' });
      if (accounts.length) {
        setConnectedAccount(accounts[0]);
      }
      console.log(accounts);
    } catch (error) {
      console.error(error);
      throw new Error('No ethereum object');
    }
  };

  const connectWallet = async () => {
    try {
      if (!ethereum) alert('Please Install Metamask');
      const accounts = await ethereum.request({
        method: 'eth_requestAccounts',
      });

      setConnectedAccount(accounts[0]);
    } catch (error) {
      console.error(error);
      throw new Error('No ethereum object');
    }
  };

  const addHospital = async () => {
    try {
      if (!ethereum) alert('Please Install Metamask');
      const { name, id } = formData;
      const hospitalContract = getEthereumContract();
      hospitalContract.functions.addToBlockChain(id, name);
    } catch (error) {
      console.error(error);
      throw new Error('No ethereum object');
    }
  };
  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);
  return (
    <HospitalContext.Provider
      value={{
        connectWallet,
        connectedAccount,
        formData,
        handleChange,
        addHospital,
      }}
    >
      {children}
    </HospitalContext.Provider>
  );
};
