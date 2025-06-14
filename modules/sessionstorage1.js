//sessionStorage.setItem("userName","pavi");Add commentMore actions
// sessionStorage.setItem("BankName","SBI");

// sessionStorage.removeItem("userName");
// sessionStorage.removeItem("bankName");

//sessionStorage.clear();
sessionStorage.setItem("userName","pavi");

let userName = sessionStorage.getItem("userName");
document.write(`welcome${userName}`);