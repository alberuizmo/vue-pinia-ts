export interface DataUser {
  name: string;
  job: string;
}

export interface UserList {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

export interface GetUsersResponse {
  data: { data: UserList[] };
}
