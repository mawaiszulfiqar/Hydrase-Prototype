export interface ContextValues {
  username: string;
  setUsername: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  isPremium: boolean;
  setIsPremium: (value: boolean) => void;
  userLevel: number;
  setUserLevel: (value: number) => void;
  hyPoints: number;
  setHyPoints: (value: number) => void;
  currentlyLearning: string;
  setCurrentlyLearning: (value: string) => void;
}
