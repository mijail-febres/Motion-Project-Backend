export const setTokenAndUser = (token, userInfo) => {
  return {
    type: "setTokenAndUser",
    payload: [token, userInfo],
  };
};

export const setToken = (token) => {
  return {
    type: "setToken",
    payload: token,
  };
};

export const setUserInfo = (user) => {
  return {
    type: "setUserInfo",
    payload: user,
  };
};

export const setUserClicked = (user) => {
  console.log("setting user", user);
  return {
    type: "setUserClicked",
    payload: user,
  };
};

export const getUserToken = (dispatch, email, password) => {
  const url = "https://motion.propulsion-home.ch/backend/api/auth/token/";
  const headers = new Headers({
    "Content-Type": "application/json",
  });
  const body = {
    email: email,
    password: password,
  };
  const method = "POST";
  const config = {
    method,
    headers,
    body: JSON.stringify(body),
  };
  fetch(url, config)
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("motion-auth-token", data.access);
      dispatch(setTokenAndUser(data.access, data.user));
    });
};

export const getUserInfo = (dispatch, token) => {
  const url = "https://motion.propulsion-home.ch/backend/api/users/me/";
  const headers = new Headers({
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  });
  const config = {
    headers,
  };

  fetch(url, config)
    .then((res) => res.json())
    .then((data) => {
      dispatch(setUserInfo(data));
    });
};

export const logOut = () => {
  return {
    type: "logOut",
  };
};
