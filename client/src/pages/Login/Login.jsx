import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthContext"; // Adjust the import path according to your project structure
import LogInNavbar from "../../components/LogInNavbar";
import "./Login.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const LoginPage = () => {
  const navigate = useNavigate();
  const { isUserLoggedIn } = useAuth(); // Assuming loginUser is a method provided by your AuthContext to update the login state
  const [isSignUp, setIsSignUp] = useState(false);

  // Individual state variables for forms
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isUserLoggedIn) {
      navigate("/", { replace: true });
    }
  }, [isUserLoggedIn, navigate]);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9999/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("clientToken", token);
        navigate("/", { replace: true });
        window.location.reload();
      }
    } catch (error) {
      console.error("Login failed", error.response);
      toast.error("Login Failed! Please try again.");
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:9999/signup", {
        name,
        email,
        password
      });
      console.log(response)
      if (response.status === 200) {
        const { token } = response.data;
        localStorage.setItem("clientToken", token);
        navigate("/", { replace: true });
        window.location.reload();
      }
    } catch (error) {
        console.log(error)
      console.error("Signup failed", error.response);
      toast.error("Signup Failed! Please try again.");
    }
  };

  return (
    <>
      <div className="akhu h-screen bg-cover bg-center">
        <LogInNavbar />
        <Toaster />
        <div className="flex justify-center items-center h-full">
          <div className="w-full max-w-xs">
            <form
              onSubmit={isSignUp ? handleSignup : handleLogin}
              className="bg-black bg-opacity-50 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              {isSignUp && (
                <>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Username"
                      className="shadow appearance-none border-none w-full py-2 px-3 bg-black opacity-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      className="shadow appearance-none border-none w-full py-2 px-3 bg-black opacity-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      required
                    />
                  </div>
                </>
              )}
              {!isSignUp && (
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="shadow appearance-none border-none w-full py-2 px-3 bg-black opacity-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
              )}
              <div className="mb-6">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="shadow appearance-none border-none w-full py-2 px-3 bg-black opacity-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div className="flex flex-col items-start justify-between">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-4 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  {isSignUp ? "Sign Up" : "Login"}
                </button>
                <button
                  type="button"
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                  onClick={toggleForm}
                >
                  {isSignUp
                    ? "Already have an account? Log In"
                    : "Don't have an account? Sign Up"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
