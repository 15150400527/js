function Book(name,author,number,publishing,price){
    this.name=name;
    this.author=author;
	this.number=number;
	this.publishing=publishing;
    this.price=price;
}
Book.prototype.show=function(){
    console.log(this.name);
}
function BookManagerSystem(){
    this.bookArr=[];//用来存储Book类对象
}
BookManagerSystem.prototype.addBook=function(name,author,number,publishing,price){
    for(var i=0;i<this.bookArr.length;i++){
        if(this.bookArr[i].name==name&&this.bookArr[i].author==author){
            console.log("图书已经存在");
            return false;
        }
    }
    //创建一个bool类的对象
    var book=new Book(name,author,number,publishing,price);
    this.bookArr.push(book);
    return true;
}