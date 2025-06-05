<html>
  <head>
    <title>Callback Sleep Example</title>
  </head>
  <body>
    <script>
      function sleep(milliseconds) {
        const start = new Date().getTime();
        const end = start + milliseconds;
        while (new Date().getTime() < end) {
          // Busy wait
        }
      }

      function watchLecture(callbackLecture) {
        sleep(5000); // 5 seconds
        console.log("Watched lecture");
        callbackLecture();
      }

      function takeNotes(callbackNotes) {
        sleep(3000); // 3 seconds
        console.log("Notes taken");
        callbackNotes();
      }

      function submitAssignment() {
        sleep(2000); // 2 seconds
        console.log("Assignment submitted");
      }

      // Nested callbacks (callback hell style)
      watchLecture(() => {
        takeNotes(() => {
          submitAssignment();
        });
      });
    </script>
  </body>
</html>