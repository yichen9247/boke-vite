
import avatar from "./assets/avatar.jpg"
import weixinpay from "./assets/weixinpay.png"
import background from "./assets/background-02.jpg"

import post_1 from "./assets/header/post-1.jpg"
import post_2 from "./assets/header/post-2.jpg"
import post_3 from "./assets/header/post-3.jpg"
import post_4 from "./assets/header/post-4.jpg"
import post_5 from "./assets/header/post-5.jpg"
import post_6 from "./assets/header/post-6.jpg"
import post_7 from "./assets/header/post-7.jpg"
import post_8 from "./assets/header/post-4.jpg"
import post_9 from "./assets/header/post-4.jpg"
import post_10 from "./assets/header/post-4.jpg"

const hikototo = "也幻想过自己是鼓手，是赛车手，是小提琴手，但最后发现还是最想牵你的手，所以我松开拳头用手握紧笔，作为自己作为人类也作为你，就像是一场华尔街的阴谋，透露着优雅的杀戮。";

const post_1_desc = "Git（读音为/gɪt/）是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理。";
const post_2_desc = "看见很多朋友的站点都添加了音乐模块，如果你也想添加一个，请往下看，众所周知，当我们在写文章的时候，总要加点音乐进去才能让读者有心情看下去，那到底选什么歌才行呢？";
const post_3_desc = "2022这一年真的做了很多事，不过由于手机里很多照片都丢失了，下面的列表大概确实遗漏了几件事，由于中考的原因，2022年大事记就从四月份开始说吧。";
const post_4_desc = "WordPress 字体插件一款针对 WordPress 站点开发的一款可以替换网站前端字体的插件，利用该插件，站长可以快速实现替换站点前端字体等。";
const post_5_desc = "今年 2 月 7 日，为了让大家能更加身临其境的感受到 AI 的强大，微软对外发布了一款全新的，基于人工智能驱动的搜索引擎： New Bing。不知道小伙伴们有没有试用过？";
const post_6_desc = "不知不觉，随机网易云网站已由我开发且运行了大半年的时间了，相比之前，随机网易云无论是从样式上还是功能上都有很大的改善。";
const post_7_desc = "经常听到圈内同行说，想玩Linux却老是记不住命令，于是，我花了两天的时间自制了这款Linux运维工具箱，轻松解决想玩Linux却又记不住命令的问题，下面我就来说说这款工具箱的用途以及用法。";
const post_8_desc = "WordPress 字体插件一款针对 WordPress 站点开发的一款可以替换网站前端字体的插件，利用该插件，站长可以快速实现替换站点前端字体等。";
const post_9_desc = "WordPress 字体插件一款针对 WordPress 站点开发的一款可以替换网站前端字体的插件，利用该插件，站长可以快速实现替换站点前端字体等。";
const post_10_desc = "WordPress 字体插件一款针对 WordPress 站点开发的一款可以替换网站前端字体的插件，利用该插件，站长可以快速实现替换站点前端字体等。";

export default {
    header: {
        header_icon: avatar,
        header_image: background,
        header_title: "Hua's home",
        header_navlist: [
            { name: "博客首页", link: "/", target: "_blank" },
            { name: "友情链接", link: "/friends/", target: "_blank" },
            { name: "隐私政策", link: "/privacy/", target: "_blank" },
            { name: "我的项目", link: "/project/", target: "_blank" },
            { name: "关于小站", link: "/", target: "_blank" },
        ],
    },
    footer: {
        footer_name: "Hua's home",
        footer_link: "https://github.com/yichen9247",
        footer_copyright: "Copyright © 2023 - 2024 <a href='\\'>Hua's home</a>"
    },
    pages: {
        project: { open: true, path: "/project", config: { open: true, path: "project", name: "我的项目", image: background } },
        privacy: { open: true, path: "/privacy", config: { open: true, path: "privacy", name: "隐私政策", image: background } },
        friends: { open: true, path: "/friends", config: { open: true, path: "friends", name: "友情链接", image: background } }
    },
    actives: [
        { path: "post-1", config: { path: "post-1", name: '让我们用 GitHub Pages 搭建一个 Hexo 博客', desc: post_1_desc, image: post_1, tags: ['实用教程','个人博客','博客搭建','Hexo'], class: ['实用教程','个人博客','博客搭建'] }, isFixed: false },
        { path: "post-2", config: { path: "post-2", name: '随机网易云-让你的博客或网站动起来', desc: post_2_desc, image: post_2, tags: ['我的项目','个人原创','原创作品','随机网易云'], class: ['我的项目','个人原创','原创作品'] }, isFixed: false },
        { path: "post-3", config: { path: "post-3", name: '叮！来自王健铮的 2022 年度总结', desc: post_3_desc, image: post_3, tags: ['年度总结','2022年度总结'], class: ['年度总结','2022'] }, isFixed: false },
        { path: "post-4", config: { path: "post-4", name: 'WordPress 字体插件 - 为建站小白而生', desc: post_4_desc, image: post_4, tags: ['我的项目','个人原创','原创作品'], class: ['年度总结','2022'] }, isFixed: false },
        { path: "post-5", config: { path: "post-5", name: '无需等待，新必应 New Bing 注册秒通过！', desc: post_5_desc, image: post_5, tags: ['实用教程'], class: ['实用教程'] }, isFixed: false },
        { path: "post-6", config: { path: "post-6", name: '震惊！某博主不想开发后台竟是SQL语句太过复杂', desc: post_6_desc, image: post_6, tags: ['我的项目','个人原创','原创作品','日常小记','Linux'], class: ['我的项目','个人原创','原创作品','日常小记'] }, isFixed: false },
        { path: "post-7", config: { path: "post-7", name: '自制运维工具箱，再也不用担心记不住命令了', desc: post_7_desc, image: post_7, tags: ['我的项目','个人原创','原创作品','日常小记','Linux'], class: ['我的项目','个人原创','原创作品','日常小记','Linux'] }, isFixed: false },
    ],
    author: {
        author_name: '麻辣猪头',
        author_link: 'https://xiaokolomi.cn/',
        author_desc: '也幻想过自己是鼓手，是赛车手，是小提琴手，但最后发现还是最想牵你的手，所以我松开拳头用手握紧笔，作为自己作为人类也作为你，就像是一场华尔街的阴谋，透露着优雅的杀戮。',
        author_avatar: avatar,
        author_github: 'yichen9247'
    },
    style: {
        dotted_color1: "#ff6c6c",
        dotted_color2: "#1989fa",
        site_dominColor: "#626aef",
        site_buttoColor: "rgba(97, 104, 240, 0.75)"
    },
    aside: {
        aside_sponsor: true,
        aside_lastpost: true,
        aside_statistics: true,
        sponsor_image: weixinpay,
    },
    drawer: {
        drawer_show: true,
        drawer_image: background,
        drawer_footer: true,
        drawer_social: true,
        drawer_statistics: true,
    },
    social: {
        tcqq: { show: true, link: "#" },
        tcwx: { show: true, link: "#" },
        huab: { show: true, link: "#" },
        ding: { show: true, link: "#" },
        qqmu: { show: true, link: "#" },
        bili: { show: true, link: "#" },
    },
    global: {
        cook_notice: true,
        post_listmode: 0,
        site_hreflinks: '/',
        code_highlight: true,
        post_copyright: true,
        index_carousel: true,
        dialog_draggle: false,
        carousel_interval: 5000,
        site_title: "Hua's home",
        site_address: "http://localhost:5173",
        cook_message: "为记录访客的关键行为，我们使用Cookie技术来存储你的一些信息，详情请查看<a href='/pricay/'>《隐私政策》</a>"
    },
    friends: [
        { name: "Hua's home", desc: hikototo, image: avatar, href: "https://xiaokolomi.cn/", target: "_blank" },
        { name: "微生之最", desc: "从微观到宏观，用技术改变世界", image: "https://q1.qlogo.cn/g?b=qq&nk=1748326225&s=640", href: "https://bbixb.top/", target: "_blank" },
        { name: "吃猫的鱼", desc: "吃猫的鱼--一个优质的技术博客！", image: "https://thirdqq.qlogo.cn/g?b=qq&nk=2911396166&s=100", href: "https://www.fish9.cn", target: "_blank" },
        { name: "点新花雨", desc: "这就是你渴望的长大吗?", image: "https://www.iqfk.top/wp-content/uploads/2023/10/20231027012338238508.webp", href: "https://www.iqfk.top/", target: "_blank" },
        { name: "Linkkk的小屋", desc: "给时光以生命，给岁月以文明。", image: "https://www.linkkk.top/image/tx.jpg", href: "https://www.linkkk.top", target: "_blank" },
        { name: "小林笔记", desc: "轻生活，秒上签", image: "https://senlinm.s3.us-east-005.backblazeb2.com/01.png", href: "https://m.senlinm.cn", target: "_blank" },
        { name: "中二病晚期の物語", desc: "一只狐狸敲出的一个奇迹", image: "https://cdn-imfurry.imfurry.com/avatar/zebwqFurryAvatar.png", href: "https://imfurry.com", target: "_blank" },
    ],
    carousel: [
        { title: '我们终将在音乐里相遇', desc: hikototo, image: background, href: '/docs/post-1' },
        { title: '我们终将在音乐里相遇', desc: hikototo, image: background, href: '/docs/post-1' },
        { title: '我们终将在音乐里相遇', desc: hikototo, image: background, href: '/docs/post-1' },
        { title: '我们终将在音乐里相遇', desc: hikototo, image: background, href: '/docs/post-1' },
    ]
}