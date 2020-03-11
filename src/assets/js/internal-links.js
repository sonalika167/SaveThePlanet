// function offsetAnchor() {
//     if (location.hash.length !== 0) {
//       window.scrollTo(window.scrollX, window.scrollY - 50);
//     }
//   }
  // // Captures click events of all <a> elements with href starting with #
  // $(document).on('click', 'a[href^="#"]', function(event) {
  //   // Click events are captured before hashchanges. Timeout
  //   // causes offsetAnchor to be called after the page jump.
  //   window.setTimeout(function() {
  //     offsetAnchor();
  //   }, 0);
  // });

  // window.setTimeout(offsetAnchor, 0);
  function validate() {
	
    if( document.myForm.firstname.value == "" ) {
           alert( "Please provide your Firstname!" );
           document.myForm.firstname.focus() ;
           return false;
        }
   
    if( document.myForm.lastname.value == "" ) {
           alert( "Please provide your Lastname!" );
           document.myForm.lastname.focus() ;
           return false;
        }	
    
    if( document.myForm.number.value == "" ) {
           alert( "Please provide your Contact Number" );
           document.myForm.number.focus() ;
           return false;
        }
    
   if( document.myForm.email.value == "" ) {
           alert( "Please provide your Email" );
           document.myForm.email.focus() ;
           return false;
        }
    
   if( document.myForm.money.value == "" ) {
       alert( "Please provide the amount" );
       document.myForm.money.focus() ;
       return false;
      }	
      if( document.myForm.card.value == "" ) {
         alert( "Please fill card details!" );
         document.myForm.card.focus() ;
         return false;
        }
   return( true );	   
}