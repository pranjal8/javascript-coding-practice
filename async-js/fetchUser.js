/* 
Fetching Multiple Users with Async/Await
*/

async function getUsers(userIds) {
  try {
    let users = await Promise.all(
      userIds?.map((id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
          (response) => response.json()
        );
      })
    );

    return users?.map((user) => user.name);
  } catch (error) {
    console.log(error);
    return [];
  }
}

// (async () => {
//     const names = await getUsers([1, 2, 3]);
//     console.log(names); // ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch']
//   })();

getUsers([1, 2, 3])
  .then(names => console.log(names))
  .catch(error => console.error('Error:', error));
// ['Leanne Graham', 'Ervin Howell', 'Clementine Bauch'] or error message