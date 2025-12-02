"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import PeopleTable from "./Table";

export default function PeoplePage() {
  const params = useParams();
  const id = params.id as string;
  const [users, setUsers] = useState<any[]>([]);

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

  return (
    <div>
      <PeopleTable 
        users={users} 
        fetchUsers={fetchUsers}
      />
    </div>
  );
}