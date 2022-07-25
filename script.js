

var objPeople = [
    {
        userName: "admin",
        passWord: "admin123",
    },
    {
        userName: "rana",
        passWord: "rana456",
    },
    {
        userName: "anar",
        passWord: "anar789",
    }

]
var currentUser =[
    {
        user: null
    }
]

function getInfo() {
    var userName = document.getElementById("userName").value;
    var passWord = document.getElementById("passWord").value;

    for(i=0; i< objPeople.length; i++)
    {
        if(userName == objPeople[i].userName && passWord == objPeople[i].passWord){
            console.log(userName + " is Logged In!!!");
            loggedIn(userName);
            currentUser.user = userName;
            return;
        }
        
    }
    console.log("Wrong username or Password!!!");
}

function loggedIn(user){
    window.location = '/index2.html';
}