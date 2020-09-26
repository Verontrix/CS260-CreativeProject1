var $el, $ps, $up, totalHeight;

$(".collapsible-box .button").click(function() {

  totalHeight = 0

  $el = $(this);
  $p  = $el.parent();
  $up = $p.parent();
  $ps = $up.find("p:not('.read-more')");

  // measure how tall inside should be by adding together heights of all inside paragraphs (except read-more paragraph)
  $ps.each(function() {
    totalHeight += $(this).outerHeight();
  });

  $up
    .css({
      // Set height to prevent instant jumpdown when max height is removed
      "height": $up.height(),
      "max-height": 9999
    })
    .animate({
      "height": totalHeight
    });

  // fade out read-more
  $p.fadeOut();

  // prevent jump-down
  return false;

});
/*
// Place this inside of div class collapsible-box

<p class="read-more"><a href="#" class="button">Read More</a></p>
// go to https://css-tricks.com/text-fade-read-more/
.collapsible-box {
  max-height: 120px;
  position: relative;
  overflow: hidden;
}
.collapsible-box .read-more {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  margin: 0; padding: 30px 0;

  // "transparent" only works here because == rgba(0,0,0,0)
  background-image: linear-gradient(to bottom, transparent, black);
}*/
