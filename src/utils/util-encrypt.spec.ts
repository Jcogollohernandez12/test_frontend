import { TestBed } from '@angular/core/testing';
import { encrypt, decrypt } from './util-encrypt';

describe('Crypto Utils', () => {
  const originalData = 'Hello, World!';

  const executeEncrypt = (args: string) =>
    TestBed.runInInjectionContext(() => encrypt(args));
  const executeDecrypt = (args: string) =>
    TestBed.runInInjectionContext(() => decrypt(args));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should encrypt and decrypt data', () => {
    const encryptedData = executeEncrypt(originalData);
    const decryptedData = executeDecrypt(encryptedData);

    expect(decryptedData).toBe(originalData);
  });

  it('should return null when decrypting invalid data', () => {
    const invalidData = '';
    const decryptedData = executeDecrypt(invalidData);

    expect(decryptedData).toBeNull();
  });
});
