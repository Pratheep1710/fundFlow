"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  User,
  onAuthStateChanged,
  signOut as firebaseSignOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, userData?: UserData) => Promise<void>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

interface UserData {
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Only run auth check on client-side
  useEffect(() => {
    // Skip auth check during SSG/static export
    if (typeof window === "undefined") {
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const signUp = async (email: string, password: string, userData?: UserData) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    
    // If we have userData and a user was created successfully, store the additional user data
    if (userData && userCredential.user) {
      // Here you would typically store this data in Firestore or another database
      // For now, we're just logging it - implement actual storage based on your backend
      console.log('Additional user data to store:', {
        uid: userCredential.user.uid,
        email: email,
        ...userData
      });
      
      // You would add code here to store in your database
      // Example:
      // const db = getFirestore();
      // await setDoc(doc(db, "users", userCredential.user.uid), {
      //   firstName: userData.firstName,
      //   lastName: userData.lastName,
      //   phoneNumber: userData.phoneNumber,
      //   email: email,
      // });
    }
  };

  const signOut = async () => {
    await firebaseSignOut(auth);
  };

  const resetPassword = async (email: string) => {
    await sendPasswordResetEmail(auth, email);
  };

  const value = {
    user,
    loading,
    signIn,
    signUp,
    signOut,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
