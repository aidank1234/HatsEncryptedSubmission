// decrypt.mjs
import CryptoJS from 'crypto-js';

export function decryptData(encryptedData, encryptionKey) {
    const decryptedData = CryptoJS.AES.decrypt(encryptedData, encryptionKey).toString(CryptoJS.enc.Utf8);
    return JSON.parse(decryptedData);
  }