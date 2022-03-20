const config = {
  // Site info
  siteTitle: 'Topidesta - Tulisan Programmer Gadungan', // Site title.
  siteTitleShort: 'TOPIDESTA', // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: 'Topidesta - https://topidesta.my.id/', // Alternative site title for SEO.
  siteLogo: '/logos/logo-1024x1024.png', // Logo used for SEO and manifest.
  siteUrl: 'https://topidesta.my.id', // Domain of your website without pathPrefix.
  pathPrefix: '', // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: 'Topidesta - Tulisan Programmer Gadungan', // Website description used for RSS feeds/meta description tag.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteLang: 'id-ID',
  siteFBAppID: '', // FB Application ID for using app insights
  googleAnalyticsID: '146436102', // GA tracking ID.
  postDefaultCategoryID: 'trick', // Default category for posts.
  // Common for tag, category pages and widget
  numberLatestPost: 8,
  postsPerPage: 6,
  // Use for post
  dateFromFormat: 'YYYY-MM-DDTHH:mm:ssZ', // Date format used in the frontmatter.
  dateFormat: 'DD/MMMM/YYYY', // Date format for display.
  postTagged: '',
  postInCategories: '',
  postOnDate: 'Tampil ',
  // Use for comment
  lazyLoadComments: true,
  disqusShortname: 'topidesta-dev', // Disqus shortname.
  komentar: 'topidesta/topidesta', // Disqus shortname.
  btnLoadComments: 'Lihat Komentar',
  // Use for home page
  numberLoadmore: 6,
  btnLoadmore: 'Halaman selanjutnya ..',
  homeHasLoadmore: true,
  homeHasThumbnail: true,
  homeHeader: 'Indek',
  // Use for page
  pathPrefixPagination: '/page', // Prefix path for pagination
  pageNotFoundTitle: 'Halaman Tidak Ditemukan', //
  pageNotFoundBtn: 'Kembali',
  pageNotFoundContent: 'Wow, Halaman benar benar tidak ada woy!.',
  // Use for tag
  pathPrefixTag: '/tag', // Prefix path for tags
  tagHeader: '#', // use in header of tag-template page
  tagHasThumbnail: true,
  // Use for category
  pathPrefixCategory: '/category', // Prefix path for category
  categoryHeader: 'Kategori ', // use in header of category-template page
  categoryHasThumbnail: true,
  // Use for widget
  categoryWidgetTitle: 'Kategori',
  tagWidgetTitle: 'Tags',
  latestPostsWidgetTitle: 'Post baru',
  linksWidgetTitle: 'Links',
  // Use for Google custom search
  searchWidgetTitle: 'Pencarian',
  searchWidgetPlaceHolder: 'Kata Kunci',
  searchEngineID: '001989067992894107395:bqxk4ijd5_s',
  hasSearch: true,
  // Use for links widget
  sidebarSticky: true,
  sidebarLinks: [
    {
      label: 'GatsbyJS Template',
      url: 'https://github.com/completejavascript/gatsby-blog-template',
    },
    {
      label: 'RSUP Persahabatan',
      url: 'https://rsuppersahabatan.co.id/',
    },
    {
      label: 'Tania Rascia',
      url: 'https://www.taniarascia.com/',
    },
    {
      label: 'M Desta Fadilah',
      url: 'https://mdestafadilah.blogspot.com',
    },
  ],
  // Use for user info
  userName: 'Topidesta', // Username to display in the author segment.
  userEmail: 'desta.08b@gmail.com', // Email used for RSS feed"s author segment
  userTwitter: 'emang_dasar', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Jakarta, Indonesia', // User location to display in the author segment.
  userAvatar: '', // User avatar to display in the author segment.
  userDescription: 'Github, Gitlab, Bitbucket', // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'Email',
      url: 'mailto:desta.08b@gmail.com',
      iconClassName: 'far envelope',
    },
    {
      label: 'Website',
      url: 'https://topidesta.netlify.app',
      iconClassName: 'fas globe',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/emang_dasar',
      iconClassName: 'fab twitter',
    },
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/mfadilah/',
      iconClassName: 'fab facebook-f',
    },
    {
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/much-d-fadilah/',
      iconClassName: 'fab linkedin-in',
    },
  ],
  // Use for navigation
  navTitle: 'Topidesta',
  navLinks: [
    { label: 'Me', url: 'http://me.topidesta.my.id/' },
    { label: 'Tentang', url: '/about' },
    { label: 'Projek', url: '/projek' },
    { label: 'Konsep ATM', url: '/konsep-belajar-atm-amati-tiru-modifikasi' },
  ],
  // Use for footer
  socialLinks: [
    {
      label: 'Codepen',
      url: 'https://codepen.io/mdestafadilah/',
      iconClassName: 'fab codepen',
    },
    {
      label: 'FreeCodeCamp',
      url: '@fcc3452306c-380a-45f9-995c-d887348c8e38', // Ignore
      iconClassName: 'fab free-code-camp',
    },
    {
      label: 'GitHub',
      url: 'https://github.com/mdestafadilah',
      iconClassName: 'fab github',
    },
    {
      label: 'Facebook',
      url: 'https://www.facebook.com/mfadilah/',
      iconClassName: 'fab facebook-f',
    },
    {
      label: 'Linkedin',
      url: 'https://www.linkedin.com/in/much-d-fadilah/',
      iconClassName: 'fab linkedin-in',
    },
    {
      label: 'Twitter',
      url: 'https://twitter.com/emang_dasar',
      iconClassName: 'fab twitter',
    },
    {
      label: 'RSS',
      url: 'https://topidesta.netlify.app/rss.xml',
      iconClassName: 'fas rss',
    },
  ],
  footerLinks: [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Alat Tempur', url: '/alat' },
    { label: 'Belajar', url: '/belajar' },
    { label: 'Sitemap', url: 'https://topidesta.netlify.app/sitemap.xml' },
    { label: 'Lagu', url: '/lagu' },
  ],
  copyright: 'Copyright © 2019 Topidesta. MIT license.',
  // Use for manifest
  themeColor: '#2196F3', // Used for setting manifest and progress theme colors.
  backgroundColor: '#FFF', // Used for setting manifest background color.
}

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/' || config.pathPrefix === '') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/')
  config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/')
  config.siteRss = `/${config.siteRss}`

module.exports = config
