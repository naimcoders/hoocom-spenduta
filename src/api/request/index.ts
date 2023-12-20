import { firebaseApp } from "@/configs/fb";
import { getAuth } from "firebase/auth";

interface TReq {
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  path: string;
  errors: string;
  body: any;
  isNoAuth: boolean;
}

interface TRes<S> {
  code: number;
  errors: string | null;
  data: S;
}

export async function req<R>({ body, method, isNoAuth, errors, path }: TReq) {
  let token = "";
  if (!isNoAuth) {
    const user = getAuth(firebaseApp).currentUser;
    if (!user) {
      throw new Error("user not found");
    }
    token = await user.getIdToken();
  }

  const baseURL = import.meta.env.VITE_URI_BACKEND;
  const mReq = await fetch(baseURL + path, {
    method,
    body: ["GET", "DELETE"].includes(method) ? undefined : JSON.stringify(body),
    mode: "cors",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  const data: TRes<R> = await mReq.json();

  if (data.code > 200 && data.code < 299) {
    return data.data as R;
  } else {
    throw new Error(data.errors ?? "Unknown");
  }
}
