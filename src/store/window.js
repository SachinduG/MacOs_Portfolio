import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { INITIAL_Z_INDEX, WINDOW_CONFIG } from "../constants";

const useWindowStore = create(
  immer((set) => ({
    windows: WINDOW_CONFIG,
    nextZIndex: INITIAL_Z_INDEX + 1,
    openWindow: (windowKey, data = null) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isMinimized = false;
        win.isMaximized = false;
        win.isOpen = true;
        win.zIdex = state.nextZIndex;
        win.data = data ?? win.data;
        state.nextZIndex += 1;
      }),

    closeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isOpen = false;
        win.isMinimized = false;
        win.isMaximized = false;
        win.zIdex = INITIAL_Z_INDEX;
        win.data = null;
      }),

    focusWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        win.zIdex = state.nextZIndex;
        state.nextZIndex++;
      }),

    minimizeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isMinimized = true;
      }),

    toggleMaximizeWindow: (windowKey) =>
      set((state) => {
        const win = state.windows[windowKey];
        if (!win) return;
        win.isMaximized = !win.isMaximized;
        // Bring to front when maximizing or restoring
        win.zIdex = state.nextZIndex;
        state.nextZIndex++;
        win.isMinimized = false; // Un-minimize if maximized
      }),
  }))
);

export default useWindowStore;