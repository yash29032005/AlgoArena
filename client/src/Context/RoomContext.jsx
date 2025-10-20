/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useCallback, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export const BattleContext = createContext();

export const BattleProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]); // 🏹 All rooms

  // 🧭 Fetch All Rooms
  const fetchRooms = useCallback(async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/rooms`, {
        withCredentials: true,
      });
      setRooms(res.data);
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to load rooms");
    }
  }, []);

  // Load rooms once on mount (optional)
  useEffect(() => {
    fetchRooms();
  }, [fetchRooms]);

  return (
    <BattleContext.Provider
      value={{
        rooms,
        setRooms,
        fetchRooms,
      }}
    >
      {children}
    </BattleContext.Provider>
  );
};
