import{K as y,a3 as m,h as u,f as d,a4 as n}from"./index-03957ff0.js";import{g as h,a as f,b as F}from"./guru-mapel.api-f18ae5d4.js";const A=()=>{var c;const e=y(a=>a.user),s=(c=e==null?void 0:e.teacher)==null?void 0:c.className,t=e==null?void 0:e.period,r=`${n}/${s}/${t}`;return m({queryKey:["lessons-by-class-period",s,t],queryFn:async()=>{var a;try{return(await u.get(r)).data}catch(o){if(u.isAxiosError(o)){const i=((a=o.response)==null?void 0:a.data.message)??"Terjadi kesalahan pada server";throw new Error(i)}else throw new Error("Terjadi kesalahan saat mengirim permintaan")}},enabled:!!s&&!!t})},l=(e,s,t)=>{const r=`${n}/${t}/${e}/${s}`;return m({queryKey:["attendances",e,s,t],queryFn:()=>h(r),enabled:!!t&&!!e&&!!s})},b=()=>{const e=`${n}/attendances`;return d({mutationKey:["attendances"],mutationFn:s=>f(e,s)})},w=()=>{const e=`${n}/assessments`;return d({mutationKey:["assessments"],mutationFn:s=>F(e,s)})};export{l as a,b,w as c,A as u};
