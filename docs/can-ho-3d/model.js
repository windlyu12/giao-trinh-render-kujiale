// Mô hình căn hộ 2PN Japandi - dựng từ mặt bằng PDF. Toạ độ mặt bằng tính theo pt của PDF, cao độ theo mét.
function buildModel(){
const K=16.8,OX=301,OY=185,H=2.7,DH=2.2,PXS=1.38878,T=mm=>mm/K;
const OAK='#c9a67e',OAK_L='#dcc4a2',WAL='#6e4d37',CREAM='#e8e2d6',GREIGE='#cbc2b3',BLACK='#2d2b29',
LINEN='#ddd3c2',LINEN_D='#b8aa94',SAGE='#98a18a',CLAY='#b88a6c',CHAR='#5b5853',WALL='#eeeae3',CEIL='#f4f2ee',
STONE='#ece9e3',TILE_W='#d8d3ca',WHITE='#f6f5f2',STEEL='#a4a8aa',LEAF='#6f7d5c',LEAF2='#86936d',GLASS='#a9cbd6',MIR='#dfe6e8';
const E=[],r4=v=>Math.round(v*1e4)/1e4,mx=x=>r4((x-OX)*K/1000),mz=y=>r4((y-OY)*K/1000);
const base=(name,group,color,mat,opacity)=>({name,group,color,mat,opacity});
function poly(n,g,pts,z0,z1,c,mat='paint',op=1,holes){const d=base(n,g,c,mat,op);d.poly=pts.map(p=>[mx(p[0]),mz(p[1])]);
 if(holes)d.holes=holes.map(h=>h.map(p=>[mx(p[0]),mz(p[1])]));d.y0=r4(z0);d.y1=r4(z1);E.push(d);}
function box(n,g,r,z0,z1,c,mat='paint',op=1){let[x0,y0,x1,y1]=r;if(x1<x0)[x0,x1]=[x1,x0];if(y1<y0)[y0,y1]=[y1,y0];
 if(x1-x0<1e-3||y1-y0<1e-3||z1-z0<1e-4)return;poly(n,g,[[x0,y0],[x1,y0],[x1,y1],[x0,y1]],z0,z1,c,mat,op);}
function rrect(r,rad,seg=6){const[x0,y0,x1,y1]=r;rad=Math.min(rad,(x1-x0)/2,(y1-y0)/2);const pts=[];
 for(const[cx,cy,a0]of[[x1-rad,y0+rad,-90],[x1-rad,y1-rad,0],[x0+rad,y1-rad,90],[x0+rad,y0+rad,180]])
  for(let i=0;i<=seg;i++){const a=(a0+90*i/seg)*Math.PI/180;pts.push([cx+rad*Math.cos(a),cy+rad*Math.sin(a)]);}return pts;}
const rbox=(n,g,r,rad,z0,z1,c,mat='paint',op=1)=>poly(n,g,rrect(r,rad),z0,z1,c,mat,op);
function cyl(n,g,cx,cy,r,z0,z1,c,mat='paint',axis='y',op=1){const d=base(n,g,c,mat,op);d.cyl=[mx(cx),mz(cy),r4(r)];d.axis=axis;
 if(axis==='y'){d.y0=r4(z0);d.y1=r4(z1);}else{d.yc=r4(z0);d.len=r4(z1);d.y0=r4(z0-r);d.y1=r4(z0+r);}E.push(d);}
function sph(n,g,cx,cy,zc,r,c,mat='paint',sy=1){const d=base(n,g,c,mat,1);d.sph=[mx(cx),mz(cy),r4(zc),r4(r),sy];d.y0=r4(zc-r*sy);d.y1=r4(zc+r*sy);E.push(d);}
function splitFront(r,f,t){const[x0,y0,x1,y1]=r;
 if(f==='S')return[[x0,y0,x1,y1-t],[x0,y1-t,x1,y1]];if(f==='N')return[[x0,y0+t,x1,y1],[x0,y0,x1,y0+t]];
 if(f==='E')return[[x0,y0,x1-t,y1],[x1-t,y0,x1,y1]];return[[x0+t,y0,x1,y1],[x0,y0,x0+t,y1]];}
const along=(r,f)=>'NS'.includes(f)?[r[0],r[2],true]:[r[1],r[3],false];
const sub=(s,f,a,b)=>'NS'.includes(f)?[a,s[1],b,s[3]]:[s[0],a,s[2],b];
function insetBack(r,f,d){const[x0,y0,x1,y1]=r;return{S:[x0,y0,x1,y1-d],N:[x0,y0+d,x1,y1],E:[x0,y0,x1-d,y1],W:[x0+d,y0,x1,y1]}[f];}
function outward(s,f,d){const[x0,y0,x1,y1]=s;return{S:[x0,y1,x1,y1+d],N:[x0,y0-d,x1,y0],E:[x1,y0,x1+d,y1],W:[x0-d,y0,x0,y1]}[f];}
const GAP=T(3),FT=T(18);
function casework(name,r,f,bands,body=CREAM,face=OAK,handle='groove',g='noithat'){
 bands.forEach((b,bi)=>{const[z0,z1,kind,n]=b;const col=b.length>4?b[4]:face;const tag=`${name} · ${kind} ${bi+1}`;
  if(kind==='plinth')box(tag,g,insetBack(r,f,T(50)),z0,z1,BLACK,'wood');
  else if(kind==='top')box(tag,g,r,z0,z1,col,b.length>5?b[5]:'stone');
  else if(kind==='doors'||kind==='drawers'){const[bodyr,strip]=splitFront(r,f,FT);box(tag+' thân',g,bodyr,z0,z1,body,'wood');
   const[a0,a1]=along(r,f);const w=(a1-a0)/n;const rows=kind==='drawers'&&b.length>5?b[5]:(kind==='doors'?1:2);const hz=(z1-z0)/rows;
   for(let i=0;i<n;i++)for(let j=0;j<rows;j++){const fa=a0+i*w+GAP/2,fb=a0+(i+1)*w-GAP/2,fz0=z0+j*hz+0.0015,fz1=z0+(j+1)*hz-0.0015;
    box(`${tag} cánh ${i+1}.${j+1}`,g,sub(strip,f,fa,fb),fz0,fz1,col,'wood');
    if(handle==='bar'){if(kind==='doors'){const edge=i%2===0?fb-T(40):fa+T(28);const hr=sub(outward(strip,f,T(20)),f,edge,edge+T(12));
      const hm=Math.min(fz1-0.1,Math.max(fz0+0.3,z0<1?1.05:fz0+0.15));box(`${tag} tay nắm ${i+1}`,g,hr,hm-0.15,hm+0.15,BLACK,'metal');}
     else{const mid=(fa+fb)/2;box(`${tag} tay nắm ${i+1}.${j+1}`,g,sub(outward(strip,f,T(20)),f,mid-T(90),mid+T(90)),fz1-0.05,fz1-0.035,BLACK,'metal');}}}}
  else if(kind==='open'){const[x0,y0,x1,y1]=r;const back={S:[x0,y0,x1,y0+T(12)],N:[x0,y1-T(12),x1,y1],E:[x0,y0,x0+T(12),y1],W:[x1-T(12),y0,x1,y1]}[f];
   box(tag+' hậu',g,back,z0,z1,col,'wood');const[a0,a1,hz]=along(r,f);
   for(let k=0;k<=n;k++){const a=a0+(a1-a0)*k/n;const[aa,bb]=k===0?[a,a+T(18)]:(k===n?[a-T(18),a]:[a-T(9),a+T(9)]);
    box(`${tag} vách ${k}`,g,hz?[aa,y0,bb,y1]:[x0,aa,x1,bb],z0,z1,face,'wood');}
   const sh=b.length>5?b[5]:0;for(let s=0;s<sh;s++){const zz=z0+(z1-z0)*(s+1)/(sh+1);box(`${tag} đợt ${s+1}`,g,r,zz-0.009,zz+0.009,face,'wood');}
   box(tag+' đáy',g,r,z0,z0+0.018,face,'wood');box(tag+' nóc',g,r,z1-0.018,z1,face,'wood');}});}
function slats(name,r,ax,z0,z1,w=40,gp=20,color=OAK,backing=WAL,g='noithat'){const[x0,y0,x1,y1]=r;box(name+' · tấm nền',g,r,z0,z1,backing,'wood');
 const[a0,a1]=ax==='x'?[x0,x1]:[y0,y1];const step=T(w+gp);let a=a0+T(gp)/2,i=0;
 while(a+T(w)<=a1+1e-6){box(`${name} · nan ${i+1}`,g,ax==='x'?[a,y0,a+T(w),y1]:[x0,a,x1,a+T(w)],z0,z1,color,'wood');a+=step;i++;}}
function table(name,r,ztop=0.75,t=0.03,leg=45,inset=60,top=OAK,legc=OAK,rad=0){const[x0,y0,x1,y1]=r;
 if(rad)rbox(name+' · mặt','noithat',r,rad,ztop-t,ztop,top,'wood');else box(name+' · mặt','noithat',r,ztop-t,ztop,top,'wood');
 const i=T(inset),l=T(leg);[[x0+i,y0+i],[x1-i-l,y0+i],[x0+i,y1-i-l],[x1-i-l,y1-i-l]].forEach(([a,b],k)=>box(`${name} · chân ${k+1}`,'noithat',[a,b,a+l,b+l],0,ztop-t,legc,'wood'));}
function chair(name,cx,cy,face){const s=T(440)/2,l=T(32),r=[cx-s,cy-s,cx+s,cy+s];
 box(name+' · mặt ngồi','noithat',r,0.43,0.46,OAK,'wood');rbox(name+' · đệm','noithat',[cx-s+T(20),cy-s+T(20),cx+s-T(20),cy+s-T(20)],T(40),0.46,0.49,LINEN,'fabric');
 const legs=[[r[0],r[1]],[r[2]-l,r[1]],[r[0],r[3]-l],[r[2]-l,r[3]-l]];const back={E:[0,2],W:[1,3],N:[2,3],S:[0,1]}[face];
 legs.forEach(([a,b],k)=>box(`${name} · chân ${k+1}`,'noithat',[a,b,a+l,b+l],0,back.includes(k)?0.82:0.43,OAK,'wood'));
 const[x0,y0,x1,y1]=r;box(name+' · tựa','noithat',{E:[x0,y0,x0+l,y1],W:[x1-l,y0,x1,y1],N:[x0,y1-l,x1,y1],S:[x0,y0,x1,y0+l]}[face],0.64,0.8,OAK,'wood');}
function pendant(name,cx,cy,bottom,r=0.2,kind='globe',color=LINEN){cyl(name+' · dây','den',cx,cy,0.004,bottom+2*r*0.8,H,BLACK,'metal');
 if(kind==='globe')sph(name+' · chụp','den',cx,cy,bottom+r*0.8,r,color,'lamp',0.8);else cyl(name+' · chụp','den',cx,cy,r,bottom,bottom+r*0.7,color,'lamp');E[E.length-1].lamp=true;}
const downlight=(cx,cy)=>cyl('Đèn âm trần','den',cx,cy,0.045,H-0.012,H-0.001,'#fffaf0','lamp');
function plant(name,cx,cy,h=1.2,pot=0.18,potc=CREAM){cyl(name+' · chậu','decor',cx,cy,pot,0,pot*2,potc,'ceramic');
 cyl(name+' · thân','decor',cx,cy,0.015,pot*2,h*0.7,WAL,'wood');sph(name+' · tán 1','decor',cx,cy,h*0.72,h*0.22,LEAF,'plant',1.1);
 sph(name+' · tán 2','decor',cx+T(90),cy-T(60),h*0.88,h*0.16,LEAF2,'plant',1.1);sph(name+' · tán 3','decor',cx-T(80),cy+T(70),h*0.6,h*0.15,LEAF2,'plant',1.1);}
function curtain(name,x0,x1,y0,y1,color=LINEN){const n=Math.floor((y1-y0)/T(120)),w=(y1-y0)/n;
 box(name+' · ray','noithat',[x0,y0,x1,y1],H-0.05,H-0.02,BLACK,'metal');
 for(let i=0;i<n;i++){const off=i%2?T(25):0;box(`${name} · nếp ${i+1}`,'noithat',[x0+off,y0+i*w,x0+off+(x1-x0)*0.35,y0+(i+1)*w],0.02,H-0.06,color,'fabric',0.92);}}
function doorLeaf(name,r,color=OAK_L){box(name+' · cánh','cua',r,0,DH-0.03,color,'wood');const[x0,y0,x1,y1]=r;
 if(x1-x0>y1-y0){const hx=x1-T(70);box(name+' · tay nắm','cua',[hx,y0-T(25),hx+T(20),y1+T(25)],1.0,1.04,BLACK,'metal');}
 else{const hy=y1-T(70);box(name+' · tay nắm','cua',[x0-T(25),hy,x1+T(25),hy+T(20)],1.0,1.04,BLACK,'metal');}}

// 1. SÀN, TRẦN
box('Sàn kết cấu','san',[301,185,883.7,675],-0.12,-0.012,'#b9b2a6');
box('Sàn gỗ sồi','san',[301,185,883.7,675],-0.012,0,'#cdb08a','floor_wood');
[['WC1',[310.1,205.9,457.7,291.7]],['WC2',[593.9,478.4,696.2,581.7]],['Lô gia giặt',[669,587.8,873.4,661.3]],['Lô gia giặt (lối)',[486,587.8,669,661.3]]]
 .forEach(([n,r])=>box('Sàn gạch '+n,'san',r,0,0.004,TILE_W,'floor_tile'));
box('Trần thạch cao','tran',[301,185,883.7,675],H,H+0.04,CEIL);
// 2. TƯỜNG (lấy từ nét tô đen trong PDF)
const WP=[[[560.8,557.4],[560.8,587.8],[873.4,587.8],[873.4,587.1],[883.7,587.1],[883.7,520.9],[873.4,520.9],[873.4,581.7],[702.2,581.7],[702.2,472.4],[690.0,472.4],[690.0,478.4],[696.2,478.4],[696.2,581.7],[593.9,581.7],[593.9,478.4],[645.4,478.4],[645.4,472.4],[593.9,472.4],[593.9,388.6],[637.2,388.6],[637.2,382.6],[587.8,382.6],[587.8,557.4]],[[688.4,382.6],[688.4,388.6],[873.4,388.6],[873.4,421.5],[883.7,421.5],[883.7,361.5],[873.4,361.5],[873.4,382.6]],[[409.4,190.8],[409.4,199.8],[457.7,199.8],[457.7,291.7],[451.7,291.7],[451.7,297.7],[463.7,297.7],[463.7,199.8],[765.0,199.8],[765.0,190.8]],[[409.4,661.3],[409.4,670.3],[765.0,670.3],[765.0,661.3]],[[661.4,588.7],[661.4,609.2],[669.0,609.2],[669.0,588.7]],[[472.1,382.6],[472.1,388.6],[480.0,388.6],[480.0,587.1],[486.0,587.1],[486.0,382.6]],[[301.0,403.2],[301.0,654.7],[310.1,654.7],[310.1,409.2],[415.4,409.2],[415.4,388.6],[421.0,388.6],[421.0,382.6],[409.4,382.6],[409.4,403.2]],[[301.0,205.9],[301.0,308.0],[310.1,308.0],[310.1,297.7],[405.2,297.7],[405.2,291.7],[310.1,291.7],[310.1,226.9],[364.3,226.9],[364.3,205.9],[358.2,205.9],[356.4,218.6],[310.1,220.9],[310.1,205.9]]];
WP.forEach((p,i)=>poly(`Tường ${i+1}`,'tuong',p,0,H,WALL));
box('Vách PN1','tuong',[480,587.1,486,661.3],0,H,WALL);box('Tường cạnh cửa chính','tuong',[301,372,310.1,403.2],0,H,WALL);
[['Cột góc trên-trái',[301,185,409.4,205.9]],['Cột góc trên-phải',[765,186,883.7,205]],['Trụ biên phải',[873.4,205,883.7,233]],
 ['Cột góc dưới-trái',[301,654.7,409.4,675]],['Cột góc dưới-phải',[765,656,883.7,673]]].forEach(([n,r])=>box(n,'cot',r,0,H,WALL));
const SK=[[[[300.4,205.3],[300.4,308.6],[310.7,308.6],[310.7,298.3],[405.8,298.3],[405.8,291.1],[310.7,291.1],[310.7,227.5],[364.9,227.5],[364.9,206.5],[410.0,206.5],[410.0,200.4],[457.1,200.4],[457.1,291.1],[451.1,291.1],[451.1,298.3],[464.3,298.3],[464.3,200.4],[764.4,200.4],[764.4,205.6],[872.8,205.6],[872.8,233.6],[884.3,233.6],[884.3,185.4],[764.4,185.4],[764.4,190.2],[410.0,190.2],[410.0,184.4],[300.4,184.4]],[[409.4,185.0],[409.4,205.9],[364.3,205.9],[364.3,226.9],[310.1,226.9],[310.1,291.7],[405.2,291.7],[405.2,297.7],[310.1,297.7],[310.1,308.0],[301.0,308.0],[301.0,185.0]],[[457.7,291.7],[457.7,199.8],[409.4,199.8],[409.4,190.8],[765.0,190.8],[765.0,186.0],[883.7,186.0],[883.7,233.0],[873.4,233.0],[873.4,205.0],[765.0,205.0],[765.0,199.8],[463.7,199.8],[463.7,297.7],[451.7,297.7],[451.7,291.7]]],[[[300.4,402.6],[300.4,675.6],[410.0,675.6],[410.0,670.9],[764.4,670.9],[764.4,673.6],[884.3,673.6],[884.3,655.4],[764.4,655.4],[764.4,660.7],[486.6,660.7],[486.6,382.0],[471.5,382.0],[471.5,389.2],[479.4,389.2],[479.4,660.7],[410.0,660.7],[410.0,654.1],[310.7,654.1],[310.7,409.8],[416.0,409.8],[416.0,389.2],[421.6,389.2],[421.6,382.0],[408.8,382.0],[408.8,402.6],[310.7,402.6],[310.7,371.4],[300.4,371.4]],[[301.0,372.0],[310.1,372.0],[310.1,403.2],[409.4,403.2],[409.4,382.6],[421.0,382.6],[421.0,388.6],[415.4,388.6],[415.4,409.2],[310.1,409.2],[310.1,654.7],[301.0,654.7]],[[480.0,587.1],[480.0,388.6],[472.1,388.6],[472.1,382.6],[486.0,382.6],[486.0,661.3],[765.0,661.3],[765.0,656.0],[883.7,656.0],[883.7,673.0],[765.0,673.0],[765.0,670.3],[409.4,670.3],[409.4,661.3],[480.0,661.3]],[[409.4,654.7],[409.4,675.0],[301.0,675.0],[301.0,654.7]]],[[[660.8,609.8],[669.6,609.8],[669.6,588.4],[874.0,588.4],[874.0,587.7],[884.3,587.7],[884.3,520.3],[872.8,520.3],[872.8,581.1],[702.8,581.1],[702.8,471.8],[689.4,471.8],[689.4,479.0],[695.6,479.0],[695.6,581.1],[594.5,581.1],[594.5,479.0],[646.0,479.0],[646.0,471.8],[594.5,471.8],[594.5,389.2],[637.8,389.2],[637.8,382.0],[587.2,382.0],[587.2,556.8],[560.2,556.8],[560.2,588.4],[660.8,588.4]],[[873.4,587.1],[873.4,587.8],[560.8,587.8],[560.8,557.4],[587.8,557.4],[587.8,382.6],[637.2,382.6],[637.2,388.6],[593.9,388.6],[593.9,472.4],[645.4,472.4],[645.4,478.4],[593.9,478.4],[593.9,581.7],[696.2,581.7],[696.2,478.4],[690.0,478.4],[690.0,472.4],[702.2,472.4],[702.2,581.7],[873.4,581.7],[873.4,520.9],[883.7,520.9],[883.7,587.1]],[[669.0,588.7],[669.0,609.2],[661.4,609.2],[661.4,588.7]]],[[[884.3,360.9],[872.8,360.9],[872.8,382.0],[687.8,382.0],[687.8,389.2],[872.8,389.2],[872.8,422.1],[884.3,422.1]],[[873.4,421.5],[873.4,388.6],[688.4,388.6],[688.4,382.6],[873.4,382.6],[873.4,361.5],[883.7,361.5],[883.7,421.5]]]];
SK.forEach((s,i)=>poly(`Len chân tường ${i+1}`,'tuong',s[0],0,0.08,OAK,'wood',1,s.slice(1)));
// 3. CỬA ĐI
[['Cửa WC1',[405.2,291.7,451.7,297.7],[445,252,447.5,292]],['Cửa chính',[301,308,310.1,372],[310.1,310.3,368,312.8]],
 ['Cửa PN1',[421,382.6,472.1,388.6],[466,390,468.5,435]],['Cửa phòng master',[637.2,382.6,688.4,388.6],[640,389,642.5,435]],
 ['Cửa WC2',[645.4,472.4,690,478.4],[686,479,688.5,525]],['Cửa lô gia',[661.4,609.2,669,661.3],[668,652.5,713,655]]].forEach(([nm,op,leaf])=>{
 box('Lanh tô '+nm,'tuong',op,DH,H,WALL);const[x0,y0,x1,y1]=op;
 if(x1-x0>y1-y0){box(nm+' · khuôn trái','cua',[x0,y0-T(10),x0+T(40),y1+T(10)],0,DH,OAK,'wood');box(nm+' · khuôn phải','cua',[x1-T(40),y0-T(10),x1,y1+T(10)],0,DH,OAK,'wood');
  box(nm+' · khuôn trên','cua',[x0,y0-T(10),x1,y1+T(10)],DH-0.04,DH,OAK,'wood');}
 else{box(nm+' · khuôn trên-cạnh','cua',[x0-T(10),y0,x1+T(10),y0+T(40)],0,DH,OAK,'wood');box(nm+' · khuôn dưới-cạnh','cua',[x0-T(10),y1-T(40),x1+T(10),y1],0,DH,OAK,'wood');
  box(nm+' · khuôn trên','cua',[x0-T(10),y0,x1+T(10),y1],DH-0.04,DH,OAK,'wood');}
 doorLeaf(nm,leaf,nm==='Cửa chính'?WAL:OAK_L);});
// 4. CỬA SỔ
[['phòng khách',233,361.5,0.1,2.4,4],['PN2',421.5,520.9,0.6,2.4,3]].forEach(([nm,y0,y1,sill,head,n])=>{
 box('Bậu cửa '+nm,'tuong',[873.4,y0,883.7,y1],0,sill,WALL);box('Tường trên cửa '+nm,'tuong',[873.4,y0,883.7,y1],head,H,WALL);
 box('Kính '+nm,'kinh',[877.5,y0,879,y1],sill,head,GLASS,'glass',0.28);
 for(let k=0;k<=n;k++){const yy=y0+(y1-y0)*k/n;box(`Khung đứng cửa ${nm} ${k}`,'cua',[876,Math.max(y0,yy-T(25)),880.5,Math.min(y1,yy+T(25))],sill,head,BLACK,'metal');}
 for(const zz of[sill,head-0.05])box(`Khung ngang cửa ${nm}`,'cua',[876,y0,880.5,y1],zz,zz+0.05,BLACK,'metal');
 box('Bậu đá '+nm,'noithat',[870,y0,874,y1],sill-0.02,sill,STONE,'stone');});
box('Lan can kính lô gia','kinh',[877.5,587.1,879,656],0,1.1,GLASS,'glass',0.28);box('Tay vịn lô gia','cua',[876,587.1,880.5,656],1.1,1.15,BLACK,'metal');
for(let k=0;k<4;k++){const yy=587.1+(656-587.1)*k/3;box(`Trụ lan can ${k}`,'cua',[876.5,Math.max(587.1,yy-1),880,Math.min(656,yy+1)],0,1.1,BLACK,'metal');}

// 5. PHÒNG KHÁCH + BẾP ĂN
casework('Tủ rượu + decor',[504,199.8,715,221],'S',[[0,0.1,'plinth',0],[0.1,0.86,'doors',5],[0.86,0.88,'top',0,OAK,'wood'],[0.88,1.95,'open',5,WAL,2],[1.95,H,'doors',5]],CREAM,OAK,'bar');
[[515,1.24,0.22,CLAY],[548,1.24,0.14,CREAM],[602,1.60,0.25,CHAR],[640,1.24,0.18,SAGE],[690,1.60,0.12,CREAM]].forEach(([xx,zz,hh,c],i)=>cyl(`Bình decor ${i+1}`,'decor',xx,212,hh>0.15?0.05:0.07,zz,zz+hh,c,'ceramic'));
[565,572,578,583,655,661,666].forEach((xx,i)=>box(`Sách ${i+1}`,'decor',[xx,204,xx+4.5,216],1.24,1.24+0.2+(i%3)*0.03,[LINEN_D,CHAR,SAGE,CLAY,CREAM][i%5],'fabric'));
casework('Tủ bếp phụ',[464.4,199.8,504,237.6],'S',[[0,0.1,'plinth',0],[0.1,0.86,'drawers',1,OAK,3],[0.86,0.88,'top',0,STONE],[1.95,H,'doors',1]],CREAM,OAK,'bar');
casework('Tủ trên tủ lạnh',[464.4,237.6,504,301],'E',[[1.95,H,'doors',2]],CREAM,OAK,'bar');
rbox('Tủ lạnh · thân','noithat',[466,240,503,299],T(15),0,1.85,'#3a3937','metal');
box('Tủ lạnh · khe cánh','noithat',[503,269,503.8,270.2],0.02,1.83,BLACK,'metal');box('Tủ lạnh · tay nắm','noithat',[503,262,504.5,277],1.0,1.4,STEEL,'metal');
slats('Vách lam tivi',[715,199.8,811.5,201.6],'x',0,H);
casework('Kệ tivi treo',[718,201.6,808,222],'S',[[0.25,0.55,'drawers',3,OAK,1]],WAL,OAK,'none');
box('Tivi 65 inch','noithat',[763-T(1450)/2,202,763+T(1450)/2,203.6],1.0,1.83,'#141414','screen');
cyl('Loa decor','decor',725,212,0.05,0.55,0.75,CHAR,'ceramic');
casework('Tủ thờ',[813.7,205.2,859,239],'S',[[0,0.08,'plinth',0],[0.08,1.05,'doors',2,WAL],[1.05,1.08,'top',0,WAL,'wood']],WAL,WAL,'bar');
cyl('Bát hương','decor',836,218,0.08,1.08,1.2,'#d9d1c3','ceramic');cyl('Lọ hoa thờ trái','decor',822,214,0.04,1.08,1.33,'#d9d1c3','ceramic');cyl('Lọ hoa thờ phải','decor',850,214,0.04,1.08,1.33,'#d9d1c3','ceramic');
slats('Vách lam thờ',[813.7,199.8,859,205.2],'x',1.08,H,30,15,WAL,'#4f3627');
table('Bàn ăn',[574,219.6,620.7,302.4],0.75,0.03,50,50,OAK,OAK,T(40));
[[560.2,243.4,'E'],[625,243.4,'W'],[560.2,284.4,'E'],[625,284.4,'W']].forEach(([cx,cy,f],i)=>chair(`Ghế ăn ${i+1}`,cx,cy,f));
pendant('Đèn thả bàn ăn 1',597.3,246,1.55,0.2);pendant('Đèn thả bàn ăn 2',597.3,276,1.55,0.2);
box('Thảm phòng khách','decor',[712,268,834,372],0,0.012,'#d6ccbb','fabric');
rbox('Bàn trà · mặt','noithat',[741.7,282.3,800.7,320.4],T(300),0.34,0.37,OAK,'wood');rbox('Bàn trà · đế','noithat',[751,290,791,312],T(200),0,0.34,WAL,'wood');
cyl('Bàn trà · bình','decor',760,297,0.06,0.37,0.52,CREAM,'ceramic');box('Bàn trà · sách','decor',[777,296,792,308],0.37,0.41,LINEN_D,'fabric');
{const sx0=702,sy0=338.4,sx1=842.5,sy1=381.6;box('Sofa · khung gỗ','noithat',[sx0,sy0,sx1,sy1],0.12,0.24,OAK,'wood');
 [[sx0+2,sy0+2],[sx1-5,sy0+2],[sx0+2,sy1-5],[sx1-5,sy1-5]].forEach(([a,b],k)=>box(`Sofa · chân ${k+1}`,'noithat',[a,b,a+3,b+3],0,0.12,OAK,'wood'));
 const arm=T(160),ww=(sx1-sx0-2*arm)/3;
 for(let k=0;k<3;k++){rbox(`Sofa · đệm ngồi ${k+1}`,'noithat',[sx0+arm+k*ww+0.4,sy0+1,sx0+arm+(k+1)*ww-0.4,sy1-T(220)],T(40),0.24,0.44,LINEN,'fabric');
  rbox(`Sofa · đệm tựa ${k+1}`,'noithat',[sx0+arm+k*ww+0.4,sy1-T(220),sx0+arm+(k+1)*ww-0.4,sy1-1],T(40),0.24,0.82,LINEN,'fabric');}
 rbox('Sofa · tay trái','noithat',[sx0,sy0,sx0+arm,sy1],T(40),0.24,0.62,LINEN,'fabric');rbox('Sofa · tay phải','noithat',[sx1-arm,sy0,sx1,sy1],T(40),0.24,0.62,LINEN,'fabric');
 [[sx0+arm+6,SAGE],[sx0+arm+14,CLAY],[sx1-arm-20,SAGE]].forEach(([xx,c],k)=>rbox(`Gối sofa ${k+1}`,'decor',[xx,sy1-T(330),xx+T(420),sy1-T(210)],T(40),0.44,0.84,c,'fabric'));
 box('Chăn vắt sofa','decor',[sx1-arm-2,sy0+1,sx1-1,sy1-8],0.62,0.64,LINEN_D,'fabric');}
cyl('Đèn cây · đế','noithat',857,368,0.14,0,0.02,BLACK,'metal');cyl('Đèn cây · thân','noithat',857,368,0.012,0.02,1.45,BLACK,'metal');
cyl('Đèn cây · chụp','den',857,368,0.2,1.45,1.72,LINEN,'lamp');E[E.length-1].lamp=true;
plant('Cây góc cửa sổ',858,252,1.5,0.2);curtain('Rèm voan phòng khách',862,869,207,360,'#efe9df');
[[640,330],[700,330],[760,250],[820,250],[700,260],[540,330],[520,260]].forEach(p=>downlight(...p));
// 6. SẢNH + WC1
casework('Tủ giày kịch trần',[311,383,398,403],'N',[[0,0.12,'plinth',0],[0.12,0.95,'doors',3],[0.95,1.25,'open',3,WAL,0],[1.25,H,'doors',3]],CREAM,OAK,'none');
box('Gương sảnh','noithat',[402,399,404,403.2],0.4,1.9,MIR,'mirror');cyl('Đèn hắt hốc tủ giày','den',354,392,0.01,1.235,1.245,'#fff3dc','lamp');
box('Thảm chùi chân','decor',[312,320,332,368],0,0.01,GREIGE,'fabric');[[340,340],[440,340],[500,430],[520,520]].forEach(p=>downlight(...p));
box('WC1 · ốp tường khu tắm','noithat',[310.1,226.9,311.5,291.7],0,2.4,TILE_W,'ceramic');
box('WC1 · hộp kỹ thuật','noithat',[372,206,416,218],0,1.1,TILE_W,'ceramic');box('WC1 · mặt đá hộp KT','noithat',[372,206,416,219],1.1,1.12,STONE,'stone');
rbox('WC1 · bồn cầu treo','noithat',[385,218,403,249],T(120),0.22,0.4,WHITE,'ceramic');rbox('WC1 · nắp bồn cầu','noithat',[385.3,219,402.7,248.5],T(115),0.4,0.42,WHITE,'ceramic');
box('WC1 · nút xả','noithat',[390,217.5,398,218],0.95,1.05,STEEL,'metal');
casework('WC1 · tủ lavabo treo',[420,199.8,457.2,228],'S',[[0.45,0.8,'drawers',1,OAK,2],[0.8,0.82,'top',0,STONE]],CREAM,OAK,'none');
rbox('WC1 · chậu lavabo','noithat',[428,204,450,224],T(120),0.82,0.95,WHITE,'ceramic');cyl('WC1 · vòi lavabo','noithat',439,202.5,0.015,0.82,1.05,BLACK,'metal');
rbox('WC1 · gương','noithat',[425,199.8,452,200.8],T(80),1.05,1.8,MIR,'mirror');
box('WC1 · vách kính tắm','kinh',[364.5,227,365.8,280],0,2.0,GLASS,'glass',0.3);box('WC1 · nẹp vách kính','cua',[364.3,227,366,280],1.98,2.0,BLACK,'metal');
cyl('WC1 · cây sen','noithat',338,228.5,0.012,0,2.05,BLACK,'metal');cyl('WC1 · bát sen','noithat',338,236,0.12,2.03,2.05,BLACK,'metal');
cyl('WC1 · thoát sàn','noithat',338,262,0.06,0.004,0.006,BLACK,'metal');cyl('WC1 · thanh treo khăn','noithat',330,290.5,0.012,1.3,0.55,BLACK,'metal','x');
downlight(338,250);downlight(410,260);
// 7. PHÒNG NGỦ 1
casework('Tủ áo PN1 kịch trần',[311,410,417.6,446],'S',[[0,0.08,'plinth',0],[0.08,2.25,'doors',4],[2.25,H,'doors',4]],CREAM,OAK,'bar');
slats('Vách lam đầu giường PN1',[310.1,450,312,628],'y',0,H,60,25,OAK,CREAM);
rbox('Đầu giường PN1 · nệm bọc','noithat',[312,486,318,591],T(30),0.3,1.1,LINEN_D,'fabric');
box('Giường PN1 · đế lùi','noithat',[322,492,433,585],0,0.12,BLACK,'wood');box('Giường PN1 · khung','noithat',[318,488.2,437,589],0.12,0.3,OAK,'wood');
rbox('Giường PN1 · nệm','noithat',[320,490,435,587],T(40),0.3,0.52,WHITE,'fabric');rbox('Giường PN1 · chăn','noithat',[352,489.5,435.8,587.5],T(30),0.52,0.56,LINEN,'fabric');
box('Giường PN1 · khăn trải chân','decor',[412,489,430,588],0.56,0.58,SAGE,'fabric');
rbox('Gối PN1 1','decor',[323,494,342,535],T(60),0.52,0.66,WHITE,'fabric');rbox('Gối PN1 2','decor',[323,543,342,584],T(60),0.52,0.66,WHITE,'fabric');
rbox('Gối ôm PN1','decor',[340,520,350,558],T(60),0.52,0.62,CLAY,'fabric');
casework('Tab PN1 trên',[312,455,342,484],'E',[[0.3,0.52,'drawers',1,OAK,1]],WAL,OAK,'none');casework('Tab PN1 dưới',[312,596.2,342,625],'E',[[0.3,0.52,'drawers',1,OAK,1]],WAL,OAK,'none');
pendant('Đèn thả đầu giường PN1 trên',327,470,1.25,0.1,'cyl',LINEN);pendant('Đèn thả đầu giường PN1 dưới',327,610,1.25,0.1,'cyl',LINEN);
box('Thảm PN1','decor',[345,470,462,610],0,0.01,'#d6ccbb','fabric');
box('Bàn học · mặt','noithat',[311,628,478.8,654.7],0.72,0.75,OAK,'wood');casework('Bàn học · hộc kéo',[311,628,340,654.7],'N',[[0,0.72,'drawers',1,OAK,3]],CREAM,OAK,'none');
box('Bàn học · chân tấm','noithat',[474,628,478.8,654.7],0,0.72,OAK,'wood');box('Kệ treo 1','noithat',[345,645,470,654.7],1.15,1.17,OAK,'wood');box('Kệ treo 2','noithat',[345,645,470,654.7],1.5,1.52,OAK,'wood');
[350,354,358,361,440,444].forEach((xx,i)=>box(`Sách kệ PN1 ${i+1}`,'decor',[xx,647,xx+3.5,654],1.17,1.37+(i%2)*0.03,[CHAR,LINEN_D,SAGE,CLAY][i%4],'fabric'));
cyl('Đèn bàn · đế','noithat',455,640,0.06,0.75,0.77,BLACK,'metal');cyl('Đèn bàn · thân','noithat',455,640,0.008,0.77,1.1,BLACK,'metal');
cyl('Đèn bàn · chụp','den',455,640,0.09,1.1,1.22,LINEN,'lamp');E[E.length-1].lamp=true;
chair('Ghế học',446.4,612,'S');downlight(375,470);downlight(375,610);downlight(440,540);
// 8. BẾP
casework('Tủ bếp dưới',[551,392,587.8,557],'W',[[0,0.1,'plinth',0],[0.1,0.85,'drawers',5,OAK,2]],CREAM,OAK,'bar');
box('Mặt đá bếp','noithat',[549.8,392,587.8,557],0.85,0.88,STONE,'stone');box('Ốp lưng bếp','noithat',[586.6,392,587.8,557],0.88,1.5,'#d2cbbf','ceramic');
box('Bếp từ','noithat',[556,410,580,440],0.88,0.886,'#161616','screen');box('Chậu rửa','noithat',[558,496,582,540],0.87,0.882,'#6f7274','metal');
cyl('Vòi rửa · thân','noithat',584,518,0.016,0.88,1.22,BLACK,'metal');box('Vòi rửa · cổ','noithat',[575,517,585,519.5],1.18,1.22,BLACK,'metal');
casework('Tủ bếp trên 1',[567,392,587.8,407],'W',[[1.5,H,'doors',1,CREAM]],CREAM,OAK,'none');casework('Tủ bếp trên 2',[567,441,587.8,557],'W',[[1.5,H,'doors',4,CREAM]],CREAM,OAK,'none');
box('Máy hút mùi âm tủ','noithat',[566,407,587.8,441],1.55,1.62,STEEL,'metal');casework('Tủ trên hút mùi',[567,407,587.8,441],'W',[[1.62,H,'doors',1,CREAM]],CREAM,OAK,'none');
box('Đèn LED gầm tủ bếp','den',[568,392,570,557],1.49,1.5,'#fff3dc','lamp');cyl('Thớt gỗ','decor',570,470,0.14,0.88,0.9,OAK,'wood');
cyl('Hũ gia vị 1','decor',582,460,0.04,0.88,1.0,CREAM,'ceramic');cyl('Hũ gia vị 2','decor',582,467,0.04,0.88,0.97,CHAR,'ceramic');
downlight(530,420);downlight(530,480);downlight(530,540);
// 9. PHÒNG THAY ĐỒ + WC2
casework('Tủ áo phòng thay đồ',[594,389,633,470],'E',[[0,0.08,'plinth',0],[0.08,2.25,'doors',3],[2.25,H,'doors',3]],CREAM,OAK,'bar');
rbox('Đôn ngồi','noithat',[655,420,675,440],T(150),0,0.42,LINEN_D,'fabric');box('Gương đứng thay đồ','noithat',[694,400,696,430],0.05,1.9,MIR,'mirror');
downlight(660,400);downlight(660,450);
box('WC2 · hộp kỹ thuật','noithat',[594,488,606,526],0,1.1,TILE_W,'ceramic');box('WC2 · mặt đá hộp KT','noithat',[594,488,607,526],1.1,1.12,STONE,'stone');
rbox('WC2 · bồn cầu treo','noithat',[606,498,636,516],T(120),0.22,0.4,WHITE,'ceramic');rbox('WC2 · nắp bồn cầu','noithat',[606.5,498.3,635.5,515.7],T(115),0.4,0.42,WHITE,'ceramic');
casework('WC2 · tủ lavabo treo',[657,555,693,581.7],'N',[[0.45,0.8,'drawers',1,OAK,2],[0.8,0.82,'top',0,STONE]],CREAM,OAK,'none');
rbox('WC2 · chậu lavabo','noithat',[664,559,686,577],T(120),0.82,0.95,WHITE,'ceramic');cyl('WC2 · vòi','noithat',675,580,0.015,0.82,1.05,BLACK,'metal');
rbox('WC2 · gương','noithat',[661,580.9,689,581.7],T(80),1.05,1.8,MIR,'mirror');box('WC2 · vách kính tắm','kinh',[641,542,642.3,581.7],0,2.0,GLASS,'glass',0.3);
box('WC2 · ốp tường tắm','noithat',[594,580.3,641,581.7],0,2.4,TILE_W,'ceramic');
cyl('WC2 · cây sen','noithat',620,580.5,0.012,0,2.05,BLACK,'metal');cyl('WC2 · bát sen','noithat',620,572,0.12,2.03,2.05,BLACK,'metal');
cyl('WC2 · thoát sàn','noithat',605,570,0.06,0.004,0.006,BLACK,'metal');downlight(620,560);downlight(660,520);
// 10. KHO + LÔ GIA GIẶT
casework('Tủ đồ khô kịch trần',[553,588.7,661,609],'S',[[0,0.1,'plinth',0],[0.1,2.2,'doors',4],[2.2,H,'doors',4]],CREAM,OAK,'bar');
casework('Tủ đồ giặt kịch trần',[669,588.7,731,609],'S',[[0,0.1,'plinth',0],[0.1,2.2,'doors',2],[2.2,H,'doors',2]],CREAM,OAK,'bar');
[['Máy giặt',733.5],['Máy sấy',775.6]].forEach(([nm,x0])=>{rbox(nm+' · thân','noithat',[x0,590.4,x0+40,630],T(20),0,0.85,WHITE,'ceramic');
 cyl(nm+' · cửa','noithat',x0+20,630.4,0.17,0.45,0.03,'#39414a','metal','z');box(nm+' · bảng điều khiển','noithat',[x0+3,629.6,x0+37,630.4],0.75,0.82,'#dcdcdc','metal');});
casework('Tủ chậu giặt',[823,592,867.7,612],'S',[[0,0.1,'plinth',0],[0.1,0.85,'doors',2],[0.85,0.87,'top',0,STONE]],CREAM,OAK,'bar');
box('Chậu giặt','noithat',[830,594,860,609],0.855,0.872,STEEL,'metal');cyl('Vòi chậu giặt','noithat',845,593,0.015,0.87,1.1,BLACK,'metal');
for(let k=0;k<4;k++)cyl(`Giàn phơi thanh ${k+1}`,'noithat',800,628+k*7,0.012,2.4,(860-740)*K/1000,STEEL,'metal','x');
cyl('Thoát sàn lô gia','noithat',862,648,0.05,0.004,0.006,BLACK,'metal');plant('Cây lô gia',858,640,0.9,0.16,CLAY);
downlight(600,630);downlight(700,630);downlight(800,645);
// 11. PHÒNG NGỦ 2 (master)
slats('Vách lam đầu giường PN2',[705,579.8,870,581.7],'x',0,H,60,25,OAK,CREAM);
rbox('Đầu giường PN2 · nệm bọc','noithat',[731,574,833,579.8],T(30),0.3,1.15,LINEN_D,'fabric');
box('Giường PN2 · đế lùi','noithat',[737,459,827,570],0,0.12,BLACK,'wood');box('Giường PN2 · khung','noithat',[732.3,455,831.7,574],0.12,0.3,OAK,'wood');
rbox('Giường PN2 · nệm','noithat',[734,457,830,572],T(40),0.3,0.52,WHITE,'fabric');rbox('Giường PN2 · chăn','noithat',[733.5,456.5,830.5,542],T(30),0.52,0.56,LINEN,'fabric');
box('Giường PN2 · khăn trải chân','decor',[733,460,831,478],0.56,0.58,SAGE,'fabric');
rbox('Gối PN2 1','decor',[738,551,780,570],T(60),0.52,0.66,WHITE,'fabric');rbox('Gối PN2 2','decor',[784,551,826,570],T(60),0.52,0.66,WHITE,'fabric');
rbox('Gối trang trí PN2','decor',[768,543,796,552],T(60),0.55,0.72,CLAY,'fabric');
casework('Tab PN2 trái',[705.6,554.4,730.8,579.6],'N',[[0.3,0.52,'drawers',1,OAK,1]],WAL,OAK,'none');casework('Tab PN2 phải',[833.8,554.4,859,579.6],'N',[[0.3,0.52,'drawers',1,OAK,1]],WAL,OAK,'none');
pendant('Đèn thả PN2 trái',718,566,1.3,0.1,'cyl');pendant('Đèn thả PN2 phải',846,566,1.3,0.1,'cyl');
box('Đôn cuối giường','noithat',[745,432,820,450],0,0.42,OAK,'wood');rbox('Đệm đôn cuối giường','noithat',[746,433,819,449],T(30),0.42,0.47,LINEN_D,'fabric');
box('Thảm PN2','decor',[720,425,845,560],0,0.01,'#d6ccbb','fabric');plant('Cây góc PN2',858,404,1.1,0.17);curtain('Rèm PN2',862,869,393,578,'#e2d9ca');
downlight(740,420);downlight(820,420);downlight(780,500);

const rooms=[['Phòng khách',790,260],['Bàn ăn',597,315],['Bếp',530,470],['Phòng ngủ 1',400,520],['Phòng ngủ 2',780,510],['WC 1',400,270],
 ['WC 2',640,530],['Phòng thay đồ',660,410],['Lô gia giặt',800,650],['Sảnh',350,350],['Kho',600,630]];
return{size:[r4((883.7-OX)*K/1000),r4((675-OY)*K/1000)],height:H,elements:E,labels:rooms.map(([name,x,y])=>({name,x:mx(x),z:mz(y)}))};
}
