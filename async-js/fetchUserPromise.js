function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => {
        if (!response.ok) throw new Error("Network Error");

        return response.json();
      })
      .then((data) => resolve(data))
      .catch((err) => reject(err));
  });
}

const p = fetchUserData(1);
p.then(res=>console.log(res.name)).catch(err=>console.log(err))
