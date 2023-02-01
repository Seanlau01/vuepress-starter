module.exports={
  base:'/vuepress-starter/',
  title:'Louis blogs',
  description:'this is my built blog sys',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/favicon.ico' }],
    ['meta',{ name:'keywords',content:'vuepress 新上手'}],
    ['meta', { author:'louis',content:'louis blogs'}]
  ],
    themeConfig: {
        logo: '/assets/img/hero.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'External', link: 'https://google.com', target:'_self', rel:'' },
      { text: 'Guide', link: '/guide/', target:'_blank' },
     {text:'About',link:'/About'},
      {
        text: 'Languages',
     
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      }
          ],
          '/zh/': {
            sidebar: 'auto'
          },
          searchMaxSuggestions: 10,
          lastUpdated: '更新时间：', // string | boolean
          
      }
}