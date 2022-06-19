(function(){"use strict";var e={5881:function(e,n,t){var a=t(9242),o=t(3396),l=t(7139);const i={id:"app"};function s(e,n,t,a,s,r){const u=(0,o.up)("global-header"),c=(0,o.up)("router-view"),m=(0,o.up)("global-footer");return(0,o.wg)(),(0,o.iD)("div",i,[(0,o.Wm)(u),(0,o._)("section",{class:(0,l.C_)(["content",r.componentName?`${r.componentName}`:""])},[(0,o.Wm)(c),(0,o.Wm)(m)],2)])}var r=t.p+"assets/img/logo-hvlogo-blk.93bf3e60.png";const u={id:"global-header"},c=(0,o._)("figure",{id:"triangles",class:"triangles","data-paroller-factor":""},null,-1),m={class:"interior"},d=(0,o._)("img",{src:r,alt:"Hyperlotus"},null,-1),p=(0,o._)("div",{class:"header-content"},[(0,o._)("div",{class:"interior"},[(0,o._)("h1",{id:"headline"})])],-1);function h(e,n,t,a,l,i){const s=(0,o.up)("router-link"),r=(0,o.up)("nav-menu");return(0,o.wg)(),(0,o.iD)("header",u,[c,(0,o._)("nav",null,[(0,o._)("div",m,[(0,o.Wm)(s,{to:"/",class:"logo"},{default:(0,o.w5)((()=>[d])),_:1}),(0,o.Wm)(r)])]),p])}const g={class:"main-menu"},f=(0,o.Uk)("/resume"),b=(0,o.Uk)("/music");function w(e,n){const t=(0,o.up)("router-link");return(0,o.wg)(),(0,o.iD)("ul",g,[(0,o._)("li",null,[(0,o.Wm)(t,{to:"/resume"},{default:(0,o.w5)((()=>[f])),_:1})]),(0,o._)("li",null,[(0,o.Wm)(t,{to:"/music"},{default:(0,o.w5)((()=>[b])),_:1})])])}var y=t(89);const v={},_=(0,y.Z)(v,[["render",w]]);var $=_,k=t(1652),S={name:"GlobalHeader",components:{"nav-menu":$},methods:{delaunay(){function e(e,n){return e=Math.ceil(e),n=Math.floor(n),Math.floor(Math.random()*(n-e+1))+e}const n=130,t=Array.from({length:n},(()=>new Array(e(24,window.innerWidth),e(24,window.innerWidth)))),a=t,o=k.Z.from(a);function l(e){return[3*e,3*e+1,3*e+2]}function i(e,n){return l(n).map((n=>e.triangles[n]))}function s(e,n,t){const a=e[0]*e[0]+e[1]*e[1],o=n[0]*n[0]+n[1]*n[1],l=t[0]*t[0]+t[1]*t[1],i=2*(e[0]*(n[1]-t[1])+n[0]*(t[1]-e[1])+t[0]*(e[1]-n[1]));return[1/i*(a*(n[1]-t[1])+o*(t[1]-e[1])+l*(e[1]-n[1])),1/i*(a*(t[0]-n[0])+o*(e[0]-t[0])+l*(n[0]-e[0]))]}function r(e,n,t){const a=i(n,t).map((n=>e[n]));return s(a[0],a[1],a[2])}function u(e,n){const t=['<g class="edges">'];for(let a=0;a<n.halfedges.length;a++)if(a<n.halfedges[a]){const o=r(e,n,Math.floor(a/3)),l=r(e,n,Math.floor(n.halfedges[a]/3));t.push(`<line x1="${o[0]}" y1="${o[1]}" x2="${l[0]}" y2="${l[1]}"/>`)}return t.push("</g>"),t.join("")}function c(){let e,n;e=window.innerWidth/1.66,n=window.innerHeight,document.querySelector("#triangles").innerHTML=`\n          <svg viewBox="100 100 ${e} ${n}">\n            ${u(a,o)}\n          </svg>`}c(),window.onresize=c},newQuote(){const e=["Placeholder text for a much better headline later"];let n=e,t=n[Math.floor(Math.random()*n.length)];document.getElementById("headline").innerHTML=t}},watch:{$route(){this.delaunay(),this.newQuote()}},mounted(){this.delaunay(),this.newQuote()}};const D=(0,y.Z)(S,[["render",h]]);var M=D;const C={class:"interior"},x={class:"wrap"},I={class:"link-bar"},P=["href"],T=(0,o._)("span",{class:"quote"},null,-1);function L(e,n,t,a,i,s){return(0,o.wg)(),(0,o.iD)("footer",C,[(0,o._)("div",x,[(0,o._)("nav",I,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.social,(e=>((0,o.wg)(),(0,o.iD)("a",{href:e.url,key:e.network,target:"_blank"},(0,l.zw)(e.network),9,P)))),128))]),T])])}var R=JSON.parse('[{"quote":"bottom text"}]'),A={name:"GlobalFooter",data(){return{quotes:R,social:[{network:"github",url:"//github.com/hyperchaos"},{network:"codepen",url:"//codepen.io/michaelperrygoodman"},{network:"linkedin",url:"//linkedin.com/in/michaelperrygoodman"},{network:"email",url:"mailto:mpg@demonlord.org"}]}},methods:{textChanger(){let e=Math.floor(Math.random()*this.quotes.length),n=this.quotes[e].quote;document.querySelector(".quote").innerHTML=n}},mounted(){this.textChanger()}};const E=(0,y.Z)(A,[["render",L]]);var F=E,W={name:"App",components:{"global-header":M,"global-footer":F},computed:{siteUrl(){const e=document.URL,n=e.replace("http://","").replace("https://","").split(/[/?#]/);return n[0]},componentName(){return this.$route.name}},methods:{banner(){console.log("\n..axs$a.'$$$a. $$$$&a. .a$$$a.\n   $$$ $$$ $$$ $$$ $$$ $$$ $$$\n   $$$ $$$ $$$ $$$ $$$ $$$  '$\n   $$$ $$$ $$$ $$$ $$$ $$$\n   $$$ $$$ $$$ $$$s$$' $$$'$$$\"'\n   $$$ $$$ $$$ $$$     $$$ $$$\n   $$$ $$$ $$$ $$$     $$$ $$$\n   $$$ $$$ $$$ $$$     '$$a$$s..\n     \"' \"$\" ---------------------\n         '' - website by mpg ----\n            - demonlord.org -----\n      "),console.log("// Initializing...")},randomColor(){const e=["#66ffcc","#ff6666","#9566ff","#66ffff","#ffff66"],n=e,t=n[Math.floor(Math.random()*n.length)];document.body.style.backgroundColor=t},randomBorderColor(){const e=["#66ffcc","#ff6666","#9566ff","#ffffff","#66ffff","#ffff66"],n=e[Math.floor(Math.random()*e.length)];document.body.style.borderColor=n},pageTitle(){const e=(new Date).getFullYear();document.title=`michael perry goodman // ${e}`}},mounted(){this.banner();const e=()=>{this.randomColor()};setInterval(e,2e3),this.pageTitle()}};const H=(0,y.Z)(W,[["render",s]]);var j=H,V=t(678);const z={class:"interior"},N=(0,o._)("div",{class:"wrap grid-container"},null,-1),B=[N];function G(e,n,t,a,l,i){return(0,o.wg)(),(0,o.iD)("div",z,B)}var O={name:"PageMainView"};const U=(0,y.Z)(O,[["render",G]]);var q=U;const Z={class:"interior"},J={class:"wrap columns"},K={class:"sub-section"},X=(0,o._)("span",{class:"eyebrow"},"Experience",-1),Q={class:"position-head"},Y=["textContent"],ee={class:"info"},ne=["href"],te=["innerHTML"],ae={class:"tags"},oe={class:"sidebar"},le=(0,o._)("span",{class:"eyebrow"},"Languages & Stack",-1),ie=["textContent"],se=(0,o._)("span",{class:"eyebrow"},"Software Tools",-1),re=["textContent"],ue=(0,o._)("span",{class:"eyebrow"},"Additional Skills",-1),ce=["textContent"],me=(0,o._)("span",{class:"eyebrow"},"Finer Details",-1),de=["innerHTML"],pe=(0,o._)("span",{class:"eyebrow"},"Resume Downloads",-1),he=(0,o._)("a",{href:"/assets/files/mpgResume2022.pdf",target:"_blank"},"PDF",-1),ge=(0,o.Uk)(" / "),fe=(0,o._)("a",{href:"/assets/files/mpgResume2022.json",target:"_blank"},"JSON",-1),be=(0,o.Uk)(" / "),we=(0,o._)("a",{href:"/assets/files/mpgResume2022.txt",target:"_blank"},"TXT",-1);function ye(e,n,t,a,i,s){return(0,o.wg)(),(0,o.iD)("div",Z,[(0,o._)("div",J,[(0,o._)("div",K,[X,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.resume.work,((e,n)=>((0,o.wg)(),(0,o.iD)("div",{class:"position",key:n},[(0,o._)("div",Q,[(0,o._)("h2",{textContent:(0,l.zw)(e.position)},null,8,Y),(0,o._)("span",ee,[(0,o.Uk)((0,l.zw)(e.startDate)+"-"+(0,l.zw)(e.endDate)+" — ",1),(0,o._)("a",{href:e.website,target:"_blank"},(0,l.zw)(e.company),9,ne),(0,o.Uk)(" — "+(0,l.zw)(e.city),1)])]),(0,o._)("p",{innerHTML:e.summary},null,8,te),(0,o._)("ul",ae,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.tags,((e,n)=>((0,o.wg)(),(0,o.iD)("li",{key:n},(0,l.zw)(e),1)))),128))])])))),128))]),(0,o._)("div",oe,[le,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.resume.skills[0].stack,((e,n)=>((0,o.wg)(),(0,o.iD)("li",{key:n,textContent:(0,l.zw)(e)},null,8,ie)))),128))]),se,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.resume.skills[0].software,((e,n)=>((0,o.wg)(),(0,o.iD)("li",{key:n,textContent:(0,l.zw)(e)},null,8,re)))),128))]),ue,(0,o._)("ul",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.resume.skills[0].additional,((e,n)=>((0,o.wg)(),(0,o.iD)("li",{key:n,textContent:(0,l.zw)(e)},null,8,ce)))),128))]),me,(0,o._)("p",{innerHTML:i.resume.basics.about},null,8,de),pe,he,ge,fe,be,we])])])}var ve=JSON.parse('{"basics":{"name":"Michael Perry Goodman","email":"michaelperrygoodman@gmail.com","website":"https://michaelperrygoodman.com","about":"Started my career as both designer and developer, self-taught in both skills, and have a very good understanding of how both of these roles work independently as well as some opinions on how they ought to work together.","location":{"city":"Chicago","state":"IL","countryCode":"US"},"profiles":[{"network":"LinkedIn","url":"https://www.linkedin.com/in/michaelperrygoodman"},{"network":"Github","url":"https://www.github.com/hyperchaos"},{"network":"Codepen","url":"https://www.codepen.io/michaelperrygoodman"}]},"work":[{"company":"Michael Perry Goodman","position":"Web Design & Development Consulting","city":"Chicago, IL","website":"http://michaelperrygoodman.com","startDate":"2002","endDate":"Current","summary":"For two decades I\'ve worked with web design and development agencies in a variety of industries, with brands such as Roll20, SANS, Kraft, IBM, Wilson, Abbott, and many others.<br /><br />My primary focus in most of these roles has been tasks like page templating, converting design comps into live pages, and application UI. However, I\'ve become a swiss army knife of sorts, with skills ranging from logo design to site wire frames to HTML email development to single page apps.","tags":["full-stack development","ui/ux","graphic design","email development","branding","development consulting"]},{"company":"Shift7 Digital","position":"Senior Front-End Developer","city":"Chicago, IL","website":"http://shift7digital.com","startDate":"2021","endDate":"Current","summary":"Build Salesforce Marketing Cloud landing pages and emails, build vanilla JS components, implement Adobe Analytics into multiple sites, build Salesforce Lightning Web Components","tags":["front-end development","11ty","sass","html5","SF LWC","SFMC SSJS","AMPscript"]},{"company":"Mess","position":"Full-Stack Developer","city":"Chicago, IL","website":"http://thisismess.com","startDate":"2020","endDate":"2021","summary":"Largely Wordpress based APIs and Vue front-ends using docker/K8s, updating and adding to Django/Wagtail applications, and a Hugo blog using Forestry CMS.","tags":["full-stack development","vue.js","sass","html5","php","wordpress","rest api","python","wagtail","sql","webpack","docker"]},{"company":"Breakout.Studio","position":"Full-Stack Developer","city":"Chicago, IL","website":"http://breakout.studio","startDate":"2016","endDate":"2019","summary":"Website development with the Zurb Foundation framework and Craft CMS, Handlebars templates, MySQL, and Nginx web servers. HTML email campaign templates and compatibility testing with Litmus.","tags":["front-end development","jquery","craft cms","foundation","npm","sass","html5","nginx","mysql","gulp","git"]},{"company":"Healthbox","position":"Front-End Developer","city":"Chicago, IL","website":"http://healthbox.com","startDate":"2015","endDate":"2016","summary":"Creating React JSX templates for a Rails-based REST API, Github repository and Heroku deployment. Website redesign front-end work in React. Maintain a small suite of Rails engine applications and providing team support.","tags":["front-end development","react","ruby on rails","bootstrap","npm","sass","html5","gulp","git"]},{"company":"BigTime Software","position":"Front-End Developer","city":"Chicago, IL","website":"http://bigtime.net","startDate":"2014","endDate":"2015","summary":"Development and maintenance of the BigTime IQ application including development of new front-end feature functionality, User Experience planning, UI develoment via CSS, code refactoring. Additionally, development of corporate website Wordpress theme UI.","tags":["front-end development","angular.js","ASP.NET","wordpress","umbraco","bootstrap","css3","html5","subversion"]},{"company":"Creative Circle","position":"Contract Designer & Developer","city":"Chicago, IL","website":"http://creativecircle.com","startDate":"2010","endDate":"2020","summary":"Worked with a large variety of clients from Fortune 500 to small shops doing an array of different work from print templates to microsites and single page applications.","tags":["front-end development","email design","email development","graphic design","contracting"]},{"company":"VSA Partners","position":"Front-End Developer","city":"Chicago, IL","website":"http://vsapartners.com","startDate":"2012","endDate":"2013","summary":"Website development with various JS frameworks, HTML email mark-up, microsites, responsive design development, legacy browser compliant mark-up, CSS3 animations.","tags":["front-end development","jquery","ASP.NET","wordpress","bootstrap","css3","html5","grunt","git"]},{"company":"AbelsonTaylor","position":"Interactive Developer","city":"Chicago, IL","website":"http://abelsontaylor.com","startDate":"2011","endDate":"2012","summary":"Front-end website development, HTML email markup, HTML5 iPad slides, CSS3 animations.","tags":["front-end development","email development","jquery","ASP.NET","css3","html5","subversion"]},{"company":"Viveli","position":"Junior Designer & Developer","city":"Schaumburg, IL","website":"Defunct","startDate":"2008","endDate":"2010","summary":"UI development of proprietary data analysis marketing tools, web form design, photograph touch-up/treatments, print design (brochure, business cards), logo design, banner ads, etc.","tags":["landing page development","jquery","php","UI design","adobe photoshop","css3","html5"]},{"company":"Guidance Development","position":"Junior Designer & Developer","city":"Gurnee, IL","website":"http://gd2.com","startDate":"2007","endDate":"2008","summary":"Flash website development, web site mock-ups, banner ads. UI development of proprietary CMS environment.","tags":["flash development","actionscript","php","jquery","moo tools","UI design","adobe photoshop","css","html"]}],"volunteer":[{"organization":"FreeGeek Chicago","position":"Volunteer","website":"http://freegeek.org"}],"skills":[{"stack":["HTML5, CSS3/SASS, ES5/6+","Vue, React, jQuery(🙃)","some Ruby, some PHP","PostgreSQL, MySQL","Ruby on Rails, SpinaCMS","Node/Express, .NET MVC","VuePress, Forestry.io","Wordpress, CraftCMS","Foundation, Bootstrap","Docker, Buddy CI"],"software":["VS Code, neovim/VimR","zsh/bash, tmux, git CLI","yarn, npm, webpack, grunt","Photoshop, Illustrator","XD, Sketch, Figma"],"additional":["MVC/MVVM Frameworks","REST APIs","CMS Templates","UX Wireframing","Interface Design","JS Animations","Branding & Identity"]}]}'),_e={name:"PageResume",data(){return{resume:ve}},created(){}};const $e=(0,y.Z)(_e,[["render",ye]]);var ke=$e;const Se={class:"interior"},De=(0,o._)("div",{class:"wrap columns"},[(0,o._)("div",{class:"sub-section"},[(0,o._)("span",{class:"eyebrow"},"Music"),(0,o._)("p",null,"I have been creating computer-based electronic music for over 20 years now, starting with a pirated copy of FruityLoops 3 in 2001. Since then, I have largely focused on ambient music and experimental music, often involving guitar. Below are some things I have released."),(0,o._)("h3",null,"Implex Grace"),(0,o._)("span",{class:"info"},"Shadows & Wraiths, 2020"),(0,o._)("iframe",{style:{border:"0",width:"640px",height:"220px","margin-bottom":"24px"},src:"https://bandcamp.com/EmbeddedPlayer/album=3523579026/size=large/bgcol=000/linkcol=00ff99/artwork=small/transparent=false/",seamless:""},'\n          <a href="https://implexgrace.bandcamp.com/album/shadows-wraiths">Shadows &amp; Wraiths by Implex Grace</a>\n        '),(0,o._)("span",{class:"info"},"The Black Tapes, 2008"),(0,o._)("iframe",{style:{border:"0",width:"640px",height:"310px","margin-bottom":"24px"},src:"https://bandcamp.com/EmbeddedPlayer/album=1805190515/size=large/bgcol=000/linkcol=00ff99/artwork=small/transparent=false/",seamless:""},'\n          <a href="https://implexgrace.bandcamp.com/album/the-black-tapes">The Black Tapes by Implex Grace</a>\n        '),(0,o._)("span",{class:"info"},"Something In The Way (Versions), 2007"),(0,o._)("iframe",{style:{border:"0",width:"640px",height:"210px","margin-bottom":"24px"},src:"https://bandcamp.com/EmbeddedPlayer/album=2071403386/size=large/bgcol=000/linkcol=00ff99/artwork=small/transparent=false/",seamless:""},'\n          <a href="https://implexgrace.bandcamp.com/album/something-in-the-way-versions">Something In The Way (Versions) by Implex Grace</a>\n        '),(0,o._)("span",{class:"info"},"Mira Loma, 2005"),(0,o._)("iframe",{style:{border:"0",width:"640px",height:"250px","margin-bottom":"24px"},src:"https://bandcamp.com/EmbeddedPlayer/album=3098530785/size=large/bgcol=000/linkcol=00ff99/artwork=small/transparent=false/",seamless:""},'\n          <a href="https://implexgrace.bandcamp.com/album/mira-loma">Mira Loma by Implex Grace</a>\n        '),(0,o._)("h3",null,"Void En Vogue"),(0,o._)("span",{class:"info"},"Varia EP, 2019"),(0,o._)("iframe",{style:{border:"0",width:"640px",height:"307px","margin-bottom":"24px"},src:"https://bandcamp.com/EmbeddedPlayer/album=1266802891/size=large/bgcol=000/linkcol=00ff99/artwork=small/transparent=false/",seamless:""},'\n          <a href="https://voidenvogue.bandcamp.com/album/varia-ep">Varia EP by Void En Vogue</a>\n        '),(0,o._)("h3",null,"Strategy Guide"),(0,o._)("span",{class:"info"},"Antegenesis EP, 2006"),(0,o._)("iframe",{style:{border:"0",width:"640px",height:"340px"},src:"https://bandcamp.com/EmbeddedPlayer/album=206131110/size=large/bgcol=000/linkcol=00ff99/artwork=small/transparent=false/",seamless:""},'\n          <a href="https://strategyguide.bandcamp.com/album/antegenesis-ep">Antegenesis EP by Strategy Guide</a>\n        ')]),(0,o._)("div",{class:"sidebar"},[(0,o._)("span",{class:"eyebrow"},"Hardware & Synths"),(0,o._)("ul",null,[(0,o._)("li",null,"Antelope Audio ZenTour"),(0,o._)("li",null,"Genelec 8010A + Sub"),(0,o._)("li",null,"Beyerdynamic DT990 Pro"),(0,o._)("li",null,"Grado SR80e"),(0,o._)("li",null,"Soundcraft EFX12"),(0,o._)("li",null,"Yamaha MT4X 4-Track"),(0,o._)("li",null," "),(0,o._)("li",null,"Sequentix Cirklon"),(0,o._)("li",null,"Kurzweil K2VX"),(0,o._)("li",null,"Access Virus C"),(0,o._)("li",null,"Nord Lead Rack 1"),(0,o._)("li",null,"Novation K-Station"),(0,o._)("li",null,"Behringer DeepMind 12"),(0,o._)("li",null,"Roli Seaboard BLOCK"),(0,o._)("li",null," "),(0,o._)("li",null,"Joemeek VC3Q Preamp"),(0,o._)("li",null,"TC Electronic Fireworx"),(0,o._)("li",null,"dbx 166XL Stereo Comp"),(0,o._)("li",null,"Some other stuff...")]),(0,o._)("span",{class:"eyebrow"},"Eurorack Modular"),(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("a",{href:"https://www.modulargrid.net/e/racks/view/579324",target:"_blank"},"Modular Grid Rack")]),(0,o._)("li",null,"Doepfer A-100 6U case"),(0,o._)("li",null,"Hexinverter Mutant Brain"),(0,o._)("li",null,"ALM Pamela's New Workout"),(0,o._)("li",null,"Topobrillo Stereomix"),(0,o._)("li",null,"Intellijel Quadra"),(0,o._)("li",null,"Intellijel Triatt x2"),(0,o._)("li",null,"Intellijel Polaris"),(0,o._)("li",null,"Mutable Instruments Peaks"),(0,o._)("li",null,"Mutable Instruments Streams"),(0,o._)("li",null,"Sylph Modular uO_c"),(0,o._)("li",null,"Make Noise/Soundhack Morphagene"),(0,o._)("li",null,"Eowave Domino"),(0,o._)("li",null,"Acid Rain Chainsaw"),(0,o._)("li",null,"WMD C4RBN"),(0,o._)("li",null,"Endorphin.es Milky Way"),(0,o._)("li",null,"Tiptop Audio ZVERB"),(0,o._)("li",null,"Erica Pico DSP"),(0,o._)("li",null,"Erica Pico RND"),(0,o._)("li",null,"2hp Mult x4")]),(0,o._)("span",{class:"eyebrow"},"Guitar Rig"),(0,o._)("ul",null,[(0,o._)("li",null,"Kemper Profiler Rack"),(0,o._)("li",null,"Marshall JCM900 4100"),(0,o._)("li",null,"Traynor TS-25"),(0,o._)("li",null," "),(0,o._)("li",null,"Ibanez RGA42HPSF"),(0,o._)("li",null,"Ibanez RG421RW"),(0,o._)("li",null,"Jackson Performer PS3T"),(0,o._)("li",null,"Jackson Warrior JS32W"),(0,o._)("li",null,"Gibson Les Paul Special"),(0,o._)("li",null,"Kaman/Ovation GTX 33"),(0,o._)("li",null,"Kaman/Ovation GTX 38"),(0,o._)("li",null," "),(0,o._)("li",null,"ProCo RAT"),(0,o._)("li",null,"Maxon OD-808"),(0,o._)("li",null,"Dwarfcraft Necromancer"),(0,o._)("li",null,"MXR/CAE MC402 Boost"),(0,o._)("li",null,"MXR DynaComp"),(0,o._)("li",null,"Boss DS-1"),(0,o._)("li",null,"Boss DS-2"),(0,o._)("li",null,"Boss HM-3"),(0,o._)("li",null,"Line 6 DL4"),(0,o._)("li",null,"Digitech Reverb"),(0,o._)("li",null,"Yamaha REX 50")]),(0,o._)("span",{class:"eyebrow"},"DAWs, SoftSynths, Plugins"),(0,o._)("ul",null,[(0,o._)("li",null,"FL Studio"),(0,o._)("li",null,"Bitwig Studio"),(0,o._)("li",null,"Logic Pro X"),(0,o._)("li",null,"Adobe Audition"),(0,o._)("li",null,"Amadeus Pro"),(0,o._)("li",null," "),(0,o._)("li",null,"NI Reaktor 6"),(0,o._)("li",null,"Max 8"),(0,o._)("li",null,"PureData"),(0,o._)("li",null,"Supercollider"),(0,o._)("li",null," "),(0,o._)("li",null,"Spectrasonics Omnisphere"),(0,o._)("li",null,"Synapse Audio DUNE"),(0,o._)("li",null,"Rob Papen Predator"),(0,o._)("li",null,"DiscoDSP Discovery Pro"),(0,o._)("li",null,"Novation V-Station"),(0,o._)("li",null," "),(0,o._)("li",null,"iZotope Ozone"),(0,o._)("li",null,"FabFilter Suite"),(0,o._)("li",null,"Eventide Suite"),(0,o._)("li",null,"ValhallaDSP Plugins"),(0,o._)("li",null,"Soundhack Spectral Plugins"),(0,o._)("li",null,"Michael Norris Plugins"),(0,o._)("li",null,"GRM Tools"),(0,o._)("li",null,"A few secret weapons...")])])],-1),Me=[De];function Ce(e,n,t,a,l,i){return(0,o.wg)(),(0,o.iD)("div",Se,Me)}var xe={name:"PageMusic"};const Ie=(0,y.Z)(xe,[["render",Ce]]);var Pe=Ie;const Te={class:"interior"},Le=(0,o.uE)('<div class="wrap"><div class="sub-section"><h2>Code</h2><p>I am not a great computer programmer, but I enjoy the work I do. I spend more time thinking about what I would make than actually making anything. The upside is that I also don&#39;t write many bugs!</p></div><div class="sub-section"><h3>Files</h3><p>Recommended programming books ad files</p></div><div class="sub-section"><h3>Repos</h3><p>Here are some projects I have started and will hopefully finish someday.</p><ul><li><a href="#">.dotfiles</a> :: These are my personal configuration files. You probably shouldn&#39;t use them as-is.</li><li><a href="#">demonlord.vue</a> :: This website, built with Vue. </li><li><a href="#">demonlord-theme-vscode</a> :: My personal VSCode theme.</li><li><a href="#">project-name</a> :: This is a project I started to generate project names on the command line.</li><li><a href="#">snack-vote</a> :: A prototype for a system to vote on what snacks to buy for your office, built with React.</li></ul></div><div class="sub-section"><h3>Snippets</h3><p>A few of my personal snippets containing some code I like to reuse. I&#39;m not sure how much of these I actually wrote anymore.</p><ul><li><a href="#">animation-behaviors.scss</a> :: Some mixins and includes for simple movement.</li><li><a href="#">blackNoise.js</a> :: This can actually be any color but black noise sounds cool.</li><li><a href="#">colorBlast.js</a> :: Furious BG color changer. Please don&#39;t look at this if you are epileptic.</li><li><a href="#">userChrome.css</a> :: My Firefox userChrome .css file.</li></ul></div><div class="sub-section"><h3>Shell Scripts</h3><p>Not sure why these aren&#39;t just gists? I wanted a new section.</p><ul><li><a href="#">github-cloneall.sh</a> :: Shell script with some Ruby to clone all of a user&#39;s github repos.</li></ul></div><div class="sub-section"><h3>IRC Scripts</h3><p>Scripts for IRSSI as well as some legacy scripts and clients.</p><ul><li><a href="#">github-cloneall.sh</a> :: Shell script with some Ruby to clone all of a user&#39;s github repos.</li></ul></div><div class="sub-section"><h3>Reaktor Software</h3><img src="//placehold.it/720x320" alt="Reaktor"><strong></strong></div><div class="sub-section"><h3>Max/MSP</h3><ul><li><a href="#">maxpatch-0.1.0</a> :: A new maxpatch that I don&#39;t know what it does</li></ul></div><div class="sub-section"><h3>Supercollider Live Code</h3><code> //Chaos engine hum ({ SinOsc.ar(10 + (50 * SinOsc.kr([50, 51], 0, SinOsc.kr(101, Saw.kr(0.12345, 678, 9), 0.2, 0.8), Pulse.kr([25, 25.5], 0.25, 0.125, -0.25))), 0, 0.5, 0); }.play();) </code></div></div>',1),Re=[Le];function Ae(e,n,t,a,l,i){return(0,o.wg)(),(0,o.iD)("div",Te,Re)}var Ee={name:"PageWarez"};const Fe=(0,y.Z)(Ee,[["render",Ae]]);var We=Fe;const He={class:"interior"},je=(0,o._)("div",{class:"wrap"},[(0,o._)("div",{class:"sub-section"},[(0,o._)("h2",null,"Etc")])],-1),Ve=[je];function ze(e,n,t,a,l,i){return(0,o.wg)(),(0,o.iD)("div",He,Ve)}var Ne={name:"PageEtc"};const Be=(0,y.Z)(Ne,[["render",ze]]);var Ge=Be;const Oe={class:"interior"},Ue=(0,o._)("div",{class:"wrap"},[(0,o._)("div",{class:"sub-section"},[(0,o._)("h2",null,"404 Not Found")])],-1),qe=[Ue];function Ze(e,n,t,a,l,i){return(0,o.wg)(),(0,o.iD)("div",Oe,qe)}var Je={name:"PageNotFound"};const Ke=(0,y.Z)(Je,[["render",Ze]]);var Xe=Ke;const Qe=[{path:"/",name:"page-main",component:q},{path:"/resume",name:"page-resume",component:ke},{path:"/music",name:"page-music",component:Pe},{path:"/warez",name:"page-warez",component:We},{path:"/etc",name:"page-etc",component:Ge},{path:"/:catchAll(.*)",name:"page-not-found",component:Xe}],Ye=(0,V.p7)({hashbang:!1,history:(0,V.PO)(),linkActiveClass:"active",root:"/",base:"/",routes:Qe});var en=Ye,nn=t(65),tn={state:{total:0},mutations:{updateTotal(e,n){e.total=Object.freeze(n)}},getters:{getTotal:e=>e.total}};const an=(0,nn.MT)({modules:{generic:tn}});var on=an,ln=t(9922);const sn=(0,a.ri)(j);sn.use(en).use(on).use(ln.Z).mount("#app")}},n={};function t(a){var o=n[a];if(void 0!==o)return o.exports;var l=n[a]={exports:{}};return e[a](l,l.exports,t),l.exports}t.m=e,function(){var e=[];t.O=function(n,a,o,l){if(!a){var i=1/0;for(c=0;c<e.length;c++){a=e[c][0],o=e[c][1],l=e[c][2];for(var s=!0,r=0;r<a.length;r++)(!1&l||i>=l)&&Object.keys(t.O).every((function(e){return t.O[e](a[r])}))?a.splice(r--,1):(s=!1,l<i&&(i=l));if(s){e.splice(c--,1);var u=o();void 0!==u&&(n=u)}}return n}l=l||0;for(var c=e.length;c>0&&e[c-1][2]>l;c--)e[c]=e[c-1];e[c]=[a,o,l]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){t.p="/"}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,a){var o,l,i=a[0],s=a[1],r=a[2],u=0;if(i.some((function(n){return 0!==e[n]}))){for(o in s)t.o(s,o)&&(t.m[o]=s[o]);if(r)var c=r(t)}for(n&&n(a);u<i.length;u++)l=i[u],t.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return t.O(c)},a=self["webpackChunkdemonlord_vue"]=self["webpackChunkdemonlord_vue"]||[];a.forEach(n.bind(null,0)),a.push=n.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(5881)}));a=t.O(a)})();