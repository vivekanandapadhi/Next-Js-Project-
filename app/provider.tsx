"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { UserDetailContext } from "@/context/UserDetailContext";
import { UserInputContext } from "@/context/UserInputContext";

function Provider({ children }: any) {
  const [userDetail, setUserDetail] = useState<any>(null);
  const [userDesignRequest, setUserDesignRequest] = useState<any>(null);

  const createNewUser = async () => {
    try {
      const result = await axios.post("/api/user");
      setUserDetail(result.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    createNewUser();
  }, []);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <UserInputContext.Provider
        value={{ userDesignRequest, setUserDesignRequest }}
      >
        <div>{children}</div>
      </UserInputContext.Provider>
    </UserDetailContext.Provider>
  );
}

export default Provider;
