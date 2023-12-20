import{q as T,Q as V,$ as P,j as n,p as _,a0 as k,L as A,d as M,w as S}from"./index-03957ff0.js";import{E as B}from"./EmptyDatas-07f65162.js";import{u as C}from"./generalStore-856c2565.js";import{a as w}from"./index.esm-e4ef884d.js";import{m as N,T as F}from"./TransitionModal-9e501ec5.js";import{S as j}from"./SecondaryButton-f0234006.js";import{a as H}from"./use-wali-kelas-3b7cef6d.js";import{H as z,s as $}from"./componentTypes-721c059e.js";import"./transition-3cbf94cc.js";import"./useParseDate-4edccf95.js";const I=(e,o,s)=>{const{register:a,handleSubmit:r,unregister:l,getValues:m}=w({mode:"onChange"}),{presences:t,setPresences:c}=C(),{isFirstModal:d,actionFirstModal:i}=T(),y=r(D=>{const u=[];Object.keys(D).forEach(p=>{const E=t.filter(f=>f.studentId===p).map(f=>({...f,description:m(p)}));u.push(...E)});const v=t.filter(p=>p.status!=="Izin");if(u.push(...v),u.length<s){V.info("Pastikan semua siswa telah dipresensi.");return}c(u),i()}),h=P(e,o);return{setBeginPresences:y,submitFinalPresences:async()=>{await h.mutateAsync(t)},register:a,unregister:l,createPresences:h,isFirstModal:d,actionFirstModal:i}},L=({classname:e,lesson:o,totalStudents:s})=>{const{actionFirstModal:a,isFirstModal:r,submitFinalPresences:l}=I(e,o,s);return n.jsxDEV(n.Fragment,{children:N?_.createPortal(n.jsxDEV(F,{textColor:"text-secondary",title:"Peringatan",labelBtnTransparent:"kembali",isOpenModal:r,isCloseModal:a,children:n.jsxDEV("section",{className:"flex flex-col gap-4 text-center text-15px",children:[n.jsxDEV("h1",{className:"font-lexendMedium",children:"Presensi yang sudah disimpan tidak dapat diperbarui."},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/modals/CreateModalPresences.tsx",lineNumber:29,columnNumber:17},globalThis),n.jsxDEV(j,{label:`simpan presensi ${e}`,onClick:l},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/modals/CreateModalPresences.tsx",lineNumber:32,columnNumber:17},globalThis)]},void 0,!0,{fileName:"C:/my code/hoocom_project/frontend/src/components/modals/CreateModalPresences.tsx",lineNumber:28,columnNumber:15},globalThis)},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/modals/CreateModalPresences.tsx",lineNumber:21,columnNumber:13},globalThis),N):null},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/modals/CreateModalPresences.tsx",lineNumber:17,columnNumber:5},globalThis)},G=({message:e})=>n.jsxDEV("section",{className:"flex justify-center",children:n.jsxDEV("h1",{className:"bg-white p-5 rounded-lg font-lexendMedium text-15px text-center w-max",children:e},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:27,columnNumber:7},globalThis)},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:26,columnNumber:5},globalThis),q=({classname:e})=>n.jsxDEV("p",{className:"text-12px text-[#4D4D4D]",children:["*Jika tidak terdapat data siswa, silakan menghubungi wali kelas"," ",e]},void 0,!0,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:40,columnNumber:5},globalThis),O=({classname:e})=>n.jsxDEV("section",{className:"px-5 flex flex-col gap-4 851px:px-56",children:[n.jsxDEV(B,{},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:50,columnNumber:7},globalThis),n.jsxDEV(q,{classname:e},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:51,columnNumber:7},globalThis)]},void 0,!0,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:49,columnNumber:5},globalThis),x=(e,o)=>e.filter(o),J=(e,o)=>x(e,r=>r.studentId===o).map(r=>r.studentId),Q=(e,o)=>J(e,o).includes(o),R=(e,o,s)=>x(e,l=>l.studentId===o&&l.status===s).map(l=>l.studentId).includes(o),U=(e,o)=>{const s=x(e,r=>r.studentId===o),[a]=s.map(r=>r.status);return a},K=(e,o)=>x(e,s=>s.studentId!==o),b=(e,o,s)=>({studentId:e.id,classnameId:e.student.classNameId,lessonId:o,status:s}),g=(e,o,s,a)=>{const r=K(e,s);if(Q(e,s)){o([...r,a]);return}else{o([...e,a]);return}},W=(e,o,s)=>({addBgCard:t=>{const c=U(e,t);return c==="Izin"?"bg-orange-300":c==="Hadir"?"bg-green-300":c==="Absen"?"bg-red-300":"bg-white"},handlePermission:t=>{const c=b(t,o,"Izin");g(e,s,t.id,c)},handleAbsent:(t,c)=>{const d=b(t,o,"Absen");c(t.id),g(e,s,t.id,d)},handleAttend:(t,c)=>{const d=b(t,o,"Hadir");c(t.id),g(e,s,t.id,d)}}),X=e=>e==="Izin"?"bg-orange-100 text-orange-500":e==="Hadir"?"bg-green-100 text-green-500":"bg-red-100 text-red-500",Y=({student:e,handlePermission:o,handleAbsent:s,handleAttend:a,unregister:r})=>{const l=[{label:"Izin",onClick:()=>o(e)},{label:"Hadir",onClick:()=>a(e,r)},{label:"Absen",onClick:()=>s(e,r)}];return n.jsxDEV("section",{className:"flex gap-2",children:l.map(({label:m,onClick:t})=>n.jsxDEV("button",{className:`${X(m)} capitalize text-[14px] px-4 py-1 rounded-lg none-highlight`,onClick:t,type:"button",children:m},m,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:244,columnNumber:9},globalThis))},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:242,columnNumber:5},globalThis)},Z=({students:e,lesson:o,register:s,unregister:a})=>{const{presences:r,setPresences:l}=C(),{addBgCard:m,handlePermission:t,handleAttend:c,handleAbsent:d}=W(r,o,l);return n.jsxDEV("section",{className:"grid grid-cols-auto-fit gap-5 mb-6",children:e.map(i=>n.jsxDEV("section",{className:`${m(i.id)} flex flex-col gap-5 p-4 rounded-2xl justify-center items-center`,children:[n.jsxDEV("section",{className:"flex flex-col gap-1 items-center",children:[n.jsxDEV("h2",{className:"text-[#4D4D4D] text-[14px]",children:i.student.nis},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:281,columnNumber:13},globalThis),n.jsxDEV("h2",{className:"text-15px",children:i.fullname},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:284,columnNumber:13},globalThis)]},void 0,!0,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:280,columnNumber:11},globalThis),n.jsxDEV(Y,{student:i,handlePermission:t,handleAttend:c,handleAbsent:d,unregister:a},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:287,columnNumber:11},globalThis),R(r,i.id,"Izin")?n.jsxDEV("input",{type:"text",placeholder:"Masukkan alasan izin...",className:"bg-white border-[1px] border-gray-300 rounded-lg px-3 py-2 placeholder:text-gray-highlight focus:outline-1 w-full focus:outline-secondary placeholder:text-[14px] text-15px",...s(i.id,{required:!0})},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:296,columnNumber:13},globalThis):null]},i.id,!0,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:274,columnNumber:9},globalThis))},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:272,columnNumber:5},globalThis)},ee=({classname:e,lesson:o})=>{var i;const s=k(e,o),a=H(e),r=s.data,l=((i=a.data)==null?void 0:i.data)??[],m=l.length,{setBeginPresences:t,register:c,unregister:d}=I(e,o,m);return n.jsxDEV(n.Fragment,{children:[a.isLoading||s.isLoading?n.jsxDEV(A,{},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:332,columnNumber:9},globalThis):r!=null&&r.data?n.jsxDEV(G,{message:r.message},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:334,columnNumber:9},globalThis):l.length<1?n.jsxDEV(O,{classname:e},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:336,columnNumber:9},globalThis):n.jsxDEV("section",{className:"flex flex-col 851px:px-56 px-5",children:[n.jsxDEV(Z,{students:l,lesson:o,register:c,unregister:d},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:339,columnNumber:11},globalThis),n.jsxDEV(j,{label:`simpan presensi ${e}`,onClick:t},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:345,columnNumber:11},globalThis)]},void 0,!0,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:338,columnNumber:9},globalThis),n.jsxDEV(L,{classname:e,lesson:o,totalStudents:m},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:352,columnNumber:7},globalThis)]},void 0,!0,{fileName:"C:/my code/hoocom_project/frontend/src/components/guru-mapel/presensi/CardIndex.tsx",lineNumber:330,columnNumber:5},globalThis)},xe=()=>{const e=M(),{classname:o,lesson:s}=S(),a=`Presensi - ${o} ${s}`,r=$("presensi",o,s),l=()=>e(r);return n.jsxDEV("main",{className:"flex flex-col gap-6",children:[n.jsxDEV(z,{title:a,onClick:l},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/pages/guru-mapel/presensi/Index.tsx",lineNumber:21,columnNumber:7},globalThis),n.jsxDEV(ee,{classname:o,lesson:s},void 0,!1,{fileName:"C:/my code/hoocom_project/frontend/src/pages/guru-mapel/presensi/Index.tsx",lineNumber:25,columnNumber:7},globalThis)]},void 0,!0,{fileName:"C:/my code/hoocom_project/frontend/src/pages/guru-mapel/presensi/Index.tsx",lineNumber:20,columnNumber:5},globalThis)};export{xe as default};