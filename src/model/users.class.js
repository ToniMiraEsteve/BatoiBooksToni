    import User from "./user.class";
    import api_user from "../services/users.api.js"

    export default class users{
        constructor(){
            this.data = []
        }

        async populate(){
            try {
                const api = await api_user.getDBUsers();
                this.data = api.map(user => new User(user.id, user.nick, user.email, user.password));
            } catch (error) {
                console.error("Error: Dato no encontrado", error);
            }
        }

        async addUser(user){
            try {
                const addedUser = await api_user.addDBUser(user);
                const newUser = new User(addedUser.id, addedUser.nick, addedUser.email, addedUser.password);
                this.data.push(newUser);
                return newUser;
            } catch (error) {
                console.error('Error al agregar el Usuario:', error.message);
                throw error;
            }
        }


        async removeUser(userId){
            try {
                const removedUser = await api_user.removeDBUser(userId);
                const index = await api_user.getDBUser(userId);
                if (index !== -1) {
                    this.data.splice(index,1);
                } 
                return removedUser;
            }catch(error){
                    throw new Error('No se ha encontrado un Usuario con esa id');
                }
        }


        async changeUser (Data){
            const index = this.data.findIndex(user => user.id === Data.id);
            if (index === -1) {
                throw new Error('Usuario no encontrado');
            }
                const changedUSer = await api_user.changeDBUser(Data);
                this.data[index] = new User(changedUSer.id,changedUSer.nick,changedUSer.email,changedUSer.password);
                try{
                return this.data[index];
            }catch(error){
                throw new Error('No se ha encontrado un libro con esa id');
            }
        }

        async changeUserPassword(userId, newPassword) {
            const index = this.data.findIndex(user => user.id === userId);
            if (index === -1) {
                throw new Error('Usuario no encontrado');
            }
            try {    
                const updatedUser = await api_user.changeDBUserPassword(userId, newPassword);               
                this.data[index].password = updatedUser.password; 
                return this.data[index]; 
            } catch (error) {
                console.error('Error al cambiar la contraseña:', error);
                throw new Error('No se pudo cambiar la contraseña');
            }
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