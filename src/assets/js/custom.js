//  Mobile Navigation
    $(document).ready(function () {
      $('.navbar-toggler, .nav-area').click(function () {
        $('.nav-area').css('display','block');
        $('.nav-area').animate({
          right: '0px'
        });
       
        return false;
      });

      $('.close-btn').click(function () {
        $('.nav-area').animate({
          right: '-330px'
        });
        $('.nav-area').css('display','none');
        return false;

      });

      $(document).click(function () {
        $('.nav-area').animate({
          right: '-330px'
        });
        $('.nav-area').css('display','none');

      });

      $('.drop_down').click(function () {
        $('.submenu').slideToggle();
        return false;
      });

    });
  