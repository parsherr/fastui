import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.NEXT_PUBLIC_COOKIE_SECRET || 'setscript-secret-key';

export const encryptCookie = (value: string): string => {
  return CryptoJS.AES.encrypt(value, SECRET_KEY).toString();
};

export const decryptCookie = (encryptedValue: string): string => {
  const bytes = CryptoJS.AES.decrypt(encryptedValue, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
}; 