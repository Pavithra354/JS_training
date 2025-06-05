// //<html>
//     <head>
//      <title>asynchronus calls</title>
//     </head>
//     <body>
//         <script>
 function box1()
         {
            setTimeout(()=>{

                console.log("this is box1");

            },2000);
            
        }
         function box2()
         {
            setTimeout(()=>{

                console.log("this is box2");

            },4000);
         }
         function box3()
         {
            setTimeout(()=>{

                console.log("this is box3");

            },5000);
         }
        box1();
        box2();
        box3();  
        

        {/* //</script>
    </body>
</html> */}