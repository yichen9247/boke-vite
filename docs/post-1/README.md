
# 基础部分

## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题

{colorLine}
--

{colorLamp}
--

- [ ] 这是一个未选中的复选框  
- [x] 这是一个已选中的复选框

<!-- {music-song id[2112817782]}
--

{music-list id[8261376791]}
--

{music-list-show id[8261376791]}
-- -->

[title center] 居中标题
--

[notice] 也幻想过自己是鼓手，是赛车手，是小提琴手，但最后发现还是最想牵你的手，所以我松开拳头用手握紧笔，作为自己作为人类也作为你，就像是一场华尔街的阴谋，透露着优雅的杀戮。
--

[message] 也幻想过自己是鼓手，是赛车手，是小提琴手，但最后发现还是最想牵你的手，所以我松开拳头用手握紧笔，作为自己作为人类也作为你。
--

[message default] 也幻想过自己是鼓手，是赛车手，是小提琴手，但最后发现还是最想牵你的手，所以我松开拳头用手握紧笔，作为自己作为人类也作为你。
--

[message success] 也幻想过自己是鼓手，是赛车手，是小提琴手，但最后发现还是最想牵你的手，所以我松开拳头用手握紧笔，作为自己作为人类也作为你。
--

[message warning] 也幻想过自己是鼓手，是赛车手，是小提琴手，但最后发现还是最想牵你的手，所以我松开拳头用手握紧笔，作为自己作为人类也作为你。
--

[message erroring] 也幻想过自己是鼓手，是赛车手，是小提琴手，但最后发现还是最想牵你的手，所以我松开拳头用手握紧笔，作为自己作为人类也作为你。
--

***

| 单元格 | 单元格 | 单元格 |
| ---- | ---- | ---- |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |

***

~~测试文本~~
**测试文本**
***测试文本***

* 无序列表项一
+ 无序列表项二
- 无序列表项三


1. 有序列表项一
2. 有序列表项二
3. 有序列表项三

***

```js
const route = useRoute();
const htmlContent = ref('');
import { marked } from 'marked'
const config = route.meta.config;
const filePath = '../../../docs/' + config.path + '/README.md';

```

![图片描述](https://element-plus.org/images/element-plus-logo.svg)

本文内容较为详细，基础部分如果已经有或者已经完成了的，可以自行选择跳过。

# 什么是Git

Git（读音为/gɪt/）是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。

Git也是 Linus Torvalds 为了帮助管理Linux内核开发而开发的一个开放源码的版本控制软件。

Torvalds 开始着手开发 Git 是为了作为一种过渡方案来替代 `BitKeeper`。

# 安装Git

要在 Windows 平台上使用 Git ，你需要 `Git for Windows` ，下载并安装 ( 如果觉得官网下载速度过慢，可以前往 淘宝 NPM 镜像 下载 ) 。

# 验证安装

在资源管理器右键菜单或开始菜单里，可以找到 `Git Bash` ，打开后是个命令行界面 ( 记住这个东西，待会要用 )。

# 下载Node.js

下载 Node.js 并安装 ( 同样，如果觉得官网下载速度过慢，可以前往 淘宝 NPM 镜像 下载 ) 。

# 验证安装

打开 Git Bash ，通过下面的代码查看版本 :

```bash
node -v
npm -v
```

# GitHub & SSH key

前往 `GitHub` 注册属于你的账号 ( 请及时验证邮箱地址 ) 。

打开 `Git Bash` ，执行下面的命令：

```bash
ssh-keygen -t rsa -C "{{你的电子邮箱地址}}"
```

连续3次回车，最终会在用户目录下生成个包含公钥私钥等数据的目录 ( 一般是 C:/Users/{{你的用户名}}/.ssh/ ) 。

打开这个目录，找到 `id_rsa.pub` 文件，用你喜欢的二进制文本编辑器 ( 记事本 ) 打开并复制里面的内容。前往 GitHub -> Settings -> SSH and GPG keys -> New SSH key ：

将刚复制的内容粘贴到 Key 中，Title 填你喜欢的，点击保存 ( Add SSH Key ) 。

# 设置Git

执行下面的命令：

```bash
git config --global user.name "{{你的 GitHub username}}"
git config --global user.email "{{你的 GitHub 注册邮箱地址}}"
```

# 验证Git

打开 `Git Bash` ，执行下面的命令：

```bash
ssh -T git@github.com # 此处邮箱地址不用改
```

如果提示 Are you sure you want to continue connecting (yes/no)? 请输入 yes 并回车。

Hi {{你的 GitHub username}}! You've successfully authenticated, but GitHub does not provide shell access.

如果看到这个信息则说明您的Git设置成功。

# 安装Hexo

Hexo 是一个快速、简洁且高效的博客框架。

打开 `Git Bash` ，运行下面的命令安装 Hexo( 回车后可能需要等待一段时间 )：

```bash
npm install -g hexo
```

如果提示 + hexo@{{版本号}} 即为安装成功。

# 初始化Hexo

在电脑的某个地方新建一个文件夹，由于这个文件夹就是你博客存放源文件的地方，所以最好不要随便放。

在这个文件夹下右键启动 `Git Bash` ( 或者其他地方打开 `Git Bash` 后 `cd` 到该目录下 ) ，运行下面的命令( 运行时程序会 clone 基础数据，此过程需要等待 )：

```bash
hexo init
```

当显示 `INFO Start blogging with Hexo!` 即为成功。

可以根据 官方文档 修改 `_config.yml` 配置文件，接下来继续执行下面的命令：

```bash
hexo g # 生成站点静态文件
hexo s # 启动内置的服务器
```

执行 `hexo s` 启动了内置的服务器后，打开浏览器访问 http://localhost:4000 即可看到你的站点 ( 本地预览 ) 。

欣赏完了？在刚刚的 Git Bash 内键盘操作 Ctrl+C 关掉服务器。

# 更换主题

如果你喜欢Hexo默认的主题，请跳过本章节。

我在这里用 `SumiMakito/hexo-theme-Journal` 举例子。

在你的 `hexo` 站点目录下用 `Git Bash` 运行下面的命令安装主题 (此过程 需要等待 ) :

```bash
git clone {{主题 git 文件地址}} themes/{{主题名称}}
```

例如以下命令：

```bash
git clone https://github.com/SumiMakito/hexo-theme-Journal.git themes/journal
```

下载完成后修改 `_config.yml` 中的 `theme: landscape` 改为 `theme: {{主题名称}}` ，然后执行 `hexo g` 来重新生成。

如果出现一些莫名其妙的问题，执行 `hexo clean` 来清理 `public` 的内容，然后重新生成发布。

# 创建仓库

前往 GitHub -> New repository ，新建一个名为 {{你的 GitHub username}}.github.io 的仓库，其余默认，然后点击创建 ( Create repository ) 。

# 修改配置

用你喜欢的二进制文本编辑器 ( 记事本 ) 打开 `_config.yml` ，查找 `deploy`: ，将这部分修改为：

```bash
deploy:
  type: git
  repo: git@github.com:{{你的 GitHub username}}/{{你的 GitHub username}}.github.io.git
  branch: master
```

# 安装插件

在你的 `hexo` 站点目录下用 `Git Bash` 运行下面的命令( 此过程需要等待 )：

```bash
npm install hexo-deployer-git --save
```

# 一键部署

在你的 `Hexo` 站点目录下用 `Git Bash` 运行下面的命令( 此过程需要等待 )：

```bash
hexo d
```

完成后会提示 `INFO Deploy done: git`

# 访问站点

然后你就可以通过 `https://{{你的 GitHub username}}.github.io` 访问你的站点了。

# 书写文章

在你的 `Hexo` 站点目录下用 `Git Bash` 运行下面的命令：

```bash
hexo new '{{文章名称}}'
```

运行后 `source\_posts\` 目录下就多了 `{{文章名称}}.md` 文件，用你喜欢的二进制文本编辑器 ( 记事本 ) 打开这个文件，hexo默认生成了头部信息。

文章内容支持 `Markdown` 语法。

编辑完文章后 `hexo d -g` 即可一键生成并上传。

# 绑定域名

首先你需要有一个属于自己的域名。

在 `DNS` 解析中添加想要的主机记录 `CNAME` 到 `{{你的 GitHub username}}.github.io` 。

在你的 `hexo` 站点目录下的 `source\` 目录中，新建一个名为 `CNAME` 的文件 ( 无后缀 ) ，用你喜欢的二进制文本编辑器 ( 记事本 ) 打开这个文件，里面填写你的域名。

绑定了新域名之后，原来的 `{{你的 GitHub username}}.github.io` 并没有失效，而是会自动跳转到你的新域名地址。

然后执行命令 `hexo d -g` 一键部署即可。

# Hexo常用命令

Hexo常见命令如下：

```bash
hexo new "postName" # 新建文章

hexo new page "pageName" # 新建页面

hexo generate # 生成静态页面至目录

hexo server # 开启本地预览服务器

hexo deploy # 部署网站到远程端

hexo help # 查看Hexo的帮助

hexo version # 查看Hexo的版本
```

Hexo缩写命令如下：

```bash
hexo n == hexo new
hexo g == hexo generate
hexo s == hexo server
hexo d == hexo deploy
```

Hexo组合命令如下：

```bash
hexo s -g # 生成并预览
hexo d -g # 生成并上传
```

# 特别鸣谢

本文参考由 小茗同学 创作的文章 使用hexo+github搭建免费个人博客详细教程-好记的博客

本文的部分内容使用了该文章部分内容且进行了部分修改。