import{a1 as S}from"./index-03957ff0.js";var le=e=>e.type==="checkbox",re=e=>e instanceof Date,R=e=>e==null;const Ze=e=>typeof e=="object";var C=e=>!R(e)&&!Array.isArray(e)&&Ze(e)&&!re(e),et=e=>C(e)&&e.target?le(e.target)?e.target.checked:e.target.value:e,bt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,tt=(e,i)=>e.has(bt(i)),At=e=>{const i=e.constructor&&e.constructor.prototype;return C(i)&&i.hasOwnProperty("isPrototypeOf")},pe=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function N(e){let i;const r=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(pe&&(e instanceof Blob||e instanceof FileList))&&(r||C(e)))if(i=r?[]:{},!r&&!At(e))i=e;else for(const s in e)e.hasOwnProperty(s)&&(i[s]=N(e[s]));else return e;return i}var ae=e=>Array.isArray(e)?e.filter(Boolean):[],p=e=>e===void 0,c=(e,i,r)=>{if(!i||!C(e))return r;const s=ae(i.split(/[,[\].]+?/)).reduce((n,a)=>R(n)?n:n[a],e);return p(s)||s===e?p(e[i])?r:e[i]:s};const de={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},I={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},G={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},Ft=S.createContext(null),Ce=()=>S.useContext(Ft);var rt=(e,i,r,s=!0)=>{const n={defaultValues:i._defaultValues};for(const a in e)Object.defineProperty(n,a,{get:()=>{const d=a;return i._proxyFormState[d]!==I.all&&(i._proxyFormState[d]=!s||I.all),r&&(r[d]=!0),e[d]}});return n},B=e=>C(e)&&!Object.keys(e).length,st=(e,i,r,s)=>{r(e);const{name:n,...a}=e;return B(a)||Object.keys(a).length>=Object.keys(i).length||Object.keys(a).find(d=>i[d]===(!s||I.all))},fe=e=>Array.isArray(e)?e:[e],it=(e,i,r)=>r&&i?e===i||Array.isArray(e)&&e.some(s=>s&&r&&s===i):!e||!i||e===i||fe(e).some(s=>s&&(s.startsWith(i)||i.startsWith(s)));function Oe(e){const i=S.useRef(e);i.current=e,S.useEffect(()=>{const r=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}function xt(e){const i=Ce(),{control:r=i.control,disabled:s,name:n,exact:a}=e||{},[d,V]=S.useState(r._formState),g=S.useRef(!0),w=S.useRef({isDirty:!1,isLoading:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1}),m=S.useRef(n);return m.current=n,Oe({disabled:s,next:F=>g.current&&it(m.current,F.name,a)&&st(F,w.current,r._updateFormState)&&V({...r._formState,...F}),subject:r._subjects.state}),S.useEffect(()=>(g.current=!0,w.current.isValid&&r._updateValid(!0),()=>{g.current=!1}),[r]),rt(d,r,w.current,!1)}var j=e=>typeof e=="string",ut=(e,i,r,s,n)=>j(e)?(s&&i.watch.add(e),c(r,e,n)):Array.isArray(e)?e.map(a=>(s&&i.watch.add(a),c(r,a))):(s&&(i.watchAll=!0),r);function mt(e){const i=Ce(),{control:r=i.control,name:s,defaultValue:n,disabled:a,exact:d}=e||{},V=S.useRef(s);V.current=s,Oe({disabled:a,subject:r._subjects.values,next:m=>{it(V.current,m.name,d)&&w(N(ut(V.current,r._names,m.values||r._formValues,!1,n)))}});const[g,w]=S.useState(r._getWatch(s,n));return S.useEffect(()=>r._removeUnmounted()),g}var Le=e=>/^\w*$/.test(e),nt=e=>ae(e.replace(/["|']|\]/g,"").split(/\.|\[/));function x(e,i,r){let s=-1;const n=Le(i)?[i]:nt(i),a=n.length,d=a-1;for(;++s<a;){const V=n[s];let g=r;if(s!==d){const w=e[V];g=C(w)||Array.isArray(w)?w:isNaN(+n[s+1])?{}:[]}e[V]=g,e=e[V]}return e}function Nt(e){const i=Ce(),{name:r,disabled:s,control:n=i.control,shouldUnregister:a}=e,d=tt(n._names.array,r),V=mt({control:n,name:r,defaultValue:c(n._formValues,r,c(n._defaultValues,r,e.defaultValue)),exact:!0}),g=xt({control:n,name:r}),w=S.useRef(n.register(r,{...e.rules,value:V}));return w.current=n.register(r,e.rules),S.useEffect(()=>{const m=n._options.shouldUnregister||a,F=(v,q)=>{const T=c(n._fields,v);T&&(T._f.mount=q)};if(F(r,!0),m){const v=N(c(n._options.defaultValues,r));x(n._defaultValues,r,v),p(c(n._formValues,r))&&x(n._formValues,r,v)}return()=>{(d?m&&!n._state.action:m)?n.unregister(r):F(r,!1)}},[r,n,d,a]),S.useEffect(()=>{n._updateDisabledField({disabled:s,fields:n._fields,name:r})},[s,r,n]),{field:{name:r,value:V,disabled:s,onChange:S.useCallback(m=>w.current.onChange({target:{value:et(m),name:r},type:de.CHANGE}),[r]),onBlur:S.useCallback(()=>w.current.onBlur({target:{value:c(n._formValues,r),name:r},type:de.BLUR}),[r,n]),ref:m=>{const F=c(n._fields,r);F&&m&&(F._f.ref={focus:()=>m.focus(),select:()=>m.select(),setCustomValidity:v=>m.setCustomValidity(v),reportValidity:()=>m.reportValidity()})}},formState:g,fieldState:Object.defineProperties({},{invalid:{enumerable:!0,get:()=>!!c(g.errors,r)},isDirty:{enumerable:!0,get:()=>!!c(g.dirtyFields,r)},isTouched:{enumerable:!0,get:()=>!!c(g.touchedFields,r)},error:{enumerable:!0,get:()=>c(g.errors,r)}})}}var wt=(e,i,r,s,n)=>i?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[s]:n||!0}}:{};const Ee=(e,i,r)=>{for(const s of r||Object.keys(e)){const n=c(e,s);if(n){const{_f:a,...d}=n;if(a&&i(a.name)){if(a.ref.focus){a.ref.focus();break}else if(a.refs&&a.refs[0].focus){a.refs[0].focus();break}}else C(d)&&Ee(d,i)}}};var $e=e=>({isOnSubmit:!e||e===I.onSubmit,isOnBlur:e===I.onBlur,isOnChange:e===I.onChange,isOnAll:e===I.all,isOnTouch:e===I.onTouched}),Ke=(e,i,r)=>!r&&(i.watchAll||i.watch.has(e)||[...i.watch].some(s=>e.startsWith(s)&&/^\.\w+/.test(e.slice(s.length)))),Dt=(e,i,r)=>{const s=ae(c(e,r));return x(s,"root",i[r]),x(e,r,s),e},X=e=>typeof e=="boolean",Te=e=>e.type==="file",z=e=>typeof e=="function",ye=e=>{if(!pe)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},ce=e=>j(e),Re=e=>e.type==="radio",he=e=>e instanceof RegExp;const Ge={value:!1,isValid:!1},ze={value:!0,isValid:!0};var lt=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!p(e[0].attributes.value)?p(e[0].value)||e[0].value===""?ze:{value:e[0].value,isValid:!0}:ze:Ge}return Ge};const Je={isValid:!1,value:null};var at=e=>Array.isArray(e)?e.reduce((i,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:i,Je):Je;function Qe(e,i,r="validate"){if(ce(e)||Array.isArray(e)&&e.every(ce)||X(e)&&!e)return{type:r,message:ce(e)?e:"",ref:i}}var te=e=>C(e)&&!he(e)?e:{value:e,message:""},Xe=async(e,i,r,s,n)=>{const{ref:a,refs:d,required:V,maxLength:g,minLength:w,min:m,max:F,pattern:v,validate:q,name:T,valueAsNumber:_e,mount:oe,disabled:Ve}=e._f,_=c(i,T);if(!oe||Ve)return{};const P=d?d[0]:a,$=A=>{s&&P.reportValidity&&(P.setCustomValidity(X(A)?"":A||""),P.reportValidity())},O={},se=Re(a),Z=le(a),be=se||Z,W=(_e||Te(a))&&p(a.value)&&p(_)||ye(a)&&a.value===""||_===""||Array.isArray(_)&&!_.length,J=wt.bind(null,T,r,O),K=(A,b,k,U=G.maxLength,M=G.minLength)=>{const H=A?b:k;O[T]={type:A?U:M,message:H,ref:a,...J(A?U:M,H)}};if(n?!Array.isArray(_)||!_.length:V&&(!be&&(W||R(_))||X(_)&&!_||Z&&!lt(d).isValid||se&&!at(d).isValid)){const{value:A,message:b}=ce(V)?{value:!!V,message:V}:te(V);if(A&&(O[T]={type:G.required,message:b,ref:P,...J(G.required,b)},!r))return $(b),O}if(!W&&(!R(m)||!R(F))){let A,b;const k=te(F),U=te(m);if(!R(_)&&!isNaN(_)){const M=a.valueAsNumber||_&&+_;R(k.value)||(A=M>k.value),R(U.value)||(b=M<U.value)}else{const M=a.valueAsDate||new Date(_),H=ue=>new Date(new Date().toDateString()+" "+ue),Q=a.type=="time",ie=a.type=="week";j(k.value)&&_&&(A=Q?H(_)>H(k.value):ie?_>k.value:M>new Date(k.value)),j(U.value)&&_&&(b=Q?H(_)<H(U.value):ie?_<U.value:M<new Date(U.value))}if((A||b)&&(K(!!A,k.message,U.message,G.max,G.min),!r))return $(O[T].message),O}if((g||w)&&!W&&(j(_)||n&&Array.isArray(_))){const A=te(g),b=te(w),k=!R(A.value)&&_.length>+A.value,U=!R(b.value)&&_.length<+b.value;if((k||U)&&(K(k,A.message,b.message),!r))return $(O[T].message),O}if(v&&!W&&j(_)){const{value:A,message:b}=te(v);if(he(A)&&!_.match(A)&&(O[T]={type:G.pattern,message:b,ref:a,...J(G.pattern,b)},!r))return $(b),O}if(q){if(z(q)){const A=await q(_,i),b=Qe(A,P);if(b&&(O[T]={...b,...J(G.validate,b.message)},!r))return $(b.message),O}else if(C(q)){let A={};for(const b in q){if(!B(A)&&!r)break;const k=Qe(await q[b](_,i),P,b);k&&(A={...k,...J(b,k.message)},$(k.message),r&&(O[T]=A))}if(!B(A)&&(O[T]={ref:P,...A},!r))return O}}return $(!0),O};function St(e,i){const r=i.slice(0,-1).length;let s=0;for(;s<r;)e=p(e)?s++:e[i[s++]];return e}function kt(e){for(const i in e)if(e.hasOwnProperty(i)&&!p(e[i]))return!1;return!0}function L(e,i){const r=Array.isArray(i)?i:Le(i)?[i]:nt(i),s=r.length===1?e:St(e,r),n=r.length-1,a=r[n];return s&&delete s[a],n!==0&&(C(s)&&B(s)||Array.isArray(s)&&kt(s))&&L(e,r.slice(0,-1)),e}function we(){let e=[];return{get observers(){return e},next:n=>{for(const a of e)a.next&&a.next(n)},subscribe:n=>(e.push(n),{unsubscribe:()=>{e=e.filter(a=>a!==n)}}),unsubscribe:()=>{e=[]}}}var ge=e=>R(e)||!Ze(e);function Y(e,i){if(ge(e)||ge(i))return e===i;if(re(e)&&re(i))return e.getTime()===i.getTime();const r=Object.keys(e),s=Object.keys(i);if(r.length!==s.length)return!1;for(const n of r){const a=e[n];if(!s.includes(n))return!1;if(n!=="ref"){const d=i[n];if(re(a)&&re(d)||C(a)&&C(d)||Array.isArray(a)&&Array.isArray(d)?!Y(a,d):a!==d)return!1}}return!0}var ot=e=>e.type==="select-multiple",Et=e=>Re(e)||le(e),De=e=>ye(e)&&e.isConnected,ft=e=>{for(const i in e)if(z(e[i]))return!0;return!1};function ve(e,i={}){const r=Array.isArray(e);if(C(e)||r)for(const s in e)Array.isArray(e[s])||C(e[s])&&!ft(e[s])?(i[s]=Array.isArray(e[s])?[]:{},ve(e[s],i[s])):R(e[s])||(i[s]=!0);return i}function ct(e,i,r){const s=Array.isArray(e);if(C(e)||s)for(const n in e)Array.isArray(e[n])||C(e[n])&&!ft(e[n])?p(i)||ge(r[n])?r[n]=Array.isArray(e[n])?ve(e[n],[]):{...ve(e[n])}:ct(e[n],R(i)?{}:i[n],r[n]):r[n]=!Y(e[n],i[n]);return r}var Se=(e,i)=>ct(e,i,ve(i)),dt=(e,{valueAsNumber:i,valueAsDate:r,setValueAs:s})=>p(e)?e:i?e===""?NaN:e&&+e:r&&j(e)?new Date(e):s?s(e):e;function ke(e){const i=e.ref;if(!(e.refs?e.refs.every(r=>r.disabled):i.disabled))return Te(i)?i.files:Re(i)?at(e.refs).value:ot(i)?[...i.selectedOptions].map(({value:r})=>r):le(i)?lt(e.refs).value:dt(p(i.value)?e.ref.value:i.value,e)}var pt=(e,i,r,s)=>{const n={};for(const a of e){const d=c(i,a);d&&x(n,a,d._f)}return{criteriaMode:r,names:[...e],fields:n,shouldUseNativeValidation:s}},ne=e=>p(e)?e:he(e)?e.source:C(e)?he(e.value)?e.value.source:e.value:e,Ct=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ye(e,i,r){const s=c(e,r);if(s||Le(r))return{error:s,name:r};const n=r.split(".");for(;n.length;){const a=n.join("."),d=c(i,a),V=c(e,a);if(d&&!Array.isArray(d)&&r!==a)return{name:r};if(V&&V.type)return{name:a,error:V};n.pop()}return{name:r}}var Ot=(e,i,r,s,n)=>n.isOnAll?!1:!r&&n.isOnTouch?!(i||e):(r?s.isOnBlur:n.isOnBlur)?!e:(r?s.isOnChange:n.isOnChange)?e:!0,Lt=(e,i)=>!ae(c(e,i)).length&&L(e,i);const Tt={mode:I.onSubmit,reValidateMode:I.onChange,shouldFocusError:!0};function Rt(e={},i){let r={...Tt,...e},s={submitCount:0,isDirty:!1,isLoading:z(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},n={},a=C(r.defaultValues)||C(r.values)?N(r.defaultValues||r.values)||{}:{},d=r.shouldUnregister?{}:N(a),V={action:!1,mount:!1,watch:!1},g={mount:new Set,unMount:new Set,array:new Set,watch:new Set},w,m=0;const F={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:we(),array:we(),state:we()},q=e.resetOptions&&e.resetOptions.keepDirtyValues,T=$e(r.mode),_e=$e(r.reValidateMode),oe=r.criteriaMode===I.all,Ve=t=>u=>{clearTimeout(m),m=setTimeout(t,u)},_=async t=>{if(F.isValid||t){const u=r.resolver?B((await W()).errors):await K(n,!0);u!==s.isValid&&v.state.next({isValid:u})}},P=t=>F.isValidating&&v.state.next({isValidating:t}),$=(t,u=[],l,y,f=!0,o=!0)=>{if(y&&l){if(V.action=!0,o&&Array.isArray(c(n,t))){const h=l(c(n,t),y.argA,y.argB);f&&x(n,t,h)}if(o&&Array.isArray(c(s.errors,t))){const h=l(c(s.errors,t),y.argA,y.argB);f&&x(s.errors,t,h),Lt(s.errors,t)}if(F.touchedFields&&o&&Array.isArray(c(s.touchedFields,t))){const h=l(c(s.touchedFields,t),y.argA,y.argB);f&&x(s.touchedFields,t,h)}F.dirtyFields&&(s.dirtyFields=Se(a,d)),v.state.next({name:t,isDirty:b(t,u),dirtyFields:s.dirtyFields,errors:s.errors,isValid:s.isValid})}else x(d,t,u)},O=(t,u)=>{x(s.errors,t,u),v.state.next({errors:s.errors})},se=(t,u,l,y)=>{const f=c(n,t);if(f){const o=c(d,t,p(l)?c(a,t):l);p(o)||y&&y.defaultChecked||u?x(d,t,u?o:ke(f._f)):M(t,o),V.mount&&_()}},Z=(t,u,l,y,f)=>{let o=!1,h=!1;const D={name:t};if(!l||y){F.isDirty&&(h=s.isDirty,s.isDirty=D.isDirty=b(),o=h!==D.isDirty);const E=Y(c(a,t),u);h=c(s.dirtyFields,t),E?L(s.dirtyFields,t):x(s.dirtyFields,t,!0),D.dirtyFields=s.dirtyFields,o=o||F.dirtyFields&&h!==!E}if(l){const E=c(s.touchedFields,t);E||(x(s.touchedFields,t,l),D.touchedFields=s.touchedFields,o=o||F.touchedFields&&E!==l)}return o&&f&&v.state.next(D),o?D:{}},be=(t,u,l,y)=>{const f=c(s.errors,t),o=F.isValid&&X(u)&&s.isValid!==u;if(e.delayError&&l?(w=Ve(()=>O(t,l)),w(e.delayError)):(clearTimeout(m),w=null,l?x(s.errors,t,l):L(s.errors,t)),(l?!Y(f,l):f)||!B(y)||o){const h={...y,...o&&X(u)?{isValid:u}:{},errors:s.errors,name:t};s={...s,...h},v.state.next(h)}P(!1)},W=async t=>r.resolver(d,r.context,pt(t||g.mount,n,r.criteriaMode,r.shouldUseNativeValidation)),J=async t=>{const{errors:u}=await W(t);if(t)for(const l of t){const y=c(u,l);y?x(s.errors,l,y):L(s.errors,l)}else s.errors=u;return u},K=async(t,u,l={valid:!0})=>{for(const y in t){const f=t[y];if(f){const{_f:o,...h}=f;if(o){const D=g.array.has(o.name),E=await Xe(f,d,oe,r.shouldUseNativeValidation&&!u,D);if(E[o.name]&&(l.valid=!1,u))break;!u&&(c(E,o.name)?D?Dt(s.errors,E,o.name):x(s.errors,o.name,E[o.name]):L(s.errors,o.name))}h&&await K(h,u,l)}}return l.valid},A=()=>{for(const t of g.unMount){const u=c(n,t);u&&(u._f.refs?u._f.refs.every(l=>!De(l)):!De(u._f.ref))&&Ae(t)}g.unMount=new Set},b=(t,u)=>(t&&u&&x(d,t,u),!Y(Ue(),a)),k=(t,u,l)=>ut(t,g,{...V.mount?d:p(u)?a:j(t)?{[t]:u}:u},l,u),U=t=>ae(c(V.mount?d:a,t,e.shouldUnregister?c(a,t,[]):[])),M=(t,u,l={})=>{const y=c(n,t);let f=u;if(y){const o=y._f;o&&(!o.disabled&&x(d,t,dt(u,o)),f=ye(o.ref)&&R(u)?"":u,ot(o.ref)?[...o.ref.options].forEach(h=>h.selected=f.includes(h.value)):o.refs?le(o.ref)?o.refs.length>1?o.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(f)?!!f.find(D=>D===h.value):f===h.value)):o.refs[0]&&(o.refs[0].checked=!!f):o.refs.forEach(h=>h.checked=h.value===f):Te(o.ref)?o.ref.value="":(o.ref.value=f,o.ref.type||v.values.next({name:t,values:{...d}})))}(l.shouldDirty||l.shouldTouch)&&Z(t,f,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&ue(t)},H=(t,u,l)=>{for(const y in u){const f=u[y],o=`${t}.${y}`,h=c(n,o);(g.array.has(t)||!ge(f)||h&&!h._f)&&!re(f)?H(o,f,l):M(o,f,l)}},Q=(t,u,l={})=>{const y=c(n,t),f=g.array.has(t),o=N(u);x(d,t,o),f?(v.array.next({name:t,values:{...d}}),(F.isDirty||F.dirtyFields)&&l.shouldDirty&&v.state.next({name:t,dirtyFields:Se(a,d),isDirty:b(t,o)})):y&&!y._f&&!R(o)?H(t,o,l):M(t,o,l),Ke(t,g)&&v.state.next({...s}),v.values.next({name:t,values:{...d}}),!V.mount&&i()},ie=async t=>{const u=t.target;let l=u.name,y=!0;const f=c(n,l),o=()=>u.type?ke(f._f):et(t);if(f){let h,D;const E=o(),ee=t.type===de.BLUR||t.type===de.FOCUS_OUT,vt=!Ct(f._f)&&!r.resolver&&!c(s.errors,l)&&!f._f.deps||Ot(ee,c(s.touchedFields,l),s.isSubmitted,_e,T),xe=Ke(l,g,ee);x(d,l,E),ee?(f._f.onBlur&&f._f.onBlur(t),w&&w(0)):f._f.onChange&&f._f.onChange(t);const me=Z(l,E,ee,!1),_t=!B(me)||xe;if(!ee&&v.values.next({name:l,type:t.type,values:{...d}}),vt)return F.isValid&&_(),_t&&v.state.next({name:l,...xe?{}:me});if(!ee&&xe&&v.state.next({...s}),P(!0),r.resolver){const{errors:He}=await W([l]),Vt=Ye(s.errors,n,l),je=Ye(He,n,Vt.name||l);h=je.error,l=je.name,D=B(He)}else h=(await Xe(f,d,oe,r.shouldUseNativeValidation))[l],y=isNaN(E)||E===c(d,l,E),y&&(h?D=!1:F.isValid&&(D=await K(n,!0)));y&&(f._f.deps&&ue(f._f.deps),be(l,D,h,me))}},ue=async(t,u={})=>{let l,y;const f=fe(t);if(P(!0),r.resolver){const o=await J(p(t)?t:f);l=B(o),y=t?!f.some(h=>c(o,h)):l}else t?(y=(await Promise.all(f.map(async o=>{const h=c(n,o);return await K(h&&h._f?{[o]:h}:h)}))).every(Boolean),!(!y&&!s.isValid)&&_()):y=l=await K(n);return v.state.next({...!j(t)||F.isValid&&l!==s.isValid?{}:{name:t},...r.resolver||!t?{isValid:l}:{},errors:s.errors,isValidating:!1}),u.shouldFocus&&!y&&Ee(n,o=>o&&c(s.errors,o),t?f:g.mount),y},Ue=t=>{const u={...a,...V.mount?d:{}};return p(t)?u:j(t)?c(u,t):t.map(l=>c(u,l))},Me=(t,u)=>({invalid:!!c((u||s).errors,t),isDirty:!!c((u||s).dirtyFields,t),isTouched:!!c((u||s).touchedFields,t),error:c((u||s).errors,t)}),yt=t=>{t&&fe(t).forEach(u=>L(s.errors,u)),v.state.next({errors:t?s.errors:{}})},Be=(t,u,l)=>{const y=(c(n,t,{_f:{}})._f||{}).ref;x(s.errors,t,{...u,ref:y}),v.state.next({name:t,errors:s.errors,isValid:!1}),l&&l.shouldFocus&&y&&y.focus&&y.focus()},ht=(t,u)=>z(t)?v.values.subscribe({next:l=>t(k(void 0,u),l)}):k(t,u,!0),Ae=(t,u={})=>{for(const l of t?fe(t):g.mount)g.mount.delete(l),g.array.delete(l),u.keepValue||(L(n,l),L(d,l)),!u.keepError&&L(s.errors,l),!u.keepDirty&&L(s.dirtyFields,l),!u.keepTouched&&L(s.touchedFields,l),!r.shouldUnregister&&!u.keepDefaultValue&&L(a,l);v.values.next({values:{...d}}),v.state.next({...s,...u.keepDirty?{isDirty:b()}:{}}),!u.keepIsValid&&_()},Pe=({disabled:t,name:u,field:l,fields:y})=>{if(X(t)){const f=t?void 0:c(d,u,ke(l?l._f:c(y,u)._f));x(d,u,f),Z(u,f,!1,!1,!0)}},Fe=(t,u={})=>{let l=c(n,t);const y=X(u.disabled);return x(n,t,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:t}},name:t,mount:!0,...u}}),g.mount.add(t),l?Pe({field:l,disabled:u.disabled,name:t}):se(t,!0,u.value),{...y?{disabled:u.disabled}:{},...r.progressive?{required:!!u.required,min:ne(u.min),max:ne(u.max),minLength:ne(u.minLength),maxLength:ne(u.maxLength),pattern:ne(u.pattern)}:{},name:t,onChange:ie,onBlur:ie,ref:f=>{if(f){Fe(t,u),l=c(n,t);const o=p(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,h=Et(o),D=l._f.refs||[];if(h?D.find(E=>E===o):o===l._f.ref)return;x(n,t,{_f:{...l._f,...h?{refs:[...D.filter(De),o,...Array.isArray(c(a,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),se(t,!1,void 0,o)}else l=c(n,t,{}),l._f&&(l._f.mount=!1),(r.shouldUnregister||u.shouldUnregister)&&!(tt(g.array,t)&&V.action)&&g.unMount.add(t)}}},Ne=()=>r.shouldFocusError&&Ee(n,t=>t&&c(s.errors,t),g.mount),Ie=(t,u)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let y=N(d);if(v.state.next({isSubmitting:!0}),r.resolver){const{errors:f,values:o}=await W();s.errors=f,y=o}else await K(n);L(s.errors,"root"),B(s.errors)?(v.state.next({errors:{}}),await t(y,l)):(u&&await u({...s.errors},l),Ne(),setTimeout(Ne)),v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:B(s.errors),submitCount:s.submitCount+1,errors:s.errors})},gt=(t,u={})=>{c(n,t)&&(p(u.defaultValue)?Q(t,c(a,t)):(Q(t,u.defaultValue),x(a,t,u.defaultValue)),u.keepTouched||L(s.touchedFields,t),u.keepDirty||(L(s.dirtyFields,t),s.isDirty=u.defaultValue?b(t,c(a,t)):b()),u.keepError||(L(s.errors,t),F.isValid&&_()),v.state.next({...s}))},qe=(t,u={})=>{const l=t?N(t):a,y=N(l),f=t&&!B(t)?y:a;if(u.keepDefaultValues||(a=l),!u.keepValues){if(u.keepDirtyValues||q)for(const o of g.mount)c(s.dirtyFields,o)?x(f,o,c(d,o)):Q(o,c(f,o));else{if(pe&&p(t))for(const o of g.mount){const h=c(n,o);if(h&&h._f){const D=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(ye(D)){const E=D.closest("form");if(E){E.reset();break}}}}n={}}d=e.shouldUnregister?u.keepDefaultValues?N(a):{}:N(f),v.array.next({values:{...f}}),v.values.next({values:{...f}})}g={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!V.mount&&i(),V.mount=!F.isValid||!!u.keepIsValid,V.watch=!!e.shouldUnregister,v.state.next({submitCount:u.keepSubmitCount?s.submitCount:0,isDirty:u.keepDirty?s.isDirty:!!(u.keepDefaultValues&&!Y(t,a)),isSubmitted:u.keepIsSubmitted?s.isSubmitted:!1,dirtyFields:u.keepDirtyValues?s.dirtyFields:u.keepDefaultValues&&t?Se(a,t):{},touchedFields:u.keepTouched?s.touchedFields:{},errors:u.keepErrors?s.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},We=(t,u)=>qe(z(t)?t(d):t,u);return{control:{register:Fe,unregister:Ae,getFieldState:Me,handleSubmit:Ie,setError:Be,_executeSchema:W,_getWatch:k,_getDirty:b,_updateValid:_,_removeUnmounted:A,_updateFieldArray:$,_updateDisabledField:Pe,_getFieldArray:U,_reset:qe,_resetDefaultValues:()=>z(r.defaultValues)&&r.defaultValues().then(t=>{We(t,r.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:t=>{s={...s,...t}},_subjects:v,_proxyFormState:F,get _fields(){return n},get _formValues(){return d},get _state(){return V},set _state(t){V=t},get _defaultValues(){return a},get _names(){return g},set _names(t){g=t},get _formState(){return s},set _formState(t){s=t},get _options(){return r},set _options(t){r={...r,...t}}},trigger:ue,register:Fe,handleSubmit:Ie,watch:ht,setValue:Q,getValues:Ue,reset:We,resetField:gt,clearErrors:yt,unregister:Ae,setError:Be,setFocus:(t,u={})=>{const l=c(n,t),y=l&&l._f;if(y){const f=y.refs?y.refs[0]:y.ref;f.focus&&(f.focus(),u.shouldSelect&&f.select())}},getFieldState:Me}}function It(e={}){const i=S.useRef(),r=S.useRef(),[s,n]=S.useState({isDirty:!1,isValidating:!1,isLoading:z(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:z(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...Rt(e,()=>n(d=>({...d}))),formState:s});const a=i.current.control;return a._options=e,Oe({subject:a._subjects.state,next:d=>{st(d,a._proxyFormState,a._updateFormState,!0)&&n({...a._formState})}}),S.useEffect(()=>{e.values&&!Y(e.values,r.current)?(a._reset(e.values,a._options.resetOptions),r.current=e.values):a._resetDefaultValues()},[e.values,a]),S.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),i.current.formState=rt(s,a),i.current}export{It as a,Nt as u};
