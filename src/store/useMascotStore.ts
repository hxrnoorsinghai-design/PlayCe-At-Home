import { create } from 'zustand';

type MascotMode = 'roam' | 'guide' | 'hidden';

interface MascotState {
  mode: MascotMode;
  guideMessageEn: string | null;
  guideMessageEs: string | null;
  setMode: (mode: MascotMode) => void;
  setGuideMessage: (en: string | null, es: string | null) => void;
}

export const useMascotStore = create<MascotState>((set) => ({
  mode: 'roam',
  guideMessageEn: null,
  guideMessageEs: null,
  setMode: (mode) => set({ mode }),
  setGuideMessage: (en, es) => set({ guideMessageEn: en, guideMessageEs: es }),
}));
