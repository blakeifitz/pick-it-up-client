(this["webpackJsonppick-it-up--client"]=this["webpackJsonppick-it-up--client"]||[]).push([[0],{44:function(e,t,s){},50:function(e,t,s){},51:function(e,t,s){},52:function(e,t,s){},53:function(e,t,s){},54:function(e,t,s){},73:function(e,t,s){},74:function(e,t){},75:function(e,t,s){},76:function(e,t,s){"use strict";s.r(t);var r=s(2),i=s.n(r),n=s(18),o=s.n(n),c=s(5),a="https://secret-beach-99804.herokuapp.com/api",A="client-auth-token",l=s(35);let h;const d={saveAuthToken(e){window.localStorage.setItem(A,e)},getAuthToken:()=>window.localStorage.getItem(A),clearAuthToken(){window.localStorage.removeItem(A)},hasAuthToken:()=>!!d.getAuthToken(),parseJwt:e=>Object(l.a)(e),parseAuthToken(){const e=d.getAuthToken();return e?d.parseJwt(e):void 0},_getMsUntilExpiry:e=>1e3*e.exp-Date.now(),queueCallbackBeforeExpiry(e){const t=d._getMsUntilExpiry(d.parseAuthToken());h=setTimeout(e,t-1e4)},clearCallbackBeforeExpiry(){clearTimeout(h)}};var j=d;var u={postUser:e=>fetch("".concat(a,"/user"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}).then((e=>e.ok?e.json():e.json().then((e=>Promise.reject(e))))),postLogin:({username:e,password:t})=>fetch("".concat(a,"/auth/token"),{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({username:e,password:t})}).then((e=>e.ok?e.json():e.json().then((e=>Promise.reject(e))))),refreshToken:()=>fetch("".concat(a,"/auth/token"),{method:"PUT",headers:{authorization:"Bearer ".concat(j.getAuthToken())}}).then((e=>e.ok?e.json():e.json().then((e=>Promise.reject(e)))))};let p,g=null,m=["mousedown","mousemove","keypress","scroll","touchstart"];const b={setIdleCallback(e){g=e},resetIdleTimer(e){clearTimeout(p),p=setTimeout(g,6e6)},regiserIdleTimerResets(){m.forEach((e=>document.addEventListener(e,b.resetIdleTimer,!0)))},unRegisterIdleResets(){clearTimeout(p),m.forEach((e=>document.removeEventListener(e,b.resetIdleTimer,!0)))}};var x=b,O=s(1);const f=i.a.createContext({user:{},error:null,setError:()=>{},clearError:()=>{},setUser:()=>{},processLogin:()=>{},processLogout:()=>{}});var v=f;class I extends r.Component{constructor(e){super(e),this.setError=e=>{console.error(e),this.setState({error:e})},this.clearError=()=>{this.setState({error:null})},this.setUser=e=>{this.setState({user:e})},this.processLogin=e=>{j.saveAuthToken(e);const t=j.parseAuthToken();this.setUser({id:t.user_id,name:t.name,username:t.sub}),x.regiserIdleTimerResets(),j.queueCallbackBeforeExpiry((()=>{this.fetchRefreshToken()}))},this.processLogout=()=>{j.clearAuthToken(),j.clearCallbackBeforeExpiry(),x.unRegisterIdleResets(),this.setUser({})},this.logoutBecauseIdle=()=>{j.clearAuthToken(),j.clearCallbackBeforeExpiry(),x.unRegisterIdleResets(),this.setUser({idle:!0})},this.fetchRefreshToken=()=>{u.refreshToken().then((e=>{j.saveAuthToken(e.authToken),j.queueCallbackBeforeExpiry((()=>{this.fetchRefreshToken()}))})).catch((e=>{this.setError(e)}))};const t={user:{},error:null},s=j.parseAuthToken();s&&(t.user={id:s.user_id,name:s.name,username:s.sub}),this.state=t,x.setIdleCallback(this.logoutBecauseIdle)}componentDidMount(){j.hasAuthToken()&&(x.regiserIdleTimerResets(),j.queueCallbackBeforeExpiry((()=>{this.fetchRefreshToken()})))}componentWillUnmount(){x.unRegisterIdleResets(),j.clearCallbackBeforeExpiry()}render(){const e={user:this.state.user,error:this.state.error,setError:this.setError,clearError:this.clearError,setUser:this.setUser,processLogin:this.processLogin,processLogout:this.processLogout};return Object(O.jsx)(f.Provider,{value:e,children:this.props.children})}}var B=s(4);s(44);class w extends r.Component{constructor(...e){super(...e),this.handleLogoutClick=()=>{this.context.processLogout()}}renderLogoutLink(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("span",{children:this.context.user.name}),Object(O.jsx)("nav",{children:Object(O.jsx)(c.b,{onClick:this.handleLogoutClick,to:"/login",children:"Logout"})})]})}renderLoginLink(){return Object(O.jsxs)("nav",{children:[Object(O.jsx)(c.b,{to:"/login",children:"Login"})," ",Object(O.jsx)(c.b,{to:"/register",children:"Sign up"})]})}render(){return Object(O.jsxs)("header",{className:"header",children:[Object(O.jsx)("h1",{children:Object(O.jsxs)(c.b,{to:"/finds",children:[Object(O.jsx)("img",{src:"data:image/png;base64,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",alt:"animated-shovel"})," Pick-It-Up"]})}),j.hasAuthToken()?this.renderLogoutLink():this.renderLoginLink()]})}}w.contextType=v;var P=w,D=s(3),C=s(13);function E(e){let t=e.component,s=Object(C.a)(e,["component"]);const r=t;return Object(O.jsx)(B.b,Object(D.a)(Object(D.a)({},s),{},{render:e=>Object(O.jsx)(v.Consumer,{children:t=>t.user.id?Object(O.jsx)(r,Object(D.a)({},e)):Object(O.jsx)(B.a,{to:{pathname:t.user.idle?"/login":"/register",state:{from:e.location}}})})}))}function y(e){let t=e.component,s=Object(C.a)(e,["component"]);const r=t;return Object(O.jsx)(B.b,Object(D.a)(Object(D.a)({},s),{},{render:e=>Object(O.jsx)(v.Consumer,{children:t=>t.user.id?Object(O.jsx)(B.a,{to:"/"}):Object(O.jsx)(r,Object(D.a)({},e))})}))}s(50);class N extends r.Component{constructor(...e){super(...e),this.state={error:null},this.firstInput=i.a.createRef(),this.handleClickCancel=()=>{this.props.history.push("/login")},this.handleSubmit=e=>{e.preventDefault();const t=e.target,s=t.name,r=t.username,i=t.password,n=t.confirmPassword;if(i.value!==n.value)return this.setState({error:"Passwords do not match"});u.postUser({name:s.value,username:r.value,password:i.value}).then((e=>{s.value="",r.value="",i.value="",this.props.onRegistrationSuccess()})).catch((e=>{this.setState({error:e.error})}))}}componentDidMount(){this.firstInput.current.focus()}render(){const e=this.state.error;return Object(O.jsx)("section",{id:"registration",className:"registration",children:Object(O.jsx)("div",{className:"registration-content",children:Object(O.jsxs)("form",{onSubmit:this.handleSubmit,className:"singup-form","aria-label":"signup-form",children:[" ",Object(O.jsx)("span",{onClick:this.handleClickCancel,className:"close",children:"\xd7"}),Object(O.jsx)("h2",{children:"Create an Account"}),Object(O.jsx)("div",{role:"alert",children:e&&Object(O.jsx)("p",{children:e})}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"registration-name-input",children:"Enter your name:"}),Object(O.jsx)("input",{ref:this.firstInput,id:"registration-name-input",name:"name",type:"text",placeholder:"Full Name",required:!0})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"registration-username-input",children:"Choose a username:"}),Object(O.jsx)("input",{id:"registration-username-input",name:"username",type:"text",placeholder:"Username",required:!0})]}),Object(O.jsxs)("div",{className:"flex-wrap",children:[Object(O.jsx)("label",{htmlFor:"new-password",children:"Password:"}),Object(O.jsx)("input",{id:"new-password",type:"password",placeholder:"New Password",name:"password"}),Object(O.jsx)("label",{htmlFor:"confirm-password",id:"confirm",children:"Confirm Password:"}),Object(O.jsx)("input",{id:"confirm-password",type:"password",placeholder:"Confirm Password",name:"confirmPassword"})]}),Object(O.jsxs)("footer",{children:[Object(O.jsx)("button",{type:"submit",children:"Sign up"})," ",Object(O.jsx)(c.b,{className:"small-message",to:"/login",children:"Already have an account?"})]})]})})})}}N.defaultProps={history:{push:()=>{}}},N.defaultProps={onRegistrationSuccess:()=>{}};var k=N;class H extends r.Component{constructor(...e){super(...e),this.handleRegistrationSuccess=()=>{this.props.history.push("/login")}}render(){return Object(O.jsx)("section",{children:Object(O.jsx)(k,{history:this.props.history,onRegistrationSuccess:this.handleRegistrationSuccess})})}}H.defaultProps={history:{push:()=>{}}};var Q=H;class L extends r.Component{constructor(...e){super(...e),this.state={error:null},this.firstInput=i.a.createRef(),this.handleSubmit=e=>{e.preventDefault();const t=e.target,s=t.username,r=t.password;this.setState({error:null}),u.postLogin({username:s.value,password:r.value}).then((e=>{s.value="",r.value="",this.context.processLogin(e.authToken),this.props.onLoginSuccess()})).catch((e=>{this.setState({error:e.error})}))}}componentDidMount(){this.firstInput.current&&this.firstInput.current.focus()}render(){const e=this.state.error;return Object(O.jsxs)("form",{onSubmit:this.handleSubmit,className:"login-form",children:[Object(O.jsx)("h3",{children:"Get Started"}),Object(O.jsxs)("p",{children:["I like to metal detect, arrowhead hunt, mushroom hunt, and fossil hunt. Over the years I have collected lots of items. Over time I forget exactly where I found things or what stratigraphic age they are. With this app a user can save details about items, the location they were found, the category of item they are, and an image. To get started, register by pressing ",Object(O.jsx)("i",{children:"Sign Up"}),". To just check it out use my demo account."]}),Object(O.jsx)("div",{role:"alert",children:e&&Object(O.jsx)("p",{children:e})}),Object(O.jsxs)("div",{className:"login-inputs",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"login-username-input",children:"Username:"}),Object(O.jsx)("input",{ref:this.firstInput,id:"login-username-input",name:"username",type:"text",required:!0})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"login-password-input",children:"Password:"}),Object(O.jsx)("input",{id:"login-password-input",name:"password",type:"password",required:!0})]})]}),Object(O.jsx)("button",{id:"login-submit",type:"submit",children:"Login"})]})}}L.defaultProps={onLoginSuccess:()=>{}},L.contextType=v;var M=L;class z extends r.Component{constructor(...e){super(...e),this.handleLoginSuccess=()=>{const e=this.props,t=e.location,s=e.history,r=(t.state||{}).from||"/finds";s.push(r)}}render(){return Object(O.jsxs)("section",{className:"login-content",children:[Object(O.jsx)("h2",{children:"Login"}),Object(O.jsxs)("span",{children:[Object(O.jsx)("i",{children:"Demo Account:"})," Username: admin | Password: pass"]}),Object(O.jsx)(M,{onLoginSuccess:this.handleLoginSuccess})]})}}z.defaultProps={location:{},history:{push:()=>{}}};var S=z;const T=e=>e.toLowerCase().split(" ").map((function(e){return e.replace(e[0],e[0].toUpperCase())})).join(" ");s(51);class F extends r.Component{render(){return Object(O.jsxs)("div",{className:"category-nav",children:[Object(O.jsx)("h3",{children:"Your Categories"}),Object(O.jsx)("ul",{className:"category-list",children:this.props.categories.map(((e,t)=>Object(O.jsx)("li",{children:Object(O.jsx)(c.c,{className:"category-link",to:"/finds/".concat(e.title),children:T(e.title)})},t)))}),Object(O.jsx)(c.b,{to:"/finds/category/new",children:Object(O.jsx)("button",{id:"category-add-button",className:"add-button",children:"+Add"})})]})}}F.defaultProps={categories:[{title:"Loading..."}]};class Y extends r.Component{render(){return Object(O.jsxs)("section",{className:"item-page-section",children:[Object(O.jsx)("h2",{children:T(this.props.item.name)}),Object(O.jsxs)("p",{children:["Description: ",this.props.item.description]}),Object(O.jsx)("button",{className:"item-page-back",onClick:()=>this.props.history.goBack(),children:"Back"})]})}}Y.defaultProps={item:{name:"loading...",description:""}};var G=Y,R=(s(52),s(24));class U extends i.a.Component{constructor(...e){super(...e),this.handleClickDelete=e=>{e.preventDefault();const t=this.props.item.id;fetch("".concat(a,"/item/").concat(t),{method:"DELETE",headers:{"content-type":"application/json",authorization:"bearer ".concat(j.getAuthToken())}}).then((e=>{if(!e.ok)return e.json().then((e=>Promise.reject(e)))})).then((()=>{this.props.handleDeleteItem(t)})).catch((e=>{console.error({error:e})}))}}render(){return Object(O.jsxs)("div",{className:"item",children:[Object(O.jsxs)(c.b,{to:"/finds/details/".concat(this.props.item.id),children:[Object(O.jsx)("h2",{className:"item-title",children:T(this.props.item.name)}),Object(O.jsx)("img",{className:"item-img",alt:"user item",src:this.props.item.img_src})]}),Object(O.jsxs)("button",{className:"item-delete",type:"button",onClick:this.handleClickDelete,children:["Remove ",Object(O.jsx)(R.a,{})]})," ",Object(O.jsx)("button",{className:"mobile-remove-button",onClick:this.handleClickDelete,children:Object(O.jsx)(R.a,{})})]})}}U.default={handleDeleteItem:()=>{}},U.defaultProps={item:{id:"",name:"Loading..."}};class X extends r.Component{constructor(...e){super(...e),this.handleClickDelete=e=>{e.preventDefault();const t=this.props.match.params.category;fetch("".concat(a,"/category/").concat(t),{method:"DELETE",headers:{"content-type":"application/json",authorization:"bearer ".concat(j.getAuthToken())}}).then((e=>{if(!e.ok)return e.json().then((e=>Promise.reject(e)))})).then((()=>{this.props.history.push("/finds")})).catch((e=>{console.error({error:e})}))}}render(){let e=this.props.match.params.category;return Object(O.jsxs)("div",{children:[e?Object(O.jsx)("h2",{children:T(e)}):Object(O.jsx)("h2",{children:"All Items"}),Object(O.jsx)("ul",{children:this.props.items.map((e=>Object(O.jsx)("div",{children:Object(O.jsx)(U,{handleDeleteItem:this.props.handleDeleteItem,item:e})},e.id)))}),e&&Object(O.jsxs)("div",{className:"list-button-group",children:[Object(O.jsx)(c.b,{to:"".concat(e,"/new"),children:Object(O.jsx)("button",{className:"add-button",children:"+Add Item"})}),Object(O.jsx)("button",{onClick:e=>this.handleClickDelete(e),children:"Delete Category"})]})]})}}X.defaultProps={match:{params:{}},items:[{id:""}]};class q extends r.Component{constructor(...e){super(...e),this.state={error:null},this.handleSubmit=e=>{e.preventDefault();const t={title:e.target["category-title-input"].value};fetch("".concat(a,"/category"),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer ".concat(j.getAuthToken())},body:JSON.stringify(t)}).then((e=>e.ok?e.json():e.json().then((e=>Promise.reject(e))))).then((e=>{this.props.history.goBack()})).catch((e=>{this.setState({error:e.error})}))}}render(){const e=this.state.error;return Object(O.jsxs)("section",{className:"add-category",children:[Object(O.jsx)("h2",{children:"Create a category"}),Object(O.jsxs)("form",{className:"form-content",onSubmit:this.handleSubmit,children:[Object(O.jsx)("div",{role:"alert",children:e&&Object(O.jsx)("p",{children:e})}),Object(O.jsxs)("div",{className:"field",children:[Object(O.jsx)("label",{htmlFor:"category-title-input",children:"Category Title:"}),Object(O.jsx)("input",{type:"text",id:"category-title-input"})]}),Object(O.jsx)("div",{className:"buttons",children:Object(O.jsx)("button",{id:"submit-form",type:"submit",children:"Add category"})})]})]})}}q.default={history:{push:()=>{}}};var J=q,K=s(25);s(53);class V extends i.a.Component{constructor(...e){super(...e),this.state={current:0,SliderData:[]},this.nextSlide=()=>{this.state.current===this.props.sliderData.length-1?this.setState({current:0}):this.setState({current:this.state.current+1})},this.prevSlide=()=>{0===this.state.current?this.setState({current:this.props.sliderData.length-1}):this.setState({current:this.state.current-1})}}render(){return this.props.sliderData?Object(O.jsxs)("div",{className:"slider",children:[Object(O.jsxs)("div",{className:"arrows",children:[Object(O.jsx)(K.a,{className:"left-arrow",onClick:()=>this.prevSlide()}),Object(O.jsx)(K.b,{className:"right-arrow",onClick:()=>this.nextSlide()})]}),this.props.sliderData.map(((e,t)=>Object(O.jsx)("div",{className:t===this.state.current?"slide active":"slide",children:t===this.state.current&&Object(O.jsx)("img",{className:"slider-image",src:e,alt:"your pictures"})},t)))]}):null}}var Z=V,W=(s(54),s(12)),_=s(80),$=s(81);function ee(e){const t=Object(r.useState)(e.map.getCenter()),s=Object(W.a)(t,2),i=s[0],n=s[1],o=Object(r.useCallback)((t=>{n(t.latlng),e.setLocation(e.map.getCenter())}),[e.map]);return Object(r.useEffect)((()=>{e.map.on("click",o)})),Object(O.jsxs)("p",{children:["latitude: ",i.lat.toFixed(3),", longitude: ",i.lng.toFixed(3)," "]})}var te=s(78),se=s(79);function re(){const e=Object(r.useState)(null),t=Object(W.a)(e,2),s=t[0],i=t[1],n=Object(te.a)({click(e){i(e.latlng),n.flyTo(e.latlng,n.getZoom())}});return null===s?null:Object(O.jsx)(se.a,{position:s})}const ie=[39.479,-84.058];function ne({setLocation:e}){const t=Object(r.useState)(null),s=Object(W.a)(t,2),i=s[0],n=s[1],o=Object(r.useMemo)((()=>Object(O.jsxs)(_.a,{center:ie,zoom:13,scrollWheelZoom:!0,whenCreated:n,children:[Object(O.jsx)($.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(O.jsx)(re,{})]})),[]);return Object(O.jsxs)("div",{children:[o,i?Object(O.jsxs)("div",{children:[" ",Object(O.jsx)(ee,{setLocation:e,map:i})]}):null]})}class oe extends r.Component{constructor(...e){super(...e),this.state={addNew:!1,addLocationOnly:!1,locationId:null,locations:[],location:{lat:39.4622310885898,lng:-84.08650964498521},error:null}}handleSubmit(e){e.preventDefault(e);let t="(".concat(this.state.location.lat.toFixed(5),", ").concat(this.state.location.lng.toFixed(5),")");const s={name:e.target["location-name-input"].value,coordinates:t,description:e.target["location-description-input"].value};fetch("".concat(a,"/location"),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer ".concat(j.getAuthToken())},body:JSON.stringify(s)}).then((e=>e.ok?e.json():e.json().then((e=>Promise.reject(e))))).then((e=>{this.props.setLocationId(e.id)})).catch((e=>{this.setState({error:e.error})}))}setLocation(e){this.setState({location:e})}handleSave(e){e.preventDefault(e);let t=e.target["location-select"].value;this.props.setLocationId(t)}render(){let e=this.props.locations;const t=this.state.error;return Object(O.jsxs)("div",{className:"form-content",children:[Object(O.jsx)("h2",{children:" Location"}),!1===this.state.addNew?Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:"category",children:"What is the location?"}),Object(O.jsxs)("form",{className:"location-form",onSubmit:e=>this.handleSave(e),children:[Object(O.jsx)("div",{role:"alert",children:t&&Object(O.jsx)("p",{children:t})}),Object(O.jsx)("select",{id:"location-select",children:e.map(((e,t)=>Object(O.jsx)("option",{value:e.id,children:e.name},t)))}),Object(O.jsx)("button",{type:"submit",children:"Choose"})]}),Object(O.jsx)("p",{children:"or"}),Object(O.jsx)("button",{onClick:e=>this.setState({addNew:!0}),children:"Add New Location"})]}):Object(O.jsxs)("form",{onSubmit:e=>this.handleSubmit(e),children:[Object(O.jsx)("div",{role:"alert",children:t&&Object(O.jsx)("p",{children:t})}),Object(O.jsx)("label",{htmlFor:"location-name-input",children:"Name: "}),Object(O.jsx)("input",{type:"text",id:"location-name-input",required:!0}),Object(O.jsxs)("div",{className:"field",children:[Object(O.jsx)("label",{htmlFor:"location-description-input",children:"Description: "}),Object(O.jsx)("textarea",{id:"location-description-input"})]}),Object(O.jsx)(ne,{setLocation:e=>{this.setLocation(e)}}),Object(O.jsx)("button",{id:"submit-form",type:"submit",children:"Submit"})]}),Object(O.jsx)("br",{})]})}}oe.default={history:{push:()=>{}},locations:[]},oe.defaultProps={locations:["loading..."]};var ce=oe;const ae=e=>e.items.map(((t,s)=>{let r="item-".concat(s),i="desc-".concat(s),n="img-".concat(s);return Object(O.jsxs)("div",{children:[Object(O.jsx)("label",{htmlFor:r,children:"".concat(s+1,". Name: ")}),Object(O.jsx)("input",{required:!0,type:"text",name:r,"data-id":s,id:r,defaultValue:e.items[s].name,className:"name"}),Object(O.jsx)("label",{htmlFor:i,children:"Description:"}),Object(O.jsx)("input",{required:!0,type:"text",name:i,"data-id":s,id:i,defaultValue:e.items[s].desc,className:"desc"}),Object(O.jsx)("label",{htmlFor:n,children:"Choose an image for this item"}),Object(O.jsx)("input",{type:"file",name:n,"data-id":s,id:n,defaultValue:"",className:"img"})]},s)}));ae.defaultProps={items:[]};var Ae=ae,le=s(37),he=s.n(le);class de extends i.a.Component{constructor(...e){super(...e),this.state={locationId:null,items:[{name:"",desc:"",img:""}],error:null},this.uploadHandler=e=>{const t=new FormData;t.append("file",e,e.name),he.a.post("".concat(a,"/image"),t)},this.handleChange=e=>{if(["name","desc"].includes(e.target.className)){let t=[...this.state.items];t[e.target.dataset.id][e.target.className]=e.target.value,this.setState({items:t})}else if(["img"].includes(e.target.className)){[...this.state.items][e.target.dataset.id][e.target.className]=e.target.value,this.uploadHandler(e.target.files[0])}else this.setState({[e.target.name]:e.target.value})},this.addItem=e=>{e.preventDefault(e),this.setState((e=>({items:[...e.items,{name:"",desc:""}]})))},this.removeItem=e=>{e.preventDefault(e),this.state.items.pop(),this.setState((e=>({items:[...e.items]})))}}setLocationId(e){this.setState({locationId:e})}handleSubmit(e){e.preventDefault(e);const t=this.props.match.params.category;this.state.items.map((e=>{""!==e.img&&e.img?e.img.includes("fakepath")&&(e.img="https://firebasestorage.googleapis.com/v0/b/pick-it-up-897da.appspot.com/o/images%2F"+e.img.replace("C:\\fakepath\\","")+"?alt=media"):e.img="https://firebasestorage.googleapis.com/v0/b/pick-it-up-897da.appspot.com/o/images%2Fno-image.png?alt=media";const s={name:e.name,img_src:e.img,description:e.desc,category:t,location:parseFloat(this.state.locationId)};fetch("".concat(a,"/item"),{method:"POST",headers:{"content-type":"application/json",authorization:"bearer ".concat(j.getAuthToken())},body:JSON.stringify(s)}).then((e=>e.ok?e.json():e.json().then((e=>Promise.reject(e))))).then((e=>{this.props.history.push("/finds/".concat(t))})).catch((e=>{this.setState({error:e.error})}))}))}render(){let e=this.state.items;const t=this.state.error;return Object(O.jsx)("div",{children:null===this.state.locationId?Object(O.jsx)(ce,{history:this.props.history,locations:this.props.locations,setLocationId:e=>{this.setLocationId(e)}}):Object(O.jsxs)("div",{children:[" ",Object(O.jsxs)("form",{className:"form-content",onChange:this.handleChange,children:[Object(O.jsx)("div",{role:"alert",children:t&&Object(O.jsx)("p",{children:t})}),Object(O.jsxs)("div",{className:"add-remove-input",children:[Object(O.jsx)("button",{onClick:this.addItem,children:"Add another item"}),Object(O.jsx)("button",{onClick:this.removeItem,children:"Remove last item"})]}),Object(O.jsx)(Ae,{items:e}),Object(O.jsx)("button",{id:"submit-form",onClick:e=>this.handleSubmit(e),children:"Save"})]})]})})}}de.default={match:{params:{}}};var je=de;class ue extends r.Component{render(){return Object(O.jsx)("img",{className:"item-page-img",src:this.props.item.img_src,alt:"item-image"})}}ue.defaultProps={item:{img_src:""}};var pe=ue;var ge={getAge:()=>fetch("https://macrostrat.org/api/v2/geologic_units/gmus?lat=39.479069&lng=-84.058713",{method:"GET"}).then((e=>e.ok?e.json():e.json().then((e=>Promise.reject(e))))).then((e=>({age:e.success.data[0].b_age,stratAge:e.success.data[0].containing_interval,rocktypes:e.success.data[0].rocktype})))};class me extends r.Component{constructor(...e){super(...e),this.state={age:"",stratAge:"",rocktypes:[]}}componentDidMount(){ge.getAge().then((e=>{this.setState({age:e.age,stratAge:e.stratAge,rocktypes:e.rocktypes})}))}render(){let e=((e=[],t=[])=>t.find((t=>t.id===e.location)))(this.props.item,this.props.locations);return Object(O.jsxs)("section",{className:"location-info",children:[void 0===e?Object(O.jsx)("p",{children:"loading..."}):Object(O.jsxs)("div",{children:[Object(O.jsxs)("h3",{children:["Location: ",e.name]}),Object(O.jsxs)("p",{children:["Notes: ",e.description]}),Object(O.jsxs)("p",{children:["Stratigraphic Age: ",this.state.age,"Ma, ",this.state.stratAge]}),Object(O.jsxs)("p",{children:["Type of Minerals: ",this.state.rocktypes]})]}),Object(O.jsx)("button",{className:"item-location-back",onClick:()=>this.props.history.goBack(),children:"Back"})]})}}me.defaultProps={locations:[],item:[]};var be=me;function xe(e){return Object(O.jsx)("div",{className:"back-button-component",children:Object(O.jsx)("button",{onClick:()=>e.history.goBack(),className:"add-button",children:"Back"})})}class Oe extends r.Component{constructor(...e){super(...e),this.state={error:null,locations:[],items:[],categories:[]},this.handleDeleteItem=e=>{this.setState({items:this.state.items.filter((t=>t.id!==e))})}}componentDidMount(){j.hasAuthToken()?Promise.all([fetch("".concat(a,"/location"),{method:"GET",headers:{"content-type":"application/json",authorization:"bearer ".concat(j.getAuthToken())}}),fetch("".concat(a,"/item"),{method:"GET",headers:{"content-type":"application/json",authorization:"bearer ".concat(j.getAuthToken())}}),fetch("".concat(a,"/category"),{method:"GET",headers:{"content-type":"application/json",authorization:"bearer ".concat(j.getAuthToken())}})]).then((([e,t,s])=>e.ok?t.ok?s.ok?Promise.all([e.json(),t.json(),s.json()]):s.json().then((e=>Promise.reject(e))):t.json().then((e=>Promise.reject(e))):e.json().then((e=>Promise.reject(e))))).then((([e,t,s])=>{this.setState({locations:e,items:t,categories:s})})).catch((e=>{console.error({error:e})})):this.setState({items:[],location:[],categories:[]})}renderTop(e,t,s){return Object(O.jsxs)(O.Fragment,{children:[["/finds","/finds/:category"].map((t=>Object(O.jsx)(B.b,{exact:!0,path:t,render:t=>Object(O.jsx)(F,Object(D.a)(Object(D.a)({},t),{},{categories:e}))},t))),Object(O.jsx)(B.b,{path:"/finds/details/:itemId",render:e=>Object(O.jsx)(pe,Object(D.a)({item:t},e))}),Object(O.jsx)(B.b,{path:"/finds/:category/new",render:e=>Object(O.jsx)(xe,Object(D.a)({category:s},e))})]})}renderMain(e,t,s,r){return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(B.d,{children:[Object(O.jsx)(B.b,{path:"/finds/category/new",component:J}),Object(O.jsx)(B.b,{path:"/finds/:category/new",render:e=>Object(O.jsx)(je,Object(D.a)(Object(D.a)({},e),{},{category:s,locations:r}))}),Object(O.jsx)(B.b,{path:"/finds/details/:itemId",render:t=>Object(O.jsx)(G,Object(D.a)({handleDeleteItem:e=>{this.handleDeleteItem(e)},item:e,locations:r,category:s},t))}),["/finds","/finds/:category"].map((e=>Object(O.jsx)(B.b,{exact:!0,path:e,render:e=>{const r=((e=[],t)=>t?e.filter((e=>e.category===t)):e)(t,s);return Object(O.jsx)(X,Object(D.a)(Object(D.a)({handleDeleteItem:e=>{this.handleDeleteItem(e)}},e),{},{items:r}))}},e)))]})})}renderBottom(e,t,s){return Object(O.jsxs)(O.Fragment,{children:[["/finds","/finds/:category"].map((e=>Object(O.jsx)(B.b,{exact:!0,path:e,render:e=>Object(O.jsx)(Z,Object(D.a)(Object(D.a)({},e),{},{sliderData:s}))},e))),Object(O.jsx)(B.b,{path:"/finds/details/:itemId",render:s=>Object(O.jsx)(be,Object(D.a)({item:e,locations:t},s))})]})}render(){const e=this.state,t=e.locations,s=e.categories,r=e.items,i=this.props.match.params.category,n=((e=[],t)=>e.find((e=>e.id.toString()===t)))(r,this.props.match.params.itemId),o=(e=>{let t=[];return e.map((e=>t.push(e.img_src))),t})(r);return Object(O.jsxs)("div",{className:"dashboard",children:[Object(O.jsx)("div",{className:"categories",children:this.renderTop(s,n,i)}),Object(O.jsx)("div",{className:"main-list",children:this.renderMain(n,r,i,t)}),Object(O.jsx)("div",{className:"info",children:this.renderBottom(n,t,o)})]})}}Oe.defaultProps={location:{},history:{push:()=>{}}},Oe.defaultProps={match:{params:{}}};var fe=Oe;class ve extends r.Component{render(){return Object(O.jsxs)("section",{children:[Object(O.jsx)("h2",{children:"404 - Page not found"}),Object(O.jsx)("p",{children:"Try going back to your previous page."})]})}}var Ie=ve;s(73);class Be extends r.Component{constructor(...e){super(...e),this.state={hasError:!1}}static getDerivedStateFromError(e){return console.error(e),{hasError:!0}}render(){const e=this.state.hasError;return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(P,{}),Object(O.jsxs)("main",{children:[e&&Object(O.jsx)("p",{children:"There was an error! Oh no!"}),Object(O.jsxs)(B.d,{children:[["/finds","/finds/:category/new","/finds/category/new","/finds/:category","/finds/details/:itemId"].map((e=>Object(O.jsx)(E,{exact:!0,path:e,component:fe},e))),Object(O.jsx)(E,{exact:!0,path:"/finds/:category/",component:fe}),Object(O.jsx)(y,{path:"/register",component:Q}),["/","login"].map((e=>Object(O.jsx)(y,{path:e,component:S},e))),Object(O.jsx)(B.b,{component:Ie})]})]})]})}}s(74),s(75);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(Object(O.jsx)(c.a,{children:Object(O.jsx)(I,{children:Object(O.jsx)(Be,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((e=>{e.unregister()}))}},[[76,1,2]]]);
//# sourceMappingURL=main.efb5db06.chunk.js.map