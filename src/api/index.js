import axios from "axios";

const BASE = "https://strangers-things.herokuapp.com/api/2007-UNF-RM-WEB-PT";
export async function deletePost(token, postID) {
  await axios.delete(`${BASE}/posts/${postID}`, {
    headers: {
      "Content-Type": "application/json",

      Authorization: "Bearer " + token,
    },
  });
}

export async function getPosts(token) {
  try {
    const { data } = await axios.get(`${BASE}/posts`, {
      headers: {
        "Content-Type": "application/json",

        Authorization: "Bearer " + token,
      },
    });
    const title = data.data.posts;
    console.log(title);

    return title;
  } catch (error) {
    throw error;
  }
}
export async function sendMessage(token, postID, information) {
  return await axios.post(
    `${BASE}/posts/${postID}/messages`,
    {
      message: {
        content: information,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",

        Authorization: "Bearer " + token,
      },
    }
  );
}
export async function createPost(token, titl, descript, pric, deliver) {
  return await axios.post(
    `${BASE}/posts`,
    {
      post: {
        title: titl,
        description: descript,
        price: "$" + pric,
        willDeliver: deliver,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",

        Authorization: "Bearer " + token,
      },
    }
  );
}

export function getUser(name, pass) {
  return axios.post(`${BASE}/users/login`, {
    user: { username: name, password: pass },
  });
}

export function registerUser(name, pass) {
  return axios.post(`${BASE}/users/register`, {
    user: { username: name, password: pass },
  });
}

export function getUserInfo(token) {
  return axios
    .get(
      `${BASE}/users/me`,

      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    )
    .then((result) => {
      return result.data;
    });
}
