(function(n){function m(m){for(var s,u,d=m[0],p=m[1],g=m[2],r=0,i=[];r<d.length;r++)u=d[r],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&i.push(o[u][0]),o[u]=0;for(s in p)Object.prototype.hasOwnProperty.call(p,s)&&(n[s]=p[s]);t&&t(m);while(i.length)i.shift()();return a.push.apply(a,g||[]),e()}function e(){for(var n,m=0;m<a.length;m++){for(var e=a[m],s=!0,d=1;d<e.length;d++){var p=e[d];0!==o[p]&&(s=!1)}s&&(a.splice(m--,1),n=u(u.s=e[0]))}return n}var s={},o={app:0},a=[];function u(m){if(s[m])return s[m].exports;var e=s[m]={i:m,l:!1,exports:{}};return n[m].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=n,u.c=s,u.d=function(n,m,e){u.o(n,m)||Object.defineProperty(n,m,{enumerable:!0,get:e})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,m){if(1&m&&(n=u(n)),8&m)return n;if(4&m&&"object"===typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&m&&"string"!=typeof n)for(var s in n)u.d(e,s,function(m){return n[m]}.bind(null,s));return e},u.n=function(n){var m=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(m,"a",m),m},u.o=function(n,m){return Object.prototype.hasOwnProperty.call(n,m)},u.p="";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],p=d.push.bind(d);d.push=m,d=d.slice();for(var g=0;g<d.length;g++)m(d[g]);var t=p;a.push([0,"chunk-vendors"]),e()})({0:function(n,m,e){n.exports=e("56d7")},"034f":function(n,m,e){"use strict";var s=e("85ec"),o=e.n(s);o.a},"56d7":function(n,m,e){"use strict";e.r(m);var s=e("2b0e"),o=function(){var n=this,m=n.$createElement,e=n._self._c||m;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"box",style:{width:n.width,height:n.height}},[e("div",{staticClass:"header"},[n._v(n._s(n.year)+"年（美元）")]),e("transition-group",{attrs:{tag:"ul",name:"transition"}},n._l(n.list,(function(m,s){return e("li",{key:m.name,staticClass:"item",style:{top:s*n.itemHeight+"px"}},[e("div",{staticClass:"item"},[e("div",{staticClass:"country"},[n._v(n._s(m.name))]),e("div",{staticClass:"process"},[e("div",{staticClass:"outer",style:{width:n.process}},[e("div",{staticClass:"inner",style:{width:n.countryProcess(m.sum),background:n.colors[m.name]}})])]),e("div",{staticClass:"gdp"},[e("CountTo",{attrs:{dist:m.sum,duration:1e3}})],1)])])})),0)],1)])},a=[],u={1960:[{no:"1",name:"美国",gdp:"5433.0",sum:5433},{no:"2",name:"英国",gdp:"723.28",sum:723.28},{no:"3",name:"法国",gdp:"626.51",sum:626.51},{no:"4",name:"中国",gdp:"597.16",sum:597.16},{no:"5",name:"日本",gdp:"443.07",sum:443.07},{no:"6",name:"加拿大",gdp:"410.93",sum:410.93},{no:"7",name:"意大利",gdp:"403.85",sum:403.85},{no:"8",name:"印度",gdp:"370.3",sum:370.3},{no:"9",name:"澳大利亚",gdp:"185.78",sum:185.78},{no:"10",name:"巴西",gdp:"151.66",sum:151.66}],1961:[{no:"1",name:"美国",gdp:"5633.0",sum:5633},{no:"2",name:"英国",gdp:"766.94",sum:766.94},{no:"3",name:"法国",gdp:"683.47",sum:683.47},{no:"4",name:"日本",gdp:"535.09",sum:535.09},{no:"5",name:"中国",gdp:"500.57",sum:500.57},{no:"6",name:"意大利",gdp:"448.43",sum:448.43},{no:"7",name:"加拿大",gdp:"415.56",sum:415.56},{no:"8",name:"印度",gdp:"392.32",sum:392.32},{no:"9",name:"澳大利亚",gdp:"196.54",sum:196.54},{no:"10",name:"瑞典",gdp:"161.47",sum:161.47}],1962:[{no:"1",name:"美国",gdp:"6051.0",sum:6051},{no:"2",name:"英国",gdp:"806.02",sum:806.02},{no:"3",name:"法国",gdp:"763.14",sum:763.14},{no:"4",name:"日本",gdp:"607.23",sum:607.23},{no:"5",name:"意大利",gdp:"503.84",sum:503.84},{no:"6",name:"中国",gdp:"472.09",sum:472.09},{no:"7",name:"加拿大",gdp:"428.68",sum:428.68},{no:"8",name:"印度",gdp:"421.61",sum:421.61},{no:"9",name:"阿根廷",gdp:"244.51",sum:244.51},{no:"10",name:"巴西",gdp:"199.26",sum:199.26}],1963:[{no:"1",name:"美国",gdp:"6386.0",sum:6386},{no:"2",name:"法国",gdp:"855.51",sum:855.51},{no:"3",name:"英国",gdp:"854.44",sum:854.44},{no:"4",name:"日本",gdp:"694.98",sum:694.98},{no:"5",name:"意大利",gdp:"577.11",sum:577.11},{no:"6",name:"中国",gdp:"507.07",sum:507.07},{no:"7",name:"印度",gdp:"484.22",sum:484.22},{no:"8",name:"加拿大",gdp:"457.13",sum:457.13},{no:"9",name:"巴西",gdp:"230.21",sum:230.21},{no:"10",name:"澳大利亚",gdp:"215.07",sum:215.07}],1964:[{no:"1",name:"美国",gdp:"6858.0",sum:6858},{no:"2",name:"法国",gdp:"949.07",sum:949.07},{no:"3",name:"英国",gdp:"933.88",sum:933.88},{no:"4",name:"日本",gdp:"817.49",sum:817.49},{no:"5",name:"意大利",gdp:"631.75",sum:631.75},{no:"6",name:"中国",gdp:"597.08",sum:597.08},{no:"7",name:"印度",gdp:"564.8",sum:564.8},{no:"8",name:"加拿大",gdp:"501.27",sum:501.27},{no:"9",name:"阿根廷",gdp:"256.05",sum:256.05},{no:"10",name:"澳大利亚",gdp:"237.64",sum:237.64}],1965:[{no:"1",name:"美国",gdp:"7437.0",sum:7437},{no:"2",name:"法国",gdp:"1021.61",sum:1021.61},{no:"3",name:"英国",gdp:"1005.96",sum:1005.96},{no:"4",name:"日本",gdp:"909.5",sum:909.5},{no:"5",name:"中国",gdp:"704.36",sum:704.36},{no:"6",name:"意大利",gdp:"679.78",sum:679.78},{no:"7",name:"印度",gdp:"595.55",sum:595.55},{no:"8",name:"加拿大",gdp:"553.42",sum:553.42},{no:"9",name:"阿根廷",gdp:"283.45",sum:283.45},{no:"10",name:"澳大利亚",gdp:"259.38",sum:259.38}],1966:[{no:"1",name:"美国",gdp:"8150.0",sum:8150},{no:"2",name:"法国",gdp:"1105.97",sum:1105.97},{no:"3",name:"英国",gdp:"1070.91",sum:1070.91},{no:"4",name:"日本",gdp:"1056.28",sum:1056.28},{no:"5",name:"中国",gdp:"767.2",sum:767.2},{no:"6",name:"意大利",gdp:"736.55",sum:736.55},{no:"7",name:"加拿大",gdp:"620.15",sum:620.15},{no:"8",name:"印度",gdp:"458.65",sum:458.65},{no:"9",name:"西班牙",gdp:"287.21",sum:287.21},{no:"10",name:"阿根廷",gdp:"286.3",sum:286.3}],1967:[{no:"1",name:"美国",gdp:"8617.0",sum:8617},{no:"2",name:"日本",gdp:"1237.82",sum:1237.82},{no:"3",name:"法国",gdp:"1194.66",sum:1194.66},{no:"4",name:"英国",gdp:"1111.85",sum:1111.85},{no:"5",name:"意大利",gdp:"811.33",sum:811.33},{no:"6",name:"中国",gdp:"728.82",sum:728.82},{no:"7",name:"加拿大",gdp:"666.65",sum:666.65},{no:"8",name:"印度",gdp:"501.35",sum:501.35},{no:"9",name:"西班牙",gdp:"316.47",sum:316.47},{no:"10",name:"巴西",gdp:"305.92",sum:305.92}],1968:[{no:"1",name:"美国",gdp:"9425.0",sum:9425},{no:"2",name:"日本",gdp:"1466.01",sum:1466.01},{no:"3",name:"法国",gdp:"1298.47",sum:1298.47},{no:"4",name:"英国",gdp:"1047.03",sum:1047.03},{no:"5",name:"意大利",gdp:"879.42",sum:879.42},{no:"6",name:"加拿大",gdp:"729.2",sum:729.2},{no:"7",name:"中国",gdp:"708.47",sum:708.47},{no:"8",name:"印度",gdp:"530.85",sum:530.85},{no:"9",name:"巴西",gdp:"338.76",sum:338.76},{no:"10",name:"澳大利亚",gdp:"326.65",sum:326.65}],1969:[{no:"1",name:"美国",gdp:"1.02万",sum:10200},{no:"2",name:"日本",gdp:"1722.04",sum:1722.04},{no:"3",name:"法国",gdp:"1407.25",sum:1407.25},{no:"4",name:"英国",gdp:"1126.77",sum:1126.77},{no:"5",name:"意大利",gdp:"970.85",sum:970.85},{no:"6",name:"加拿大",gdp:"803.49",sum:803.49},{no:"7",name:"中国",gdp:"797.06",sum:797.06},{no:"8",name:"印度",gdp:"584.48",sum:584.48},{no:"9",name:"巴西",gdp:"374.59",sum:374.59},{no:"10",name:"澳大利亚",gdp:"366.29",sum:366.29}],1970:[{no:"1",name:"美国",gdp:"1.07万",sum:10700},{no:"2",name:"德国",gdp:"2150.22",sum:2150.22},{no:"3",name:"日本",gdp:"2126.09",sum:2126.09},{no:"4",name:"法国",gdp:"1484.56",sum:1484.56},{no:"5",name:"英国",gdp:"1306.72",sum:1306.72},{no:"6",name:"意大利",gdp:"1130.21",sum:1130.21},{no:"7",name:"中国",gdp:"926.03",sum:926.03},{no:"8",name:"加拿大",gdp:"878.96",sum:878.96},{no:"9",name:"印度",gdp:"624.22",sum:624.22},{no:"10",name:"巴西",gdp:"423.28",sum:423.28}],1971:[{no:"1",name:"美国",gdp:"1.16万",sum:11600},{no:"2",name:"德国",gdp:"2490.39",sum:2490.39},{no:"3",name:"日本",gdp:"2401.52",sum:2401.52},{no:"4",name:"法国",gdp:"1659.67",sum:1659.67},{no:"5",name:"英国",gdp:"1481.14",sum:1481.14},{no:"6",name:"意大利",gdp:"1242.61",sum:1242.61},{no:"7",name:"中国",gdp:"998.01",sum:998.01},{no:"8",name:"加拿大",gdp:"992.72",sum:992.72},{no:"9",name:"印度",gdp:"673.51",sum:673.51},{no:"10",name:"巴西",gdp:"492.04",sum:492.04}],1972:[{no:"1",name:"美国",gdp:"1.28万",sum:12800},{no:"2",name:"日本",gdp:"3180.31",sum:3180.31},{no:"3",name:"德国",gdp:"2986.67",sum:2986.67},{no:"4",name:"法国",gdp:"2034.94",sum:2034.94},{no:"5",name:"英国",gdp:"1699.65",sum:1699.65},{no:"6",name:"意大利",gdp:"1447.81",sum:1447.81},{no:"7",name:"中国",gdp:"1136.88",sum:1136.88},{no:"8",name:"加拿大",gdp:"1130.83",sum:1130.83},{no:"9",name:"印度",gdp:"714.63",sum:714.63},{no:"10",name:"西班牙",gdp:"589.72",sum:589.72}],1973:[{no:"1",name:"美国",gdp:"1.43万",sum:14300},{no:"2",name:"日本",gdp:"4320.83",sum:4320.83},{no:"3",name:"德国",gdp:"3968.67",sum:3968.67},{no:"4",name:"法国",gdp:"2644.3",sum:2644.3},{no:"5",name:"英国",gdp:"1925.38",sum:1925.38},{no:"6",name:"意大利",gdp:"1749.13",sum:1749.13},{no:"7",name:"中国",gdp:"1385.44",sum:1385.44},{no:"8",name:"加拿大",gdp:"1313.22",sum:1313.22},{no:"9",name:"印度",gdp:"855.15",sum:855.15},{no:"10",name:"巴西",gdp:"792.79",sum:792.79}],1974:[{no:"1",name:"美国",gdp:"1.55万",sum:15500},{no:"2",name:"日本",gdp:"4796.26",sum:4796.26},{no:"3",name:"德国",gdp:"4436.19",sum:4436.19},{no:"4",name:"法国",gdp:"2855.52",sum:2855.52},{no:"5",name:"英国",gdp:"2061.31",sum:2061.31},{no:"6",name:"意大利",gdp:"1989.06",sum:1989.06},{no:"7",name:"加拿大",gdp:"1604.09",sum:1604.09},{no:"8",name:"中国",gdp:"1441.82",sum:1441.82},{no:"9",name:"巴西",gdp:"1051.36",sum:1051.36},{no:"10",name:"印度",gdp:"995.26",sum:995.26}],1975:[{no:"1",name:"美国",gdp:"1.68万",sum:16800},{no:"2",name:"日本",gdp:"5215.42",sum:5215.42},{no:"3",name:"德国",gdp:"4887.8",sum:4887.8},{no:"4",name:"法国",gdp:"3608.32",sum:3608.32},{no:"5",name:"英国",gdp:"2417.57",sum:2417.57},{no:"6",name:"意大利",gdp:"2269.45",sum:2269.45},{no:"7",name:"加拿大",gdp:"1738.34",sum:1738.34},{no:"8",name:"中国",gdp:"1634.32",sum:1634.32},{no:"9",name:"巴西",gdp:"1237.09",sum:1237.09},{no:"10",name:"西班牙",gdp:"1144.65",sum:1144.65}],1976:[{no:"1",name:"美国",gdp:"1.87万",sum:18700},{no:"2",name:"日本",gdp:"5861.62",sum:5861.62},{no:"3",name:"德国",gdp:"5177.88",sum:5177.88},{no:"4",name:"法国",gdp:"3723.19",sum:3723.19},{no:"5",name:"英国",gdp:"2326.15",sum:2326.15},{no:"6",name:"意大利",gdp:"2239.76",sum:2239.76},{no:"7",name:"加拿大",gdp:"2065.76",sum:2065.76},{no:"8",name:"中国",gdp:"1539.4",sum:1539.4},{no:"9",name:"巴西",gdp:"1526.78",sum:1526.78},{no:"10",name:"西班牙",gdp:"1181.85",sum:1181.85}],1977:[{no:"1",name:"美国",gdp:"2.08万",sum:20800},{no:"2",name:"日本",gdp:"7214.12",sum:7214.12},{no:"3",name:"德国",gdp:"5982.26",sum:5982.26},{no:"4",name:"法国",gdp:"4102.79",sum:4102.79},{no:"5",name:"英国",gdp:"2630.66",sum:2630.66},{no:"6",name:"意大利",gdp:"2567.47",sum:2567.47},{no:"7",name:"加拿大",gdp:"2116.12",sum:2116.12},{no:"8",name:"巴西",gdp:"1761.71",sum:1761.71},{no:"9",name:"中国",gdp:"1749.38",sum:1749.38},{no:"10",name:"西班牙",gdp:"1320.9",sum:1320.9}],1978:[{no:"1",name:"美国",gdp:"2.35万",sum:23500},{no:"2",name:"日本",gdp:"1.01万",sum:10100},{no:"3",name:"德国",gdp:"7376.68",sum:7376.68},{no:"4",name:"法国",gdp:"5067.08",sum:5067.08},{no:"5",name:"英国",gdp:"3358.83",sum:3358.83},{no:"6",name:"意大利",gdp:"3140.19",sum:3140.19},{no:"7",name:"加拿大",gdp:"2186.33",sum:2186.33},{no:"8",name:"巴西",gdp:"2008.01",sum:2008.01},{no:"9",name:"西班牙",gdp:"1601.63",sum:1601.63},{no:"10",name:"荷兰",gdp:"1558.6",sum:1558.6}],1979:[{no:"1",name:"美国",gdp:"2.63万",sum:26300},{no:"2",name:"日本",gdp:"1.06万",sum:10600},{no:"3",name:"德国",gdp:"8780.11",sum:8780.11},{no:"4",name:"法国",gdp:"6139.53",sum:6139.53},{no:"5",name:"英国",gdp:"4389.94",sum:4389.94},{no:"6",name:"意大利",gdp:"3923.79",sum:3923.79},{no:"7",name:"加拿大",gdp:"2430.72",sum:2430.72},{no:"8",name:"巴西",gdp:"2249.69",sum:2249.69},{no:"9",name:"西班牙",gdp:"2140.19",sum:2140.19},{no:"10",name:"荷兰",gdp:"1796.69",sum:1796.69}],1980:[{no:"1",name:"美国",gdp:"2.86万",sum:28600},{no:"2",name:"日本",gdp:"1.11万",sum:11100.000000000002},{no:"3",name:"德国",gdp:"9466.95",sum:9466.95},{no:"4",name:"法国",gdp:"7012.88",sum:7012.88},{no:"5",name:"英国",gdp:"5649.48",sum:5649.48},{no:"6",name:"意大利",gdp:"4756.83",sum:4756.83},{no:"7",name:"加拿大",gdp:"2738.54",sum:2738.54},{no:"8",name:"巴西",gdp:"2350.25",sum:2350.25},{no:"9",name:"西班牙",gdp:"2321.35",sum:2321.35},{no:"10",name:"墨西哥",gdp:"2051.39",sum:2051.39}],1981:[{no:"1",name:"美国",gdp:"3.21万",sum:32100},{no:"2",name:"日本",gdp:"1.22万",sum:12200},{no:"3",name:"德国",gdp:"7974.43",sum:7974.43},{no:"4",name:"法国",gdp:"6155.52",sum:6155.52},{no:"5",name:"英国",gdp:"5407.66",sum:5407.66},{no:"6",name:"意大利",gdp:"4292.82",sum:4292.82},{no:"7",name:"加拿大",gdp:"3062.15",sum:3062.15},{no:"8",name:"墨西哥",gdp:"2639.59",sum:2639.59},{no:"9",name:"巴西",gdp:"2635.61",sum:2635.61},{no:"10",name:"西班牙",gdp:"2022.57",sum:2022.57}],1982:[{no:"1",name:"美国",gdp:"3.34万",sum:33400},{no:"2",name:"日本",gdp:"1.13万",sum:11299.999999999998},{no:"3",name:"德国",gdp:"7736.38",sum:7736.38},{no:"4",name:"法国",gdp:"5848.78",sum:5848.78},{no:"5",name:"英国",gdp:"5150.49",sum:5150.49},{no:"6",name:"意大利",gdp:"4258.63",sum:4258.63},{no:"7",name:"加拿大",gdp:"3135.07",sum:3135.07},{no:"8",name:"巴西",gdp:"2816.82",sum:2816.82},{no:"9",name:"中国",gdp:"2050.9",sum:2050.9},{no:"10",name:"印度",gdp:"2007.15",sum:2007.15}],1983:[{no:"1",name:"美国",gdp:"3.63万",sum:36300},{no:"2",name:"日本",gdp:"1.24万",sum:12400},{no:"3",name:"德国",gdp:"7677.68",sum:7677.68},{no:"4",name:"法国",gdp:"5598.69",sum:5598.69},{no:"5",name:"英国",gdp:"4896.18",sum:4896.18},{no:"6",name:"意大利",gdp:"4415.81",sum:4415.81},{no:"7",name:"加拿大",gdp:"3405.48",sum:3405.48},{no:"8",name:"中国",gdp:"2306.87",sum:2306.87},{no:"9",name:"印度",gdp:"2182.62",sum:2182.62},{no:"10",name:"巴西",gdp:"2033.05",sum:2033.05}],1984:[{no:"1",name:"美国",gdp:"4.04万",sum:40400},{no:"2",name:"日本",gdp:"1.32万",sum:13200},{no:"3",name:"德国",gdp:"7223.68",sum:7223.68},{no:"4",name:"法国",gdp:"5306.84",sum:5306.84},{no:"5",name:"英国",gdp:"4614.87",sum:4614.87},{no:"6",name:"意大利",gdp:"4364.43",sum:4364.43},{no:"7",name:"加拿大",gdp:"3553.73",sum:3553.73},{no:"8",name:"中国",gdp:"2599.47",sum:2599.47},{no:"9",name:"印度",gdp:"2121.58",sum:2121.58},{no:"10",name:"巴西",gdp:"2090.24",sum:2090.24}],1985:[{no:"1",name:"美国",gdp:"4.34万",sum:43400},{no:"2",name:"日本",gdp:"1.4万",sum:14e3},{no:"3",name:"德国",gdp:"7297.63",sum:7297.63},{no:"4",name:"法国",gdp:"5531.38",sum:5531.38},{no:"5",name:"英国",gdp:"4892.85",sum:4892.85},{no:"6",name:"意大利",gdp:"4507.26",sum:4507.26},{no:"7",name:"加拿大",gdp:"3647.56",sum:3647.56},{no:"8",name:"中国",gdp:"3094.88",sum:3094.88},{no:"9",name:"印度",gdp:"2325.12",sum:2325.12},{no:"10",name:"巴西",gdp:"2229.43",sum:2229.43}],1986:[{no:"1",name:"美国",gdp:"4.58万",sum:45800},{no:"2",name:"日本",gdp:"2.08万",sum:20800},{no:"3",name:"德国",gdp:"1.04万",sum:10400},{no:"4",name:"法国",gdp:"7714.71",sum:7714.71},{no:"5",name:"意大利",gdp:"6382.74",sum:6382.74},{no:"6",name:"英国",gdp:"6014.53",sum:6014.53},{no:"7",name:"加拿大",gdp:"3774.38",sum:3774.38},{no:"8",name:"中国",gdp:"3007.58",sum:3007.58},{no:"9",name:"巴西",gdp:"2681.37",sum:2681.37},{no:"10",name:"西班牙",gdp:"2506.38",sum:2506.38}],1987:[{no:"1",name:"美国",gdp:"4.86万",sum:48600},{no:"2",name:"日本",gdp:"2.53万",sum:25299.999999999996},{no:"3",name:"德国",gdp:"1.29万",sum:12900},{no:"4",name:"法国",gdp:"9341.73",sum:9341.73},{no:"5",name:"意大利",gdp:"8030.55",sum:8030.55},{no:"6",name:"英国",gdp:"7451.63",sum:7451.63},{no:"7",name:"加拿大",gdp:"4313.17",sum:4313.17},{no:"8",name:"西班牙",gdp:"3178.82",sum:3178.82},{no:"9",name:"巴西",gdp:"2940.84",sum:2940.84},{no:"10",name:"印度",gdp:"2790.34",sum:2790.34}],1988:[{no:"1",name:"美国",gdp:"5.24万",sum:52400},{no:"2",name:"日本",gdp:"3.07万",sum:30700},{no:"3",name:"德国",gdp:"1.4万",sum:14e3},{no:"4",name:"法国",gdp:"1.02万",sum:10200},{no:"5",name:"英国",gdp:"9101.23",sum:9101.23},{no:"6",name:"意大利",gdp:"8886.68",sum:8886.68},{no:"7",name:"俄罗斯",gdp:"5547.13",sum:5547.13},{no:"8",name:"加拿大",gdp:"5073.54",sum:5073.54},{no:"9",name:"西班牙",gdp:"3751.39",sum:3751.39},{no:"10",name:"巴西",gdp:"3303.97",sum:3303.97}],1989:[{no:"1",name:"美国",gdp:"5.64万",sum:56400},{no:"2",name:"日本",gdp:"3.05万",sum:30500},{no:"3",name:"德国",gdp:"1.39万",sum:13899.999999999998},{no:"4",name:"法国",gdp:"1.03万",sum:10300},{no:"5",name:"英国",gdp:"9268.85",sum:9268.85},{no:"6",name:"意大利",gdp:"9255.98",sum:9255.98},{no:"7",name:"加拿大",gdp:"5650.56",sum:5650.56},{no:"8",name:"俄罗斯",gdp:"5065.0",sum:5065},{no:"9",name:"巴西",gdp:"4255.95",sum:4255.95},{no:"10",name:"西班牙",gdp:"4136.31",sum:4136.31}],1990:[{no:"1",name:"美国",gdp:"5.96万",sum:59600},{no:"2",name:"日本",gdp:"3.13万",sum:31300},{no:"3",name:"德国",gdp:"1.76万",sum:17600},{no:"4",name:"法国",gdp:"1.27万",sum:12700},{no:"5",name:"意大利",gdp:"1.18万",sum:11800},{no:"6",name:"英国",gdp:"1.09万",sum:10900},{no:"7",name:"加拿大",gdp:"5939.3",sum:5939.3},{no:"8",name:"西班牙",gdp:"5351.01",sum:5351.01},{no:"9",name:"俄罗斯",gdp:"5168.14",sum:5168.14},{no:"10",name:"巴西",gdp:"4619.52",sum:4619.52}],1991:[{no:"1",name:"美国",gdp:"6.16万",sum:61600},{no:"2",name:"日本",gdp:"3.58万",sum:35800},{no:"3",name:"德国",gdp:"1.86万",sum:18600},{no:"4",name:"法国",gdp:"1.27万",sum:12700},{no:"5",name:"意大利",gdp:"1.24万",sum:12400},{no:"6",name:"英国",gdp:"1.14万",sum:11399.999999999998},{no:"7",name:"加拿大",gdp:"6103.28",sum:6103.28},{no:"8",name:"巴西",gdp:"6028.6",sum:6028.6},{no:"9",name:"西班牙",gdp:"5755.99",sum:5755.99},{no:"10",name:"俄罗斯",gdp:"5179.63",sum:5179.63}],1992:[{no:"1",name:"美国",gdp:"6.52万",sum:65199.99999999999},{no:"2",name:"日本",gdp:"3.91万",sum:39100},{no:"3",name:"德国",gdp:"2.12万",sum:21200},{no:"4",name:"法国",gdp:"1.4万",sum:14e3},{no:"5",name:"意大利",gdp:"1.32万",sum:13200},{no:"6",name:"英国",gdp:"1.18万",sum:11800},{no:"7",name:"西班牙",gdp:"6292.02",sum:6292.02},{no:"8",name:"加拿大",gdp:"5923.88",sum:5923.88},{no:"9",name:"俄罗斯",gdp:"4602.91",sum:4602.91},{no:"10",name:"中国",gdp:"4269.16",sum:4269.16}],1993:[{no:"1",name:"美国",gdp:"6.86万",sum:68600},{no:"2",name:"日本",gdp:"4.45万",sum:44500},{no:"3",name:"德国",gdp:"2.07万",sum:20700},{no:"4",name:"法国",gdp:"1.32万",sum:13200},{no:"5",name:"意大利",gdp:"1.06万",sum:10600},{no:"6",name:"英国",gdp:"1.06万",sum:10600},{no:"7",name:"加拿大",gdp:"5771.71",sum:5771.71},{no:"8",name:"西班牙",gdp:"5236.49",sum:5236.49},{no:"9",name:"墨西哥",gdp:"5007.36",sum:5007.36},{no:"10",name:"中国",gdp:"4447.31",sum:4447.31}],1994:[{no:"1",name:"美国",gdp:"7.29万",sum:72900},{no:"2",name:"日本",gdp:"4.91万",sum:49100},{no:"3",name:"德国",gdp:"2.21万",sum:22100},{no:"4",name:"法国",gdp:"1.39万",sum:13899.999999999998},{no:"5",name:"英国",gdp:"1.14万",sum:11399.999999999998},{no:"6",name:"意大利",gdp:"1.1万",sum:11e3},{no:"7",name:"加拿大",gdp:"5781.39",sum:5781.39},{no:"8",name:"中国",gdp:"5643.25",sum:5643.25},{no:"9",name:"巴西",gdp:"5581.12",sum:5581.12},{no:"10",name:"西班牙",gdp:"5291.22",sum:5291.22}],1995:[{no:"1",name:"美国",gdp:"7.64万",sum:76400},{no:"2",name:"日本",gdp:"5.45万",sum:54500},{no:"3",name:"德国",gdp:"2.59万",sum:25900},{no:"4",name:"法国",gdp:"1.6万",sum:16e3},{no:"5",name:"英国",gdp:"1.34万",sum:13400},{no:"6",name:"意大利",gdp:"1.17万",sum:11700},{no:"7",name:"巴西",gdp:"7693.05",sum:7693.05},{no:"8",name:"中国",gdp:"7345.48",sum:7345.48},{no:"9",name:"西班牙",gdp:"6129.4",sum:6129.4},{no:"10",name:"加拿大",gdp:"6040.32",sum:6040.32}],1996:[{no:"1",name:"美国",gdp:"8.07万",sum:80700},{no:"2",name:"日本",gdp:"4.83万",sum:48300},{no:"3",name:"德国",gdp:"2.5万",sum:25e3},{no:"4",name:"法国",gdp:"1.61万",sum:16100.000000000002},{no:"5",name:"英国",gdp:"1.41万",sum:14100},{no:"6",name:"意大利",gdp:"1.31万",sum:13100},{no:"7",name:"中国",gdp:"8637.47",sum:8637.47},{no:"8",name:"巴西",gdp:"8504.26",sum:8504.26},{no:"9",name:"西班牙",gdp:"6409.98",sum:6409.98},{no:"10",name:"加拿大",gdp:"6285.46",sum:6285.46}],1997:[{no:"1",name:"美国",gdp:"8.58万",sum:85800},{no:"2",name:"日本",gdp:"4.41万",sum:44100},{no:"3",name:"德国",gdp:"2.22万",sum:22200.000000000004},{no:"4",name:"英国",gdp:"1.55万",sum:15500},{no:"5",name:"法国",gdp:"1.45万",sum:14500},{no:"6",name:"意大利",gdp:"1.24万",sum:12400},{no:"7",name:"中国",gdp:"9616.04",sum:9616.04},{no:"8",name:"巴西",gdp:"8832.0",sum:8832},{no:"9",name:"加拿大",gdp:"6528.24",sum:6528.24},{no:"10",name:"西班牙",gdp:"5886.92",sum:5886.92}],1998:[{no:"1",name:"美国",gdp:"9.06万",sum:90600},{no:"2",name:"日本",gdp:"4.03万",sum:40300},{no:"3",name:"德国",gdp:"2.24万",sum:22400.000000000004},{no:"4",name:"英国",gdp:"1.64万",sum:16400},{no:"5",name:"法国",gdp:"1.5万",sum:15e3},{no:"6",name:"意大利",gdp:"1.27万",sum:12700},{no:"7",name:"中国",gdp:"1.03万",sum:10300},{no:"8",name:"巴西",gdp:"8637.23",sum:8637.23},{no:"9",name:"加拿大",gdp:"6318.13",sum:6318.13},{no:"10",name:"西班牙",gdp:"6170.42",sum:6170.42}],1999:[{no:"1",name:"美国",gdp:"9.63万",sum:96300.00000000001},{no:"2",name:"日本",gdp:"4.56万",sum:45599.99999999999},{no:"3",name:"德国",gdp:"2.2万",sum:22e3},{no:"4",name:"英国",gdp:"1.67万",sum:16700},{no:"5",name:"法国",gdp:"1.49万",sum:14900},{no:"6",name:"意大利",gdp:"1.25万",sum:12500},{no:"7",name:"中国",gdp:"1.09万",sum:10900},{no:"8",name:"加拿大",gdp:"6760.84",sum:6760.84},{no:"9",name:"西班牙",gdp:"6331.94",sum:6331.94},{no:"10",name:"墨西哥",gdp:"6002.33",sum:6002.33}],2e3:[{no:"1",name:"美国",gdp:"10.25万",sum:102500},{no:"2",name:"日本",gdp:"4.89万",sum:48900},{no:"3",name:"德国",gdp:"1.95万",sum:19500},{no:"4",name:"英国",gdp:"1.65万",sum:16500},{no:"5",name:"法国",gdp:"1.36万",sum:13600.000000000002},{no:"6",name:"中国",gdp:"1.21万",sum:12100},{no:"7",name:"意大利",gdp:"1.14万",sum:11399.999999999998},{no:"8",name:"加拿大",gdp:"7422.95",sum:7422.95},{no:"9",name:"墨西哥",gdp:"7079.07",sum:7079.07},{no:"10",name:"巴西",gdp:"6554.21",sum:6554.21}],2001:[{no:"1",name:"美国",gdp:"10.58万",sum:105800},{no:"2",name:"日本",gdp:"4.3万",sum:43e3},{no:"3",name:"德国",gdp:"1.95万",sum:19500},{no:"4",name:"英国",gdp:"1.63万",sum:16299.999999999998},{no:"5",name:"法国",gdp:"1.38万",sum:13799.999999999998},{no:"6",name:"中国",gdp:"1.34万",sum:13400},{no:"7",name:"意大利",gdp:"1.16万",sum:11600},{no:"8",name:"墨西哥",gdp:"7567.06",sum:7567.06},{no:"9",name:"加拿大",gdp:"7363.8",sum:7363.8},{no:"10",name:"西班牙",gdp:"6259.76",sum:6259.76}],2002:[{no:"1",name:"美国",gdp:"10.94万",sum:109400},{no:"2",name:"日本",gdp:"4.12万",sum:41200},{no:"3",name:"德国",gdp:"2.08万",sum:20800},{no:"4",name:"英国",gdp:"1.77万",sum:17700},{no:"5",name:"法国",gdp:"1.49万",sum:14900},{no:"6",name:"中国",gdp:"1.47万",sum:14700},{no:"7",name:"意大利",gdp:"1.27万",sum:12700},{no:"8",name:"墨西哥",gdp:"7721.06",sum:7721.06},{no:"9",name:"加拿大",gdp:"7579.51",sum:7579.51},{no:"10",name:"西班牙",gdp:"7051.46",sum:7051.46}],2003:[{no:"1",name:"美国",gdp:"11.46万",sum:114600.00000000001},{no:"2",name:"日本",gdp:"4.45万",sum:44500},{no:"3",name:"德国",gdp:"2.51万",sum:25099.999999999996},{no:"4",name:"英国",gdp:"2.04万",sum:20400},{no:"5",name:"法国",gdp:"1.84万",sum:18400},{no:"6",name:"中国",gdp:"1.66万",sum:16600},{no:"7",name:"意大利",gdp:"1.57万",sum:15700},{no:"8",name:"西班牙",gdp:"9068.53",sum:9068.53},{no:"9",name:"加拿大",gdp:"8923.82",sum:8923.82},{no:"10",name:"墨西哥",gdp:"7293.36",sum:7293.36}],2004:[{no:"1",name:"美国",gdp:"12.21万",sum:122100.00000000001},{no:"2",name:"日本",gdp:"4.82万",sum:48200},{no:"3",name:"德国",gdp:"2.82万",sum:28200},{no:"4",name:"英国",gdp:"2.4万",sum:24e3},{no:"5",name:"法国",gdp:"2.12万",sum:21200},{no:"6",name:"中国",gdp:"1.96万",sum:19600},{no:"7",name:"意大利",gdp:"1.8万",sum:18e3},{no:"8",name:"西班牙",gdp:"1.07万",sum:10700},{no:"9",name:"加拿大",gdp:"1.02万",sum:10200},{no:"10",name:"墨西哥",gdp:"7822.41",sum:7822.41}],2005:[{no:"1",name:"美国",gdp:"13.04万",sum:130399.99999999999},{no:"2",name:"日本",gdp:"4.76万",sum:47600},{no:"3",name:"德国",gdp:"2.86万",sum:28600},{no:"4",name:"英国",gdp:"2.53万",sum:25299.999999999996},{no:"5",name:"中国",gdp:"2.29万",sum:22900},{no:"6",name:"法国",gdp:"2.2万",sum:22e3},{no:"7",name:"意大利",gdp:"1.85万",sum:18500},{no:"8",name:"加拿大",gdp:"1.17万",sum:11700},{no:"9",name:"西班牙",gdp:"1.16万",sum:11600},{no:"10",name:"韩国",gdp:"8981.37",sum:8981.37}],2006:[{no:"1",name:"美国",gdp:"13.81万",sum:138100},{no:"2",name:"日本",gdp:"4.53万",sum:45300},{no:"3",name:"德国",gdp:"3.0万",sum:3e4},{no:"4",name:"中国",gdp:"2.75万",sum:27500},{no:"5",name:"英国",gdp:"2.7万",sum:27e3},{no:"6",name:"法国",gdp:"2.32万",sum:23200},{no:"7",name:"意大利",gdp:"1.94万",sum:19400},{no:"8",name:"加拿大",gdp:"1.32万",sum:13200},{no:"9",name:"西班牙",gdp:"1.26万",sum:12600},{no:"10",name:"巴西",gdp:"1.11万",sum:11100.000000000002}],2007:[{no:"1",name:"美国",gdp:"14.45万",sum:144500},{no:"2",name:"日本",gdp:"4.52万",sum:45199.99999999999},{no:"3",name:"中国",gdp:"3.55万",sum:35500},{no:"4",name:"德国",gdp:"3.44万",sum:34400},{no:"5",name:"英国",gdp:"3.08万",sum:30800},{no:"6",name:"法国",gdp:"2.66万",sum:26600},{no:"7",name:"意大利",gdp:"2.2万",sum:22e3},{no:"8",name:"西班牙",gdp:"1.48万",sum:14800},{no:"9",name:"加拿大",gdp:"1.46万",sum:14600},{no:"10",name:"巴西",gdp:"1.4万",sum:14e3}],2008:[{no:"1",name:"美国",gdp:"14.71万",sum:147100},{no:"2",name:"日本",gdp:"5.04万",sum:50400},{no:"3",name:"中国",gdp:"4.59万",sum:45900},{no:"4",name:"德国",gdp:"3.75万",sum:37500},{no:"5",name:"法国",gdp:"2.92万",sum:29200},{no:"6",name:"英国",gdp:"2.9万",sum:29e3},{no:"7",name:"意大利",gdp:"2.39万",sum:23900},{no:"8",name:"巴西",gdp:"1.7万",sum:17e3},{no:"9",name:"俄罗斯",gdp:"1.66万",sum:16600},{no:"10",name:"西班牙",gdp:"1.64万",sum:16400}],2009:[{no:"1",name:"美国",gdp:"14.45万",sum:144500},{no:"2",name:"日本",gdp:"5.23万",sum:52300.00000000001},{no:"3",name:"中国",gdp:"5.1万",sum:51e3},{no:"4",name:"德国",gdp:"3.42万",sum:34200},{no:"5",name:"法国",gdp:"2.69万",sum:26900},{no:"6",name:"英国",gdp:"2.39万",sum:23900},{no:"7",name:"意大利",gdp:"2.19万",sum:21900},{no:"8",name:"巴西",gdp:"1.67万",sum:16700},{no:"9",name:"西班牙",gdp:"1.5万",sum:15e3},{no:"10",name:"加拿大",gdp:"1.37万",sum:13700.000000000002}],2010:[{no:"1",name:"美国",gdp:"14.99万",sum:149900},{no:"2",name:"中国",gdp:"6.09万",sum:60900},{no:"3",name:"日本",gdp:"5.7万",sum:57e3},{no:"4",name:"德国",gdp:"3.42万",sum:34200},{no:"5",name:"法国",gdp:"2.64万",sum:26400},{no:"6",name:"英国",gdp:"2.45万",sum:24500},{no:"7",name:"巴西",gdp:"2.21万",sum:22100},{no:"8",name:"意大利",gdp:"2.13万",sum:21300},{no:"9",name:"印度",gdp:"1.68万",sum:16800},{no:"10",name:"加拿大",gdp:"1.61万",sum:16100.000000000002}],2011:[{no:"1",name:"美国",gdp:"15.54万",sum:155400},{no:"2",name:"中国",gdp:"7.55万",sum:75500},{no:"3",name:"日本",gdp:"6.16万",sum:61600},{no:"4",name:"德国",gdp:"3.76万",sum:37600},{no:"5",name:"法国",gdp:"2.86万",sum:28600},{no:"6",name:"英国",gdp:"2.63万",sum:26300},{no:"7",name:"巴西",gdp:"2.62万",sum:26200},{no:"8",name:"意大利",gdp:"2.28万",sum:22799.999999999996},{no:"9",name:"俄罗斯",gdp:"2.05万",sum:20500},{no:"10",name:"印度",gdp:"1.82万",sum:18200}],2012:[{no:"1",name:"美国",gdp:"16.2万",sum:162e3},{no:"2",name:"中国",gdp:"8.53万",sum:85300},{no:"3",name:"日本",gdp:"6.2万",sum:62e3},{no:"4",name:"德国",gdp:"3.54万",sum:35400},{no:"5",name:"法国",gdp:"2.68万",sum:26800},{no:"6",name:"英国",gdp:"2.68万",sum:26800},{no:"7",name:"巴西",gdp:"2.47万",sum:24700.000000000004},{no:"8",name:"俄罗斯",gdp:"2.21万",sum:22100},{no:"9",name:"意大利",gdp:"2.07万",sum:20700},{no:"10",name:"印度",gdp:"1.83万",sum:18300}],2013:[{no:"1",name:"美国",gdp:"16.78万",sum:167800},{no:"2",name:"中国",gdp:"9.57万",sum:95700},{no:"3",name:"日本",gdp:"5.16万",sum:51600},{no:"4",name:"德国",gdp:"3.75万",sum:37500},{no:"5",name:"法国",gdp:"2.81万",sum:28100},{no:"6",name:"英国",gdp:"2.75万",sum:27500},{no:"7",name:"巴西",gdp:"2.47万",sum:24700.000000000004},{no:"8",name:"俄罗斯",gdp:"2.3万",sum:23e3},{no:"9",name:"意大利",gdp:"2.13万",sum:21300},{no:"10",name:"印度",gdp:"1.86万",sum:18600}],2014:[{no:"1",name:"美国",gdp:"17.52万",sum:175200},{no:"2",name:"中国",gdp:"10.44万",sum:104400},{no:"3",name:"日本",gdp:"4.85万",sum:48500},{no:"4",name:"德国",gdp:"3.9万",sum:39e3},{no:"5",name:"英国",gdp:"3.03万",sum:30299.999999999996},{no:"6",name:"法国",gdp:"2.85万",sum:28500},{no:"7",name:"巴西",gdp:"2.46万",sum:24600},{no:"8",name:"意大利",gdp:"2.15万",sum:21500},{no:"9",name:"俄罗斯",gdp:"2.06万",sum:20600},{no:"10",name:"印度",gdp:"2.04万",sum:20400}],2015:[{no:"1",name:"美国",gdp:"18.22万",sum:182200},{no:"2",name:"中国",gdp:"11.02万",sum:110200},{no:"3",name:"日本",gdp:"4.39万",sum:43900},{no:"4",name:"德国",gdp:"3.38万",sum:33800},{no:"5",name:"英国",gdp:"2.9万",sum:29e3},{no:"6",name:"法国",gdp:"2.44万",sum:24400},{no:"7",name:"印度",gdp:"2.1万",sum:21e3},{no:"8",name:"意大利",gdp:"1.83万",sum:18300},{no:"9",name:"巴西",gdp:"1.8万",sum:18e3},{no:"10",name:"加拿大",gdp:"1.55万",sum:15500}],2016:[{no:"1",name:"美国",gdp:"18.71万",sum:187100},{no:"2",name:"中国",gdp:"11.14万",sum:111400},{no:"3",name:"日本",gdp:"4.93万",sum:49300},{no:"4",name:"德国",gdp:"3.5万",sum:35e3},{no:"5",name:"英国",gdp:"2.66万",sum:26600},{no:"6",name:"法国",gdp:"2.47万",sum:24700.000000000004},{no:"7",name:"印度",gdp:"2.29万",sum:22900},{no:"8",name:"意大利",gdp:"1.87万",sum:18700},{no:"9",name:"巴西",gdp:"1.8万",sum:18e3},{no:"10",name:"加拿大",gdp:"1.53万",sum:15300}],2017:[{no:"1",name:"美国",gdp:"19.49万",sum:194899.99999999997},{no:"2",name:"中国",gdp:"12.14万",sum:121400},{no:"3",name:"日本",gdp:"4.86万",sum:48600},{no:"4",name:"德国",gdp:"3.69万",sum:36900},{no:"5",name:"印度",gdp:"2.65万",sum:26500},{no:"6",name:"英国",gdp:"2.64万",sum:26400},{no:"7",name:"法国",gdp:"2.59万",sum:25900},{no:"8",name:"巴西",gdp:"2.05万",sum:20500},{no:"9",name:"意大利",gdp:"1.95万",sum:19500},{no:"10",name:"加拿大",gdp:"1.65万",sum:16500}],2018:[{no:"1",name:"美国",gdp:"20.49万",sum:204899.99999999997},{no:"2",name:"中国",gdp:"13.61万",sum:136100},{no:"3",name:"日本",gdp:"4.97万",sum:49700},{no:"4",name:"德国",gdp:"4.0万",sum:4e4},{no:"5",name:"英国",gdp:"2.83万",sum:28300},{no:"6",name:"法国",gdp:"2.78万",sum:27799.999999999996},{no:"7",name:"印度",gdp:"2.73万",sum:27300},{no:"8",name:"意大利",gdp:"2.07万",sum:20700},{no:"9",name:"巴西",gdp:"1.87万",sum:18700},{no:"10",name:"加拿大",gdp:"1.71万",sum:17100}]},d={"中国":"#E60000","美国":"#ffdb5c","英国":"#9fe6b7","法国":"#e7bcf3","日本":"#FF00FF","加拿大":"#fc7193","意大利":"#FFD700","印度":"#66e0e3","澳大利亚":"#BF3EFF","巴西":"#FFD700","瑞典":"#ff9f7f","阿根廷":"#31c5e9","西班牙":"#e062ae","德国":"#e690d1","荷兰":"#09b296","墨西哥":"#BCEE68","俄罗斯":"#EE7942","韩国":"#EE7621"},p=function(){var n=this,m=n.$createElement,e=n._self._c||m;return e("div",[n._v(" "+n._s(n._f("money")(n.cur))+" ")])},g=[];const t=100;var r={name:"CountTo",props:{dist:{type:Number,default:0},duration:{type:Number,default:1e3}},data(){return{cur:this.dist-100,timer:0}},watch:{dist:{handler(){this.$nextTick(()=>{this.countTo()})}}},filters:{money(n){return n>1e4?(n/=1e4,n.toFixed(2)+"万亿"):n.toFixed(2)+"亿"}},methods:{countTo(){this.cur,this.dist;let n=(this.dist-this.cur)/(this.duration/t);this.timer&&clearInterval(this.timer),this.timer=setInterval(()=>{this.cur=Math.min(this.cur+n,this.dist),this.cur===this.dist&&clearInterval(this.timer)},t)}}},i=r,c=e("2877"),l=Object(c["a"])(i,p,g,!1,null,null,null),h=l.exports;let f=0,v=1960,y=2018;var b={name:"app",components:{CountTo:h},data(){return{year:v,itemHeight:30,colors:d,width:window.innerHeight+"px",height:window.innerWidth+"px"}},computed:{list(){return u[this.year]},process(){return 90-(y-this.year)/(y-v)*40+"%"}},mounted(){f=setInterval(()=>{this.year+=1,this.year>=2018&&clearInterval(f)},600)},methods:{countryProcess(n){return n/this.list[0].sum*100+"%"}}},w=b,_=(e("034f"),Object(c["a"])(w,o,a,!1,null,null,null)),x=_.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(n){return n(x)}}).$mount("#app")},"85ec":function(n,m,e){}});
//# sourceMappingURL=app.24f6741e.js.map