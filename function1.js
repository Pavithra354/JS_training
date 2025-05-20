 function bookDetails(Bookname, Bookid, publishDate) //parameters
 {
    let bookName = "java";
    console.log("Bookname:"+Bookname);
    console.log("bookid;"+Bookid);
    console.log("publishdate:"+publishDate);
// }
//  bookDetails("python", "505", "1987")   // arguments
//optonal parameters
// function bookDetails(Bookname, Bookid, publishDate = "1999") //parameters
// {
//     let bookName = "java";
//     console.log("Bookname:" + Bookname);
//     console.log("bookid;" + Bookid);
//     console.log("publishdate:" + publishDate);
// }
// bookDetails("python", "505")
//optonal parameters
// function bookDetails(Bookname, Bookid, publishDate) //parameters
// {
//     let bookName = "java";
//     console.log("Bookname:" + Bookname);
//     console.log("bookid;" + Bookid);
//     publishDate=publishDate ||"nodatementioned"
//     console.log("publishdate:" + publishDate);
// }
// bookDetails("python", "505") 
// //default parameters
// function bookDetails(Bookname, Bookid,dateofBirth="no dateofBirth",publishDate="publishDate not available") //parameters
// {
//     let bookName = "java";
//     console.log("Bookname:" + Bookname);
//     console.log("bookid:" + Bookid);
//     console.log("DOB:",+dateofBirth)
//     console.log("publishdate:" + publishDate);
// }
// bookDetails("python", "505") 
// // REST PARAMETERS
// function bookDetails(...additinalprams) //parameters
// {
//     console.log(additinalprams);
//     console.log("Bookname:" ,additinalprams[0]);
//     console.log("bookid:",additinalprams[1]);
//     console.log("DOB:",additinalprams[2])
//     console.log("publishdate:",additinalprams[3]);
// }
// bookDetails("python", "505","no dateofBirth","publishDate not available") 