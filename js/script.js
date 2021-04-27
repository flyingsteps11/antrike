$(document).ready(function () {
    const acc = document.getElementsByClassName("accordion");
    let i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
    $('.get-test-drive, .get-proposal, .proposal-btn, .buy-btn').on('click', () => {
        document.body.style.overflowY = 'hidden';
        document.querySelector('html').style.overflowY = 'hidden';
        $('#modal').addClass('overlay-visible');
    });
    $(document).mouseup(function (e) {
        var container = $("#modal");
        if (container.has(e.target).length === 0) {
            $('#modal').removeClass('overlay-visible');
            document.body.style.overflowY = 'auto';
            document.querySelector('html').style.overflowY = 'auto';
        }
    });
    const owl = $('#carousel-antrike').owlCarousel({
        loop: false,
        dotsEach: true,
        dotsData: true,
        dots: true,
        autoWidth: true
    });
    $('.owl-dot').click(function () {
        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
    });
    $('[data-fancybox="gallery"]').fancybox({
        padding: 0,
        autoSize: false,
        autoDimensions: false,
        fitToView: false,
        width: 1300,
        height: 800,
        margin: 0,
        helpers: {
            overlay: {
                locked: false
            }
        }
    });
});