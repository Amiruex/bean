<template>
<div class="wrap">
    <div class="content">
        <div class="clearfix ">
            <div class="article col-md-8">
                <div class="isay">
                    <!-- 图标区 -->
                    <ul class="isay-links">
                        <li style="margin:0"><img src="../../assets/img/icon1.png"><a href="#">说句话</a></li>
                        <li><img src="../../assets/img/icon2.png"><a href="#">发照片</a></li>
                        <li><img src="../../assets/img/icon3.png"><a href="#">推荐网页</a></li>
                        <li><img src="../../assets/img/icon4.png"><a href="#" title="添加日记">写日记</a></li>
                    </ul>
                    <!-- 输入框区 -->
                    <div class="form-group">
                        <input type="email" class="form-control" placeholder="分享生活点滴">
                        <span id="scan" class="md-center-focus-weak fa-lg input-icon-md" style="display: inline;">
                            <img src="../../assets/img/icon5.png" style="width: 24px;height: 20px;margin-right: 5px;">
                            <img src="../../assets/img/icon6.png" style="width: 20px;height: 22px;">
                        </span>
                    </div>
                    <!-- 评论区 -->
                    <div class="comment">
                        <div class="comment-img">
                            <img src="../../assets/img/bean-time3.jpg" alt="">
                        </div>
                        <div class="mes">
                            <p><span><a style="color:#555;font-weight:bolder">fefuir</a></span>说:</p>
                            <p class="time">周二</p>
                            <p><span>3分钟前</span>
                                <span><a>回应</a></span>
                                <span><a>转发</a></span>
                                <span><a>删除</a></span>
                            </p>
                        </div>
                    </div>
                    <!-- 页码区 -->
                    <div class="page">
                        <span class="prev">
                            &lt;前页
                        </span>
                        <span class="thispage" style="margin-right:7px">1</span>
                        <a class="ye" href="?p=2">2</a>
                        <a class="ye" href="?p=3">3</a>
                        <a class="ye" href="?p=4">4</a>
                        <a class="ye" href="?p=5">5</a>
                        <a class="ye" href="?p=6">6</a>
                        <a class="ye" href="?p=7">7</a>
                        <a class="ye" href="?p=8">8</a>
                        <a class="ye" href="?p=9">9</a>
                        <span class="break" style="margin-right:20px">...</span>
                        <span class="next">
                            <link rel="next" href="?p=2">
                            <a href="?p=2">后页&gt;</a>
                        </span>
                    </div>
                </div>
            </div>
            <!-- 侧边栏 -->
            <div class="asidemh col-md-4 pull-right">
                <!-- 豆瓣正在发生 -->
                <div class="notify-mod">
                    <h2>
                        豆瓣正在发生
                        &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
                    </h2>
                    <ul>
                        <li>
                            <a target="_blank" href="#" onclick="moreurl(this, {category:'sns', type:'side_entry'})">豆瓣读书会｜探讨现代小说的可能性</a>
                        </li>
                        <li>
                            <a target="_blank" href="#" onclick="moreurl(this, {category:'sns', type:'side_entry'})">豆瓣豆品｜豆瓣读书书签</a>
                        </li>
                    </ul>
                </div>
                <!-- 豆瓣时间 -->
                <div class="bean-time">
                    <h2>
                        豆瓣时间
                        &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
                        <span class="pl">&nbsp;(
                            <a href="#" target="_blank" style="font-size: 13px;">查看全部</a>
                            ) </span>
                    </h2>
                    <ul class="time-list">
                        <li class="left">

                            <a href="#" target="_blank">
                                <img src="../../assets/img/bean-time1.jpg" alt="用金钱丈量人生可能——32堂简七极简理财课">
                            </a>
                            <a class="title" href="#" target="_blank">用金钱丈量人生可能——32堂简七极简理财课</a>
                            <p class="type">音频专栏</p>
                        </li>
                        <li class="right">

                            <a href="#" target="_blank">
                                <img src="../../assets/img/bean-time2.jpg" alt="苗炜·文学体验30讲——陪你度过这时代的晚上">
                            </a>
                            <a class="title" href="#">苗炜·文学体验30讲——陪你度过这时代的晚上</a>
                            <p class="type">音频专栏</p>
                        </li>
                    </ul>
                </div>
                <!-- 豆瓣话题 -->
                <div class="mod">

                    <h2>
                        热门话题
                        &nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·&nbsp;·
                        <span class="pl">&nbsp;(

                            <a href="#" target="_self" style="font-size: 13px;">去话题广场</a>
                            ) </span>
                    </h2>

                    <ul>
                        <li class="topics">
                            <a href="#" class="name">秋天开始的瞬间</a>

                            <span class="look">1706.5万次浏览</span>
                        </li>
                        <li class="topics">
                            <a href="#" class="name">纪念海蒂</a>

                            <span class="look">2.0万次浏览</span>
                        </li>
                        <li class="topics">
                            <a href="#" class="name">文学圣地巡礼</a>

                            <span class="look">157.8万次浏览</span>
                        </li>
                        <li class="topics">
                            <a href="#" class="name">小朋友语录</a>

                            <span class="look">8.5万次浏览</span>
                        </li>
                        <li class="topics">
                            <a href="#" class="name">国漫中印象深刻的文字设计</a>

                            <span class="look">3244次浏览</span>
                        </li>
                        <li class="topics">
                            <a href="#" class="name">拍一段以假乱真的倒放视频</a>

                            <span class="look">4.7万次浏览</span>
                        </li>
                        <li class="topics">
                            <a href="#" class="name">在美术馆工作的日常</a>

                            <span class="look">4937次浏览</span>
                        </li>
                        <li class="topics">
                            <a href="#" class="name">图书馆借阅历史</a>

                            <span class="look">8930次浏览</span>
                        </li>
                        <li class="topics">
                            <a href="#">&gt; 我被邀请参与的话题(0)</a>
                        </li>
                        <li class="topics">
                            <a href="#">+ 发起新话题</a>
                        </li>
                    </ul>
                </div>
                <!-- 书签 -->
                <div class="book">
                    <a href="#" target="_blank">
                        <img src="../../assets/img/bean-time3.jpg" alt="">
                    </a>
                    <div class="director">
                        <p class="title">
                            <a href="#" target="_blank">鬼才导演大卫·林奇首部自传，附送林奇手写体贴纸</a>
                        </p>
                        <p class="author">
                            豆瓣书店
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'myHome'
}
</script>

<style scoped>
.wrap {
    /* height: 200px; */
    margin: 0 auto;
    /* border: 1px red solid; */
    width: 1040px
}

.content {
    /*margin: 0px;
    padding: 0px;
    width: 88%;
    /* height: 420px; */
    /* border: 1px red solid; 
    margin: 0 auto;*/
    min-height: 420px;
}

.wrap .content .clearfix:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
}

/* 发布话题 */
.content .article {
    /* width: 675px; */
    /* border: 1px red solid; */
    /* float: left; */
    position: relative;
}

/* 图标区 */
.article .isay-links {
    position: relative;
    z-index: 2;
    /* font-size: 0; */
    height: 30px;
    line-height: 30px;
    margin-left: -20px;
    /* border: 1px red solid; */
    /* display: inline-block; */
}

.article .isay li {
    float: left;
    font-size: 14px;
    display: inline-block;
    padding-left: 22px;
    /* margin-right: 18px; */
    list-style: none;
    vertical-align: middle;
}

.article .isay li a:active {
    color: #fff;
    text-decoration: none;
    background: #f93;
}

.article .isay li a:hover {
    color: #fff;
    text-decoration: none;
    background: #37a;
}

.article .isay-links img {
    width: 22px;
    height: 22px;
    margin-bottom: 5px;
    margin-right: 2px;
    vertical-align: middle;
}

.article .form-control {
    position: relative;
}

#scan {
    position: absolute;
    top: 46px;
    right: 30px;
}

/* 已经评论过的显示 */
.comment {
    /* border: 1px red solid; */
    height: 110px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e5e5e5;
}

.comment .comment-img img {
    width: 48px;
    height: 48px;
    margin-top: 10px;
    float: left;
}

.comment .mes {
    float: left;
    margin-top: 10px;
    margin-left: 20px;
    overflow: hidden;
    position: relative;
    font-size: 14px;
    color: #9d9d9d;
}

.comment .mes span {
    margin-right: 10px;
    font-size: 13px;
}

.comment .mes a:hover {
    color: #fff;
    text-decoration: none;
    background: #37a;
}

.comment .mes a:active {
    color: #fff;
    text-decoration: none;
    background: #f93;
}

/* 页码区 */
.isay .page {
    /* border: 1px red solid; */
    text-align: center;
    font-size: 16px;

}

.isay .page .thispage {
    color: #fff;
    background: #83BF73;
    display: inline-block;
    width: 20px;
    height: 20px;
}

/* 前页 */
.isay .page .prev {
    margin-right: 10px;
    font: 15px Arial, Helvetica, sans-serif;
    color: #aaa;
}

/* 后页 */
.isay .next {
    display: inline-block;
    font: 15px Arial, Helvetica, sans-serif;
    color: #aaa;
}

.isay .page .ye {
    /* margin-right: 7px; */
    display: inline-block;
    width: 20px;
    height: 20px;
}

.isay .page a:hover {
    color: #fff;
    text-decoration: none;
    background: #37a;
}

.isay .page a:active {
    color: #fff;
    text-decoration: none;
    background: #f93;
}

.asidemh {
    padding-top: 28px;
    /* border: 1px red solid; */

}

/* 豆瓣正在发生 */
.notify-mod {
    margin: 0 0 20px;
    padding: 16px 0 16px 18px;
    line-height: 1.5;
    background: #f2f7f6;
    border-radius: 4px;
    font-size: 13px;
    list-style: none;
    line-height: 1.5;
    /* border: 1px red solid; */
}

.notify-mod h2 {
    font: 15px Arial, Helvetica, sans-serif;
    color: #072;
    margin: 0 0 12px 0;
    line-height: 150%;
}

.notify-mod ul {
    list-style: none;
    /* margin-left: -10px;*/
    font-size: 14px;
    color: #cedcd9;
    /*margin-left: -40px;*/
}

.notify-mod li {
    margin-top: 8px;
}

.notify-mod a:active {
    color: #fff;
    text-decoration: none;
    background: #f93;
}

.notify-mod a:hover {
    color: #fff;
    text-decoration: none;
    background: #37a;
}

/* 豆瓣时间 */
.bean-time {
    /* width: 300px; */
    height: 262px;
    /* border: 1px red solid; */
}

.bean-time h2 {
    font-size: 16px;
    font: 15px Arial, Helvetica, sans-serif;
    color: #072;
    margin: 0 0 12px 0;
    line-height: 150%;
}

.bean-time img {
    width: 80px;
    height: 111px;
    margin-bottom: 10px;
}

.bean-time .time-list {
    /* width: 300px; */
    /* border: 1px red solid; */
    margin-left: 31px;
}

.bean-time .time-list li {
    list-style: none;
    float: left;
    margin-right: 47px;
    margin-bottom: 0;
    width: 90px;
    /* border: 1px red solid; */
    vertical-align: top;
    text-align: center;
    font-size: 13px;
}

.bean-time .left {
    margin-left: -35px;
}

.bean-time .right {
    /* float: left; */
}

.bean-time .title {
    color: #333333;
    font-size: 13px;
    line-height: 10px;
    text-align: center;
    margin-bottom: 10px;

}

.bean-time a:active {
    color: #fff;
    text-decoration: none;
    background: #f93;
}

.bean-time a:hover {
    color: #fff;
    text-decoration: none;
    background: #37a;
}

.bean-time .type {
    color: #999999;
    line-height: 1;
    margin-top: 10px;
    display: block;
}

/* 豆瓣话题 */
.mod {
    margin-top: 20px;
    /* border: 1px red solid; */
}

.mod h2 {
    font-size: 16px;
    font: 15px Arial, Helvetica, sans-serif;
    color: #072;
    margin: 0 0 12px 0;
    line-height: 150%;

}

.mod .topics {
    list-style: none;
    line-height: 1;
    margin-bottom: 15px;
    /* margin-left: -40px;*/
    font-size: 14px;
}

.mod .look {
    margin-top: 10px;
    display: block;
    font-size: 13px;
    line-height: 1;
    color: #aaaaaa;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* margin-bottom: 15px; */
}

.mod a:active {
    color: #fff;
    text-decoration: none;
    background: #f93;
}

.mod a:hover {
    color: #fff;
    text-decoration: none;
    background: #37a;
}

/* 书签 */
.book {
    margin-top: 20px;
    /* border: 1px red solid; */
    padding: 10px;
    background-color: #f9f9f9;
    clear: both;
    overflow: hidden;
}

.book img {
    width: 96px;
    height: 80px;
}

.book .director {
    width: 140px;
    height: 70px;
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
}

.book .director .title {
    font-size: 12px;
    line-height: 18px;
    margin-bottom: 10px;
    margin-top: 10px;

}

.book .director .title a {
    color: #669;
    text-decoration: none;
}

.book .director .author {
    font-size: 12px;
    line-height: 1;
    color: #999;
}

a:visited {
    color: #669;
    text-decoration: none;
}

a:link {
    color: #37a;
    text-decoration: none;
}
</style>
