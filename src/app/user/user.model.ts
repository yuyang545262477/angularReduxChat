export interface User {
  id: string;
  name: string;
  avatarSrc: string;
  isClient?: boolean;
}

export interface UsersState {
  currentUser: User;
}
