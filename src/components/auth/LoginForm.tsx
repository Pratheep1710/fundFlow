"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/auth-context";
import toast from "react-hot-toast";

export function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });
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
        await signUp(formData.identifier, formData.password);
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

  return (
    <div className="flex flex-col gap-4 bg-white dark:bg-background-dark rounded-xl p-8 shadow-2xl w-full max-w-sm">
      <div className="flex border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setIsLogin(true)}
          className={`flex-1 py-2 text-center text-sm font-semibold ${
            isLogin
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
          }`}
        >
          Log In
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={`flex-1 py-2 text-center text-sm font-semibold ${
            !isLogin
              ? "text-primary border-b-2 border-primary"
              : "text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
          }`}
        >
          Sign Up
        </button>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Mobile / Email / User ID"
          name="identifier"
          type="text"
          value={formData.identifier}
          onChange={handleInputChange}
          required
        />
        <input
          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-5 bg-[#1791cf] text-white text-sm font-bold shadow-sm hover:bg-[#1580b7] transition-colors">
          <span className="truncate">{isLogin ? "Log In" : "Sign Up"}</span>
        </button>
        {isLogin && (
          <a
            className="text-sm text-primary hover:underline text-center"
            href="#"
          >
            Forgot password?
          </a>
        )}
      </form>
    </div>
  );
}
