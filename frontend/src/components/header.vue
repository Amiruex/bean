<template>
<div id="app">
    <div id="db-global-nav" class="global-nav">
        <div class="bd">
            <div class="top-nav-info">
                <ul>
                    <li>
                        <a id="top-nav-doumail-link" href="https://www.douban.com/doumail/">豆邮</a>
                    </li>
                    <li class="nav-user-account">
                        <a target="_blank" href="https://accounts.douban.com/passport/setting/" class="bn-more">
                            <span>登录/注册</span><span class="arrow"></span>
                        </a>
                        <div class="more-items">
                            <table cellpadding="0" cellspacing="0">
                                <tbody>
                                    <tr>
                                        <td>
                                            <a href="https://www.douban.com/mine/">个人主页</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a target="_blank" href="https://www.douban.com/mine/orders/">我的订单</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a target="_blank" href="https://www.douban.com/mine/wallet/">我的钱包</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a target="_blank" href="https://accounts.douban.com/passport/setting/">帐号管理</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <a href="https://www.douban.com/accounts/logout?source=main&ck=eYDO">退出</a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="top-nav-reminder">
                <a href="https://www.douban.com/notification/" class="lnk-remind">提醒</a>
                <div id="top-nav-notimenu" class="more-items">
                    <div class="bd">
                        <p>加载中...</p>
                    </div>
                </div>
            </div>

            <div class="top-nav-doubanapp">
                <a href="https://www.douban.com/doubanapp/app?channel=top-nav" class="lnk-doubanapp">下载豆瓣客户端</a>
                <div id="doubanapp-tip" style="display: none;">
                    <a href="https://www.douban.com/doubanapp/app?channel=qipao" class="tip-link">豆瓣 <span class="version">6.0</span> 全新发布</a>
                    <a href="javascript: void 0;" class="tip-close">×</a>
                </div>
                <div id="top-nav-appintro" class="more-items">
                    <p class="appintro-title">豆瓣</p>
                    <p class="qrcode">扫码直接下载</p>
                    <div class="download">
                        <a href="https://www.douban.com/doubanapp/redirect?channel=top-nav&direct_dl=1&download=iOS">iPhone</a>
                        <span>·</span>
                        <a href="https://www.douban.com/doubanapp/redirect?channel=top-nav&direct_dl=1&download=Android" class="download-android">Android</a>
                    </div>
                </div>
            </div>

            <div class="global-nav-items">
                <ul>
                    <li class="on">
                        <a href="https://www.douban.com" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-main&quot;,&quot;uid&quot;:&quot;223399930&quot;}">豆瓣</a>
                    </li>
                    <li class="">
                        <a href="https://book.douban.com" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-book&quot;,&quot;uid&quot;:&quot;223399930&quot;}">读书</a>
                    </li>
                    <li class="">
                        <a href="https://movie.douban.com" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-movie&quot;,&quot;uid&quot;:&quot;223399930&quot;}">电影</a>
                    </li>
                    <li class="">
                        <a href="https://music.douban.com" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-music&quot;,&quot;uid&quot;:&quot;223399930&quot;}">音乐</a>
                    </li>
                    <li class="">
                        <a href="https://www.douban.com/location" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-location&quot;,&quot;uid&quot;:&quot;223399930&quot;}">同城</a>
                    </li>
                    <li class="">
                        <a href="https://www.douban.com/group" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-group&quot;,&quot;uid&quot;:&quot;223399930&quot;}">小组</a>
                    </li>
                    <li class="">
                        <a href="https://read.douban.com&#47;?dcs=top-nav&amp;dcm=douban" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-read&quot;,&quot;uid&quot;:&quot;223399930&quot;}">阅读</a>
                    </li>
                    <li class="">
                        <a href="https://douban.fm&#47;?from_=shire_top_nav" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-fm&quot;,&quot;uid&quot;:&quot;223399930&quot;}">FM</a>
                    </li>
                    <li class="">
                        <a href="https://time.douban.com&#47;?dt_time_source=douban-web_top_nav" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-time&quot;,&quot;uid&quot;:&quot;223399930&quot;}">时间</a>
                    </li>
                    <li class="">
                        <a href="https://market.douban.com&#47;?utm_campaign=douban_top_nav&amp;utm_source=douban&amp;utm_medium=pc_web" target="_blank" data-moreurl-dict="{&quot;from&quot;:&quot;top-nav-click-market&quot;,&quot;uid&quot;:&quot;223399930&quot;}">豆品</a>
                    </li>
                </ul>
            </div>

        </div>
    </div>
    <div id="db-nav-sns" class="nav">
        <div class="nav-wrap">
            <div class="nav-primary">

                <div class="nav-logo">
                    <a href="https://www.douban.com">豆瓣社区</a>
                </div>

                <div class="nav-search">
                    <form action="https://www.douban.com/search" method="get">
                        <fieldset>
                            <legend>搜索：</legend>
                            <label for="inp-query">搜索你感兴趣的内容和人...</label>
                            <div class="inp">
                                <input type="hidden" name="source" value="suggest">
                                <input id="inp-query" name="q" size="22" maxlength="60" autocomplete="off" value="">
                            </div>
                            <div class="inp-btn"><input type="submit" value="搜索"></div>
                        </fieldset>
                    </form>
                </div>

                <div class="nav-items">
                    <ul>
                        <li>
                            <router-link to="/myHome">首页</router-link>
                        </li>
                        <li>
                            <router-link to="/mine">我的豆瓣</router-link>
                        </li>
                        <li>
                            <router-link to="/explore">浏览发现</router-link>
                        </li>
                        <li class="new">
                            <router-link to="/gallery">话题广场</router-link>
                            <img src="https://img3.doubanio.com/f/shire/e49eca1517424a941871a2667a8957fd6c72d632/pics/new_menu.gif" alt="new" style="position: absolute; top: -7px; right: -13px;" />
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    </div>

</div>
</template>

<script>
import myHome from './Mine/myHome.vue'

export default {
    name: 'Header',
    components: {
        myHome
    }
}
</script>

<style scoped>
ul,
li {
    margin: 0;
    padding: 0;
}

.global-nav {
    height: 28px;
    color: #d5d5d5;
    background-color: #545652;
    min-width: 950px;
    font-size: 12px;
}

#db-global-nav .top-nav-info {
    float: right;
    margin: 0 12px 0 0;
    line-height: 28px;
}

#db-global-nav .top-nav-info ul,
#db-global-nav .top-nav-info li {
    display: inline-block;
    /* display: inline; */
    zoom: 1;
}

#db-global-nav .top-nav-info a {
    display: inline-block;
    *display: inline;
    zoom: 1;
    margin: 0;
    padding: 0 12px;
    height: 28px;
}

#db-global-nav a:link,
#db-global-nav a:visited,
#db-global-nav a:hover,
#db-global-nav a:active {
    color: #d5d5d5;
}

#db-global-nav a {
    cursor: pointer;
    text-decoration: none;
}

#db-global-nav .nav-user-account {
    position: relative;
}

#db-global-nav .nav-user-account .more-items {
    left: auto;
    right: 6px;
}

#db-global-nav .more-items {
    display: none;
    position: absolute;
    left: 0;
}

#db-global-nav .bn-more span {
    display: inline-block;
    *display: inline;
    zoom: 1;
    vertical-align: baseline;
}

#db-global-nav .arrow {
    position: relative;
    top: -2px;
    left: 2px;
    border-width: 3px 3px 0;
    border-color: #d5d5d5 transparent transparent transparent;
    border-style: solid dashed dashed dashed;
    width: 0;
    height: 0;
    font-size: 0;
    line-height: 0;
}

#db-global-nav table,
#db-global-nav td,
#db-global-nav th {
    font-size: 12px;
}

table {
    border-collapse: collapse;
    border: none;
    padding: 0;
    margin: 0;
}

#db-global-nav .top-nav-reminder {
    position: relative;
    float: right;
    margin-right: 5px;
    line-height: 28px;
}

#db-global-nav .top-nav-reminder .lnk-remind {
    display: inline-block;
    display: inline;
    zoom: 1;
    padding: 0 12px;
    height: 28px;
}

#db-global-nav .top-nav-doubanapp {
    position: relative;
    float: right;
    margin-right: 5px;
    line-height: 28px;
}

#db-global-nav .top-nav-doubanapp .lnk-doubanapp {
    display: inline-block;
    *display: inline;
    zoom: 1;
    padding: 0 8px;
    height: 28px;
}

#db-global-nav .global-nav-items {
    font-size: 0;
}

#db-global-nav .global-nav-items li {
    display: inline-block;
    zoom: 1;
    line-height: 28px;
    font-size: 12px;
    vertical-align: baseline;
}

#db-global-nav .global-nav-items a {
    display: inline-block;
    /* zoom: 1; */
    padding: 0 12px;
    height: 28px;
}

#db-global-nav a:hover,
#db-global-nav a:active {
    color: #fff;
    background-color: transparent;
}

/* tab */
#db-nav-sns {
    position: relative;
    zoom: 1;
    background: #edf4ed;
}

.nav {
    width: 100%;
    min-width: 1040px;
    overflow: hidden;
    zoom: 1;
    margin-bottom: 50px;
}

#db-nav-sns .nav-wrap {
    border: none;
}

#db-nav-sns .nav-primary {
    overflow: hidden;
    padding-top: 12px;
    zoom: 1;
}

#db-nav-sns .nav-primary {
    width: 1040px;
}

.nav .nav-primary {
    position: relative;
    padding: 10px 0 5px;
    overflow: hidden;
    zoom: 1;
}

.nav .nav-primary,
.nav .nav-secondary {
    width: 1040px;
    margin: 0 auto;
    /* padding-bottom: 0;*/
    overflow: hidden;
    zoom: 1;
}

#db-nav-sns .nav-logo {
    width: 184px;
    height: 57px;
    background-position: 0 10px;
}

.nav .nav-logo {
    float: left;
    height: 56px;
    width: 145px;
    margin: 0 13px 0 0;
    background-repeat: no-repeat;
    background-position: 0px 12px;
    background-size: 153px 30px;
    background-image: url(//img3.doubanio.com/dae/accounts/resources/527f922/sns/assets/lg_main@2x.png);
    background-image: url(//img3.doubanio.com/dae/accounts/resources/527f922/sns/assets/lg_main_a11_1.png) \9;
}

#db-nav-sns a:link,
#db-nav-sns a:visited {
    color: #072;
}

.nav .nav-logo a {
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    line-height: 100em;
}

a:visited {
    color: #669;
    text-decoration: none;
}

a:link {
    color: #37a;
    text-decoration: none;
}

a {
    cursor: pointer;
}

#db-nav-sns .nav-search {
    position: absolute;
    right: 0;
    *width: 282px;
}

.nav-search {
    position: relative;
    overflow: hidden;
    zoom: 1;
    padding: 10px 0 15px 0;
}

form {
    margin: 0;
    padding: 0;
    border: 0px;
}

.nav-search fieldset {
    border: none;
    padding: 0;
    margin: 0;
    position: static;
}

fieldset {
    border: 1px solid #ddd;
    padding: 0 10px;
    margin-bottom: 15px;
}

fieldset,
img {
    border: 0;
}

.nav-search legend {
    display: none;
}

fieldset legend {
    color: #666;
    padding: 0 5px;
}

#db-nav-sns label {
    line-height: 28px;
}

.nav-search label {
    position: absolute;
    left: 11px;
    top: 10px;
    line-height: 30px;
    cursor: text;
    color: #bbb;
    width: auto;
}

label {
    font-family: Tahoma;
    vertical-align: middle;
}

#db-nav-sns .inp {
    width: 278px;
    height: 28px;
    background: #fff;
    border: 1px solid #e1e9e1;
    text-align: left;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    border-radius: 0;
}

.nav-search .inp {
    float: left;
    width: 470px;
    height: 34px;
    text-align: center;
    _margin-right: -3px;
    cursor: text;
    background: url(/__nav/sns/assets/nav_bg_a1.png) no-repeat 0 0;
}

#db-nav-sns .inp input {
    margin: 0;
    width: 242px;
    height: 28px;
    line-height: "26px ";
}

.nav-search .inp input {
    background: #fff;
    width: 96%;
    margin: 0;
    text-align: left;
    height: 30px;
    padding-left: 10px;
    height: 28px\9;
    line-height: 28px\9;
    outline: none;
}

#db-nav-sns .inp-btn {
    position: absolute;
    left: auto;
    top: 10px;
    right: 0;
    width: 30px;
    height: 28px;
    *height: 30px;
    border: 1px solid #e1e9e1;
    border-left: none;
    background-color: #fff;
    font-size: 0;
    overflow: hidden;
}

#db-nav-sns .inp-btn input {
    width: 30px;
    height: 28px;
    height: 30px;
    padding: 0;
    margin: 0;
    line-height: 100px;
    background: transparent url(//img3.doubanio.com/dae/accounts/resources/527f922/sns/assets/bn_srh_1.png) no-repeat 50% 50%;
}

.nav-search input {
    -webkit-appearance: none;
    border: none;
    background: transparent;
}

#db-nav-sns .nav-items {
    float: left;
    margin-top: 15px;
}

ul,
ol {
    list-style: none;
}

#db-nav-sns .nav-items li {
    margin-right: 20px;
    font-size: 16px;
}

#db-nav-sns li {
    display: inline;
}

#db-nav-sns .nav-items li a {
    position: relative;
}

#db-nav-sns .nav-items .new {
    position: relative;

}

#db-nav-sns a:link,
#db-nav-sns a:visited {
    color: #072;
}

#db-nav-sns a:hover,
#db-nav-sns a:active {
    background-color: #072;
    color: #fff;
}
</style>
