import{C as X,_ as ee,o as te,c as se,b as N,u as ne,p as re,h as ae}from"./index-CvYJ8IeR.js";const ie={data:{name:"Anjasmara",image:"assets/image/user_1.png",position:"Frontend",member_since:"1611979250",location:"Kantor sahid",check_in:"1717030800",start_working:"1717030800",current_working:"1717041650",check_out:""}},oe={data:[{name:"Alice",day:"Senin",date:"30 Mei 2022",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer viewed Lorem Ipsum is simply dummy text of the printing and",image:"src/assets/image/user_1.png"},{name:"Bob",day:"Senin",date:"30 Mei 2022",description:"Fixed bugs in the authentication module.",image:"src/assets/image/user_2.png"},{name:"Charlie",day:"Senin",date:"30 Mei 2022",description:"Reviewed pull requests and merged into main branch.",image:"src/assets/image/user_3.png"},{name:"Edward",day:"Senin",date:"30 Mei 2022",description:"Set up the CI/CD pipeline for automated testing.",image:"src/assets/image/user_4.png"},{name:"Fiona",day:"Senin",date:"30 Mei 2022",description:"Conducted user testing and gathered feedback.",image:"src/assets/image/user_5.png"}]},ue={data:[{name:"Alice",status:"Active",position:"Software Engineer",status_work:"wfh",image:"src/assets/image/user_1.png"},{name:"Bob",status:"Active",position:"Product Manager",status_work:"wfh",image:"src/assets/image/user_2.png"},{name:"Charlie",status:"Active",position:"Designer",status_work:"wfh",image:"src/assets/image/user_3.png"},{name:"Diana",status:"Active",position:"Frontend Developer",status_work:"wfh",image:"src/assets/image/user_4.png"},{name:"Edward",status:"Active",position:"Backend Developer",status_work:"wfh",image:"src/assets/image/user_5.png"},{name:"Fiona",status:"Active",position:"QA Engineer",status_work:"wfh",image:"src/assets/image/user_1.png"},{name:"George",status:"Active",position:"DevOps Engineer",status_work:"wfh",image:"src/assets/image/user_2.png"},{name:"Helen",status:"Active",position:"Project Manager",status_work:"wfh",image:"src/assets/image/user_3.png"},{name:"Ian",status:"Active",position:"Business Analyst",status_work:"wfh",image:"src/assets/image/user_4.png"},{name:"Jasmin",status:"Active",position:"UX Researcher",status_work:"wfh",image:"src/assets/image/user_5.png"},{name:"Kyle",status:"Active",position:"Data Scientist",status_work:"wfh",image:"src/assets/image/user_1.png"},{name:"Laura",status:"Active",position:"Marketing Specialist",status_work:"wfh",image:"src/assets/image/user_2.png"},{name:"Michael",status:"Active",position:"Sales Manager",status_work:"wfh",image:"src/assets/image/user_3.png"},{name:"Natalie",status:"Active",position:"HR Specialist",status_work:"wfh",image:"src/assets/image/user_4.png"},{name:"Oliver ",status:"Active",position:"Financial Analyst",status_work:"wfh",image:"src/assets/image/user_5.png"},{name:"Paula ",status:"Active",position:"Customer Support",status_work:"wfh",image:"src/assets/image/user_1.png"},{name:"Quentin ",status:"Active",position:"Content Writer",status_work:"wfh",image:"src/assets/image/user_2.png"},{name:"Rachel ",status:"Active",position:"Office Manager",status_work:"wfh",image:"src/assets/image/user_1.png"},{name:"Steve ",status:"Active",position:"Operations Manager",status_work:"wfh",image:"src/assets/image/user_3.png"},{name:"Tony ",status:"Active",position:"Chief Technology Officer",status_work:"wfh",image:"src/assets/image/user_5.png"}]},ve=X("dashboard",{state:()=>({user:ie,news:oe,personOnline:ue,loading:!1}),actions:{simulateLoading(){this.loading=!0,setTimeout(()=>{this.loading=!1},700)}},getters:{getterPersonOnline(o){var w;return((w=o.personOnline.data)==null?void 0:w.length)>=10?o.personOnline.data.slice(0,11):o.personOnline.data}}});var ce=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function de(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Z={exports:{}};(function(o,m){(function(w,S){o.exports=S()})(ce,function(){var w=1e3,S=6e4,U=36e5,B="millisecond",O="second",A="minute",H="hour",v="day",I="week",_="month",z="quarter",y="year",T="date",P="Invalid Date",Q=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,q=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,G={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(r){var s=["th","st","nd","rd"],e=r%100;return"["+r+(s[(e-20)%10]||s[e]||s[0])+"]"}},E=function(r,s,e){var n=String(r);return!n||n.length>=s?r:""+Array(s+1-n.length).join(e)+r},K={s:E,z:function(r){var s=-r.utcOffset(),e=Math.abs(s),n=Math.floor(e/60),t=e%60;return(s<=0?"+":"-")+E(n,2,"0")+":"+E(t,2,"0")},m:function r(s,e){if(s.date()<e.date())return-r(e,s);var n=12*(e.year()-s.year())+(e.month()-s.month()),t=s.clone().add(n,_),a=e-t<0,i=s.clone().add(n+(a?-1:1),_);return+(-(n+(e-t)/(a?t-i:i-t))||0)},a:function(r){return r<0?Math.ceil(r)||0:Math.floor(r)},p:function(r){return{M:_,y,w:I,d:v,D:T,h:H,m:A,s:O,ms:B,Q:z}[r]||String(r||"").toLowerCase().replace(/s$/,"")},u:function(r){return r===void 0}},L="en",D={};D[L]=G;var J="$isDayjsObject",V=function(r){return r instanceof F||!(!r||!r[J])},j=function r(s,e,n){var t;if(!s)return L;if(typeof s=="string"){var a=s.toLowerCase();D[a]&&(t=a),e&&(D[a]=e,t=a);var i=s.split("-");if(!t&&i.length>1)return r(i[0])}else{var c=s.name;D[c]=s,t=c}return!n&&t&&(L=t),t||!n&&L},f=function(r,s){if(V(r))return r.clone();var e=typeof s=="object"?s:{};return e.date=r,e.args=arguments,new F(e)},u=K;u.l=j,u.i=V,u.w=function(r,s){return f(r,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var F=function(){function r(e){this.$L=j(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[J]=!0}var s=r.prototype;return s.parse=function(e){this.$d=function(n){var t=n.date,a=n.utc;if(t===null)return new Date(NaN);if(u.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var i=t.match(Q);if(i){var c=i[2]-1||0,d=(i[7]||"0").substring(0,3);return a?new Date(Date.UTC(i[1],c,i[3]||1,i[4]||0,i[5]||0,i[6]||0,d)):new Date(i[1],c,i[3]||1,i[4]||0,i[5]||0,i[6]||0,d)}}return new Date(t)}(e),this.init()},s.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},s.$utils=function(){return u},s.isValid=function(){return this.$d.toString()!==P},s.isSame=function(e,n){var t=f(e);return this.startOf(n)<=t&&t<=this.endOf(n)},s.isAfter=function(e,n){return f(e)<this.startOf(n)},s.isBefore=function(e,n){return this.endOf(n)<f(e)},s.$g=function(e,n,t){return u.u(e)?this[n]:this.set(t,e)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(e,n){var t=this,a=!!u.u(n)||n,i=u.p(e),c=function(k,g){var M=u.w(t.$u?Date.UTC(t.$y,g,k):new Date(t.$y,g,k),t);return a?M:M.endOf(v)},d=function(k,g){return u.w(t.toDate()[k].apply(t.toDate("s"),(a?[0,0,0,0]:[23,59,59,999]).slice(g)),t)},l=this.$W,h=this.$M,p=this.$D,x="set"+(this.$u?"UTC":"");switch(i){case y:return a?c(1,0):c(31,11);case _:return a?c(1,h):c(0,h+1);case I:var b=this.$locale().weekStart||0,C=(l<b?l+7:l)-b;return c(a?p-C:p+(6-C),h);case v:case T:return d(x+"Hours",0);case H:return d(x+"Minutes",1);case A:return d(x+"Seconds",2);case O:return d(x+"Milliseconds",3);default:return this.clone()}},s.endOf=function(e){return this.startOf(e,!1)},s.$set=function(e,n){var t,a=u.p(e),i="set"+(this.$u?"UTC":""),c=(t={},t[v]=i+"Date",t[T]=i+"Date",t[_]=i+"Month",t[y]=i+"FullYear",t[H]=i+"Hours",t[A]=i+"Minutes",t[O]=i+"Seconds",t[B]=i+"Milliseconds",t)[a],d=a===v?this.$D+(n-this.$W):n;if(a===_||a===y){var l=this.clone().set(T,1);l.$d[c](d),l.init(),this.$d=l.set(T,Math.min(this.$D,l.daysInMonth())).$d}else c&&this.$d[c](d);return this.init(),this},s.set=function(e,n){return this.clone().$set(e,n)},s.get=function(e){return this[u.p(e)]()},s.add=function(e,n){var t,a=this;e=Number(e);var i=u.p(n),c=function(h){var p=f(a);return u.w(p.date(p.date()+Math.round(h*e)),a)};if(i===_)return this.set(_,this.$M+e);if(i===y)return this.set(y,this.$y+e);if(i===v)return c(1);if(i===I)return c(7);var d=(t={},t[A]=S,t[H]=U,t[O]=w,t)[i]||1,l=this.$d.getTime()+e*d;return u.w(l,this)},s.subtract=function(e,n){return this.add(-1*e,n)},s.format=function(e){var n=this,t=this.$locale();if(!this.isValid())return t.invalidDate||P;var a=e||"YYYY-MM-DDTHH:mm:ssZ",i=u.z(this),c=this.$H,d=this.$m,l=this.$M,h=t.weekdays,p=t.months,x=t.meridiem,b=function(g,M,Y,W){return g&&(g[M]||g(n,a))||Y[M].slice(0,W)},C=function(g){return u.s(c%12||12,g,"0")},k=x||function(g,M,Y){var W=g<12?"AM":"PM";return Y?W.toLowerCase():W};return a.replace(q,function(g,M){return M||function(Y){switch(Y){case"YY":return String(n.$y).slice(-2);case"YYYY":return u.s(n.$y,4,"0");case"M":return l+1;case"MM":return u.s(l+1,2,"0");case"MMM":return b(t.monthsShort,l,p,3);case"MMMM":return b(p,l);case"D":return n.$D;case"DD":return u.s(n.$D,2,"0");case"d":return String(n.$W);case"dd":return b(t.weekdaysMin,n.$W,h,2);case"ddd":return b(t.weekdaysShort,n.$W,h,3);case"dddd":return h[n.$W];case"H":return String(c);case"HH":return u.s(c,2,"0");case"h":return C(1);case"hh":return C(2);case"a":return k(c,d,!0);case"A":return k(c,d,!1);case"m":return String(d);case"mm":return u.s(d,2,"0");case"s":return String(n.$s);case"ss":return u.s(n.$s,2,"0");case"SSS":return u.s(n.$ms,3,"0");case"Z":return i}return null}(g)||i.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(e,n,t){var a,i=this,c=u.p(n),d=f(e),l=(d.utcOffset()-this.utcOffset())*S,h=this-d,p=function(){return u.m(i,d)};switch(c){case y:a=p()/12;break;case _:a=p();break;case z:a=p()/3;break;case I:a=(h-l)/6048e5;break;case v:a=(h-l)/864e5;break;case H:a=h/U;break;case A:a=h/S;break;case O:a=h/w;break;default:a=h}return t?a:u.a(a)},s.daysInMonth=function(){return this.endOf(_).$D},s.$locale=function(){return D[this.$L]},s.locale=function(e,n){if(!e)return this.$L;var t=this.clone(),a=j(e,n,!0);return a&&(t.$L=a),t},s.clone=function(){return u.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},r}(),R=F.prototype;return f.prototype=R,[["$ms",B],["$s",O],["$m",A],["$H",H],["$W",v],["$M",_],["$y",y],["$D",T]].forEach(function(r){R[r[1]]=function(s){return this.$g(s,r[0],r[1])}}),f.extend=function(r,s){return r.$i||(r(s,F,f),r.$i=!0),f},f.locale=j,f.isDayjs=V,f.unix=function(r){return f(1e3*r)},f.en=D[L],f.Ls=D,f.p={},f})})(Z);var fe=Z.exports;const $=de(fe),ye={truncateWord(o,m){return o.length>=m?o.substring(0,m)+"...":o},convertTimeDate(o){if($(o,"HH:mm").isValid()){const m=o.toString().length===10?o*1e3:o;return $(m).format("DD MMMM YYYY")}return""},convertTimeHours(o){if($(o,"HH:mm").isValid()){const m=o.toString().length===10?o*1e3:o;return $(m).format("HH:mm")}return"--:--"},convertTimeBetween(o,m){if($(o).isValid()&&$(m).isValid()){const w=o.toString().length===10?o*1e3:o,S=m.toString().length===10?m*1e3:m;return $($(S).diff($(w))).format("HH:mm:ss")}return"--:--"}},le={baseUrl:"https://landing-page-54d28.web.app/"},he=o=>(re("data-v-e5916444"),o=o(),ae(),o),me={id:"Loading"},ge=he(()=>N("div",{id:"modal-bg",class:"w-full h-full z-20 absolute top-0 absolute blur-background"},null,-1)),pe={class:"sm:w-[385px] sm:min-w-[30vw] min-w-[60vw] min-h-[30vh] flex flex-col items-center gap-2 -translate-y-1/2 p-6 top-1/2 left-1/2 -translate-x-1/2 absolute z-20"},_e=["src"],we={__name:"Loading",setup(o){return(m,w)=>(te(),se("div",me,[ge,N("div",pe,[N("img",{src:ne(le).baseUrl+"src/assets/animated/spinner.svg",alt:"spinner"},null,8,_e)])]))}},Me=ee(we,[["__scopeId","data-v-e5916444"]]);export{Me as L,ye as a,le as c,ve as u};