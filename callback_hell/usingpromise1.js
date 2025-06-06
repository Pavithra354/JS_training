     
            const myPromise = new Promise((resolve, reject) => {

            let success=true;//checking condition
            if(success)
          {
            resolve("successfully completed...");//success
          }
          else{
            reject("something went wrong try again!");//reject
          }
          });
          
          myPromise.then((result)=>{
             console.log(result);//successfully completed
           }).catch((exp)=>
           {
            console.log(exp);
          });

          //to check false
           function getmyfirstpromise()
          {
             const myPromise = new Promise((resolve, reject) => {

            let success=true;//checking condition
            if(success)
          {
           resolve("successfully completed...");//success
          }
          else{
            reject("something went wrong try again!");//reject
          }
          });
          }
        
         getmyfirstpromise().then((result)=>{
            console.log(result);//successfully completed
          }).catch((exp)=>
          {
            console.error(exp);
          });