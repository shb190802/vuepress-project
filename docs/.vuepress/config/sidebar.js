module.exports = {
	'/views/': [
		'',
		{
			title: '侧边栏1',
			collapsable: true,
			children: [
				'side1/page1',
				'side1/page2'
			]
		},
		{
			title: '侧边栏2',
			collapsable: true,
			children: [
				'side2/page3',
				'side2/page4'
			]
		}
	]
}