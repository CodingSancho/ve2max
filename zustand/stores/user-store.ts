import { createStore } from "zustand/vanilla";

export type UserState = {
  name: string;
  role: string;
};
export type UserStore = UserState;

export const defaultInitState: UserState = {
  name: "",
  role: "",
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()((set) => ({
    ...initState,
    changeName: () => set((state) => ({ name: state.name })),
    changeRole: () => set((state) => ({ role: state.role })),
  }));
};
