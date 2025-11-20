"use client"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import * as client from "../client";
import { setCurrentUser } from "../reducer";
import { RootState } from "../../store";

export default function Profile() {
  const [profile, setProfile] = useState<any>({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER"
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  useEffect(() => {
    // Redirect to signin if not logged in
    if (!currentUser) {
      router.push("/Account/Signin");
      return;
    }
    
    if (currentUser) {
      setProfile({
        username: currentUser.username || "",
        password: currentUser.password || "",
        firstName: currentUser.firstName || "",
        lastName: currentUser.lastName || "",
        dob: currentUser.dob || "",
        email: currentUser.email || "",
        role: currentUser.role || "USER"  // Make sure this is here!
      });
    }
  }, [currentUser]); // Only currentUser as dependency

  // Show loading while checking authentication
  if (!currentUser) {
    return null;
  }

  const updateProfile = async () => {
    try {
      const updatedProfile = await client.updateUser(profile);
      dispatch(setCurrentUser(updatedProfile));
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Update error:", error);
    }
  };

  const signout = async () => {
    await client.signout();
    dispatch(setCurrentUser(null));
    router.push("/Account/Signin");
  };

  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <div>
        <input 
          value={profile.username} 
          onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          placeholder="username" 
          className="wd-username form-control mb-2"
        />
        <input 
          value={profile.password} 
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          placeholder="password" 
          type="password"
          className="wd-password form-control mb-2" 
        />
        <input 
          value={profile.firstName} 
          onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
          placeholder="First Name" 
          id="wd-firstname" 
          className="form-control mb-2"
        />
        <input 
          value={profile.lastName} 
          onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
          placeholder="Last Name" 
          id="wd-lastname" 
          className="form-control mb-2"
        />
        <input 
          value={profile.dob} 
          onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          type="date" 
          id="wd-dob" 
          className="form-control mb-2"
        />
        <input 
          value={profile.email} 
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          type="email" 
          id="wd-email" 
          className="form-control mb-2"
        />
        <select 
          value={profile.role} 
          onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          id="wd-role" 
          className="form-control mb-2"
        >
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </select>
        <button onClick={updateProfile} className="btn btn-primary w-100 mb-2">
          Update
        </button>
        <button onClick={signout} className="wd-signout-btn btn btn-danger w-100">
          Sign out
        </button>
      </div>
    </div>
  );
}