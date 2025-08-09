export interface IUser {
  id: number;
  name: string;
  email: string;
  avatar?: string;
}

export interface IUsersState {
  data: IUser[];
  loading: boolean;
  error: string | null;
}
