//default parameters
const bank=function(accountholdername,accountnumber,bankname,branchname,ifsccode,accounttype="savings")
{
    console.log("Account holder name:"+accountholdername);
    console.log("Account number: "+accountnumber);
    console.log("Bank name"+bankname);
    console.log("Branch name"+branchname);
    console.log("Ifsc code: "+ifsccode);//undefined
     
    console.log("Accounttype:"+accounttype);
}
bank("narmada","12345678","icici","madhapur");
//rest parameters..............
 function bank1(...parameters){
    console.log("customername;"+parameters[0]);
     console.log("account type;"+parameters[1]);
    console.log("account number;"+parameters[2]);
     console.log("bank name;"+parameters[3]);
}
bank1("lucky","current","34567234","hdfc");
//return type
function getitemdetails(){
                       let item=["itemno=1",itemname="pens",quantity="4"]
                       console.log("the items of:"+item[0]);
                       document.write(item);
                       return item;
}

 getitemdetails()
console.log("the item is :"+getitemdetails());