import React, { useState } from "react";
import { useEffect } from "react";
import { fetchuser } from "../helper/GettProfile";

export default function Dashboard() {
  const [user, setUser] = useState();
  useEffect(() => {
    fetchuser("/api/profile").then((data) => {
      setUser(data?.user);
    });
  }, []);
  console.log(user);
  return <div> dashboard</div>;
}
