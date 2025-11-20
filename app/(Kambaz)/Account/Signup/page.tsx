"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setCurrentUser } from "../reducer";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { FormControl } from "react-bootstrap";
import * as client from "../client";

export default function Signup() {
  const [user, setUser] = useState<any>({ username: "", password: "" });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  
  const signup = async () => {
    try {
      setError("");
      const currentUser = await client.signup(user);
      dispatch(setCurrentUser(currentUser));
      router.push("/Account/Profile");
    } catch (err: any) {
      console.error("Signup error:", err);
      const message = err.response?.data?.message || 
                      err.response?.status === 500 ? "Server error. Please try again." :
                      "Signup failed. Please try again.";
      setError(message);
    }
  };

  return (
    <div className="wd-signup-screen">
      <h1>Sign up</h1>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <FormControl 
        value={user.username} 
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="wd-username mb-2" 
        placeholder="username" 
      />
      <FormControl 
        value={user.password} 
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="wd-password mb-2" 
        placeholder="password" 
        type="password"
      />
      <button onClick={signup} className="wd-signup-btn btn btn-primary mb-2 w-100">
        Sign up
      </button>
      <Link href="/Account/Signin" className="wd-signin-link">Sign in</Link>
    </div>
  );
}