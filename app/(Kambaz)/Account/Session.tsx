"use client"
import * as client from "./client";
import { useEffect, useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  
  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      // Silently handle 401 - it just means user is not logged in
      if (err.response?.status !== 401) {
        console.error("Session error:", err);
      }
      // Don't set current user if fetch fails
    } finally {
      setPending(false);
    }
  };
  
  useEffect(() => {
    fetchProfile();
  }, []);
  
  // Show children immediately after checking session
  if (!pending) {
    return children;
  }
  
  // Optional: show loading state
  return null;
}