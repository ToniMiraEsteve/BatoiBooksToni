export default class book{
    constructor(bookData){
        this.id = bookData.id;
        this.userId = bookData.userId;
        this.moduleCode = bookData.moduleCode;
        this.publisher = bookData.publisher;
        this.price = bookData.price;
        this.pages = bookData.pages;
        this.status = bookData.status;
        this.photo = bookData.photo || '';
        this.comments = bookData.comments || '';
        this.soldDate = bookData.soldDate || ''
        }

    toString(){
        return "Id del libro: " + this.id + ", id del usuario: " + this.userId + ", precio: " + this.price;
    }
}