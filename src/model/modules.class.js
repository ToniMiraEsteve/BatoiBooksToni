import Module from "./module.class.js";
import api_modules from "../services/modules.api.js"

export default class modules {
    constructor(){
        this.data = []
    }

    async populate() {
        try {
            const api = await api_modules.getDBModules();
            this.data = api.map(module => new Module(module.code, module.cliteral, module.vliteral, module.courseId));
        } catch (error) {
            console.error("Error: Dato no encontrado", error);
        }
    }

    getModuleByCode( moduleCode) {
        const module = this.data.find((module) => module.code === moduleCode);
        if(module){
            return module;
        }
        throw new Error('No se ha encontrado un modulo con esa id');
    }

    toString(){
        return this.data.map(module => module.toString()).join('\n');
    }
}