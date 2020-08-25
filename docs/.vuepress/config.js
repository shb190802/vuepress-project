const nav = require('./config/nav')
const sidebar = require('./config/sidebar')

module.exports = {
	title: '项目标题',
	description: '项目描述',
	theme: 'reco',
	base: '/vuepress-project/',
	themeConfig: {
		// type: 'blog',
		logo: '/images/logo.png',
		nav,
		sidebar,
		sidebarDepth: 1,
		blogConfig: {
			category: {
				location: 2,     // 在导航栏菜单中所占的位置，默认2
				text: '文章分类' // 默认文案 “分类”
			},
			tag: {
				location: 3,     // 在导航栏菜单中所占的位置，默认3
				text: 'Tag'      // 默认文案 “标签”
			}
		}
	},
	author: 'suohongbo',
	head: [
		["link", { rel: "icon", href: "/favicon.ico" }],
		["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }]
	]
}