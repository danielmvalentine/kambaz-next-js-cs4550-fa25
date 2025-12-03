"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import PeopleTable from "./Table";
import * as client from "../../client";

export default function PeoplePage() {
  const params = useParams();
  const id = params.id as string;
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    try {
      const data = await client.findUsersForCourse(id);
      console.log("Fetched users:", data);
      console.log("Any null users?", data.some((u: any) => u == null));
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [id]);

  return <PeopleTable users={users} fetchUsers={fetchUsers} />;
}