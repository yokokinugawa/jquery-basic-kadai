$(function() {
  // ページが表示されたら
  $(window).on('click', function(){
    // 「今日の天気予報」の文字色を赤に
    $('#target').addClass('heading');
  });
});