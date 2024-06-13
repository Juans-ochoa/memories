const URL = "http://localhost:5000/posts";

export const getApiPosts = async () => {
  const req = await fetch(URL);
  if (req.ok) {
    const data = await req.json();
    return data;
  }
};

export const createApiPost = async (post) => {
  const req = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  if (req.ok) {
    const data = await req.json();
    return data;
  }
};

export const updateApiPost = async (id, post) => {
  const req = await fetch(URL + `/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });

  if (req.ok) {
    const data = await req.json();
    return data;
  }
};

export const deleteApiPost = async (id) => {
  const req = await fetch(URL + `/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (req.ok) {
    const data = await req.json();
    return data;
  }
};
