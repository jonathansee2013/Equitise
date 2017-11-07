function numberWithCommas(x) {
  return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$(document).ready(function() {
  
  $.ajax({
    url: "https://api.equitise.exchange/offer"
  })
  .done(function(res){
    console.log(res);
    for (var i = 0; i < res.comingSoon.length; i++) {
      var item = res.comingSoon[i];
      
      // create box and boxInner
      var $box = $('<div>').addClass('box').appendTo('#box-container');
      var $boxInner = $('<div>').addClass('boxInner').appendTo($box);
      
      // put the name and raisedAmount in boxInner
      $('<h3>').text(item.name).appendTo($boxInner);
      $('<h4>').text('Raised Amount: $' + numberWithCommas(item.raisedAmount)).appendTo($boxInner);
      $('<h4>').text('Private: ' + item.private).appendTo($boxInner);
    }
  })
});
