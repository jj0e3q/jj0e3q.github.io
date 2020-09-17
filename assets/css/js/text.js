$(function() {
    var title = document.title,
      animSeq = [""],
        animIndex = 1,
        titleIndex = 0;
    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 1) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 200);
});
$(function() {
$(".typed").typed({
      strings: ['уёбище', "клоун", "", "stupid shit of a stupid shit"],
      typeSpeed: 150,
      loop: true,
      cursorChar: "|",
  });
});
