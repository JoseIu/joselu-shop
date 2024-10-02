import { create } from 'zustand';

interface State {
  isSidebarOpen: boolean;
  openSideMenu: () => void;
  closeSideMenu: () => void;
}

export const useUIStore = create<State>()((set) => ({
  isSidebarOpen: false,
  openSideMenu: () => set({ isSidebarOpen: true }),
  closeSideMenu: () => set({ isSidebarOpen: false }),
}));
