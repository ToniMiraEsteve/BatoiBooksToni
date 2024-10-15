import User from "./user.class";
export default class users{
    constructor(){
        this.data = []
    }

    populate(Datos){
        this.data = Datos.map(dato =>new User(dato.id,dato.nick,dato.email,dato.password));
    }

    addUser(user){
        const index = this.data.reduce((maximoID, user) => Math.max(maximoID,user.id), 0);
        user.id = index +1;
        const newUser = new User(user.id,user.nick,user.email,user.password);
        this.data.push(newUser);
        return newUser;
    }


    removeUser(userId){
        const index = this.data.findIndex((user) => user.id === userId);

        if (index !== -1) {
            this.data.splice(index,1);
        } else {
            throw new Error('No se ha encontrado un libro con esa id');
        }
    }


    changeUser (Data){
        const newUser = new User(Data.id,Data.nick,Data.email,Data.password);
        const index = this.data.findIndex(usuario => usuario.id === newUser.id);
        if (index === -1) {
            throw new Error('No se ha encontrado un usuario con esa id');
        } 
        this.data[index] = newUser;
        return newUser;
    }

    toString(){
        return this.data.map(user => user.toString()).join('\n');
    }

    getUserById( userId) {
        const usuario = this.data.find((user) => user.id === userId);
        if(usuario){
            return usuario;
        }
        throw new Error('No se ha encontrado un usuario con esa id');
    }

    getUserIndexById(userId) {
        const usuario = this.data.findIndex((user) => user.id === userId);
        if(usuario !== -1){
            return usuario;
        }
        throw new Error('No se ha encontrado un usuario con esa id');
    }

    getUserByNickName(nick) {
        const usuario = this.data.find((user) => user.nick === nick);
        if(usuario){
            return usuario;
        }
        throw new Error('No se ha encontrado un usuario con ese nombre');
    }
}