"use client"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import * as client from "../client";
import { setCurrentUser } from "../reducer";
import Link from "next/link";

export default function Signin() {
  const [credentials, setCredentials] = useState<any>({});
  const dispatch = useDispatch();
  const router = useRouter();
  
  const signin = async () => {
    const user = await client.signin(credentials);
    if (!user) return;
    dispatch(setCurrentUser(user));
    router.push("/Dashboard");
  };

  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <input 
        className="wd-username" 
        placeholder="username"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      /> <br />
      <input 
        className="wd-password" 
        placeholder="password" 
        type="password"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      /> <br />
      <button id="wd-signin-btn" onClick={signin}>Sign in</button> <br />
      <Link id="wd-signup-link" href="Signup">Sign up</Link>
    </div>
  );
}