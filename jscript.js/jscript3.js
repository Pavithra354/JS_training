//Parameters and arguments

function GreetUser(name,age){
    console.log(`Hello,${name}! Your age is ${age}`);
}
GreetUser("Siri",20);

//optional parameters

function BookDetails(name,author,pages){
    let nopages=pages||"No of pages are not mentioned";

    console.log("BookName : " + name);
    console.log("AuthorName : " + author);
    console.log("No of Pages: " + nopages);
}
BookDetails( "The Alchemist","Paulo Coelho",208);
BookDetails( "The Hobbit","J.R.R. Tolkien");

//Default parameters
function BookDetails(name,author,pages="No of pages are not mentioned")
    {
    
    console.log("BookName : " + name);
    console.log("AuthorName : " + author);
    console.log("No of Pages: " + pages);
}
BookDetails( "The Alchemist","Paulo Coelho",208);
BookDetails( "The Hobbit","J.R.R. Tolkien");

//Rest Parameters
function BookDetails(...Parameters)
    {
    let name=Parameters[0];
    let author=Parameters[1];
    let pages=Parameters[2];
    console.log("BookName : " + name);
    console.log("AuthorName : " + author);
    console.log("No of Pages: " + pages);
}
BookDetails( "The Alchemist","Paulo Coelho",208);
BookDetails( "The Hobbit","J.R.R. Tolkien");


//Styling console with various styles in rest parameters
function Festival(name,...Details){
    console.log(`%c${name} %cis usually celebrated in %c${Details[0]}.The season of the festival is %c${Details[1]}`,"color:red", "color: black;", "color:blue","color:pink");
}
Festival("sankranthi","January","fall");

//updating
var Date="19-05-2025";
function Update(){
    Date="20-05-2025";

}
console.log(Date);
Update();
console.log(Date);