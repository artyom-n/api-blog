(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{20:function(e,t,c){},37:function(e,t,c){},64:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(1),a=c.n(s),o=c(29),i=c.n(o),r=(c(37),c(11)),d=c(14),j=(c(20),c(8)),l=(c(38),function(e){return Object(n.jsx)("section",{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row center-xs",children:Object(n.jsx)("div",{className:"col-xs-4",children:e.posts.map((function(e){return Object(n.jsx)(j.b,{to:"./posts/"+e.id,className:"post-href",children:Object(n.jsx)("div",{className:"post-card",children:Object(n.jsx)("h3",{children:e.title})},e.id)})}))})})})})}),b=function(){return Object(n.jsx)("section",{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row center-xs",children:Object(n.jsxs)("div",{className:"col-xs-6",children:[Object(n.jsx)("h3",{className:"about",children:"About"}),Object(n.jsxs)("div",{className:"about-wrapper",children:[Object(n.jsx)("div",{className:"about-image-wrapper",children:Object(n.jsx)("img",{src:"https://picsum.photos/id/521/160/230",alt:"",className:"about-image"})}),Object(n.jsx)("p",{className:"about-text",children:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy, fact that a reader will be distracted by the readable content of a page when looking at its layout."})]})]})})})})},h=c(10),m=c(2),u=function(e){var t=Object(m.f)(),c=parseInt(Object(m.g)().id),a=Object(s.useState)({loaded:e.posts.length>0,post:e.posts.length>0?e.posts.find((function(e){return e.id===c})):void 0,preComment:""}),o=Object(d.a)(a,2),i=o[0],l=o[1],b=function(e){return l(Object(h.a)(Object(h.a)({},i),{},{loaded:!0,post:e.find((function(e){return e.id===c}))}))};if(i.loaded||f().then(b).catch(console.error),i.loaded&&!i.post)return t.push("/404"),Object(n.jsx)(n.Fragment,{});var u=["Nice post!"],p=e.comments.find((function(e){return e.postId===c}));return p&&(u=[].concat(Object(r.a)(p.comments),Object(r.a)(u))),Object(n.jsx)("section",{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row center-xs",children:i.loaded?Object(n.jsxs)("div",{className:"col-xs-3",children:[Object(n.jsx)(j.b,{to:"/",children:"Back"}),Object(n.jsxs)("div",{className:"post-card",children:[Object(n.jsx)("h3",{children:i.post.title}),Object(n.jsx)("p",{className:"post-card__content",children:i.post.body})]}),Object(n.jsxs)("div",{className:"add-comment-wrapper",children:[Object(n.jsx)("input",{type:"text",value:i.preComment,onChange:function(e){return l(Object(h.a)(Object(h.a)({},i),{},{preComment:e.target.value}))}}),Object(n.jsx)("button",{onClick:function(){e.onAddComment(c,i.preComment),l(Object(h.a)(Object(h.a)({},i),{},{preComment:""}))},children:"Add comment"}),u.map((function(e){return Object(n.jsx)("p",{className:"post-comment",children:"Anonymous: "+e},e)}))]})]}):Object(n.jsx)("h2",{children:"Loading.."})})})})},p=function(){return Object(n.jsx)("section",{children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"row center-xs",children:Object(n.jsx)("div",{className:"col-xs-3",children:Object(n.jsx)("h3",{children:"Page Not Found 404"})})})})})},O=c(31),x=c.n(O),f=function(){return x.a.get("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.data}))},g=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],o=Object(s.useState)([]),i=Object(d.a)(o,2),h=i[0],O=i[1];Object(s.useEffect)((function(){0===c.length&&f().then(a)}),[c]);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("br",{}),Object(n.jsxs)(j.a,{children:["\xa0 \xa0 \xa0 \xa0",Object(n.jsx)(j.b,{to:"/",children:"Home"}),"\xa0 \xa0 \xa0",Object(n.jsx)(j.b,{to:"/about",children:"About"}),Object(n.jsxs)(m.c,{children:[Object(n.jsx)(m.a,{exact:!0,path:"/",children:Object(n.jsx)(l,{posts:c})}),Object(n.jsx)(m.a,{exact:!0,path:"/about",children:Object(n.jsx)(b,{})}),Object(n.jsx)(m.a,{path:"/posts/:id",children:Object(n.jsx)(u,{posts:c,comments:h,onAddComment:function(e,t){var c=h.find((function(t){return t.postId===e}));c?c.comments=[t].concat(Object(r.a)(c.comments)):O([].concat(Object(r.a)(h),[{postId:e,comments:[t]}]))}})}),Object(n.jsx)(m.a,{path:"/404",children:Object(n.jsx)(p,{})})]})]})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,65)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,o=t.getTTFB;c(e),n(e),s(e),a(e),o(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(g,{})}),document.getElementById("root")),v()}},[[64,1,2]]]);
//# sourceMappingURL=main.5223481b.chunk.js.map