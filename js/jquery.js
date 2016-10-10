$(document).ready(function() {
$(function() {
      // Select link by id and add click event
      $('#anchor1').click(function() {

        // Animate Scroll to #bottom
        $('html,body').animate({
          scrollTop: $("#more").offset().top }, // Tell it to scroll to the top #bottom
          2000 // How long scroll will take in milliseconds
        );

        // Prevent default behavior of link
        return false;
      });
    });



// $(function() {
//       // Select link by id and add click event
//       $('#link2').click(function() {

//         // Animate Scroll to #bottom
//         $('html,body').animate({
//           scrollTop: $("#part-two").offset().top }, // Tell it to scroll to the top #bottom
//           2000 // How long scroll will take in milliseconds
//         );

//         // Prevent default behavior of link
//         return false;
//       });
//     });
});