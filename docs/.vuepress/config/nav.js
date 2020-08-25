module.exports = [
	{ text: '主页', link: '/', icon: 'iconfont icon-home' },
	{ text: '导航栏1', link: '/views/side1/page1' },
	{
		text: '导航栏2',
		ariaLabel: '导航栏2-菜单',
		items: [
			{ text: '子菜单1', link: '/views/side1/page1' },
			{ text: '子菜单2', link: '/views/side1/page2' },
			{
				text: '子菜单3', items: [
					{ text: '子菜单3-1', link: '/views/side2/page3' },
					{ text: '子菜单3-2', link: '/views/side2/page4' }
				]
			},
		]
	}
]