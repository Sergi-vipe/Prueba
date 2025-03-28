

$(document).ready(function () {

    $('.faq-heading').click(function () {
       
        var parentLi = $(this).parent('li');
        
        parentLi.toggleClass('the-active');

        parentLi.find('.faq-text').slideToggle();

        var icon = $(this).find('.icon');
        icon.toggleClass('open');

         var currentText = $(this).find('span').text();
         if (currentText.charAt(0) === '+') {
             $(this).find('span').text(currentText.replace('+', '-'));
         } else {
             $(this).find('span').text(currentText.replace('-', '+'));
         }
    });
});