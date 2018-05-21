$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 100) {
            $(".menu").addClass("troca-fundo");
        } else {
            $(".menu").removeClass("troca-fundo");
        }
    });
});
$(function() {
    $(window).on("scroll", function() {
        if ($(window).scrollTop() > 100) {
            $(".menu2").addClass("troca-fundo");
        } else {
            $(".menu2").removeClass("troca-fundo");
        }
    });
});
$(".scrollSuave").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1000, function() {
            window.location.hash = hash;
        });
    }
});
$(function() {
    var sobreMimEl = $('.sobreMim'),
        sobreMimElOffSet = sobreMimEl.offset().top / 2,
        documentEl = $(document);
    documentEl.on('scroll', function() {
        if (documentEl.scrollTop() > sobreMimElOffSet && sobreMimEl.hasClass('hidden')) sobreMimEl.removeClass('hidden');
    });
})();
document.getElementById('foto').addEventListener('click', function() {
    this.classList.toggle('mostra');
}, false);