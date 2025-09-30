"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import toast from "react-hot-toast";

export function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    identifier: ""
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await signIn(formData.identifier, formData.password);
        toast.success("Successfully logged in!");
        router.push("/dashboard");
      } else {
        // For signup, use email as the identifier for Firebase auth
        const email = formData.email;
        await signUp(email, formData.password, {
          firstName: formData.firstName,
          lastName: formData.lastName,
          phoneNumber: formData.phoneNumber,
        });
        toast.success("Account created successfully!");
        router.push("/dashboard");
      }
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "An error occurred";
      toast.error(errorMessage);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleTabChange = (loginState: boolean) => {
    if (isLogin !== loginState) {
      setIsAnimating(true);
      setTimeout(() => {
        setIsLogin(loginState);
        setIsAnimating(false);
      }, 300);
    }
  };

  return (
    <div className="flex flex-col gap-4 bg-white dark:bg-background-dark rounded-xl p-6 shadow-2xl w-full max-w-sm">
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => handleTabChange(true)}
          className={`flex-1 py-2 text-center text-sm font-semibold ${
            isLogin
              ? "text-[#1791cf] border-b-2 border-[#1791cf]"
              : "text-gray-500 dark:text-gray-400 hover:text-[#1791cf] dark:hover:text-[#1791cf] transition-colors"
          }`}
          type="button"
        >
          Log In
        </button>
        <button
          onClick={() => handleTabChange(false)}
          className={`flex-1 py-2 text-center text-sm font-semibold ${
            !isLogin
              ? "text-[#1791cf] border-b-2 border-[#1791cf]"
              : "text-gray-500 dark:text-gray-400 hover:text-[#1791cf] dark:hover:text-[#1791cf] transition-colors"
          }`}
          type="button"
        >
          Sign Up
        </button>
      </div>
      <div className={`transition-all duration-300 ease-in-out ${isAnimating ? 'opacity-0 transform translate-y-4' : 'opacity-100 transform translate-y-0'}`}>
        {isLogin ? (
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1791cf]"
              placeholder="Mobile / Email / User ID"
              name="identifier"
              type="text"
              value={formData.identifier}
              onChange={handleInputChange}
              required
            />
            <input
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1791cf]"
              placeholder="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <button 
              type="submit" 
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-[#1791cf] text-white text-sm font-bold shadow-sm hover:bg-[#1580b7] transition-colors"
            >
              <span className="truncate">Log In</span>
            </button>
            <a
              className="text-sm text-[#1791cf] hover:underline text-center"
              href="#"
            >
              Forgot password?
            </a>
          </form>
        ) : (
          <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div className="flex gap-3">
              <input
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1791cf] text-sm"
                placeholder="First Name"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <input
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1791cf] text-sm"
                placeholder="Last Name"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <input
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1791cf] text-sm"
              placeholder="Phone Number"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
            <input
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1791cf] text-sm"
              placeholder="Email ID"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1791cf] text-sm"
              placeholder="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <button 
              type="submit" 
              className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-[#1791cf] text-white text-sm font-bold shadow-sm hover:bg-[#1791cf]/90 transition-colors mt-2"
            >
              <span className="truncate">Sign Up</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}