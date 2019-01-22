$(document).ready(function() {
    $(".cross").click(function() {
        console.log("CROSS CLICK");
        //$(".main-container").attr("style", null);
        //$(".modal").attr("style", "display:none;");
        $(".modal").removeClass("show-menu");
    });
    $(".circle").click(function () {
        console.log("CIRCLE CLICK");
        //$(".modal").attr("style", null);
        //$(".main-container").attr("style", "display:none;");
        $(".modal").addClass("show-menu");
    });
});