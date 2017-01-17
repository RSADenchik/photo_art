// // Validate email regex
//    function isEmail(email) {
//        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//        return regex.test(email);
//    }
//
// // Validate phone number regex
//     function isNumber(number) {
//         var regex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
//         return regex.test(number);
//     }
//
//
//
//  $(document).ready( function() {
//
//      // Validation email
//
//          $('#btn-email').on('click', function() {
//              var email = $('#email');
//              var send_text =  email.val();
//          if( isEmail(send_text)) {
//              email.removeClass('input-error');
//              email.addClass('input-ok');
//              $('#pop-email').modal('hide');
//              $('#pop-phone').modal('show');
//              setTimeout(function(){
//                  $('body').addClass('modal-open');
//              }, 500);
//          }
//          else {
//              email.removeClass('input-ok');
//              email.addClass('input-error');
//          }
//      });
//
//
//      // Validation phone nubmer
//
//      // Phone mask
//
//      var number = $('#phone');
//      number.mask("+7(999) 999-9999");
//
//      $('#btn-phone').on('click', function() {
//
//          var send_number =  number.val();
//
//          if( isNumber(send_number) == true) {
//              number.removeClass('input-error');
//              number.addClass('input-ok');
//              $('#pop-phone').modal('hide');
//              $('#pop-size').modal('show');
//              setTimeout(function(){
//                  $('body').addClass('modal-open');
//              }, 500);
//          }
//
//          else {
//              number.removeClass('input-ok');
//              number.addClass('input-error');
//          }
//      });
//  });
