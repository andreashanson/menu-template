$(document).ready(function() {
    $(".cross").click(function() {
        console.log("CROSS CLICK");
        //$(".main-container").attr("style", null);
        //$(".modal").attr("style", "display:none;");
        $(".modal").removeClass("show-menu");
        $(".main-container").removeClass("hide-main");
    });
    $(".circle").click(function () {
        console.log("CIRCLE CLICK");
        //$(".modal").attr("style", null);
        //$(".main-container").attr("style", "display:none;");
        $(".modal").addClass("show-menu");
        $(".main-container").addClass("hide-main");
    });

    $(".modal a").click(function() {
        console.log("LINK CLICKED");
        $(".modal").removeClass("show-menu");
        $(".main-container").removeClass("hide-main");
    });
});