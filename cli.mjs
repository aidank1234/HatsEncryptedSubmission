// cli.mjs
import fetch from 'node-fetch';
import { decryptData } from './decrypt.mjs';

const encryptionKey = process.argv[2]; // Get the encryption key from the command line argument
const descriptionHash = process.argv[3];

fetch(`https://ipfs.io/ipfs/${descriptionHash}`)
  .then(response => response.text())
  .then(data => {
    const decryptedData = decryptData(data, encryptionKey);
    console.log('Decrypted Data:', decryptedData);
  })
  .catch(error => {
    console.error('Error:', error);
  });
