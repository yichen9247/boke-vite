今年 2 月 7 日，为了让大家能更加身临其境的感受到 AI 的强大，微软对外发布了一款全新的，基于人工智能驱动的搜索引擎： `New Bing`。不知道小伙伴们有没有试用过？

新版 `Bing` 与 `GPT` 结合而成的 `Bing Chat`，直接颠覆了以往传统的搜索方式。用户采用一对一对话的方式，即可让 `AI` 实现在线解答。

相较于 `ChatGPT`，`Bing Chat` 的响应速度更快，信息更新及时，且没有对话限制。

无论从哪个角度看，`Bing Chat` 都要比 `ChatGPT` 更加成熟与优秀。

另外，微软在 `GPT-4` 发布的当天，官方团队也确认了，现在的 `New Bing` 用的就是最新的 GPT-4。

![](/docs/assets/images/post-5/574db794e1460d5e.jpg)

也就是说，只要你现在用的是 New Bing，就能直接体验上 `GPT-4`！不过，`New Bing` 的内测申请一直是个问题，很多人早早提交了注册申请，至今仍然没有通过，我就是其中一员。
在漫长的等待过程中，我试过给 `Bing` 团队写邮件、用了官方提供的加速方案（下载 `Edge 浏览器`、`Bing App`），无奈这几种方法都没有见效。

多次尝试无果后，我选择了躺平，直到试了下程序员鱼皮发出的一个方案，发现竟然秒速通过！

# 操作方法

```text
1.开启全局代理，挂日本的节点；

2.打开 Chrome，进入无痕浏览模式，访问 bing.com/new；

3.在日本的节点下，注册微软新账号；

4.注册完成后，加入 waitlist；

4.无需等待，直接通过，欢迎享受 New Bing！
```

![](/docs/assets/images/post-5/0e07192fb966cda6.jpg)

鉴于 `Bing Chat` 强大的能力，以及提前集成了 `GPT-4` 的诱惑，开发者终于按耐不住，选择对其进行了逆向工程解析，并在前几天发布了项目：EdgeGPT。

该逆向工程 `API` 代码已在 `GitHub` 开源，目前增长迅猛，项目累积接近 `4000 Star`。安装方式很简单，直接用 `Python` 的 `pip` 命令即可：

```bash
python3 -m pip install EdgeGPT --upgrade
```

安装成功后，运行命令结果如下所示：

```text
EdgeGPT - A demo of reverse engineering the Bing GPT chatbot
Repo: github.com/acheong08/EdgeGPT
By: Antonio Cheong
!help for help
Type !exit to exit
Enter twice to send message or set --enter-once to send one line message

usage: EdgeGPT.py [-h] [--enter-once] [--no-stream] [--style {creative,balanced,precise}] --cookie-file COOKIE_FILE

options:
 -h, --help show this help message and exit
 --enter-once
 --no-stream
 --style {creative,balanced,precise}
 --cookie-file COOKIE_FILE
```

需要注意的一点是，在正式使用 `EdgeGPT` 之前，你需要先配置好 `Bing` 账号 `Cookies`。

配置方法

1.确保拥有 `Python 3.8.0` 运行环境，以及一个通过 `New Bing` 申请的账号。

2.访问 `bing.com`，并获取该网站 `cookies`；

3.将导出的 `cookies`，复制到一个 `cookies.json` 文件中。

后续调试，只需在代码中指明 `cookies.json` 文件路径即可。

```python
bot = Chatbot(cookiePath='./cookie.json')
```

# 特别鸣谢

本文参考由 [程序员鱼皮](https://space.bilibili.com/12890453) 创作的文章 无需等待，新必应 `New Bing` 注册秒通过！

本文的部分内容使用了该文章部分内容且进行了部分修改。