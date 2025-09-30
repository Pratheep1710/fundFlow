import { auth } from "@/lib/firebase";
import {
  RecaptchaVerifier,
  PhoneAuthProvider,
  signInWithCredential,
  ConfirmationResult,
} from "firebase/auth";

declare global {
  interface Window {
    recaptchaVerifier: RecaptchaVerifier;
    confirmationResult: ConfirmationResult;
  }
}

export const setupRecaptcha = (phoneNumber: string) => {
  const recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha-container", {
    size: "invisible",
  });
  window.recaptchaVerifier = recaptchaVerifier;
  return new PhoneAuthProvider(auth).verifyPhoneNumber(
    phoneNumber,
    recaptchaVerifier
  );
};

interface AuthError {
  code?: string;
  message: string;
}

export const verifyOTP = async (otp: string) => {
  try {
    const credential = PhoneAuthProvider.credential(
      window.confirmationResult.verificationId,
      otp
    );
    const result = await signInWithCredential(auth, credential);
    return { success: true, user: result.user };
  } catch (error: unknown) {
    const authError = error as AuthError;
    return { success: false, error: authError };
  }
};
