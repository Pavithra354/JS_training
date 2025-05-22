//blockscope using arrays
 function rainbow()
 {
    let colors=["violet","indigo","blue","green","red","orange","yellow"]
   document.write("colors before sorting:"+colors);
   
   function sorting()
    {
        result=colors.sort();
        document.write("colors after  sorting:"+result);
        
   
    }
sorting();

}
 rainbow();