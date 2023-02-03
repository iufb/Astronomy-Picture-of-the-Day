import { create } from "zustand";
import { formatDate } from "../formatDate";
import { IApon } from "../types/apon.types";

const { VITE_NASA_API_KEY, VITE_NASA_API_URL } = import.meta.env;
interface IGetDataState {
  today?: IApon;
  customDate?: IApon;
  date: string;
  loading: boolean;
  updateDate: (newDate: string) => void;
  setToday: () => void;
  setCustomDate: () => void;
}
const today = formatDate();
const cashedDate = localStorage.getItem("date");
console.log(formatDate());
export const useGetData = create<IGetDataState>((set, get) => ({
  date: cashedDate ? cashedDate : today,
  loading: false,
  setToday: async () => {
    set({ loading: true });
    try {
      const res = await fetch(
        `${VITE_NASA_API_URL}${VITE_NASA_API_KEY}&date=${today}`
      );
      if (!res.ok) throw new Error("Failed to fetch! Try again.");
      set({ today: await res.json() });
    } catch (e) {
      console.log(e);
    } finally {
      set({ loading: false });
    }
  },
  updateDate: (newDate: string) => {
    console.log(newDate);
    set({ date: newDate });
    localStorage.setItem("date", newDate);
  },
  setCustomDate: async () => {
    set({ loading: true });
    try {
      const res = await fetch(
        `${VITE_NASA_API_URL}${VITE_NASA_API_KEY}&date=${get().date}`
      );
      if (!res.ok) throw new Error("Failed to fetch! Try again.");
      set({ customDate: await res.json() });
    } finally {
      set({ loading: false });
    }
  },

}));
