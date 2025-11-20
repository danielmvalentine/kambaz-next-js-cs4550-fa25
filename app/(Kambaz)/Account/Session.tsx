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
      // Silently handle 401/403/404 - user is not logged in
      if (err.response?.status === 401 || err.response?.status === 403 || err.response?.status === 404) {
        dispatch(setCurrentUser(null));
      } else {
        console.error("Session error:", err);
      }
    } finally {
      setPending(false);
    }
  };
  
  useEffect(() => {
    fetchProfile();
  }, []);
  
  if (pending) {
    return null;
  }
  
  return children;
}