(function($) { // jQuery
    $(function() {  // DOM ready
        $(".contents__wrap").hide();
        $(".contents__wrap:first").show();
    
        $("ul.after li").click(function () {
            $("ul.after li").removeClass("active").css("color", "#333");
            //$(this).addClass("active").css({"color": "darkred","font-weight": "bolder"});
            $(this).addClass("active").css("color", "darkred");
            $(".contents__wrap").hide()
            const activeTab = $(this).attr("rel");
            $("#" + activeTab).fadeIn()
        });
    });
});

