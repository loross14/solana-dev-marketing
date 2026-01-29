import { useState, useCallback, useEffect } from 'react';

const CREDENTIAL_STORAGE_KEY = 'solana-calendar-passkey';

interface StoredCredential {
  credentialId: string;
  createdAt: number;
}

/**
 * Hook for managing passkey (WebAuthn) authentication.
 * Uses TouchID/FaceID on supported devices.
 */
export function usePasskey() {
  const [isSupported, setIsSupported] = useState(false);
  const [hasPasskey, setHasPasskey] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // Check WebAuthn support and existing credential on mount
  useEffect(() => {
    const supported = !!(
      window.PublicKeyCredential &&
      navigator.credentials &&
      typeof navigator.credentials.create === 'function' &&
      typeof navigator.credentials.get === 'function'
    );
    setIsSupported(supported);

    // Check for existing credential
    const stored = localStorage.getItem(CREDENTIAL_STORAGE_KEY);
    if (stored) {
      try {
        JSON.parse(stored);
        setHasPasskey(true);
      } catch {
        setHasPasskey(false);
      }
    }
  }, []);

  // Register a new passkey
  const registerPasskey = useCallback(async (): Promise<boolean> => {
    if (!isSupported) return false;

    try {
      setIsAuthenticating(true);

      // Generate a random user ID and challenge
      const userId = new Uint8Array(16);
      crypto.getRandomValues(userId);
      const challenge = new Uint8Array(32);
      crypto.getRandomValues(challenge);

      const credential = await navigator.credentials.create({
        publicKey: {
          challenge,
          rp: {
            name: 'Solana Dev Marketing Calendar',
            id: window.location.hostname,
          },
          user: {
            id: userId,
            name: 'calendar-editor',
            displayName: 'Calendar Editor',
          },
          pubKeyCredParams: [
            { alg: -7, type: 'public-key' },   // ES256
            { alg: -257, type: 'public-key' }, // RS256
          ],
          authenticatorSelection: {
            authenticatorAttachment: 'platform', // Use built-in authenticator (TouchID)
            userVerification: 'required',
            residentKey: 'preferred',
          },
          timeout: 60000,
        },
      }) as PublicKeyCredential;

      if (credential) {
        // Store the credential ID
        const stored: StoredCredential = {
          credentialId: bufferToBase64(credential.rawId),
          createdAt: Date.now(),
        };
        localStorage.setItem(CREDENTIAL_STORAGE_KEY, JSON.stringify(stored));
        setHasPasskey(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error('Passkey registration failed:', error);
      return false;
    } finally {
      setIsAuthenticating(false);
    }
  }, [isSupported]);

  // Authenticate with existing passkey
  const authenticate = useCallback(async (): Promise<boolean> => {
    if (!isSupported || !hasPasskey) return false;

    try {
      setIsAuthenticating(true);

      const stored = localStorage.getItem(CREDENTIAL_STORAGE_KEY);
      if (!stored) return false;

      const { credentialId } = JSON.parse(stored) as StoredCredential;
      const challenge = new Uint8Array(32);
      crypto.getRandomValues(challenge);

      const assertion = await navigator.credentials.get({
        publicKey: {
          challenge,
          rpId: window.location.hostname,
          allowCredentials: [
            {
              id: base64ToBuffer(credentialId),
              type: 'public-key',
              transports: ['internal'],
            },
          ],
          userVerification: 'required',
          timeout: 60000,
        },
      });

      return !!assertion;
    } catch (error) {
      console.error('Passkey authentication failed:', error);
      return false;
    } finally {
      setIsAuthenticating(false);
    }
  }, [isSupported, hasPasskey]);

  // Remove stored passkey
  const removePasskey = useCallback(() => {
    localStorage.removeItem(CREDENTIAL_STORAGE_KEY);
    setHasPasskey(false);
  }, []);

  return {
    isSupported,
    hasPasskey,
    isAuthenticating,
    registerPasskey,
    authenticate,
    removePasskey,
  };
}

// Helper: ArrayBuffer to Base64
function bufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  let binary = '';
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

// Helper: Base64 to ArrayBuffer
function base64ToBuffer(base64: string): ArrayBuffer {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}
