<template>
    <div>
        <!-- <img src="../../assets/imgzou/logo.png" alt=""> -->
        <header>
            <div class="search">
                <div class="search-nav">
                    <div class="logo">
                        <img src="../../assets/imgzou/logo.png" alt="">
                    </div>
                    <div class="search-box">
                        <form action="">
                            <span class="inp"><input type="text" maxlength="60" name="" id="" placeholder="书籍、电影、音乐、小组、小站、成员" size="12"></span>
                            <a href="javascript:;" class="btn"><input type="submit" value="搜索"></a>
                        </form>
                    </div>
                    <div class="search-link">
                        <ul>
                            <li><a href="javascript:;" style="color: #908070;">读书</a></li>
                            <li><a href="javascript:;" style="color: #4aa0d6;">电影</a></li>
                            <li><a href="javascript:;" style="color: #f27300;">音乐</a></li>
                            <li><a href="javascript:;" style="color: #e95a0f;">同城</a></li>
                            <li><a href="javascript:;" style="color: #0c949c;">小组</a></li>
                            <li><a href="javascript:;" style="color: #389eac;">阅读</a></li>
                            <li><a href="javascript:;" style="color: #a1d9c8;font-size: 24px;">FM</a></li>
                            <li><a href="javascript:;" style="color: #525252;">时间</a></li>
                            <li><a href="javascript:;" style="color: #498c43;">豆品</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="login">
                <div class="login-warp">
                    <div class="login-login">
                        <div class="login-t">
                            <div class="login-trangle trangle">
                                <img src="../../assets/imgzou/index.png" alt="" title="扫码登录" style="cursor: pointer;">
                            </div>
                            <div style="height: 25px;">
                                <ul class="message">
                                    <li>短信登录/注册</li>
                                    <li class="active1">密码登录</li>
                                </ul>
                            </div>
                        </div>
                        <div class="login-message">
                            <div class="login-b">
                                <ul>
                                    <li style="font-size: 13px;height: 20px;line-height: 20px;margin-top: 10px;">
                                        <span style="color: #9b9b9b;">请仔细阅读</span>
                                        <a href="javascript:;" style="color: #41ac52;">豆瓣使用协议、隐私政策</a>
                                    </li>
                                    <li>
                                        <form action="">
                                            <input type="phone" placeholder="手机号" maxlength="13">
                                            <div class="area">
                                                <span style="padding: 0 10px;font-size: 16px;font-weight: bold;border-right: 1px solid #ccc;">+86</span>
                                            </div>
                                        </form>
                                    </li>
                                    <li>
                                        <form action="">
                                            <input type="text" placeholder="验证码">
                                            <div>
                                                <a href="javascript:;">获取验证码</a>
                                            </div>
                                        </form>
                                    </li>
                                    <li>
                                        <span>登录豆瓣</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" style="width: 10px;height: 10px;">
                                        <span style="font-size: 13px;">下次自动登录</span>
                                        <a href="javascript:;" style="color: #41ac52;">收不到验证码</a>
                                    </li>
                                    <li>
                                        <span>第三方登录：</span>
                                        <a href="javascript:;"><img src="../../assets/imgzou/微信.png" alt="" title="用微信登录"></a>&nbsp;&nbsp;&nbsp;
                                        <a href="javascript:;"><img src="../../assets/imgzou/微博.png" alt="" title="用微博登录"></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="login-b b2" style="display: block;">
                                <ul>
                                    <li style="font-size: 13px;height: 20px;line-height: 20px;margin-top: 10px;">
                                        <a href="javascript:;" style="color: #41ac52;position: absolute;right: 0px;">找回密码</a>
                                    </li>
                                    <li>
                                        <form action="">
                                            <input type="text" placeholder="手机号/邮箱">
                                        </form>
                                    </li>
                                    <li>
                                        <form action="">
                                            <input type="text" placeholder="密码">
                                        </form>
                                    </li>
                                    <li>
                                        <span>登录豆瓣</span>
                                    </li>
                                    <li>
                                        <input type="checkbox" style="width: 10px;height: 10px;">
                                        <span style="font-size: 13px;">下次自动登录</span>
                                        <a href="javascript:;" style="color: #41ac52;">收不到验证码</a>
                                    </li>
                                    <li>
                                        <span>第三方登录：</span>
                                        <a href="javascript:;"><img src="../../assets/imgzou/微信.png" alt="" title="用微信登录"></a>&nbsp;&nbsp;&nbsp;
                                        <a href="javascript:;"><img src="../../assets/imgzou/微博.png" alt="" title="用微博登录"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="login-copy">
                        <div class="login-t">
                            <div class="login-trangle trangle1">
                                <img src="../../assets/imgzou/index1.png" alt="" title="短信登录/注册" style="cursor: pointer;">
                            </div>
                            <div style="height: 25px;">
                                <ul>
                                    <li>二维码登录</li>
                                </ul>
                            </div>
                        </div>
                        <div class="login-b">
                            <img src="../../assets/imgzou/index3.png" alt="">
                            <p>请打开豆瓣客户端扫一扫</p>
                        </div>
                    </div>
                    <div class="app">
                        <div>豆瓣 <span>6.0</span></div>
                        <div><a href="javascript:;">下载豆瓣 App</a> <img src="../../assets/imgzou/icon_qrcode_green.png" alt="" class="app-smallImg"></div>
                        <div class="app-bigImg"><img src="../../assets/imgzou/app1.png" alt="">
                            <p style="font-size: 14px;color: #666;">iOS / Android 扫码直接下载</p>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div class="rot-content">
                <div class="rot">
                    <div class="r-left">
                        <p class="p1">热点内容 ······ (<a href="javascript:;">更多</a>)</p>
                        <div>
                            <div class="r-img">
                                <div class="r-img1 r-img2">
                                    <img src="../../assets/imgzou/rot1.webp" alt="">
                                    <div><a href="javascript:;">彩画集</a> <span>54张照片</span></div>
                                </div>
                                <div class="r-img2">
                                    <img src="../../assets/imgzou/rot2.webp" alt="">
                                    <div><a href="javascript:;">加尔各答</a> <span>48张照片</span></div>
                                </div>
                                <div class="r-img1">
                                    <img src="../../assets/imgzou/rot3.webp" alt="">
                                    <div><a href="javascript:;">Princess Mayblossom</a> <span>13张照片</span></div>
                                </div>
                                <div>
                                    <img src="../../assets/imgzou/rot4.webp" alt="">
                                    <div><a href="javascript:;">八仙洞</a> <span>20张照片</span></div>
                                </div>
                            </div>
                            <div class="r-chart">
                                <p><a href="javascript:;">走马观花才三载，单形只影又一年——今年的上海书展（上）</a></p>
                                <p style="color: #999;">挟书谤王蘑菇酱的日记</p>
                                <p style="color: #666;">一 “走马观花才三载，单形只影又一年”，就在上海书展才逛了没两天，我即脱口而出...</p>
                                <p><a href="javascript:;">2020.8.27 我做在地社工的那些日子</a></p>
                                <p><a href="javascript:;">夏日绿皮车之夏坝行——被时间遗忘的岛屿</a></p>
                                <p><a href="javascript:;">住进昂贵的商品房，为何很多人忍受得了糟糕的物业？</a></p>
                                <p><a href="javascript:;">真正的热爱 “入木三分”</a></p>
                                <p><a href="javascript:;">蟋蟀</a></p>
                                <p><a href="javascript:;">如何测绘一种生活</a></p>
                                <p><a href="javascript:;">7年，5个房子，1段历史</a></p>
                                <p><a href="javascript:;">老李的小卖部</a></p>
                                <p><a href="javascript:;">半步桥曾有个阿里郎</a></p>
                            </div>
                        </div>
                    </div>
                    <div class="r-right">
                        <div>
                            <img src="../../assets/imgzou/rot5.jpg" alt="">
                        </div>
                        <div>
                            <p class="p1">热点话题 ······ (<a href="javascript:;">去话题广场</a>)</p>
                        </div>
                        <div>
                            <p>
                                <a href="javascript:;">秋天开始的瞬间</a>
                                <span><span>1720.0</span>万次浏览</span>
                            </p>
                            <p>
                                <a href="javascript:;">纪念海蒂</a>
                                <span><span>2.3</span>万次浏览</span>
                            </p>
                            <p>
                                <a href="javascript:;">文学圣地巡礼</a>
                                <span><span>158.5</span>万次浏览</span>
                            </p>
                            <p>
                                <a href="javascript:;">拍一段以假乱真的倒放视频</a>
                                <span><span>4.8</span>万次浏览</span>
                            </p>
                            <p>
                                <a href="javascript:;">看见数字生活困境</a>
                                <span><span>35.5</span>万次浏览</span>
                            </p>
                            <p>
                                <a href="javascript:;">如果把看手机的时间用来做别的，我可以完成什么呢？</a>
                                <span><span>87.8</span>万次浏览</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name:"firstPage",
        // comonpents:{
        //     head,
        // }
    }
</script>

<style >
    @import "/static/css/head.css";
</style>>
