const b=a=>{const n=["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],s=["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"],o=a??"",e=new Date(o),r=n[e.getMonth()],t=e.getDate(),u=e.getFullYear(),c=e.getDay(),i=t<10?`0${t}`:t,D=s[c];return{fixedDate:`${i} ${r} ${u}`,fixedDay:D}};export{b as u};
