import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PlayceState {
  favorites: string[]; // store station ids
  completedActivities: string[]; // store activity/station ids
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;
  markCompleted: (id: string) => void;
  isCompleted: (id: string) => boolean;
}

export const useStore = create<PlayceState>()(
  persist(
    (set, get) => ({
      favorites: [],
      completedActivities: [],
      
      addFavorite: (id) => set((state) => ({ 
        favorites: state.favorites.includes(id) ? state.favorites : [...state.favorites, id] 
      })),
      
      removeFavorite: (id) => set((state) => ({ 
        favorites: state.favorites.filter(favId => favId !== id) 
      })),
      
      isFavorite: (id) => get().favorites.includes(id),
      
      markCompleted: (id) => set((state) => ({
        completedActivities: state.completedActivities.includes(id) 
          ? state.completedActivities 
          : [...state.completedActivities, id]
      })),
      
      isCompleted: (id) => get().completedActivities.includes(id),
    }),
    {
      name: 'playce-storage', 
    }
  )
);
