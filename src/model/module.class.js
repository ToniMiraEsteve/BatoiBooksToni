export default class module{
    constructor(code,cliteral,vliteral,courseId){
        this.code = code;
        this.cliteral = cliteral;
        this.vliteral = vliteral;
        this.courseId = courseId;
    }

    toString(){
        return "Codigo: " + this.code + ", Nombre Modulo en castallano: " + this.cliteral + ", Nombre Modulo en valenciano: " + this.vliteral + ", Id del curso: " + this.courseId;
    }
}