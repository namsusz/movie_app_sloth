(this.webpackJsonpmovie_app_sloth=this.webpackJsonpmovie_app_sloth||[]).push([[0],{11:function(e,t,i){e.exports=i(18)},18:function(e,t,i){"use strict";i.r(t);var s=i(0),a=i.n(s),n=i(4),m=i.n(n),o=i(5),r=i(6),l=i(9),u=i(7),p=i(10),c=i(8),_=i(1),g=i.n(_);function v(e){var t=e.title,i=e.subtitle,s=e.comeout,n=e.genres,m=e.summary,o=e.poster,r=e.link;return a.a.createElement("div",{className:"movie"},a.a.createElement("img",{src:o,alt:t,title:t}),a.a.createElement("div",{className:"movie__data"},a.a.createElement("div",{className:"movie__header"},a.a.createElement("p",{className:"movie__title"},t),a.a.createElement("p",{className:"movie__subtitle"},i)),a.a.createElement("div",{className:"movie__info"},a.a.createElement("p",{className:"movie__comeout"},a.a.createElement("span",null,"\uac1c\ubd09\uc77c"),s),a.a.createElement("ul",{className:"movie__genres"},a.a.createElement("span",null,"\uc7a5\ub974"),n.map((function(e,t){return a.a.createElement("li",{key:t,className:"genres__genre"},e)}))),a.a.createElement("span",null,"\uc904\uac70\ub9ac"),a.a.createElement("p",{className:"movie__summary"},m.slice(0,110)+" ...")),a.a.createElement("a",{href:r,target:"_blank",rel:"noopener noreferrer",title:"\uc608\uace0\ud3b8"},a.a.createElement("div",{className:"movie__trailer"},"\uc608\uace0\ud3b8 \ubcf4\ub7ec\uac00\uae30"))))}v.prototype={id:g.a.number.isRequired,title:g.a.string.isRequired,subtitle:g.a.string.isRequired,comeout:g.a.string.isRequired,genres:g.a.arrayOf(g.a.string).isRequired,summary:g.a.string.isRequired,poster:g.a.string.isRequired,link:g.a.string.isRequired};var h=v,y=(i(3),function(e){function t(){var e,i;Object(o.a)(this,t);for(var s=arguments.length,a=new Array(s),n=0;n<s;n++)a[n]=arguments[n];return(i=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(a)))).state={isLoading:!0,movies:[]},i}return Object(p.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.state,t=e.isLoading,i=e.movies;return a.a.createElement("section",{className:"container"},t?a.a.createElement("div",{className:"loader"},a.a.createElement("span",{className:"loader__text"},"Loading...")):a.a.createElement("div",{className:"movies"},i.map((function(e){return a.a.createElement(h,{id:e.id,title:e.title,subtitle:e.subtitle,comeout:e.comeout,genres:e.genres,summary:e.summary,poster:e.poster,link:e.link})}))))}},{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.setState({movies:c.movies,isLoading:!1})}),3e3)}}]),t}(a.a.Component));m.a.render(a.a.createElement(y,null),document.getElementById("root"));t.default=y},3:function(e,t,i){},8:function(e){e.exports=JSON.parse('{"movies":[{"id":1,"title":"\uaca8\uc6b8\uc655\uad6d 2","subtitle":"Frozen 2","comeout":"2019.11.21","genres":["\uc560\ub2c8\uba54\uc774\uc158","\ubaa8\ud5d8"],"summary":"\uc5b4\ub290 \ub0a0 \ubd80\ud134\uac00 \uc758\ubb38\uc758 \ubaa9\uc18c\ub9ac\uac00 \uc5d8\uc0ac\ub97c \ubd80\ub974\uace0, \ud3c9\ud654\ub85c\uc6b4 \uc544\ub80c\ub378 \uc655\uad6d\uc744 \uc704\ud611\ud55c\ub2e4. \ud2b8\ub864\uc740 \ubaa8\ub4e0 \uac83\uc740 \uacfc\uac70\uc5d0\uc11c \uc2dc\uc791\ub418\uc5c8\uc74c\uc744 \uc54c\ub824\uc8fc\uba70 \uc5d8\uc0ac\uc758 \ud798\uc758 \ube44\ubc00\uacfc \uc9c4\uc2e4\uc744 \ucc3e\uc544 \ub5a0\ub098\uc57c\ud55c\ub2e4\uace0 \uc870\uc5b8\ud55c\ub2e4. \uc704\ud5d8\uc5d0 \ube60\uc9c4 \uc544\ub80c\ub378 \uc655\uad6d\uc744 \uad6c\ud574\uc57c\ub9cc \ud558\ub294 \uc5d8\uc0ac\uc640 \uc548\ub098\ub294 \uc228\uaca8\uc9c4 \uacfc\uac70\uc758 \uc9c4\uc2e4\uc744 \ucc3e\uc544 \ud06c\ub9ac\uc2a4\ud1a0\ud504, \uc62c\ub77c\ud504 \uadf8\ub9ac\uace0 \uc2a4\ubca4\uacfc \ud568\uaed8 \uc704\ud5d8\ucc9c\ub9cc\ud55c \ub180\ub77c\uc6b4 \ubaa8\ud5d8\uc744 \ub5a0\ub098\uac8c \ub41c\ub2e4. \uc790\uc2e0\uc758 \ud798\uc744 \ub450\ub824\uc6cc\ud588\ub358 \uc5d8\uc0ac\ub294 \uc774\uc81c \uc774 \ubaa8\ud5d8\uc744 \ud5e4\uccd0\ub098\uac00\uae30\uc5d0 \uc790\uc2e0\uc758 \ud798\uc774 \ucda9\ubd84\ud558\ub2e4\uace0 \ubbff\uc5b4\uc57c\ub9cc \ud558\ub294\ub370... \ub450\ub824\uc6c0\uc744 \uae68\uace0 \uc0c8\ub85c\uc6b4 \uc6b4\uba85\uc744 \ub9cc\ub098\ub2e4!","poster":"https://movie-phinf.pstatic.net/20191121_221/1574298335357mqgLk_JPEG/movie_image.jpg?type=m886_590_2","link":"https://youtu.be/eSEs4B4H-EA"},{"id":2,"title":"\ub9c8\uc774\ud3ab\uc758 \uc774\uc911\uc0dd\ud65c 2","subtitle":"The Secret Life of Pets 2","comeout":"2019.07.31","genres":["\uc560\ub2c8\uba54\uc774\uc158","\ubaa8\ud5d8"],"summary":"\uc9d1\uc744 \ube44\uc6b0\uba74 \ub2e4\uc2dc \uc2dc\uc791\ub418\ub294 \ud3ab\ub4e4\uc758 \uc2dc\ud06c\ub9bf \ub77c\uc774\ud504! \uc9d1\uad6c\uc11d \uac71\uc815\uc5d0 \ud558\ub8e8\ub3c4 \ud3b8\ud560 \ub0a0\uc774 \uc5c6\ub294 \u2018\ub9e5\uc2a4\u2019 \ucea3\ub2e2\uc744 \uc0ac\ub791\ud558\ub294 \uc790\uc720\ub85c\uc6b4 \uc601\ud63c \u2018\ud074\ub85c\uc774\u2019 \uc288\ud37c\ud788\uc5b4\ub85c\ub97c \ub530\ub77c \ud558\ub294 \ud1a0\ub07c \u2018\uc2a4\ub178\uc6b0\ubcfc\u2019 \uc644\ubcbd\ud558\uac8c \uace0\uc591\uc774\uac00 \ub418\uace0\ud508 \uac15\uc544\uc9c0 \u2018\uae30\uc82f\u2019\uae4c\uc9c0 \uc544\uc9c1\ub3c4 \ub098\ub9cc \ubab0\ub790\ub358 \ub9c8\uc774\ud3ab\ub4e4\uc758 \uc18d\ub9c8\uc74c\uc774 \uacf5\uac1c\ub41c\ub2e4!","poster":"https://movie-phinf.pstatic.net/20190805_203/15649916739090lNjN_JPEG/movie_image.jpg?type=m886_590_2","link":"https://youtu.be/7yDQgAro3lQ"},{"id":3,"title":"\ud1a0\uc774\uc2a4\ud1a0\ub9ac 4","subtitle":"Toy Stroy 4","comeout":"2019.06.20","genres":["\uc560\ub2c8\uba54\uc774\uc158","\ubaa8\ud5d8","\ucf54\ubbf8\ub514","\uac00\uc871","\ud310\ud0c0\uc9c0"],"summary":"\uc7a5\ub09c\uac10\uc758 \uc6b4\uba85\uc744 \uac70\ubd80\ud558\uace0 \ub5a0\ub09c \uc0c8 \uce5c\uad6c \u2018\ud3ec\ud0a4\u2019\ub97c \ucc3e\uae30 \uc704\ud574 \uae38 \uc704\uc5d0 \ub098\uc120 \u2018\uc6b0\ub514\u2019\ub294 \uc6b0\uc5f0\ud788 \uc624\ub79c \uce5c\uad6c \u2018\ubcf4\ud54d\u2019\uc744 \ub9cc\ub098\uace0 \uadf8\ub140\ub97c \ud1b5\ud574 \uc0c8\ub85c\uc6b4 \uc138\uc0c1\uc5d0 \ub208\uc744 \ub728\uac8c \ub41c\ub2e4. \ud55c\ud3b8, \u2018\ubc84\uc988\u2019\uc640 \uce5c\uad6c\ub4e4\uc740 \uc0ac\ub77c\uc9c4 \u2018\uc6b0\ub514\u2019\uc640 \u2018\ud3ec\ud0a4\u2019\ub97c \ucc3e\uc544 \uc138\uc0c1 \ubc16 \uc704\ud5d8\ucc9c\ub9cc\ud55c \ubaa8\ud5d8\uc744 \ub5a0\ub098\uac8c \ub418\ub294\ub370\u2026","poster":"https://movie-phinf.pstatic.net/20190611_117/1560221190708y3bbv_JPEG/movie_image.jpg?type=m886_590_2","link":"https://youtu.be/u8GQibRXVHg"},{"id":4,"title":"\ud574\ub9ac\ud3ec\ud130 \uc544\uc988\uce74\ubc18\uc758 \uc8c4\uc218","subtitle":"Harry Potter And The Prisoner Of Azkaban","comeout":"2020.02.26","genres":["\ud310\ud0c0\uc9c0","\uac00\uc871","\ubaa8\ud5d8","\uc561\uc158"],"summary":"3\uc138\uac00 \ub41c \u2018\ud574\ub9ac \ud3ec\ud130(\ub2e4\ub2c8\uc5d8 \ub798\ub4dc\ud074\ub798\ud504)\u2019\ub294 \uc544\ubc84\uc9c0\uc758 \ud5d8\ub2f4\uc744 \ud558\ub294 \uc774\ubaa8\ubd80\uc758 \ub204\uc774 \ub9c8\uc9c0 \uc544\uc90c\ub9c8\ub97c \uac70\ub300\ud55c \uad34\ubb3c \ud48d\uc120\uc73c\ub85c \ub9cc\ub4e4\uc5b4 \ubc84\ub9ac\uace0 \ub9cc\ub2e4. \uc77c\ubc18 \uc138\uc0c1\uc5d0\uc11c \ub9c8\ubc95 \uc0ac\uc6a9\uc774 \uae08\uc9c0\ub418\uc5b4 \uc788\ub294 \ubc95\uc744 \uc5b4\uae34 \ud574\ub9ac\ub294 \ub9c8\ubc95\ubd80\uc758 \uc9d5\uacc4\uac00 \ub450\ub824\uc6cc \ub3c4\ub9dd\uc744 \uce58\ub2e4\uac00 \ub9cc\ub098\uac8c \ub41c \ub9c8\ubc95\ubd80 \uc7a5\uad00\uc740 \u2018\uc2dc\ub9ac\uc6b0\uc2a4 \ube14\ub799\u2019(\uac8c\ub9ac \uc62c\ub4dc\ub9cc)\uc774 \uc544\uc988\uce74\ubc18\uc758 \uac10\uc625\uc744 \ud0c8\ucd9c\ud574 \ud574\ub9ac\ub97c \ucc3e\uace0 \uc788\ub2e4\ub294 \uc18c\uc2dd\uc744 \uc804\ud55c\ub2e4. \uc2dc\ub9ac\uc6b0\uc2a4 \ube14\ub799\uc740 \uc5b4\ub460\uc758 \ub9c8\uc655\uc778 \ubcfc\ub4dc\ubaa8\ud2b8 \uacbd\uc744 \ud574\ub9ac\uc758 \ubd80\ubaa8\ub2d8\uc5d0\uac8c \uc774\ub04c\uc5b4 \uc8fd\uc74c\uc73c\ub85c \ubab0\uace0 \uac04 \ub2f9\uc0ac\uc790. \uc124\uc0c1\uac00\uc0c1\uc73c\ub85c \uc601\ud63c\uc744 \ube68\uc544\ub4e4\uc774\ub294 \uc544\uc988\uce74\ubc18\uc758 \ubb34\uc2dc\ubb34\uc2dc\ud55c \uac04\uc218 \u2018\ub514\uba58\ud130\u2019\uac00 \ud638\uadf8\uc640\ud2b8\uc5d0 \uba38\ubb3c\uba70 \ud574\ub9ac\ub97c \uc704\ud611\ud55c\ub2e4. \uadf8\ub7ec\ub098 \uc0c8\ub85c \ubd80\uc784\ud55c \uc5b4\ub460\uc758 \ub9c8\ubc95 \ubc29\uc5b4\uc220 \uad50\uc218 \u2018\ub8e8\ud540\u2019(\ub370\uc774\ube57 \ud2a4\ub9ac\uc2a4)\uc774 \uac00\ub974\uccd0\uc900 \'\ud328\ud2b8\ub85c\ub204\uc2a4\' \ub9c8\ubc95\uc73c\ub85c \ud574\ub9ac\ub294 \ub514\uba58\ud130\uc5d0\uac8c \ub300\uc801\ud560 \ud798\uc744 \uc5bb\ub294\ub2e4. \uc2dc\ub9ac\uc6b0\uc2a4 \ube14\ub799\uacfc\uc758 \ubd88\uac00\ud53c\ud55c \ub300\uacb0\uc740 \ub2e4\uac00\uc624\uace0, \ud574\ub9ac\ub294 \uc790\uc2e0\uacfc \uc2dc\ub9ac\uc6b0\uc2a4 \ube14\ub799 \uc0ac\uc774\uc5d0 \uc5bd\ud600\uc788\ub294 \uc5c4\uccad\ub09c \ube44\ubc00\uc744 \uc9c1\uba74\ud558\uac8c \ub418\ub294\ub370\u2026. \ud574\ub9ac\ub97c \uc704\ud611\ud558\ub294 \uc5b4\ub460\uc758 \uc138\ub825, \uadf8\uc5d0 \ub9de\uc11c\ub294 \ud574\ub9ac\uc758 \ud65c\uc57d! \ub180\ub77c\uc6c0\uc73c\ub85c \uac00\ub4dd\ud55c \ub9c8\ubc95\uc758 \uc138\uacc4\uac00 \ub2e4\uc2dc \ud3bc\uccd0\uc9c4\ub2e4!","poster":"https://movie-phinf.pstatic.net/20200214_237/1581663194489UtDmT_JPEG/movie_image.jpg?type=m886_590_2","link":"https://youtu.be/FNHkrMZJowk"},{"id":5,"title":"\ud558\uc774, \uc81d\uc2dc","subtitle":"Jexi","comeout":"2020.02.19","genres":["\ucf54\ubbf8\ub514"],"summary":"\uae30\uc0c1 \uc54c\ub78c\uc744 \uc2dc\uc791\uc73c\ub85c \uc0e4\uc6cc\ud558\uba74\uc11c BGM, \ucd9c\uadfc\ud558\uba74\uc11c \ub124\ube44\uac8c\uc774\uc158, \ud1f4\uadfc \ud6c4 \ubc30\ub2ec\uc571\uacfc \ub108\ud29c\ube0c, \uc7a0\ub4e4\uae30 \uc804 SNS\uae4c\uc9c0 \uc190\uc5d0\uc11c \ub3c4\ubb34\uc9c0 \ud578\ub4dc\ud3f0\uc744 \ub193\uc9c0 \ubabb\ud558\ub294 \ud3f0\uc0dd\ud3f0\uc0ac \u2018\ud544\u2019 \uc5b4\ub290 \ub0a0, \u2018\ud544\u2019\uc740 \ubca0\ud504\uc600\ub358 \u2018\uc2dc\ub9ac\u2019\uc758 \uc0ac\ub9dd\uc73c\ub85c \uc0c8 \ud3f0 \u2018\uc81d\uc2dc\u2019\ub97c \ub9cc\ub098\uac8c \ub41c\ub2e4. \uadf8\ub807\uac8c \uc9d1, \ud68c\uc0ac \ubb34\ud55c \ub8e8\ud504\uc758 \ud3c9\uc628\ud55c \uc0b6\uc73c\ub85c \ub2e4\uc2dc \ub3cc\uc544\uac08 \uc904 \uc54c\uc558\ub358 \u2018\ud544\u2019 \ud558\uc9c0\ub9cc \ub354 \ub098\uc740(?) \uc778\uc0dd\uc744 \uc704\ud55c \uc778\uacf5\uc9c0\ub2a5 \ub3c4\uc6b0\ubbf8 \u2018\uc81d\uc2dc\u2019\ub294 \u2018\ud544\u2019\uc758 \uc9c1\uc7a5, \uce5c\uad6c \uadf8\ub9ac\uace0 \uc5f0\uc560\uae4c\uc9c0 \uc81c\uba4b\ub300\ub85c \uadf8\uc758 \uc778\uc0dd\uc5d0 \ub07c\uc5b4\ub4e4\uae30 \uc2dc\uc791\ud558\ub294\ub370\u2026 \u201c\uc55e\uc73c\ub85c \uc7ac\ubbf8\uc788\uc744 \uac70\uc57c. \uc774 XX\uc57c\u201d \u201c\uc5ec\ub7ec\ubd84\u2026 \uc81c \ud3f0\uc774 \ubbf8\ucce4\uc5b4\uc694\u2026\u201d","poster":"https://movie-phinf.pstatic.net/20200204_45/1580782344638a3GFh_JPEG/movie_image.jpg?type=m886_590_2","link":"https://youtu.be/iAZCut5pWcg"},{"id":6,"title":"\uc791\uc740 \uc544\uc528\ub4e4","subtitle":"Little Women","comeout":"2020.02.12","genres":["\ub4dc\ub77c\ub9c8","\uba5c\ub85c/\ub85c\ub9e8\uc2a4"],"summary":"\ubc30\uc6b0\uac00 \ub418\uace0 \uc2f6\uc740 \uccab\uc9f8 \uba54\uadf8(\uc5e0\ub9c8 \uc653\uc2a8) \uc791\uac00\uac00 \ub418\uace0 \uc2f6\uc740 \ub458\uc9f8 \uc870(\uc2dc\uc5bc\uc0e4 \ub85c\ub10c) \uc74c\uc545\uac00\uac00 \ub418\uace0 \uc2f6\uc740 \uc14b\uc9f8 \ubca0\uc2a4(\uc5d8\ub9ac\uc790 \uc2a4\uce94\ub7f0) \ud654\uac00\uac00 \ub418\uace0 \uc2f6\uc740 \ub9c9\ub0b4 \uc5d0\uc774\ubbf8(\ud50c\ub85c\ub80c\uc2a4 \ud4e8) \uc774\uc6c3\uc9d1 \uc18c\ub144 \ub85c\ub9ac(\ud2f0\ubaa8\uc2dc \uc0ec\ub77c\uba54)\ub294 \ub124 \uc790\ub9e4\ub97c \uc6b0\uc5f0\ud788 \uc54c\uac8c\ub418\uace0 \uac01\uae30 \ub2e4\ub978 \uac1c\uc131\uc758 \ub124 \uc790\ub9e4\ub4e4\uacfc \uc778\uc5f0\uc744 \uc313\uc544\uac04\ub2e4. 7\ub144 \ud6c4, \uc5b4\ub978\uc774 \ub41c \uadf8\ub4e4\uc5d0\uac90 \uac01\uae30 \ub2e4\ub978 \uc219\uc81c\uac00 \ub193\uc774\uac8c \ub418\ub294\ub370\u2026","poster":"https://movie-phinf.pstatic.net/20200309_102/1583733575200NVLwA_JPEG/movie_image.jpg?type=m886_590_2","link":"https://youtu.be/79_nkjuOWVg"},{"id":7,"title":"\ucee4\ub7f0\ud2b8 \uc6cc","subtitle":"The Current War","comeout":"2019.08.22","genres":["\ub4dc\ub77c\ub9c8"],"summary":"\uc1fc\ub9e8\uc2ed\uc758 \ucc9c\uc7ac \u2018\uc5d0\ub514\uc2a8\u2019\uacfc \uc0c1\uc0c1\ub825\uc758 \ucc9c\uc7ac \u2018\ud14c\uc2ac\ub77c\u2019 \uadf8\ub9ac\uace0 \ud611\uc0c1\uc758 \ucc9c\uc7ac \u2018\uc778\uc124\u2019\uacfc \ube44\uc988\ub2c8\uc2a4\uc758 \ucc9c\uc7ac \u2018\uc6e8\uc2a4\ud305\ud558\uc6b0\uc2a4\u2019\uae4c\uc9c0. 4 \uba85\uc758 \ucc9c\uc7ac 3 \ubc88\uc758 \uaca9\ub3cc 2\uac1c\uc758 \uc804\ub958 1\uba85\ub9cc\uc774 \uc5ed\uc0ac\uac00 \ub41c\ub2e4!","poster":"https://movie-phinf.pstatic.net/20190726_271/1564103583891DUheV_JPEG/movie_image.jpg?type=m886_590_2","link":"https://youtu.be/qAcON2zivwU"},{"id":8,"title":"\uac00\uc7a5 \ub530\ub73b\ud55c \uc0c9, \ube14\ub8e8","subtitle":"Blue Is The Warmest Color","comeout":"2014.01.16","genres":["\ub4dc\ub77c\ub9c8","\uba5c\ub85c/\ub85c\ub9e8\uc2a4"],"summary":"\uc5ec\ub290 \uc18c\ub140\ub4e4\uacfc \ub2e4\ub97c \ubc14 \uc5c6\ub294 \ud3c9\ubc94\ud55c \uace0\ub4f1\ud559\uc0dd \u2018\uc544\ub378\u2019(\uc544\ub378 \uc5d1\uc0ac\ub974\ucf54\ud480\ub85c\uc2a4 \ubd84)\uc740 \ube48\uce78\ub4e4\ub85c \uc810\ucca0\ub41c \ubbf8\ub798\uc758 \ub2f5\uc744 \ucc3e\uace0 \uc788\ub294 \ubb38\ud559\uc18c\ub140\uc774\ub2e4. \ud53c\uc5d0\ub974 \ub4dc \ub9c8\ub9ac\ubcf4\uc758 \uc18c\uc124 <\ub9c8\ub9ac\uc548\uc758 \uc77c\uc0dd>\uc744 \uc774\ud574\ud558\uace0\uc790 \ub178\ub825\ud558\uace0 \uc788\ub294 \u2018\uc544\ub378\u2019 \uc55e\uc5d0 \uc5b4\ub290 \ub0a0 \ud30c\ub780 \uba38\ub9ac\uc758 \ub300\ud559\uc0dd \u2018\uc5e0\ub9c8\u2019(\ub808\uc544 \uc138\uc774\ub450 \ubd84)\uac00 \ub098\ud0c0\ub09c\ub2e4. \ub2e8\uc9c0 \ud6a1\ub2e8\ubcf4\ub3c4\uc5d0\uc11c \uc6b0\uc5f0\ud788 \uc2a4\uce58\uba70 \uc9c0\ub098\uce5c \uc778\uc5f0\uc774\uc9c0\ub9cc \uadf8\ub0a0 \uc774\ud6c4 \u2018\uc544\ub378\u2019\uacfc \u2018\uc5e0\ub9c8\u2019\ub294 \uc11c\ub85c\ub97c \uae30\uc5b5\ud558\uac8c \ub41c\ub2e4. \ubbf8\uc9c0\uc758 \uc0ac\ub791\uc744 \uafc8\uafb8\ub294 \u2018\uc544\ub378\u2019, \ud604\uc2e4\uc758 \uc0ac\ub791\uc744 \uc774\ub044\ub294 \u2018\uc5e0\ub9c8\u2019 \ub204\uac00 \uba3c\uc800\ub784 \uac83\ub3c4 \uc5c6\uc774 \u2018\uc544\ub378\u2019\uacfc \u2018\uc5e0\ub9c8\u2019\ub294 \uc11c\ub85c\uc5d0\uac8c \uc774\ub04c\ub9b0\ub2e4. \ubbf8\uc220\uc744 \uc804\uacf5\ud55c \u2018\uc5e0\ub9c8\u2019\ub294 \ubcf8\ub2a5\uc801\uc73c\ub85c \uc790\uc2e0\uc758 \uce94\ubc84\uc2a4 \uc548\uc73c\ub85c \u2018\uc544\ub378\u2019\uc744 \ucd08\ub300\ud55c\ub2e4. \u2018\uc544\ub378\u2019\uc740 \uc790\uc2e0\uacfc \uc804\ud600 \ub2e4\ub978 \uc0b6\uc744 \uc0b4\uc544\uc628 \u2018\uc5e0\ub9c8\u2019\ub85c \uc778\ud574 \uc774\uc804\uc5d0\ub294 \ubab0\ub790\ub358 \ub728\uac70\uc6b4 \uac10\uc815\uc744 \ub290\ub07c\uac8c \ub418\uace0, \ud3c9\uc628\ud558\uae30\ub9cc \ud588\ub358 \u2018\uc544\ub378\u2019\uc758 \uc0b6\uc740 \ub4a4\ud754\ub4e4\ub9ac\uae30 \uc2dc\uc791\ud55c\ub2e4.","poster":"https://movie-phinf.pstatic.net/20131211_121/1386741703780MHKGN_JPEG/movie_image.jpg?type=m886_590_2","link":"https://youtu.be/xnFg1e-jGMA"},{"id":9,"title":"\uba54\uc774\uc988\ub7ec\ub108","subtitle":"The Maze Runner","comeout":"2014.09.18","genres":["\uc561\uc158","\ubbf8\uc2a4\ud130\ub9ac","SF","\uc2a4\ub9b4\ub7ec"],"summary":"\uc0ad\uc81c\ub41c \uae30\uc5b5, \uac70\ub300\ud55c \ubbf8\ub85c\ub85c \ub458\ub7ec\uc2f8\uc778 \ub0af\uc120 \uacf5\uac04 \ubaa8\ub4e0 \uae30\uc5b5\uc774 \uc0ad\uc81c\ub41c \ucc44 \uc758\ubb38\uc758 \uc7a5\uc18c\ub85c \ubcf4\ub0b4\uc9c4 \u2018\ud1a0\ub9c8\uc2a4\u2019(\ub51c\ub7f0 \uc624\ube0c\ub77c\uc774\uc5b8). \u2018\ud1a0\ub9c8\uc2a4\u2019\ub294 \ubbf8\ub85c\uc5d0 \uac07\ud78c \uadf8\uacf3\uc5d0\uc11c \uc790\uc2e0\uacfc \uac19\uc740 \uc0c1\ud669\uc758 \uc0ac\ub78c\ub4e4\uc744 \ub9cc\ub09c\ub2e4. \uadf8\ub4e4\uc740 \ub9e4\uc77c \ubc24 \uc0b4\uc544 \uc6c0\uc9c1\uc774\ub294 \ubbf8\ub85c\uc5d0\uc11c \uc815\uccb4\ub97c \uc54c \uc218 \uc5c6\ub294 \uc8fd\uc74c\uc758 \uc874\uc7ac\uc640 \ub300\ub9bd\ud558\uba70, \uc9c0\uc625\uc73c\ub85c\ubd80\ud130 \ube60\uc838\ub098\uac08 \ud0c8\ucd9c\uad6c\uc778 \uc9c0\ub3c4\ub97c \uc644\uc131\ud574 \ub098\uac04\ub2e4. \uadf8\ub7ec\ub358 \uc5b4\ub290 \ub0a0, \ubbf8\ub85c\uc758 \ubb38\uc774 \uc5f4\ub9ac\uace0 \uadf8\ub4e4\uc740 \ub9c8\uc9c0\ub9c9 \uc120\ud0dd\uc758 \uae30\ub85c\uc5d0 \ub193\uc774\uac8c \ub418\ub294\ub370\u2026 \ub2e8 \ud55c \uc21c\uac04\ub3c4 \uc608\uce21\ud560 \uc218 \uc5c6\ub294 \uadf8 \uacf3, \uacfc\uc5f0 \uadf8\ub4e4\uc740 \uc0b4\uc544\ub0a8\uc744 \uc218 \uc788\uc744 \uac83\uc778\uac00! \uc0b4\uc544 \uc6c0\uc9c1\uc774\ub294 \ubbf8\ub85c\ub97c \ub6ab\uace0 \ud0c8\ucd9c\uc5d0 \uc131\uacf5\ud560 \uc218 \uc788\uc744 \uac83\uc778\uac00! \uc0b4\uc544 \ub0a8\uae30 \uc704\ud574\uc11c\ub294 \ub6f0\uc5b4\uc57c \ud55c\ub2e4!","poster":"https://movie-phinf.pstatic.net/20140826_116/1409028835652AHMXd_JPEG/movie_image.jpg?type=m886_590_2","link":"https://youtu.be/EQWqsdOjvG8"},{"id":10,"title":"\ud0c0\uc624\ub974\ub294 \uc5ec\uc778\uc758 \ucd08\uc0c1","subtitle":"Portrait of a Lady on Fire","comeout":"2020.01.16","genres":["\ub4dc\ub77c\ub9c8"],"summary":"\ucd08\uc0c1\ud654\ub97c \uadf8\ub9ac\ub294 \ud654\uac00 \ub9c8\ub9ac\uc548\ub290(\ub178\uc5d0\ubbf8 \uba5c\ub791)\ub294 \uc6d0\uce58 \uc54a\ub294 \uacb0\ud63c\uc744 \uc55e\ub454 \uadc0\uc871 \uc544\uac00\uc528 \uc5d8\ub85c\uc774\uc988(\uc544\ub378 \uc5d0\ub12c)\uc758 \uacb0\ud63c \ucd08\uc0c1\ud654 \uc758\ub8b0\ub97c \ubc1b\ub294\ub2e4. \uc5d8\ub85c\uc774\uc988 \ubaa8\ub974\uac8c \uadf8\ub9bc\uc744 \uc644\uc131\ud574\uc57c \ud558\ub294 \ub9c8\ub9ac\uc548\ub290\ub294 \ube44\ubc00\uc2a4\ub7fd\uac8c \uadf8\ub140\ub97c \uad00\ucc30\ud558\uba70 \uc54c \uc218 \uc5c6\ub294 \ubb18\ud55c \uac10\uc815\uc758 \uae30\ub958\uc5d0 \ud729\uc2f8\uc774\uac8c \ub41c\ub2e4. \uc78a\uc744 \uc218 \uc5c6\ub294, \uc78a\ud600\uc9c0\uc9c0 \uc54a\uc744 \uc0ac\ub791\uc758 \uae30\uc5b5\uc744 \ub9c8\uc8fc\ud558\uac8c \ud560 \uac78\uc791\uc744 \ub9cc\ub09c\ub2e4!","poster":"https://movie-phinf.pstatic.net/20191220_49/1576828214038i4ukE_JPEG/movie_image.jpg?type=m886_590_2","link":"https://youtu.be/rv-m744KKXE"},{"id":11,"title":"\uc5b8\ub355\uae38\uc758 \uc544\ud3f4\ub860","subtitle":"Kids on the Slope","comeout":"2018.08.29","genres":["\ub4dc\ub77c\ub9c8"],"summary":"\ud53c\uc544\ub178\ub9cc\uc774 \uc720\uc77c\ud55c \uce5c\uad6c\uc600\ub358 \u2018\uce74\uc624\ub8e8\u2019(\uce58\ub128 \uc720\ub9ac)\ub294 \uc0ac\uc138\ubcf4\ub85c \uc774\uc0ac \uc624\uac8c \ub41c \uc804\ud559 \uccab\ub0a0, \ud559\uad50 \ucd5c\uace0\uc758 \ubd88\ub7c9\uc544 \u2018\uc13c\ud0c0\ub85c\u2019(\ub098\uce74\uac00\uc640 \ud0c0\uc774\uc2dc)\uc640 \uadf8\uc758 \uc18c\uafc9\uce5c\uad6c \u2018\ub9ac\uce20\ucf54\u2019(\uace0\ub9c8\uce20 \ub098\ub098)\ub97c \ub9cc\ub09c\ub2e4. \ub9ac\uce20\ucf54\ub124 \ub808\ucf54\ub4dc \uac00\uac8c \uc9c0\ud558\uc5d0 \uc788\ub294 \uc870\uadf8\ub9cc \ud569\uc8fc\uc2e4\uc744 \ubb34\ub300 \uc0bc\uc544 \uc7ac\uc988 \uc74c\uc545\uc744 \uacf5\uc720\ud558\uba70 \uc138 \uc0ac\ub78c\uc740 \uc6b0\uc815\uc744 \ud0a4\uc6cc\uac00\uace0, \uadf8\ub807\uac8c \uce74\uc624\ub8e8\uc5d0\uac8c\ub3c4 \ud3c9\uc0dd\uc744 \ud568\uaed8\ud560 \uce5c\uad6c\uc640 \uc78a\uc9c0 \ubabb\ud560 \uccab\uc0ac\ub791\uc774 \ud568\uaed8 \ucc3e\uc544\uc628\ub2e4. \ud558\uc9c0\ub9cc \uc11c\ub85c\uc758 \uccab\uc0ac\ub791\uc740 \uc5c7\uac08\ub9ac\uae30\ub9cc \ud558\uace0, \uacc4\uc18d\ub420 \uac83\ub9cc \uac19\uc558\ub358 \uc6b0\uc815\uc5d0\ub3c4 \uc704\uae30\uac00 \ucc3e\uc544\uc624\ub294\ub370\u2026 \ub098\uc640 \uadf8\ub140\uc11d\uacfc \uadf8\ub140\uc758 \uc774\uc57c\uae30\uac00 \uc2dc\uc791\ub41c\ub2e4!","poster":"https://movie-phinf.pstatic.net/20180712_129/1531361619861G1Cpf_JPEG/movie_image.jpg?type=m886_590_2","link":"https://youtu.be/B_s9qeCtJ-A"}]}')}},[[11,1,2]]]);
//# sourceMappingURL=main.05314d8b.chunk.js.map