import{r as p,j as e,B as s,V as m,I as d,T as x}from"./index.Bzn9Dmao.js";const o=({images:t,direction:i,speed:a})=>{const c=[...t,...t,...t,...t];return e.jsx(s,{className:"scroll-row",position:"relative",width:"100%",height:{base:"45px",md:"60px",lg:"75px"},overflow:"hidden",whiteSpace:"nowrap",display:"flex",alignItems:"center",onMouseEnter:l=>{const n=l.currentTarget.querySelector(".scroll-content");n&&(n.style.animationPlayState="paused")},onMouseLeave:l=>{const n=l.currentTarget.querySelector(".scroll-content");n&&(n.style.animationPlayState="running")},children:e.jsx(s,{className:"scroll-content",position:"absolute",display:"flex",alignItems:"center",animation:`scroll${i==="left"?"Left":"Right"} ${a}s linear infinite`,style:{left:0},children:c.map((l,n)=>e.jsx(s,{px:{base:"3",md:"5",lg:"7"},display:"flex",alignItems:"center",justifyContent:"center",children:e.jsx(d,{src:l,alt:"Lumine Solicitors Panels",height:{base:"22px",md:"32px",lg:"40px",xl:"45px"},maxWidth:"180px",objectFit:"contain",loading:"lazy"})},n))})})},g=({images:t})=>(p.useEffect(()=>{const i="scroll-animations-style";if(!document.getElementById(i)){const a=document.createElement("style");a.id=i,a.textContent=`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .scroll-row {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }
      `,document.head.appendChild(a)}},[]),e.jsxs(s,{width:"100%",position:"relative",py:{base:"15px",md:"25px",lg:"35px"},display:"flex",alignItems:"center",justifyContent:"center",children:[e.jsx(s,{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(243, 239, 239, 0.45)",opacity:.8,borderRadius:"4px"}),e.jsxs(m,{width:"100%",spacing:{base:2,md:4,lg:5},position:"relative",zIndex:1,children:[e.jsx(o,{images:t,direction:"left",speed:55}),e.jsx(o,{images:t,direction:"right",speed:65}),e.jsx(o,{images:t,direction:"left",speed:45})]})]})),u="/lumine-law/assets/panels.CamS1qgG.webp",f="/lumine-law/assets/panel-barclays.CREjPO6F.png",h="/lumine-law/assets/panel-santander.8zsaIps6.png",r="/lumine-law/assets/panel-natwest.DEPCRZNC.png",y="/lumine-law/assets/panel-tsb.B-mP1ghG.png",w="/lumine-law/assets/panel-hsbc.D0PIjKXL.png",b="/lumine-law/assets/panel-pm.DEcNxr-f.png",j="/lumine-law/assets/panel-poi.B6QcOBWe.png",P="/lumine-law/assets/panel-clydesdale.BWudo8SF.png",S="/lumine-law/assets/panel-yorkshire.CWmcjsQ9.png",v="/lumine-law/assets/panel-darlington.B7U5Mx72.png",I="/lumine-law/assets/panel-ipswich.DB6eeCUM.png",E=()=>e.jsxs(s,{width:"100%",height:"100%",p:0,m:0,pt:"7.5%",display:"flex",flexDir:"column",alignItems:"flex-start",justifyContent:"center",gap:"25px",bgImage:`url(${u})`,bgPos:"center",bgSize:"cover",bgRepeat:"no-repeat",_loading:"lazy",children:[e.jsx(x,{color:"white",fontSize:{xs:"12px",sm:"14px",md:"15px",lg:"16px",xl:"18px","2xl":"20px"},fontWeight:300,fontFamily:"HelveticaNeue-Light, Helvetica Neue Light, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif",ml:{xs:"2.5%",sm:"5%",md:"7.5%",lg:"10%","2xl":"12.5%"}}),e.jsx(g,{images:[f,h,r,y,w,b,j,P,S,v,I,r]})]});export{E as default};
