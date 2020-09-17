window.addEventListener('load', function() {
    $(".app-smallImg").mouseenter(function() {
        $(".app-bigImg").show();
    });
    $(".app-bigImg").mouseleave(function() {
        $(this).hide();
    });

    // 登录处
    $('.message li').click(function() {
        $(this).addClass('active1').siblings().removeClass('active1');
        let index = $(this).index();
        $(".login-message .login-b").eq(index).show().siblings().hide();
    })

    $(".trangle").click(function() {
        $(".login-copy").show();
    })

    $(".trangle1").click(function() {
        $(".login-copy").hide();
    })
})