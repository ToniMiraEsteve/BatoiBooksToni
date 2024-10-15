import Module from "./module.class";
export default class modules {
    constructor(){
        this.data = []
    }

    populate(Datos){
        this.data = Datos.map(dato =>new Module(dato.code,dato.cliteral,dato.vliteral,dato.courseId));
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