import { req } from ".";
import queryString from "query-string";
import { TBaseUser } from "@/types/commonTypes";

interface User {
  id: string;
  name: string;
}

interface RequsetPaging {
  limit: number;
  page: number;
  search: string;
}

interface ResponsePaging<T> {
  canNext: boolean;
  page: number;
  limit: number;
  items: T[];
}

class Api {
  private static instance: Api;
  private constructor() {}
  public static getInstance(): Api {
    if (!Api.getInstance) {
      Api.instance = new Api();
    }
    return Api.instance;
  }

  private path = "/user";

  async find(r: RequsetPaging): Promise<ResponsePaging<User>> {
    const querys = queryString.stringify(
      {
        page: r.page,
        limit: r.limit,
        search: r.search,
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );

    return await req<ResponsePaging<User>>({
      body: undefined,
      errors: "",
      isNoAuth: false,
      method: "GET",
      path: this.path + `?${querys}`,
    });
  }

  async findById(userId: string): Promise<TBaseUser> {
    return await req<TBaseUser>({
      body: undefined,
      errors: "",
      isNoAuth: false,
      method: "GET",
      path: this.path + `${userId}`,
    });
  }
}

interface ApiUserInfo {
  find(r: RequsetPaging): Promise<ResponsePaging<User>>;
  findById(userId: string): Promise<TBaseUser>;
}

export function getUserApiInfo(): ApiUserInfo {
  return Api.getInstance();
}
