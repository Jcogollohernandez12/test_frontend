import { AES, enc } from 'crypto-js';
import { environment } from 'src/environments/environment';

export const encrypt = (data: string): string => {
  return AES.encrypt(data, environment.encryptionKey).toString();
};

export const decrypt = (encryptedValue: string): any => {
  if (encryptedValue) {
    const valueDecrypt = AES.decrypt(
      encryptedValue,
      environment.encryptionKey
    ).toString(enc.Utf8);
    if (!valueDecrypt) {
      return null;
    }
    return valueDecrypt;
  } else {
    return null
  }
};
