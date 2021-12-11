import { Http } from "../app/http";

export const login = (uid, password) => {
  return Http.post("/users/login", {
    uid,
    password,
  });
};

export const register = (data) => {
  return Http.post("/users/register", data);
};

export const checkEmail = (email) => {
  return Http.post("/users/check-email", {
    email,
  });
};
