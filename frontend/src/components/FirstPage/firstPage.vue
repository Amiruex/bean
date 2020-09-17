<template>
    <div>
        <!-- 头部 -->
        <header>
            <!-- 搜索框 -->
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
            <!-- 登录框 -->
            <div class="login">
                <div class="login-warp">
                    <div class="login-login">
                        <div class="login-t">
                            <div class="login-trangle">
                                <img src="../../assets/imgzou/index.png" alt="" title="扫码登录" style="cursor: pointer;" class="trangle">
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
                                <form action="">
                                    <ul>
                                        <li style="font-size: 13px;margin-top: 5px;">
                                            <span style="color: #9b9b9b;">请仔细阅读</span>&nbsp;
                                            <a href="javascript:;" style="color: #41ac52;">豆瓣使用协议、隐私政策</a>
                                        </li>
                                        <li>
                                            <input type="phone" placeholder="手机号" maxlength="13">
                                            <div class="area">
                                                <span style="padding: 0 10px;font-size: 16px;font-weight: bold;border-right: 1px solid #ccc;">+86</span>
                                            </div>
                                        </li>
                                        <li>
                                            <input type="text" placeholder="验证码">
                                            <div>
                                                <a href="javascript:;">获取验证码</a>
                                            </div>
                                        </li>
                                        <li>
                                            <span>登录豆瓣</span>
                                        </li>
                                        <li>
                                            <input type="checkbox" style="width: 15px;height: 15px;">
                                            <span style="font-size: 13px;">下次自动登录</span>
                                            <a href="javascript:;" style="color: #41ac52;">收不到验证码</a>
                                        </li>
                                        <li>
                                            <span>第三方登录：</span>
                                            <a href="javascript:;"><img src="../../assets/imgzou/微信.png" alt="" title="用微信登录"></a>&nbsp;&nbsp;&nbsp;
                                            <a href="javascript:;"><img src="../../assets/imgzou/微博.png" alt="" title="用微博登录"></a>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                            <div class="login-b b2" style="display: block;">
                                <form action="">
                                    <ul>
                                        <li style="font-size: 13px;">
                                            <a href="javascript:;" style="color: #41ac52;position: absolute;right: 0px;">找回密码</a>
                                        </li>
                                        <li>
                                            <form action="">
                                                <input type="text" placeholder="手机号 / 邮箱">
                                            </form>
                                        </li>
                                        <li>
                                            <form action="">
                                                <input type="password" placeholder="密码">
                                            </form>
                                        </li>
                                        <li>
                                            <span>登录豆瓣</span>
                                        </li>
                                        <li>
                                            <input type="checkbox" style="width: 10px;height: 10px;">
                                            <span style="font-size: 13px;">下次自动登录</span>
                                            <a href="javascript:;" style="color: #41ac52;">海外手机登录</a>
                                        </li>
                                        <li>
                                            <span>第三方登录：</span>
                                            <a href="javascript:;"><img src="../../assets/imgzou/微信.png" alt="" title="用微信登录"></a>&nbsp;&nbsp;&nbsp;
                                            <a href="javascript:;"><img src="../../assets/imgzou/微博.png" alt="" title="用微博登录"></a>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="login-copy">
                        <div class="login-t">
                            <div class="login-trangle">
                                <img src="../../assets/imgzou/index1.png" alt="" title="短信登录/注册" style="cursor: pointer;" class="trangle1">
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
        <!-- 主体部分 -->
        <section>
            <!-- 热点内容 -->
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
            <!-- 豆瓣时间 -->
            <div class="douban-time">
                <div class="dl">
                    <a href="javascript:;">豆瓣时间</a>
                </div>
                <div class="dr">
                    <p class="p1">热点专栏 ······ (<a href="javascript:;">更多</a>)</p>
                    <ul>
                        <li>
                            <img src="../../assets/imgzou/time1.png" alt="">
                            <p><a href="javascript:;">用金钱丈量人生可能——32堂简七极简理财课</a></p>
                            <span>音频专栏</span>
                        </li>
                        <li>
                            <img src="../../assets/imgzou/time2.jpg" alt="">
                            <p><a href="javascript:;">苗炜·文学体验30讲——陪你度过这时代的晚上</a></p>
                            <span>音频专栏</span>
                        </li>
                        <li>
                            <img src="../../assets/imgzou/time3.jpg" alt="">
                            <p><a href="javascript:;">程何的极简音乐剧必修课</a></p>
                            <span>视频专栏</span>
                        </li>
                        <li>
                            <img src="../../assets/imgzou/time4.jpg" alt="">
                            <p><a href="javascript:;">一步到位的收纳法——20堂课打造不凌乱家</a></p>
                            <span>音频专栏</span>
                        </li>
                        <li>
                            <img src="../../assets/imgzou/time5.jpg" alt="">
                            <p><a href="javascript:;">如何读透一本书——12堂阅读写作训练课</a></p>
                            <span>音频专栏</span>
                        </li>
                        <li>
                            <img src="../../assets/imgzou/time6.jpg" alt="">
                            <p><a href="javascript:;">复旦沈奕斐的社会学爱情思维课</a></p>
                            <span>音频专栏</span>
                        </li>
                        <li>
                            <img src="../../assets/imgzou/time7.png" alt="">
                            <p><a href="javascript:;">你好呀!日本——58个关键词凝视日本古今</a></p>
                            <span>音频专栏</span>
                        </li>
                        <li>
                            <img src="../../assets/imgzou/time8.png" alt="">
                            <p><a href="javascript:;">怦然心动的瞬间——14堂餐桌美学课</a></p>
                            <span>视频专栏</span>
                        </li>
                        <li>
                            <img src="../../assets/imgzou/time9.png" alt="">
                            <p><a href="javascript:;">一切美好的事物都与你有关——21天走出低自尊</a></p>
                            <span>音频专栏</span>
                        </li>
                        <li>
                            <img src="../../assets/imgzou/time10.jpg" alt="">
                            <p><a href="javascript:;">童话交响梦——古典音乐这样听</a></p>
                            <span>音频专栏</span>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 电影 -->
            <div class="films">
                <div class="film">
                    <div class="film-left">
                        <p><a href="javascript:;">电影</a></p>
                        <ul>
                            <li><a href="javascript:;">影讯&购票</a></li>
                            <li><a href="javascript:;">选电影</a></li>
                            <li><a href="javascript:;">电视剧</a></li>
                            <li><a href="javascript:;">排行榜</a></li>
                            <li><a href="javascript:;">分类</a></li>
                            <li><a href="javascript:;">影评</a></li>
                            <li><a href="javascript:;">预告片</a></li>
                            <li><a href="javascript:;">问答</a></li>
                        </ul>
                    </div>
                    <div class="film-right">
                        <div class="film-show">
                            <p>正在热映 ······ (<a href="javascript:;">更多</a>)</p>
                            <div>
                                <ul>
                                    <li>
                                        <img src="../../assets/imgzou/film1.webp" alt="">
                                        <p><a href="javascript:;">花木兰</a></p>
                                        <p>
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_half.png" alt="">
                                            <img src="../../assets/imgzou/star48_off.png" alt="">
                                            <img src="../../assets/imgzou/star48_off.png" alt="">
                                            <span>4.9</span>
                                        </p>
                                        <a href="javascript:;">选座购票</a>
                                    </li>
                                    <li>
                                        <img src="../../assets/imgzou/film2.webp" alt="">
                                        <p><a href="javascript:;">信条</a></p>
                                        <p>
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_off.png" alt="">
                                            <span>7.8</span>
                                        </p>
                                        <a href="javascript:;">选座购票</a>
                                    </li>
                                    <li>
                                        <img src="../../assets/imgzou/film3.webp" alt="">
                                        <p><a href="javascript:;">我的女友是机器人</a></p>
                                        <p>
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_off.png" alt="">
                                            <img src="../../assets/imgzou/star48_off.png" alt="">
                                            <img src="../../assets/imgzou/star48_off.png" alt="">
                                            <span>3.6</span>
                                        </p>
                                        <a href="javascript:;">选座购票</a>
                                    </li>
                                    <li>
                                        <img src="../../assets/imgzou/film4.webp" alt="">
                                        <p><a href="javascript:;">八佰</a></p>
                                        <p>
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_off.png" alt="">
                                            <span>7.7</span>
                                        </p>
                                        <a href="javascript:;">选座购票</a>
                                    </li>
                                    <li>
                                        <img src="../../assets/imgzou/film5.webp" alt="">
                                        <p><a href="javascript:;">小妇人</a></p>
                                        <p>
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_off.png" alt="">
                                            <span>8.1</span>
                                        </p>
                                        <a href="javascript:;">选座购票</a>
                                    </li>
                                    <li>
                                        <img src="../../assets/imgzou/film6.webp" alt="">
                                        <p><a href="javascript:;">辉夜大小姐想让我告白</a></p>
                                        <p>
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_off.png" alt="">
                                            <img src="../../assets/imgzou/star48_off.png" alt="">
                                            <span>5.9</span>
                                        </p>
                                        <a href="javascript:;">选座购票</a>
                                    </li>
                                    <li>
                                        <img src="../../assets/imgzou/film7.webp" alt="">
                                        <p><a href="javascript:;">假面饭店</a></p>
                                        <p>
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_half.png" alt="">
                                            <img src="../../assets/imgzou/star48_off.png" alt="">
                                            <span>6.4</span>
                                        </p>
                                        <a href="javascript:;">选座购票</a>
                                    </li>
                                    <li>
                                        <img src="../../assets/imgzou/film8.webp" alt="">
                                        <p><a href="javascript:;">1917</a></p>
                                        <p>
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_on.png" alt="">
                                            <img src="../../assets/imgzou/star48_half.png" alt="">
                                            <span>8.5</span>
                                        </p>
                                        <a href="javascript:;">选座购票</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="film-class">
                            <div class="top">
                                <p>影片分类 ······ (<a href="javascript:;">更多</a>)</p>
                                <div>
                                    <dl>
                                        <dt></dt>
                                        <dd><a href="javascript:;">爱情</a></dd>
                                        <dd><a href="javascript:;">悬疑</a></dd>
                                        <dd><a href="javascript:;">搞笑</a></dd>
                                        <dd><a href="javascript:;">黑色幽默</a></dd>
                                        <dd><a href="javascript:;">香港</a></dd>
                                        <dd><a href="javascript:;">法国</a></dd>
                                    </dl>
                                    <dl>
                                        <dt></dt>
                                        <dd><a href="javascript:;">剧情</a></dd>
                                        <dd><a href="javascript:;">科幻</a></dd>
                                        <dd><a href="javascript:;">文艺</a></dd>
                                        <dd><a href="javascript:;">战争</a></dd>
                                        <dd><a href="javascript:;">韩国</a></dd>
                                        <dd><a href="javascript:;">台湾</a></dd>
                                    </dl>
                                    <dl>
                                        <dt></dt>
                                        <dd><a href="javascript:;">喜剧</a></dd>
                                        <dd><a href="javascript:;">动作</a></dd>
                                        <dd><a href="javascript:;">惊悚</a></dd>
                                        <dd><a href="javascript:;">恐怖</a></dd>
                                        <dd><a href="javascript:;">中国大陆</a></dd>
                                        <dd><a href="javascript:;">印度</a></dd>
                                    </dl>
                                    <dl>
                                        <dt></dt>
                                        <dd><a href="javascript:;">经典</a></dd>
                                        <dd><a href="javascript:;">犯罪</a></dd>
                                        <dd><a href="javascript:;">励志</a></dd>
                                        <dd><a href="javascript:;">美国</a></dd>
                                        <dd><a href="javascript:;">中国</a></dd>
                                        <dd><a href="javascript:;">&nbsp;</a></dd>
                                    </dl>
                                    <dl class="last">
                                        <dt></dt>
                                        <dd><a href="javascript:;">动画</a></dd>
                                        <dd><a href="javascript:;">青春</a></dd>
                                        <dd><a href="javascript:;">纪录片</a></dd>
                                        <dd><a href="javascript:;">日本</a></dd>
                                        <dd><a href="javascript:;">美国</a></dd>
                                        <dd><a href="javascript:;">&nbsp;</a></dd>
                                    </dl>
                                </div>
                            </div>
                            <div class="bottom">
                                <p>近期热门 ······ (<a href="javascript:;">更多</a>)</p>
                                <div>
                                    <ol>
                                        <li><span>1. </span><a href="javascript:;">花木兰</a></li>
                                        <li><span>2. </span><a href="javascript:;">釜山行2：半岛</a></li>
                                        <li><span>3. </span><a href="javascript:;">我想结束这一切</a></li>
                                        <li><span>4. </span><a href="javascript:;">东北往事：我叫刘海柱</a></li>
                                        <li><span>5. </span><a href="javascript:;">铁雨2：首脑峰会</a></li>
                                        <li><span>6. </span><a href="javascript:;">艾娃</a></li>
                                        <li><span>7. </span><a href="javascript:;">#活着</a></li>
                                        <li><span>8. </span><a href="javascript:;">无名狂</a></li>
                                        <li><span>9. </span><a href="javascript:;">超能计划</a></li>
                                        <li class="ten"><span>10. </span> <a href="javascript:;">新变种人</a></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 小组 -->
            <div class="group">
                <div class="group-left">
                    <p><a href="javascript:;">小组</a></p>
                    <ul>
                        <li><a href="javascript:;">精选</a></li>
                        <li><a href="javascript:;">文化</a></li>
                        <li><a href="javascript:;">行摄</a></li>
                        <li><a href="javascript:;">娱乐</a></li>
                        <li><a href="javascript:;">时尚</a></li>
                        <li><a href="javascript:;">生活</a></li>
                        <li><a href="javascript:;">科技</a></li>
                    </ul>
                </div>
                <div class="group-right">
                    <div class="group-show">
                        <p>热门小组 ······ (<a href="javascript:;">更多</a>)</p>
                        <div>
                            <dl>
                                <dt></dt>
                                <dd><img src="../../assets/imgzou/group1.webp" alt="">
                                    <div>
                                        <a href="javascript:;">我爱三毛</a><span>47397 个成员</span>
                                    </div>
                                </dd>
                                <dd><img src="../../assets/imgzou/group2.webp" alt="">
                                    <div>
                                        <a href="javascript:;">刘慈欣</a><span>30908 个成员</span>
                                    </div>
                                </dd>
                                <dd><img src="../../assets/imgzou/group3.webp" alt="">
                                    <div>
                                        <a href="javascript:;">记事本圆梦小组</a><span>117528 个成员</span>
                                    </div>
                                </dd>
                                <dd><img src="../../assets/imgzou/group4.webp" alt="">
                                    <div>
                                        <a href="javascript:;">这辈子一定要做几件疯狂的事</a><span>92537 个成员</span>
                                    </div>
                                </dd>
                                <dd><img src="../../assets/imgzou/group5.jpg" alt="">
                                    <div>
                                        <a href="javascript:;">我们就是要做衣服给自己穿</a><span>3704 个成员</span>
                                    </div>
                                </dd>
                            </dl>
                            <dl>
                                <dt></dt>
                                <dd><img src="../../assets/imgzou/group6.webp" alt="">
                                    <div>
                                        <a href="javascript:;">沙发客</a><span>23379 个成员</span>
                                    </div>
                                </dd>
                                <dd><img src="../../assets/imgzou/group7.webp" alt="">
                                    <div>
                                        <a href="javascript:;">西双版纳</a><span>11874 个成员</span>
                                    </div>
                                </dd>
                                <dd><img src="../../assets/imgzou/group8.jpg" alt="">
                                    <div>
                                        <a href="javascript:;">搭讪学</a><span>94304 个成员</span>
                                    </div>
                                </dd>
                                <dd><img src="../../assets/imgzou/group9.jpg" alt="">
                                    <div>
                                        <a href="javascript:;">自己给自己剪头发</a><span>35058 个成员</span>
                                    </div>
                                </dd>
                                <dd>&nbsp;</dd>
                            </dl>
                        </div>
                    </div>
                    <div class="group-class">
                        <p>小组分类 ······ </p>
                        <div>
                            <ul>
                                <li>
                                    <a href="javascript:;">兴趣 >></a>
                                    <a href="javascript:;">旅行</a>
                                    <a href="javascript:;">摄影</a>
                                    <a href="javascript:;">影视</a>
                                    <a href="javascript:;">音乐</a>
                                    <a href="javascript:;">文学</a>
                                    <a href="javascript:;">游戏</a>
                                    <a href="javascript:;">动漫</a>
                                    <a href="javascript:;">运动</a>
                                    <a href="javascript:;">戏曲</a>
                                    <a href="javascript:;">桌游</a>
                                    <a href="javascript:;">怪癖</a>
                                </li>
                                <li>
                                    <a href="javascript:;">生活 >></a>
                                    <a href="javascript:;">健康</a>
                                    <a href="javascript:;">美食</a>
                                    <a href="javascript:;">宠物</a>
                                    <a href="javascript:;">美容</a>
                                    <a href="javascript:;">化妆</a>
                                    <a href="javascript:;">护肤</a>
                                    <a href="javascript:;">服饰</a>
                                    <a href="javascript:;">公益</a>
                                    <a href="javascript:;">家庭</a>
                                    <a href="javascript:;">育儿</a>
                                    <a href="javascript:;">汽车</a>
                                </li>
                                <li>
                                    <a href="javascript:;">购物 >></a>
                                    <a href="javascript:;">淘宝</a>
                                    <a href="javascript:;">二手</a>
                                    <a href="javascript:;">团购</a>
                                    <a href="javascript:;">数码</a>
                                    <a href="javascript:;">品牌</a>
                                    <a href="javascript:;">文具</a>
                                </li>
                                <li>
                                    <a href="javascript:;">社会 >></a>
                                    <a href="javascript:;">求职</a>
                                    <a href="javascript:;">租房</a>
                                    <a href="javascript:;">励志</a>
                                    <a href="javascript:;">留学</a>
                                    <a href="javascript:;">出国</a>
                                    <a href="javascript:;">理财</a>
                                    <a href="javascript:;">传媒</a>
                                    <a href="javascript:;">创业</a>
                                    <a href="javascript:;">考试</a>
                                </li>
                                <li>
                                    <a href="javascript:;">艺术 >></a>
                                    <a href="javascript:;">设计</a>
                                    <a href="javascript:;">展览</a>
                                    <a href="javascript:;">曲艺</a>
                                    <a href="javascript:;">舞蹈</a>
                                    <a href="javascript:;">雕塑</a>
                                    <a href="javascript:;">纹身</a>
                                </li>
                                <li>
                                    <a href="javascript:;">学术 >></a>
                                    <a href="javascript:;">人文</a>
                                    <a href="javascript:;">社科</a>
                                    <a href="javascript:;">自然</a>
                                    <a href="javascript:;">建筑</a>
                                    <a href="javascript:;">国学</a>
                                    <a href="javascript:;">语言</a>
                                    <a href="javascript:;">宗教</a>
                                    <a href="javascript:;">哲学</a>
                                    <a href="javascript:;">软件</a>
                                    <a href="javascript:;">硬件</a>
                                    <a href="javascript:;">互联网</a>
                                </li>
                                <li>
                                    <a href="javascript:;">情感 >></a>
                                    <a href="javascript:;">恋爱</a>
                                    <a href="javascript:;">心情</a>
                                    <a href="javascript:;">心理学</a>
                                    <a href="javascript:;">星座</a>
                                    <a href="javascript:;">塔罗</a>
                                    <a href="javascript:;">LES</a>
                                    <a href="javascript:;">GAY</a>
                                </li>
                                <li>
                                    <a href="javascript:;">闲聊 >></a>
                                    <a href="javascript:;">吐槽</a>
                                    <a href="javascript:;">笑话</a>
                                    <a href="javascript:;">直播</a>
                                    <a href="javascript:;">八卦</a>
                                    <a href="javascript:;">发泄</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 读书 -->
            <div class="films read">
                <div class="film">
                    <div class="film-left read-left">
                        <p><a href="javascript:;">读书</a></p>
                        <ul>
                            <li><a href="javascript:;">分类浏览</a></li>
                            <li><a href="javascript:;">阅读</a></li>
                            <li><a href="javascript:;">作者</a></li>
                            <li><a href="javascript:;">书评</a></li>
                            <li><a href="javascript:;">购书单</a></li>
                            <li>
                                <!-- <a href="javascript:;"><img src="../../assets/imgzou/" alt=""></a> -->
                            </li>
                            <li><a href="javascript:;">豆瓣阅读</a></li>
                        </ul>
                    </div>
                    <div class="film-right read-right">
                        <div class="film-show read-show">
                            <div class="read-top">
                                <p class="newBook">新书速递 ······ (<a href="javascript:;">更多</a>)</p>
                                <div>
                                    <ul>
                                        <li>
                                            <img src="../../assets/imgzou/read1.jpg" alt="">
                                            <p><a href="javascript:;">相约博物馆</a></p>
                                            <p>[英] 安妮</p>
                                            <a href="javascript:;">免费试读</a>
                                        </li>
                                        <li>
                                            <img src="../../assets/imgzou/read2.jpg" alt="">
                                            <p><a href="javascript:;">平面国</a></p>
                                            <p>[英] 埃德温</p>
                                            <a href="javascript:;">免费试读</a>
                                        </li>
                                        <li>
                                            <img src="../../assets/imgzou/read3.jpg" alt="">
                                            <p><a href="javascript:;">价值</a></p>
                                            <p>张磊</p>
                                            <a href="javascript:;">免费试读</a>
                                        </li>
                                        <li>
                                            <img src="../../assets/imgzou/read4.jpg" alt="">
                                            <p><a href="javascript:;">沙仑的玫瑰</a></p>
                                            <p>包慧怡 等</p>
                                            <a href="javascript:;">免费试读</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="read-bottom">
                                <p>原创数字作品 ······ (<a href="javascript:;">更多</a>)</p>
                                <div>
                                    <ul>
                                        <li>
                                            <img src="../../assets/imgzou/read5.png" alt="">
                                            <p><a href="javascript:;">北国南国</a></p>
                                            <p>免费</p>
                                            <a href="javascript:;">免费试读</a>
                                        </li>
                                        <li>
                                            <img src="../../assets/imgzou/read6.png" alt="">
                                            <p><a href="javascript:;">没有死者的谋杀</a></p>
                                            <p>免费</p>
                                            <a href="javascript:;">免费试读</a>
                                        </li>
                                        <li>
                                            <img src="../../assets/imgzou/read7.png" alt="">
                                            <p><a href="javascript:;">我老公实在太稳健了</a></p>
                                            <p>免费</p>
                                            <a href="javascript:;">免费试读</a>
                                        </li>
                                        <li>
                                            <img src="../../assets/imgzou/read8.png" alt="">
                                            <p><a href="javascript:;">我的大猪蹄子女友</a></p>
                                            <p>免费</p>
                                            <a href="javascript:;">免费试读</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="film-class read-class">
                            <div class="top">
                                <p>热门标签 ······ (<a href="javascript:;">更多</a>)</p>
                                <div>
                                    <ul>
                                        <li>
                                            <span>[文学]</span>
                                            <a href="javascript:;">小说</a>
                                            <a href="javascript:;">随笔</a>
                                            <a href="javascript:;">日本文学</a>
                                            <a href="javascript:;">散文</a>
                                            <a href="javascript:;">诗歌</a>
                                            <a href="javascript:;">童话</a>
                                            <a href="javascript:;">名著</a>
                                            <a href="javascript:;">港台</a>
                                            <a href="javascript:;">更多</a>
                                        </li>
                                        <li>
                                            <span>[流行]</span>
                                            <a href="javascript:;">漫画</a>
                                            <a href="javascript:;">推理</a>
                                            <a href="javascript:;">绘本</a>
                                            <a href="javascript:;">青春</a>
                                            <a href="javascript:;">科幻</a>
                                            <a href="javascript:;">言情</a>
                                            <a href="javascript:;">奇幻</a>
                                            <a href="javascript:;">武侠</a>
                                            <a href="javascript:;">更多</a>
                                        </li>
                                        <li>
                                            <span>[文化]</span>
                                            <a href="javascript:;">历史</a>
                                            <a href="javascript:;">哲学</a>
                                            <a href="javascript:;">传记</a>
                                            <a href="javascript:;">设计</a>
                                            <a href="javascript:;">建筑</a>
                                            <a href="javascript:;">电影</a>
                                            <a href="javascript:;">回忆录</a>
                                            <a href="javascript:;">音乐</a>
                                            <a href="javascript:;">更多</a>
                                        </li>
                                        <li>
                                            <span>[生活]</span>
                                            <a href="javascript:;">旅行</a>
                                            <a href="javascript:;">励志</a>
                                            <a href="javascript:;">教育</a>
                                            <a href="javascript:;">职场</a>
                                            <a href="javascript:;">美食</a>
                                            <a href="javascript:;">灵修</a>
                                            <a href="javascript:;">健康</a>
                                            <a href="javascript:;">家居</a>
                                            <a href="javascript:;">更多</a>
                                        </li>
                                        <li>
                                            <span>[经管]</span>
                                            <a href="javascript:;">经济学</a>
                                            <a href="javascript:;">管理</a>
                                            <a href="javascript:;">商业</a>
                                            <a href="javascript:;">金融</a>
                                            <a href="javascript:;">营销</a>
                                            <a href="javascript:;">理财</a>
                                            <a href="javascript:;">股票</a>
                                            <a href="javascript:;">企业史</a>
                                            <a href="javascript:;">更多</a>
                                        </li>
                                        <li class="line">
                                            <span>[科技]</span>
                                            <a href="javascript:;">科普</a>
                                            <a href="javascript:;">互联网</a>
                                            <a href="javascript:;">编程</a>
                                            <a href="javascript:;">交互设计</a>
                                            <a href="javascript:;">算法</a>
                                            <a href="javascript:;">通信</a>
                                            <a href="javascript:;">神经网络</a>
                                            <a href="javascript:;">更多</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 音乐 -->
            <div class="music">
                <div class="music-t">
                    <dl>
                        <dt><a href="javascript:;">音乐</a></dt>
                        <dd><a href="javascript:;">音乐人</a></dd>
                        <dd><a href="javascript:;">潮潮豆瓣音乐周</a></dd>
                        <dd><a href="javascript:;">金羊毛计划</a></dd>
                        <dd><a href="javascript:;">专题</a></dd>
                        <dd><a href="javascript:;">排行榜</a></dd>
                        <dd><a href="javascript:;">分类浏览</a></dd>
                        <dd><a href="javascript:;">乐评</a></dd>
                        <dd><a href="javascript:;">豆瓣FM</a></dd>
                        <dd><a href="javascript:;">歌单</a></dd>
                        <dd><a href="javascript:;">阿比鹿音乐奖</a></dd>
                        <dd>
                            <a href="javascript:;"><img src="../../assets/imgzou/y.jpg" alt="">豆瓣FM</a>
                        </dd>
                        <dd>
                            <a href="javascript:;"><img src="../../assets/imgzou/y1.png" alt="" style="width: 40px;height: 40px;">豆瓣音乐人</a>
                        </dd>
                    </dl>
                </div>
                <div class="music-b">
                    <div class="music-l">
                        <div class="first">
                            <p>豆瓣新碟榜 ······ (<a href="javascript:;">更多</a>)</p>
                            <ul>
                                <li><img src="../../assets/imgzou/new1.jpg" alt="" class="img1">
                                    <div style="font-size: 13px;color: #555d53;">1.<a href="javascript:;">斯芬克斯X谜</a></div>
                                    <div><a href="javscript:;">THE9</a></div>
                                    <div><img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_half.png" alt="">
                                        <img src="../../assets/imgzou/star48_off.png" alt="">
                                        <img src="../../assets/imgzou/star48_off.png" alt="">
                                        <span style="color: #ffac2d;">5.0</span>
                                    </div>
                                </li>
                                <li><img src="../../assets/imgzou/new2.jpg" alt="" class="img1">
                                    <div style="font-size: 13px;color: #555d53;">2.<a href="javascript:;">硬糖定律</a></div>
                                    <div><a href="javscript:;">硬糖少女303</a></div>
                                    <div><img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_half.png" alt="">
                                        <img src="../../assets/imgzou/star48_off.png" alt="">
                                        <span style="color: #ffac2d;">6.3</span>
                                    </div>
                                </li>
                                <li><img src="../../assets/imgzou/new3.jpg" alt="" class="img1">
                                    <div style="font-size: 13px;color: #555d53;">3.<a href="javascript:;">无人知晓</a></div>
                                    <div><a href="javscript:;">田馥甄</a></div>
                                    <div><img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_off.png" alt="">
                                        <span style="color: #ffac2d;">8.2</span>
                                    </div>
                                </li>
                                <li><img src="../../assets/imgzou/new4.jpg" alt="" class="img1">
                                    <div style="font-size: 13px;color: #555d53;">4.<a href="javascript:;">My!Cyndi!</a></div>
                                    <div><a href="javscript:;">王心凌 Cyndi</a></div>
                                    <div><img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_off.png" alt="">
                                        <span style="color: #ffac2d;">7.6</span>
                                    </div>
                                </li>
                                <li><img src="../../assets/imgzou/new5.jpg" alt="" class="img1">
                                    <div style="font-size: 13px;color: #555d53;">5.<a href="javascript:;">Smile</a></div>
                                    <div><a href="javscript:;">Katy Perry</a></div>
                                    <div><img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_off.png" alt="">
                                        <img src="../../assets/imgzou/star48_off.png" alt="">
                                        <span style="color: #ffac2d;">5.5</span>
                                    </div>
                                </li>
                                <li><img src="../../assets/imgzou/new6.jpg" alt="" class="img1">
                                    <div style="font-size: 13px;color: #555d53;">6.<a href="javascript:;">In A Dream</a></div>
                                    <div><a href="javscript:;">Troye Sivan</a></div>
                                    <div><img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_off.png" alt="">
                                        <span style="color: #ffac2d;">7.4</span>
                                    </div>
                                </li>
                                <li><img src="../../assets/imgzou/new7.jpg" alt="" class="img1">
                                    <div style="font-size: 13px;color: #555d53;">7.<a href="javascript:;">Bon Voyage</a></div>
                                    <div><a href="javscript:;">YooA</a></div>
                                    <div><img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_off.png" alt="">
                                        <span style="color: #ffac2d;">7.3</span>
                                    </div>
                                </li>
                                <li><img src="../../assets/imgzou/new8.jpg" alt="" class="img1">
                                    <div style="font-size: 13px;color: #555d53;">8.<a href="javascript:;">3집 Never Gonna Dance Again : Act 1</a></div>
                                    <div><a href="javscript:;">태민 泰民</a></div>
                                    <div><img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_on.png" alt="">
                                        <img src="../../assets/imgzou/star48_half.png" alt="">
                                        <span style="color: #ffac2d;">8.2</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="second">
                            <p>热门歌单 ······ (<a href="javascript:;">更多</a>)</p>
                            <div class="dan">
                                <div>
                                    <img src="../../assets/imgzou/dan2.jpg" alt="">
                                    <img src="../../assets/imgzou/dan1.png" alt="">
                                    <p>王若琳：爵士名伶</p>
                                </div>
                                <div>
                                    <img src="../../assets/imgzou/dan3.jpg" alt="">
                                    <img src="../../assets/imgzou/dan1.png" alt="">
                                    <p>好听的让月亮犯了错</p>
                                </div>
                                <div>
                                    <img src="../../assets/imgzou/dan4.jpg" alt="">
                                    <img src="../../assets/imgzou/dan1.png" alt="">
                                    <p>Over My Head</p>
                                </div>
                                <div>
                                    <img src="../../assets/imgzou/dan5.jpg" alt="">
                                    <img src="../../assets/imgzou/dan1.png" alt="">
                                    <p>情歌2</p>
                                </div>
                                <div>
                                    <img src="../../assets/imgzou/dan6.jpg" alt="">
                                    <img src="../../assets/imgzou/dan1.png" alt="">
                                    <p>南下的風輕輕刮</p>
                                </div>
                                <div>
                                    <img src="../../assets/imgzou/dan7.jpg" alt="">
                                    <img src="../../assets/imgzou/dan1.png" alt="">
                                    <p>L'Arc~en~Ciel</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="music-r">
                        <p>本周流行音乐人 ······ (<a href="javascript:;">更多</a>)</p>
                        <ol>
                            <li>
                                <span>1.</span>
                                <div class="d1">
                                    <div><img src="../../assets/imgzou/m1.jpg" alt=""></div>
                                    <div class="d2">
                                        <a href="javascript:;">王傲（音乐人）</a>
                                        <span>流派：世界音乐World</span>
                                        <span>508人关注</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span>2.</span>
                                <div class="d1">
                                    <div><img src="../../assets/imgzou/m2.jpg" alt=""></div>
                                    <div class="d2">
                                        <a href="javascript:;">祥树</a>
                                        <span>流派：民谣Folk</span>
                                        <span>198人关注</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span>3.</span>
                                <div class="d1">
                                    <div><img src="../../assets/imgzou/m3.jpg" alt=""></div>
                                    <div class="d2">
                                        <a href="javascript:;">我爱陈绮贞</a>
                                        <span>流派：流行Pop</span>
                                        <span>7483人关注</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span>4.</span>
                                <div class="d1">
                                    <div><img src="../../assets/imgzou/m4.jpg" alt=""></div>
                                    <div class="d2">
                                        <a href="javascript:;">耀</a>
                                        <span>流派：流行Pop</span>
                                        <span>4963人关注</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span>5.</span>
                                <div class="d1">
                                    <div><img src="../../assets/imgzou/m5.jpg" alt=""></div>
                                    <div class="d2">
                                        <a href="javascript:;">A.J.Alex</a>
                                        <span>流派：原声Soundtrack</span>
                                        <span>3091人关注</span>
                                    </div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <!-- 豆品 -->
            <div style="background-color: #fff;height: 600px;">
                <div class="goods">
                    <div class="goods-l">
                        <a href="javascript:;">豆品</a>
                    </div>
                    <div class="goods-r">
                        <div class="left">
                            <p>热卖商品 ······ (<a href="javascript:;">更多</a>)</p>
                            <div class="commify">
                                <div><img src="../../assets/imgzou/goods1.jpg" alt="">
                                    <p><a href="javascript:;">豆瓣图书书签——鲁迅系列</a> <span>￥35</span></p>
                                </div>
                                <div><img src="../../assets/imgzou/good2.jpg" alt="">
                                    <p><a href="javascript:;">豆瓣X飞跃帆布鞋</a> <span>￥168</span></p>
                                </div>
                                <div><img src="../../assets/imgzou/goods3.jpg" alt="">
                                    <p><a href="javascript:;">豆猫冰箱贴</a> <span>￥35</span></p>
                                </div>
                                <div><img src="../../assets/imgzou/goods4.jpg" alt="">
                                    <p><a href="javascript:;">豆瓣逆向手表</a> <span>￥329</span></p>
                                </div>
                            </div>
                        </div>
                        <div class="right">
                            <div class="active">
                                <p>热门活动 ······ </p>
                                <img src="../../assets/imgzou/goods5.jpg" alt="">
                                <a href="javascript:;">我的豆瓣收藏夹里有什么</a>
                            </div>
                            <div class="g-group">
                                <p>官方小组 ······ (<a href="javascript:;">更多</a>)</p>
                                <div style="margin-top: 10px;" class="div">
                                    <div>
                                        <a href="javascript:;">豆瓣读书书签——“每一页里，都得着深厚的趣味”</a>
                                        <p><span>2人参与</span><span>09-11</span></p>
                                    </div>
                                    <div>
                                        <a href="javascript:;">徽章收纳墙上线，构建你的光影世界</a>
                                        <p><span>0人参与</span><span>09-08</span></p>
                                    </div>
                                    <div>
                                        <a href="javascript:;">「豆瓣书立」新品上线，给好书一个“支撑”</a>
                                        <p><span>0人参与</span><span>09-03</span></p>
                                    </div>
                                    <div>
                                        <a href="javascript:;">豆品会员积分上线，可兑换多重好礼</a>
                                        <p><span>1人参与</span><span>08-28</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 同城 -->
            <div class="group itra-city">
                <div class="group-left">
                    <p><a href="javascript:;">同城</a></p>
                    <ul>
                        <li><a href="javascript:;">近期活动</a></li>
                        <li><a href="javascript:;">主办方</a></li>
                        <li><a href="javascript:;">舞台剧</a></li>
                    </ul>
                </div>
                <div class="group-right">
                    <div class="group-show">
                        <p>深圳·本周热门活动 ······ (<a href="javascript:;">更多</a>)</p>
                        <div class="bottom">
                            <div><img src="../../assets/imgzou/city1.jpg" alt="">
                                <div>
                                    <a href="javascript:;">【深圳站】「白皮书乐队」《我不高兴》</a>
                                    <p>9月26日 周六 20:30 - 22:30 深圳 HOU LIVE 深圳市福田</p>
                                    <p>54人关注</p>
                                </div>
                            </div>
                            <div><img src="../../assets/imgzou/city2.jpg" alt="">
                                <div>
                                    <a href="javascript:;">曹轩宾演唱会深圳站</a>
                                    <p> 9月25日 周五 20:30 - 22:00 深圳 HOU LIVE 深圳市福田
                                    </p>
                                    <p>23人关注</p>
                                </div>
                            </div>
                            <div><img src="../../assets/imgzou/city3.jpg" alt="">
                                <div>
                                    <a href="javascript:;">肆囍 ·【Filter】2020巡演 </a>
                                    <p> 10月11日 周日 20:00 - 21:30 深圳HOU Live 深圳市福田区</p>
                                    <p>11人关注 </p>
                                </div>
                            </div>
                            <div><img src="../../assets/imgzou/city4.jpg" alt="">
                                <div>
                                    <a href="javascript:;">演出预告 |9/19 Let’s rock the jazz! 指尖上的飞速传奇 </a>
                                    <p> 9月19日 周六 21:30 - 23:30 华侨城创意园E3栋101C </p>
                                    <p>4人关注</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="group-class">
                        <p>活动标签 ······ </p>
                        <div>
                            <ul>
                                <li>
                                    <a href="javascript:;">音乐 >></a>
                                    <a href="javascript:;">小型现场</a>
                                    <a href="javascript:;">音乐会</a>
                                    <a href="javascript:;">演唱会</a>
                                    <a href="javascript:;">音乐节</a>
                                </li>
                                <li>
                                    <a href="javascript:;">戏剧 >></a>
                                    <a href="javascript:;">话剧</a>
                                    <a href="javascript:;">音乐剧</a>
                                    <a href="javascript:;">舞剧</a>
                                    <a href="javascript:;">歌剧</a>
                                    <a href="javascript:;">戏曲</a>
                                    <a href="javascript:;">其他</a>
                                </li>
                                <li>
                                    <a href="javascript:;">聚会 >></a>
                                    <a href="javascript:;">生活</a>
                                    <a href="javascript:;">集市</a>
                                    <a href="javascript:;">摄影</a>
                                    <a href="javascript:;">外语</a>
                                    <a href="javascript:;">桌游</a>
                                    <a href="javascript:;">夜店</a>
                                    <a href="javascript:;">交友</a>
                                    <a href="javascript:;">美食</a>
                                    <a href="javascript:;">派对</a>
                                </li>
                                <li>
                                    <a href="javascript:;">电影 >></a>
                                    <a href="javascript:;">主题放映</a>
                                    <a href="javascript:;">影展</a>
                                    <a href="javascript:;">影院活动</a>
                                </li>
                                <li>
                                    <a href="javascript:;">其他 >></a>
                                    <a href="javascript:;">讲座</a>
                                    <a href="javascript:;">展览</a>
                                    <a href="javascript:;">运动</a>
                                    <a href="javascript:;">旅行</a>
                                    <a href="javascript:;">公益</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- 底部 -->
        <footer>
            <div class="bottom">
                <p class="p1"></p>
                <div style="margin-top: 20px;">
                    <div class="bl">
                        <p> © 2005－2020 douban.com, all rights reserved 北京豆网科技有限公司</p>
                        <p><a href="javascript:;">京ICP证090015号</a> 京ICP备11027288号 <a href="javascript:;">网络视听许可证0110418号</a> <a href="javascript:;">食品经营许可证</a></p>
                        <p>京网文[2015]2026-368号 <a href="javascript:;">新出发京批字第直160029号</a> 新出网证(京)字129号 </p>
                        <p>违法和不良信息投诉电话：4008353331-9 <img src="../../assets/imgzou/foot1.jpg" alt=""></p>
                        <p><img src="../../assets/imgzou/jubao.png" alt=""><a href="javascript:;">中国互联网举报中心</a> 电话：12377 <img src="../../assets/imgzou/anbao.gif" alt=""> <a href="javascript:;">京公网安备11010502000728</a></p>
                    </div>
                    <div class="br">
                        <a href="javascript:;">关于豆瓣</a>·<a href="javascript:;">在豆瓣工作</a>·<a href="javascript:;">联系我们</a>·<a href="javascript:;">法律声明</a>·<a href="javascript:;">帮助中心</a>·<a href="javascript:;">移动应用</a>·<a href="javascript:;">豆瓣广告</a>
                        <img src="../../assets/imgzou/foot2.jpg" alt="">
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import {head} from '../../static/js/head';
    import {jquery} from '../../static/js/jquery-1.12.1.min.js';
    export default {
        name:"firstPage",
        // comonpents:{
        //     head,
        // }
    }
</script>

<style >
    @import "../../static/css/head.css";
    @import "../../static/css/section.css";
    @import "../../static/css/foot.css";
</style>>
