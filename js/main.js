//task 1
function alert(){
	if(window.navigator.online==true){
		alert("The browser is online")
	}
console.log("Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.")
}
alert();
//task 2
/*function reload(){
	setTimeout(function(){
	location.reload()
	},3000);
}
reload();*/

//task 3
/*function goToGoogle(){
	setTimeout(function(){
	history.forward(location.href = "https://www.google.com")
	},3000);
}
goToGoogle();*/
// task 4
var i=0;
function printName(){
	console.log(i);
	i===15 ? clearInterval(repeat) : i++;

}
var repeat=setInterval(printName,1000);
// task 5 
console.log(Math.round(Math.random()*10))
//task 6 
var users=[{
	name:"Sara",
	age:22,
    status:"inactive"
},{
	name:"Tamara",
	age:30,
	status:"inactive"

},{
	name:"Ana",
	age:21,
	status:"inactive"
},{
	name:"Jelena",
	age:15,
	status:"inactive"
},{
	name:"Sinisa",
	age:19,
	status:"inactive"
}
] 
var answer=prompt("what is your name?");
var arr=users.filter(function(item){
	return item.name==answer;
});
if(arr.length==0){
	console.log("User "+answer+"doesn't exist");
}else{
	users.forEach(function(item){
		if(item.name==name){
			users.status='active'
		};})
	localStorage.setItem("loggedIn",answer)
	console.log(localStorage.getItem("loggedIn"));
	setTimeout(function(){
		users.forEach(function(item){
			if(item.name==name){
				users.status='active'
			};
		});
		localStorage.removeItem("loggedIn");
		console.log(answer+"is logged out")
	},60000)
	}

