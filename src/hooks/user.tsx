import * as React from "react";
import type { User } from "../types/user"; 
import type { Dispatch, SetStateAction } from "react";

const UserContext = React.createContext<
  { user: User; setUser: Dispatch<SetStateAction<User>> } | undefined
>(undefined);

export function useUser() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("Context has not been initialized");
  }
  return context;
}

export function UserProvider(props: { children: React.ReactNode }) {
  const [user, setUser] = React.useState({
    name: "",
    lastName: "",
    birthDay: "",    
    document: "",
    documentType: "",
    phone: "",
    privacy: false,
    commercial: false,
    plan: null,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}
