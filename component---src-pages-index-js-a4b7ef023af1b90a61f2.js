(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,a,t){"use strict";t.r(a),t.d(a,"query",function(){return s});t(151),t(35);var n=t(0),l=t.n(n),r=t(148),c=t(156),s="2326033305";a.default=function(e){var a=e.data,t=a.allSitesYaml.edges,n=a.allAppsYaml.edges;return l.a.createElement(c.a,null,l.a.createElement("div",{className:"p-2 md:p-8 overflow-auto"},l.a.createElement("p",null,"{"),l.a.createElement("div",{className:"pl-4",style:{whiteSpace:"nowrap"}},l.a.createElement("p",null,'"Author" : "Matt Bagni",'),l.a.createElement("p",null,'"Version" : "2019",'),l.a.createElement("p",null,'"Location" : ',l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"//atlasagency.com.au"},'"Sydney"')),l.a.createElement("p",null,'"Visual version" :'," ",l.a.createElement(r.a,{to:"/visual"},'"Visit"'),","),l.a.createElement("p",null,'"Projects":',"{"),l.a.createElement("div",{className:"pl-4",id:"sites"},l.a.createElement("p",null,'"Sites":',"["),l.a.createElement("ul",{className:"list-reset ml-4"},t.map(function(e){var a=e.node;return l.a.createElement("li",{className:"my-2",key:a.url},l.a.createElement("span",null,"{"),l.a.createElement("div",{className:"p-2"},'"url" :'," ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:a.url},a.url.replace("http://","").replace("https://","")),", ",l.a.createElement("br",null),'"data" : "',a.name,'", ',l.a.createElement("br",null)),l.a.createElement("span",null,"},"))})),l.a.createElement("p",null,"],")),l.a.createElement("div",{className:"pl-4",id:"apps"},l.a.createElement("p",null,'"Apps":',"["),l.a.createElement("ul",{className:"list-reset ml-4"},n.map(function(e){var a=e.node;return l.a.createElement("li",{className:"my-2",key:a.url},l.a.createElement("span",null,"{"),l.a.createElement("div",{className:"p-2"},'"url" :'," ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:a.url},a.url.replace("https://","")),", ",l.a.createElement("br",null),'"data" : "',a.name,'", ',l.a.createElement("br",null)),l.a.createElement("span",null,"},"))})),l.a.createElement("p",null,"]")),l.a.createElement("p",null,"},")),l.a.createElement("p",null,"}")))}},148:function(e,a,t){"use strict";t.d(a,"b",function(){return d});var n=t(0),l=t.n(n),r=t(4),c=t.n(r),s=t(33),i=t.n(s);t.d(a,"a",function(){return i.a});t(149);var m=l.a.createContext({}),d=function(e){return l.a.createElement(m.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):l.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},149:function(e,a,t){var n;e.exports=(n=t(153))&&n.default||n},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Matt__Bagni--2019 🎩",description:"Keep up to date with what I am doing! Or get in touch even!"}}}}},153:function(e,a,t){"use strict";t.r(a);t(34);var n=t(0),l=t.n(n),r=t(4),c=t.n(r),s=t(55),i=t(2),m=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return t?l.a.createElement(s.a,Object.assign({location:a,pageResources:t},t.json)):null};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=m},154:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAADTUlEQVQ4y3VVS0iUURS+46MWiqg9qRYZlqWm89TxkRllRQtbRBTVpmVZIVRuggrRiESd0XFmHLEUi8JWCQZBQYtoUSq4MNBx5v9nTPHVVJZRlvP3nTt3Hr/igcM9c+93vnPOPef+w5iQYrvMdFYvt81tsmZT7RhbSzbjzGyTNGSTT3GbrAYoisJym0JkxpYQkMTQIh3Na/bWwOkaKdm0F3POsfsaPezFyEKUMBgMspTboxSJA4ra5C0A92ot3iWd66tiaJ/nSjbt0RkwW3ll5FM9wmpezkYJKe2eoe9sR71bIyL3GV1fyHkZWS3h/C8p2bRHZ8C8ImzqnVHNjf4ZltPkUZeNkuNphUN5nkVWuFr9CoBEFCTlNvbyLBI/A7aCfLIaPPEqshI0hBW843eZ3+x9Y+z+oyCjCTi4tY45nin0n7DddGbs+q0A+xY+vKoypy9KaLaF7g73sT/f4vXrrd6BQptUecAh54BgUGeVFF2Lj8gG4LgXHa4E6SCwMjC5kbsMS6EYAVOrVATgrZVjordK96ANK/eBrQG5WTQySljQGiLEyJQg6nWycxo9iabW6AiFBZg4ZJpINrBX4Vscm5SqZGwaEbWbb578yA67fCogBT7U7mPb693hDDtRqmFVyWbxA69lD6IulNrlLPqNNY6vDnkD7I3CDmMzgP1W5ghhVYTh0pBNLsZnsaLDnxa6O+96MZcVuMMTIiu+d7zTnwTsDxDlrioZ0fiPY53+VET9AOc6jFK6INsNkmfQ57AzRZbpCHYX2IHKrom02Mwjkt3oSRAEF0wPf9JL6IM2wGkZAYahQ2TTHhrTZ3q0qBis0kXyyXwwrh5sTDp1L/zgk9DFab2TD/Ev6Jnydt8uNGMn7LMgXdLbpxWsAQRJFj6cIyJHOnw0AmxbXah7cHystU0qeG6z0Cq8CAnqh30FGtA55ylYLwdfGuG+NBGqz1fs5+hm/8w62MMGV0DRIVNdi4ynCAURZY4mPrG9DyTE+tS+nlMPbMb98XB2caLzp9GIMa1tCp+uOa7atil645/wKrLFkMfH+qrk/NNJvp7q+Ry5z4NOXwrKqQJJNSnsy7jL5Ni5wz2yc8J3lWCWmJgxylSz1l8AJiJil9rVn////0AV4nD3IREAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/4cdf67f8a8aa3c2132ccdc2a82a4cad9/fdbb0/logo.png",srcSet:"/static/4cdf67f8a8aa3c2132ccdc2a82a4cad9/e22c9/logo.png 75w,\n/static/4cdf67f8a8aa3c2132ccdc2a82a4cad9/d3809/logo.png 150w,\n/static/4cdf67f8a8aa3c2132ccdc2a82a4cad9/fdbb0/logo.png 300w,\n/static/4cdf67f8a8aa3c2132ccdc2a82a4cad9/b5207/logo.png 450w,\n/static/4cdf67f8a8aa3c2132ccdc2a82a4cad9/59139/logo.png 600w,\n/static/4cdf67f8a8aa3c2132ccdc2a82a4cad9/af144/logo.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},155:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png",srcSet:"/static/6d91c86c0fde632ba4cd01062fd9ccfa/e22c9/gatsby-astronaut.png 75w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/d3809/gatsby-astronaut.png 150w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/fdbb0/gatsby-astronaut.png 300w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/b5207/gatsby-astronaut.png 450w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/59139/gatsby-astronaut.png 600w,\n/static/6d91c86c0fde632ba4cd01062fd9ccfa/af144/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},156:function(e,a,t){"use strict";var n=t(152),l=t(0),r=t.n(l),c=t(148),s=t(4),i=t.n(s),m=t(154),d=t(150),o=t.n(d),p=function(){return r.a.createElement(c.b,{query:"4145719641",render:function(e){return r.a.createElement(o.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:m})},u=function(e){e.siteTitle;return r.a.createElement("header",{className:"bg-blackest p-4"},r.a.createElement("div",{className:"container mx-auto flex justify-between"},r.a.createElement("h1",{className:"text-base md:text-xl"},r.a.createElement(c.a,{to:"/",className:"no-underline text-blue-light"},"/MattBagni/2019/portfolio")),r.a.createElement("div",{style:{width:80,flexShrink:1,marginBottom:-100,marginTop:-2}},r.a.createElement(c.a,{to:"/",className:"float no-underline"},r.a.createElement(p,null)))))};u.propTypes={siteTitle:i.a.string},u.defaultProps={siteTitle:""};var f=u,g=t(157),E=t.n(g),b=t(155),A=function(){return r.a.createElement(c.b,{query:"2011440971",render:function(e){return r.a.createElement(o.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:b})},h={writingMode:"vertical-rl"},y=function(){return r.a.createElement("nav",{className:"py-6 fixed pin-r w-12"},r.a.createElement("ul",{style:h,className:"list-reset flex"},r.a.createElement("li",{className:"m-2 md:m-4"},r.a.createElement(c.a,{to:"/"},"~/json")),r.a.createElement("li",{className:"m-2 md:m-4"},r.a.createElement("a",{href:"#sites"},"~/sites")),r.a.createElement("li",{className:"m-2 md:m-4"},r.a.createElement("a",{href:"#apps"},"~/apps")),r.a.createElement("li",{className:"m-2 md:m-4"},r.a.createElement("a",{href:"#channels"},"~/channels")),r.a.createElement("li",{className:"m-2 md:m-4"},r.a.createElement(c.a,{to:"/visual"},"~/visual"))))},N=(t(158),t(151),[{name:"github",link:"https://github.com/mattbag"},{name:"linkedin",link:"https://www.linkedin.com/in/matteobagni88/"},{name:"twitter",link:"https://mobile.twitter.com/mattbag00"},{name:"codepen",link:"https://codepen.io/mattbag/"},{name:"dev.to",link:"https://dev.to/mattbag00"}]),w=function(){return r.a.createElement("aside",{id:"channels",className:"my-8 py-8 bg"},r.a.createElement("ul",{style:{backgroundColor:"var(--black)",margin:0,padding:0,listStyle:"none",display:"flex",flexWrap:"wrap",fontSize:"var(--h-size, 2rem)",justifyContent:"space-around"}},N.map(function(e){return r.a.createElement("li",{key:e.name,style:{margin:2,padding:2,transform:"rotate(-0.02turn)"}},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.link,className:"text-white"},e.name))})))},v=(t(159),function(e){var a=e.children,t=n.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(E.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Keep up to date with what I am doing! Or get in touch even!"}]},r.a.createElement("html",{lang:"en"})),r.a.createElement("div",{className:"bg py-1"}),r.a.createElement(f,{siteTitle:t.site.siteMetadata.title}),r.a.createElement(y,null),r.a.createElement("main",{className:"container mx-auto py-8 pr-6 md:pr-0",style:{maxWidth:"90%"}},a),r.a.createElement("footer",{className:"mt-10"},r.a.createElement(w,null),r.a.createElement("div",{className:"p-4 text-center"},r.a.createElement("a",{className:"inline-block",href:"https://www.gatsbyjs.org/",rel:"noopener noreferrer",target:"_blank"},"> Powered By <",r.a.createElement("div",{className:"my-4 mx-auto float",style:{maxWidth:"100px",borderRadius:500,overflow:"hidden"}},r.a.createElement(A,null)))),r.a.createElement("div",{className:"bg py-1"})))});v.propTypes={children:i.a.node.isRequired};a.a=v}}]);
//# sourceMappingURL=component---src-pages-index-js-a4b7ef023af1b90a61f2.js.map