"use client"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import * as client from "../client";
import { setCurrentUser } from "../reducer";
import Link from "next/link";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({ 
    username: "", 
    password: "" 
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  
  const signin = async () => {
    try {
      setError(""); // Clear previous errors
      const user = await client.signin(credentials);
      if (!user) return;
      dispatch(setCurrentUser(user));
      router.push("/Dashboard");
    } catch (err: any) {
      // Don't log to console, just show to user
      const message = err.response?.data?.message || 
                      err.response?.status === 401 ? "Invalid username or password" :
                      err.response?.status === 500 ? "Server error. Please try again." :
                      "An error occurred. Please try again.";
      setError(message);
    }
  };

  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <input 
        value={credentials.username}
        className="wd-username form-control mb-2" 
        placeholder="username"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input 
        value={credentials.password}
        className="wd-password form-control mb-2" 
        placeholder="password" 
        type="password"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            signin();
          }
        }}
      />
      <button 
        id="wd-signin-btn" 
        onClick={signin}
        className="btn btn-primary w-100 mb-2"
      >
        Sign in
      </button>
      <Link id="wd-signup-link" href="/Account/Signup">Sign up</Link>
    </div>
  );
}