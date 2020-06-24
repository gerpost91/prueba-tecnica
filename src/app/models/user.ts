
// esta interface se utiliza para los que se reciben de usuarios
export interface IUser {
  id?: number;
  name: string;
  surname: string;
  role?: string;
  email: string;
  description?: string;
  image?: string;
  created_at?: string;
  updated_at?: string;
}
