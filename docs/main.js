
import NotImage from "./assets/404.jpg"
import avatar from "./assets/avatar.jpg"
import weixinpay from "./assets/weixinpay.png"

const hikototo = "也幻想过自己是鼓手，是赛车手，是小提琴手，但最后发现还是最想牵你的手，所以我松开拳头用手握紧笔，作为自己作为人类也作为你，就像是一场华尔街的阴谋，透露着优雅的杀戮。";

export default {
    header: {
        header_icon: avatar,
        header_image: NotImage,
        header_title: "Hua's home",
        header_navlist: [
            { name: "博客首页", link: "/", target: "_blank" },
            { name: "友情链接", link: "/friends/", target: "_blank" },
            { name: "隐私政策", link: "/privacy/", target: "_blank" },
            { name: "给我留言", link: "/", target: "_blank" },
            { name: "关于小站", link: "/", target: "_blank" }
        ],
    },
    footer: {
        footer_name: "Hua's home",
        footer_link: "https://github.com/yichen9247",
        footer_copyright: "Copyright © 2023 - 2024 <a href='\\'>Hua's home</a>"
    },
    pages: {
        privacy: { open: true, path: "/privacy", config: { open: true, path: "privacy", name: "隐私政策", image: NotImage } },
        friends: { open: true, path: "/friends", config: { open: true, path: "friends", name: "友情链接", image: NotImage } }
    },
    actives: [
        { path: "post-1", config: { path: "post-1", name: '我们终将在音乐里相遇', desc: hikototo, image: NotImage, tags: ['日常','游记'], class: ['日常','游记'] }, isFixed: true },
    ],
    author: {
        author_name: '麻辣猪头',
        author_link: 'https://xiaokolomi.cn/',
        author_desc: '也幻想过自己是鼓手，是赛车手，是小提琴手，但最后发现还是最想牵你的手，所以我松开拳头用手握紧笔，作为自己作为人类也作为你，就像是一场华尔街的阴谋，透露着优雅的杀戮。',
        author_avatar: avatar,
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
        drawer_image: NotImage,
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
        { name: "Hua's home", desc: hikototo, image: avatar, href: "https://xiaokolomi.cn/", target: "_blank" }
    ],
    carousel: [
        { title: '我们终将在音乐里相遇', desc: hikototo, image: NotImage, href: '/docs/post-1' },
        { title: '我们终将在音乐里相遇', desc: hikototo, image: NotImage, href: '/docs/post-1' },
        { title: '我们终将在音乐里相遇', desc: hikototo, image: NotImage, href: '/docs/post-1' },
        { title: '我们终将在音乐里相遇', desc: hikototo, image: NotImage, href: '/docs/post-1' },
    ]
}