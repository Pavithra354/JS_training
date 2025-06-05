// //<html>
//   <head>
//     <title>Callback Hell Example</title>
//   </head>
//   <body>
//     <script>
      function register(callback) {
        setTimeout(() => {
          console.log("User registered");
          callback();
        }, 3000);
      }

      function verifyEmail(callback) {
        setTimeout(() => {
          console.log("Email verified");
          callback();
        }, 2000);
      }

      function login(callback) {
        setTimeout(() => {
          console.log("User logged in");
          callback();
        }, 1000);
      }

      // Callback hell
      register(() => {
        verifyEmail(() => {
          login(() => {
            console.log("Welcome to the dashboard!");
          });
        });
      });
//     //</script>
//   </body>
// </html>
