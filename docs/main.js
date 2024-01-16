
import avatar from "./assets/avatar.jpg"
import weixinpay from "./assets/weixinpay.png"
import background from "./assets/background-02.jpg"

const hikototo = "也幻想过自己是鼓手，是赛车手，是小提琴手，但最后发现还是最想牵你的手，所以我松开拳头用手握紧笔，作为自己作为人类也作为你，就像是一场华尔街的阴谋，透露着优雅的杀戮。";

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
        { path: "post-1", config: { path: "post-1", name: '我们终将在音乐里相遇', desc: hikototo, image: background, tags: ['日常','游记'], class: ['日常','游记'] }, isFixed: true },
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