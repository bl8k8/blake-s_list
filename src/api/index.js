import axios from "axios";
import React, { useState, useEffect } from "react";

const BASE = "https://strangers-things.herokuapp.com/api/2007-UNF-RM-WEB-PT";

export async function getPosts() {
  try {
    const { data } = await axios.get(`${BASE}/posts`);
    const title = data.data.posts;
    console.log(title);
    console.log(title[0]);
    return title;
  } catch (error) {
    throw error;
  }
}

export async function getUser(name, pass) {
  try {
    const data = await axios.post(`${BASE}/users/login`, {
      user: { username: name, password: pass },
    });
    console.log(data.data.data.token);

    const userInfo = await getUserInfo(data.data.data.token);
    return userInfo;
  } catch (error) {
    throw error;
  }
}
export async function registerUser(name, pass) {
  return axios
    .post(`${BASE}/users/register`, {
      user: { username: name, password: pass },
    })
    .then(async (response) => {
      if (response.data.data.token) {
        const userInfo = await getUserInfo(response.data.data.token);
        return userInfo;
      }
    });
}

export async function getUserInfo(token) {
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
      console.log(result.data);
      return result.data;
    });
}
