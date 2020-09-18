<template>
<div id="footer">

    <span id="icp" class="fleft gray-link">
        &copy; 2005－2020 douban.com, all rights reserved 北京豆网科技有限公司
    </span>

    <a href="https://www.douban.com/hnypt/variformcyst.py" style="display: none;"></a>

    <span class="fright">
        <a href="https://www.douban.com/about">关于豆瓣</a>
        · <a href="https://www.douban.com/jobs">在豆瓣工作</a>
        · <a href="https://www.douban.com/about?topic=contactus">联系我们</a>
        · <a href="https://www.douban.com/about/legal">法律声明</a>

        · <a href="https://help.douban.com/?app=main" target="_blank">帮助中心</a>
        · <a href="https://www.douban.com/doubanapp/">移动应用</a>
        · <a href="https://www.douban.com/partner/">豆瓣广告</a>
    </span>

</div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
#footer {
    color: #999;
    padding-top: 6px;
    margin: 40px auto 20px auto;
    overflow: hidden;
    zoom: 1;
    border-top: 1px dashed #ddd;
    width: 1040px;
    min-width: 950px;
}

.fleft {
    float: left;
}

.fright {
    float: right;
}

a:visited {
    color: #669;
    text-decoration: none;
}

a:link {
    color: #37a;
    text-decoration: none;
}

a:hover {
    color: #fff;
    text-decoration: none;
    background: #37a;
}

a {
    cursor: pointer;
}
</style>
