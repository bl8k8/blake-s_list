import axios from "axios";

const BASE = "https://strangers-things.herokuapp.com/api/2007-UNF-RM-WEB-PT";

export async function getPosts() {
  try {
    const { data } = await axios.get(`${BASE}/posts`);
    const title = data.data.posts;
    console.log(title[0]);
    return title;
  } catch (error) {
    throw error;
  }
}
export async function getUser(name, pass) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      user: { username: name, password: pass },
    });

    return data;
  } catch (error) {
    throw error;
  }
}

getUser("iamme", "hello");
console.log(getUser("iamme", "hello"));
