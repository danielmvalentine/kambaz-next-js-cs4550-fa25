"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import PeopleTable from "./Table";
import PeopleDetails from "./Details";

export default function PeoplePage() {
  const params = useParams();
  const id = params.id as string;
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/courses/${id}/users`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [id]);

  console.log(":3 Selected user ID:", selectedUserId);

  return (
    <div>
      <PeopleTable 
        users={users} 
        fetchUsers={fetchUsers}
        // onSelectUser={(userId) => {
        //   console.log("onSelectUser called with:", userId);
        //   setSelectedUserId(userId);
        // }}
        onSelectUser={setSelectedUserId}  // Simplified - direct reference
      />
      <PeopleDetails 
        uid={selectedUserId} 
        onClose={() => setSelectedUserId(null)} 
      />
    </div>
  );
}