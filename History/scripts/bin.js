function calcFakePages() {
    var length = $(".page").length * $(window).height();
    $("#fakeContent").css("height", (length + "px"));
}

$(calcFakePages);