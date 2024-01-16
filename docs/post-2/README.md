
# 停止维护

[block] 【项目停止维护公告】由于作者有强迫症，懒得收集网易云音乐ID，该项目已于2022-10-03停止维护且已开源，如需使用，请在Github上面自行拉取搭建，Github信息卡在文章末尾，谢谢！
---

# 写在前面

看见很多朋友的站点都添加了音乐模块，如果你也想添加一个，请往下看。

众所周知，当我们在写文章的时候，总要加点音乐进去才能让读者有心情看下去，那到底选什么歌才行呢？

对于像我这种有选择困难症的人来说，选歌无疑是比较困难的，为了防止这种情况发送，我用PHP写了一个随机网易云。

随机网易云，顾名思义就是随机播放一首网易云音乐，为了更好的达到声临其境的感觉，我采用了网易云音乐的H5嵌入原理。

# 使用截图

![使用截图](/docs/assets/header/post-2.jpg)

# 怎么使用

如果你只是想在网站上听听歌，你可以直接访问我的站点https://music.yunair.cn

# 怎么对接

```html
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=86 src="https://music.yunair.cn/?m=1"></iframe>

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=110 src="https://music.yunair.cn/index2.php?m=1></iframe>
```

# 必选参数

| 参数名 | 默认值 | 可选值 |
| ---- | ---- | ---- |
| m | 1 | 1 |

<span style="color: red">注：在嵌入随机网易云时，如果不使用此项参数将造成随机网易云与你的网站不相兼容的情况。</span>

# 可选参数

*dark*参数说明：深色模式，若参数值为1，表示开启深色模式，若参数值为2，表示当前为RGB深色模式，若值为0或者不设置参数表示不开启深色模式。

*type*参数说明：简洁模式，也称无图模式，若参数值为1，表示开启简洁模式，若值为0或者不设置参数表示不开启简洁模式。

*song*参数说明：音乐类型，若参数值为1，表示音乐类型为纯音乐，若值为2表示音乐类型为英文歌，若值为0或者不设置参数表示不设置音乐类型。

*auto*参数说明：音乐自动播放，若参数值为1，表示开启音乐自动播放，若值为0或者不设置参数表示不开启音乐自动播放，部分浏览器可能不支持音乐自动播放。

注：所有参数的默认值均为：`0`，在URL里，参数与参数之间使用 `&` 隔开。

# 简洁模式

```html
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=52 src="https://music.yunair.cn/?m=1&type=1"></iframe>

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=52 src="https://music.yunair.cn/index2.php?m=1&type=1"></iframe>
```

# 深色模式

```html
# Dark深色模式
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=86 src="https://music.yunair.cn/?m=1&dark=1"></iframe>

# RGB下深色模式
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=86 src="https://music.yunair.cn/?m=1&dark=2"></iframe>

# 纯音乐代码格式：
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=86 src="https://music.yunair.cn/?m=1&song=1"></iframe>

# 英文歌代码格式：
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=86 src="https://music.yunair.cn/?m=1&song=2"></iframe>
```

# 音乐类型

```html
# 纯音乐代码格式：
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=86 src="https://music.yunair.cn/?m=1&song=1"></iframe>

# 英文歌代码格式：
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=86 src="https://music.yunair.cn/?m=1&song=2"></iframe>
```

# 自动播放

```html
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=86 src="https://music.yunair.cn/?m=1&auto=1"></iframe>

<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=86 src="https://music.yunair.cn/index2.php?m=1&auto=1"></iframe>
```

# 歌单系统

为满足各大用户的需求，我们开发了随机歌单系统，可选参数还是上面的参数不变（除了音乐类型外），对接方法如下:

```html
<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=100% height=110 src="https://music.yunair.cn/index2.php?m=1"></iframe>
```

# 收录要求

为了给用户一个良好的体验，申请收录时请注意以下几点要求：

[title center] 因版权原因，暂时停止申请
---

# 申请收录

目前随机网易云的音乐收录量已经达到了900+，如果你想申请收录音乐，请按照以下格式在本页面底部的评论框里发送：

```text
音乐名字：夏野与暗恋
音乐类型：纯音乐
音乐的ID：421934070
音乐链接：https://music.163.com/#/song?id=421934070

歌单名字：高效率音乐 | 学习不是苦差事
歌单的ID：3068013756
歌单链接：https://music.163.com/#/playlist?id=3068013756
```

# 音乐编号

这个其实百度上都可以找得到，我在这里简单地概括一下：

第一步：找到链接并复制链接。

第二步：在链接里找到ID（id=后面的一串数字就是音乐或者歌单的ID，每首音乐和歌单的ID都不一样）

# 状态说明

我们对接口的访问安全性进行了优化，下面是一些状态码说明，请求成功则不返回：

```text
500：请求的接口参数值为空。

501：请求的接口参数值错误。

502：请求用户遭到拒绝访问。
```

<span sty="color: red">502参数补充说明：当用户恶意请求该接口时，会遭到拒绝访问，返回该状态码。</span>

# 注意事项

由于服务器开启了防跨站攻击和防爆破机制，如遇到音乐不能加载的情况，请刷新一下，如果刷新了一下还行不能加载就等待10分钟左右（600秒），如果还是不行，就请在下方留言反馈。

# 其它问题

```text
A：网站通常稳定吗？
Q：除非遇到大规模DDOS攻击，网站一般是非常稳定的。

A：这项目会开源吗？
Q：这个项目已几乎接近于半成熟，我们已经在Github上开源了此项目。

A：随机网易云收费吗？有广告吗？
Q：随机网易云永久免费，为了给各位一个良好的体验，也不会有广告，请大家放心使用。
```
