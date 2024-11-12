const SERVER = import.meta.env.VITE_URL_API;

async function getDBUsers() {
    const usuario = await fetch(SERVER + '/users');
    if (!usuario.ok) {
        throw new Error(`Error ${usuario.status} de la BBDD: ${usuario.statusText}`);
    };

    return usuario.json();
}

async function getDBUser(userId){
    const user = await fetch(SERVER + '/users?id=' + userId);
    if (!user.ok) {
        throw new Error(`Error ${user.status} de la BBDD: ${user.statusText}`);
    };

    return user.json();
}

async function addDBUser(user) {
    const response = await fetch(SERVER + '/users' , {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
      } 
      const addedUser = await response.json();
      return addedUser; 
}

async function removeDBUser(userId){
    const response = await fetch(SERVER + '/users/' + userId, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
      } 
      const removedUser = await response.json();
      return removedUser; 
}

async function changeDBUser(user){
    const response = await fetch(SERVER + '/users/' + user.id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
      } 
      const changedUser = await response.json();
      return changedUser; 
}

async function changeDBUserPassword(userId, newPassword) {
    const response = await fetch(SERVER + '/users/' + userId, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password: newPassword })
    })
    if (!response.ok) {
        throw `Error ${response.status} de la BBDD: ${response.statusText}`
      } 
      const changedPassword = await response.json();
      return changedPassword; 
}

export default{ 
    getDBUsers,
    getDBUser,  
    addDBUser,
    removeDBUser,
    changeDBUser,
    changeDBUserPassword
};