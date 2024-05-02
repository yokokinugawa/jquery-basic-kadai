$(function() {
$('#change-color').on('click', function(){
     // 文字を赤にする   
    $('#target').css('color','red');
});
$('#change-text').on('click', function(){
    // 文字を変更する   
   $('#target').text('Hello!');
});
$('#fade-out').on('click', function(){
    // 文字をフェイドアウトする   
   $('#target').fadeOut();
});
$('#fade-in').on('click', function(){
    // 文字をフェイドインする   
   $('#target').fadeIn();
});
});