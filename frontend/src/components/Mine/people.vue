<template>
    <div class="wrapper">
        <div class="content">
            <div class="grid clearfix">
                <div class="article">
                    <div class="user-profile clearfix">
                        <div class="pic"><img src="@/assets/images/user_normal.jpg" alt=""></div>
                        <div class="info">
                            <h1>sheer
                                <div class="edit_signature">
                                    <span>感受你的感受</span>
                                    <span class="edi">
                                        (<a href="" class="sign-text">编辑</a>)
                                    </span>
                                </div>
                            </h1>
                            <ul>
                                <li>
                                    <a href="">我的主页</a>
                                </li>
                                <li>
                                    <a href="">广播</a>
                                </li>
                                <li>
                                    <a href="">相册</a>
                                </li>
                                <li>
                                    <a href="">日记</a>
                                </li>
                                <li>
                                    <a href="">豆列</a>
                                </li>
                                <li>
                                    <a href="">设置</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="user_guide">
                        <p class="guide">
                            sheer，这里是你的主页，用来展示你的生活和发现，也是别人认识你的地方。
                            <br>
                            完善你的个人资料，开始全新的豆瓣之旅吧。
                        </p>
                        <ol>
                            <li class="user-icon">
                                <h5 class="done">
                                    <span>上传头像</span>
                                </h5>
                            </li>
                            <li class="user-intro">
                                <h5 class="todo">
                                    <a href="">写一段自我介绍</a>
                                </h5>
                                <form action=""></form>
                            </li>
                        </ol>
                        <p class="pl">以上选项也可以在页面右上角你的帐号中找到。</p>
                    </div>
                    <div class="sort note">
                        <h2>我的日记&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;.
                            <span class="pl">&nbsp;(<a href="">全部</a>)</span>
                        </h2>
                        <a class="lnk-create" href="">
                            <i>+</i>
                            写日记
                        </a>
                        <div class="con">在豆瓣上写日记，记录自己的生活、想法。</div>
                    </div>
                    <div class="sort photo">
                        <h2>我的相册&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;.
                            <span class="pl">&nbsp;(<a href="">创建1</a>.&nbsp;.&nbsp;<a href="">关注0</a>)</span>
                        </h2>
                        <div class="photo-btns">
                            <span class="btn-pic-upload">
                                <a class="lnk-create" href="">
                                    <i>+</i>
                                    发照片
                                </a>
                            </span>
                            <span class="btn-pic-upload">
                                <a class="lnk-create" href="">
                                    <i>+</i>
                                    新建相册
                                </a>
                            </span>
                        </div>
                        <div>
                            <div class="photoin">
                                <a href="" class="nbg">
                                    <img src="@/assets/images/photo_album_thumb.png" alt="">
                                </a>
                                <div class="pl l1">
                                    <a href="">第一个相册</a><br>
                                    2020-09-14更新
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sort board">
                        <h2>留言板&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;.
                            <span class="pl">&nbsp;(<a href="">全部</a>)</span>
                        </h2>
                        <form action="">
                            <textarea name="" style="width:97%;height:50px;margin-bottom:5px;"></textarea>
                            <input type="submit" value="留言">
                        </form>
                    </div>
                </div>
                <div class="aside">
                    <div class="infobox">
                        <div class="basic-info">
                            <img src="@/assets/images/user_normal.jpg" alt="">
                            <div class="user-info">
                                <div class="pl">
                                    223414243 <br> 2014-09-14加入
                                </div>
                            </div>
                        </div>
                        <div class="sep-line"></div>
                        <div class="user-intro">
                            <div class="edit_intro">
                                <span class="intro_disp">(<a href="">添加自我介绍</a>)</span>
                            </div>
                        </div>
                    </div>
                    <div class="statuses">
                        <h2>我的相册&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;.&nbsp;.
                            <span class="pl">&nbsp;(<a href="">全部</a>)</span>
                        </h2>
                        <div class="status">
                            <p class="text">
                                <a href="">sheer</a>
                                更改签名
                            </p>
                            <p class="status-text">感受你的感受</p>
                            <div class="actions">&nbsp;&nbsp;<a href="">删除</a></div>
                        </div>
                        <div class="sep-line"></div>
                        <div class="rev-link">
                            <a href="">>&nbsp;我被0人关注</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer"></div>
    </div>
</template>

<script>
export default {
    name:'people'
};
</script>

<style>

</style>
 