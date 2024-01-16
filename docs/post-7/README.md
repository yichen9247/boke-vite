# 写在前面

经常听到圈内同行说，想玩Linux却老是记不住命令，于是，我花了两天的时间自制了这款Linux运维工具箱，轻松解决想玩Linux却又记不住命令的问题，下面我就来说说这款工具箱的用途以及用法。

# 开始安装

第一种安装方式要麻烦一点，就是分步骤安装，下面是分步骤安装命令：

```bash
curl -sSO https://timex.yunair.cn/yichen9247/timextool/sh/Install/install.sh
```

如果发现CURL执行不了的话，请换一种方式安装：

```bash
wget -O https://timex.yunair.cn/yichen9247/timextool/sh/Install/install.sh
```

执行完拉取安装程序命令后，会自动开始执行安装程序，遇到询问操作是直接填入 Y就行了。

安装完成后，因为安装程序在系统新注册的命令还没有生效，你可以执行以下命令生效：

```bash
source ~/.bashrc
```

到此，第一种安装方式就安装完成了，其实也没有特别麻烦。

第二种安装方式就是直接使用一键安装命令，只需一步，工具箱就会自动安装完成，下面是一键安装命令：

```bash
if [ -f /usr/bin/curl ]; then curl -sSO https://timex.yunair.cn/yichen9247/timextool/sh/Install/install.sh; else wget -O https://timex.yunair.cn/yichen9247/timextool/sh/Install/install.sh; fi;sh install.sh;source ~/.bashrc;
```

到此，第二种安装方式就安装完成了，是不是特别的简单~

# 开始使用

安装完成后，会提示你使用 `timex` 来开始使用，我们只需跟着上面的提示来，记住：timex是工具箱的触发命令！

输入timex命令后，会出现以下界面，这是工具箱的功能界面，工具箱的所有功以及用法都在这里面。

玩VuePress的朋友们都知道，每次更新文章都要输入一串很难记忆的命令，为了方便更新文章，我在工具箱里面集成了一键更新文章的功能，感兴趣的可以试一下。

为了省时省力，我在工具箱里面集成了一键下载网络资源的功能，只需输入待下载的网络资源的直链（顾名思义，就是直接链接）就行了，默认下载的资源会保存在 `/root/download/` 里面，下载完成后请留意提示。

上班累了想摸鱼了，没关系，我在工具箱里面集成了命令行浏览器，什么是命令行浏览器？顾名思义就是以命令行的形式出现的浏览器，在这里面，没有图片，嘿嘿，即使是老板来了也看不出上面端倪~

养成必备，祝你养成每天打卡签到的好习惯，我在工具箱里面集成了随机一言、打卡签到等功能，只需发送两条命令，当日即可打卡成功，还有一言提示哦~

![](/docs/assets/images/post-7/f5d4e339d8048bec.png)

如何酷炫地展示操作系统信息？我在工具箱里面集成了可以酷炫的展示操作系统信息的功能，它可以展示操作系统的各项信息。

![](/docs/assets/images/post-7/71d682e10ef6fc4d.png)

上班累了想摸鱼了，没关系，我在工具箱里面集成了一些比较好玩的命令行游戏，祝你在杀怪路上更上一层楼，注意要时刻盯着老板哦~

每次安装软件都要输入复杂的英文命令怎么办？没关系，我在工具箱里面集成了一个软件商店，只需两步既可完成软件的安装，懒人党必备~

那既然是运维工具箱，那必不可少的就是运维功能，我在工具箱里面集成了比较常用的运维命令，让你轻松运维。

![](/docs/assets/images/post-7/30802ae727c62f87.png)

![](/docs/assets/images/post-7/83f447e7021d47e6.png)

![](/docs/assets/images/post-7/f473106acdc5592d.png)

![](/docs/assets/images/post-7/b319dd1fce91299b.png)

系统软件安装多了，软件安装器有很多缓存怎么办？没关系，我在工具箱里面集成了一键删除安装缓存的功能，只需一步，软件缓存统统消失！

# 适配系统

目前我的工具箱只支持 `CentOS` 和 `Ubuntu` 系统，因为Windows和Linux的文件系统差异较大，所以就没做这个版本的工具箱。

# 最后最后

工具箱不定期更新中，暂不支持在线更新以及更新检测功能，如有需要请在下方评论区联系我。
