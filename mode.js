function Book(name,author,number,publishing,price){
    this.name=name;
    this.author=author;
	this.number=number;
	this.publishing=publishing;
    this.price=price;
}

function User(user,password,email){
	this.user=user;
	this.password=password;
	this.email=email;
}

Book.prototype.show=function(){
    console.log(this.name);
}
function BookManagerSystem(){
    this.bookArr=[];//用来存储Book类对象
	 this.userArr=[];
}


