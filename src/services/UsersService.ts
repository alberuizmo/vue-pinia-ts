import http from "@/http-common";
import type { DataUser, GetUsersResponse } from "@/types/Users";

export default class UsersService {
  getUsers(): Promise<GetUsersResponse> {
    return http.get("users?page=2");
  }
  getUserById(id: number): Promise<any> {
    return http.get(`users/${id}`);
  }
  create(data: DataUser): Promise<any> {
    return http.post("users", data);
  }
  update(id: number, data: DataUser): Promise<any> {
    return http.put(`users${id}`, data);
  }
  delete(id: number): Promise<any> {
    return http.delete(`users/${id}`);
  }
}
