(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2023],{7896:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/frame-component15",function(){return l(2039)}])},1418:function(e,t,l){"use strict";var s=l(5893),o=l(7294),a=l(3935);let r=e=>{let{children:t,containerId:l="portals"}=e;{let e=document.getElementById(l);return e||((e=document.createElement("div")).setAttribute("id",l),document.body.appendChild(e)),(0,a.createPortal)(t,e)}};t.Z=e=>{let{children:t,overlayColor:l,placement:a="Centered",onOutsideClick:p,zIndex:n=100,left:x=0,right:i=0,top:c=0,bottom:u=0,relativeLayerRef:m}=e,h=(0,o.useRef)(null),[f,b]=(0,o.useState)({opacity:0}),d=(0,o.useMemo)(()=>{let e={};if(e.zIndex=n,l&&(e.backgroundColor=l),!(null==m?void 0:m.current))switch(a){case"Centered":e.alignItems="center",e.justifyContent="center";break;case"Top left":e.alignItems="flex-start";break;case"Top center":e.alignItems="center";break;case"Top right":e.alignItems="flex-end";break;case"Bottom left":e.alignItems="flex-start",e.justifyContent="flex-end";break;case"Bottom center":e.alignItems="center",e.justifyContent="flex-end";break;case"Bottom right":e.alignItems="flex-end",e.justifyContent="flex-end"}return e.opacity=1,e},[a,l,n,null==m?void 0:m.current]),g=(0,o.useCallback)(()=>{var e,t;let l=null==m?void 0:null===(e=m.current)||void 0===e?void 0:e.getBoundingClientRect(),s=null==h?void 0:null===(t=h.current)||void 0===t?void 0:t.getBoundingClientRect(),o={opacity:1};if(l&&s){let{x:e,y:t,width:r,height:p}=l,{width:n,height:m}=s;switch(o.position="absolute",a){case"Top left":o.top=t-m-c,o.left=e+x;break;case"Top right":o.top=t-m-c,o.left=e+r-n-i;break;case"Bottom left":o.top=t+p+u,o.left=e+x;break;case"Bottom right":o.top=t+p+u,o.left=e+r-n-i}b(o)}else o.maxWidth="90%",o.maxHeight="90%",b(o)},[x,i,c,u,a,null==m?void 0:m.current,null==h?void 0:h.current]);(0,o.useEffect)(()=>(g(),window.addEventListener("resize",g),window.addEventListener("scroll",g,!0),()=>{window.removeEventListener("resize",g),window.removeEventListener("scroll",g,!0)}),[g]);let w=(0,o.useCallback)(e=>{p&&e.target.classList.contains("portalPopupOverlay")&&p(),e.stopPropagation()},[p]);return(0,s.jsx)(r,{children:(0,s.jsx)("div",{className:"flex flex-col fixed inset-0 portalPopupOverlay",style:d,onClick:w,children:(0,s.jsx)("div",{ref:h,style:f,children:t})})})}},1314:function(e,t,l){"use strict";var s=l(5893),o=l(7294);t.Z=e=>{let{propLeft:t}=e,l=(0,o.useMemo)(()=>({left:t}),[t]);return(0,s.jsxs)("div",{className:"absolute top-[0px] left-[0px] bg-gainsboro-200 w-[1920px] h-[187px] text-left text-21xl text-gray-300 font-poppins",children:[(0,s.jsx)("div",{className:"absolute top-[46px] left-[1240px] w-[600px] h-[95px] overflow-hidden"}),(0,s.jsx)("div",{className:"absolute top-[21px] left-[56px] w-[433px] h-[145px] overflow-hidden",children:(0,s.jsxs)("div",{className:"absolute top-[0px] left-[0px] w-[433px] h-[132px]",children:[(0,s.jsx)("b",{className:"absolute top-[43px] left-[144px] inline-block w-[289px] h-[60px]",children:"SCERT KERALA"}),(0,s.jsx)("img",{className:"absolute top-[0px] left-[0px] w-36 h-[132px] object-cover",alt:"",src:"/logoremovebgpreview-1@2x.png"})]})}),(0,s.jsxs)("div",{className:"absolute top-[64px] left-[1240px] w-[600px] h-[77px]",children:[(0,s.jsx)("input",{className:"[border:none] bg-whitesmoke-100 absolute top-[-1px] left-[205px] rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[395px] h-[77px]",type:"search",maxLength:!0,minLength:!0}),(0,s.jsx)("img",{className:"absolute top-[19px] left-[151px] w-[38.48px] h-[38.48px] object-cover",alt:"",src:"/search-1@2x.png",style:l})]})]})}},2039:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return m}});var s=l(5893),o=l(7294),a=l(1163),r=e=>{let{onClose:t}=e,l=(0,a.useRouter)();(0,o.useEffect)(()=>{let e=document.querySelectorAll("[data-animate-on-scroll]"),t=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting||l.intersectionRatio>0){let e=l.target;e.classList.add("animate"),t.unobserve(e)}},{threshold:.15});for(let l=0;l<e.length;l++)t.observe(e[l]);return()=>{for(let l=0;l<e.length;l++)t.unobserve(e[l])}},[]);let r=(0,o.useCallback)(()=>{l.push("/frame-component26")},[l]),p=(0,o.useCallback)(()=>{l.push("/frame-component21")},[l]),n=(0,o.useCallback)(()=>{l.push("/frame-component20")},[l]),x=(0,o.useCallback)(()=>{l.push("/frame-component27")},[l]),i=(0,o.useCallback)(()=>{l.push("/frame-component19")},[l]);return(0,s.jsxs)("div",{className:"relative rounded-xl bg-lightskyblue w-[344px] h-[624px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-full max-h-full overflow-auto text-center text-base text-black font-poppins","data-animate-on-scroll":!0,children:[(0,s.jsxs)("div",{className:"absolute top-[102px] left-[49px] bg-lightskyblue w-[245px] h-[71px]",children:[(0,s.jsx)("b",{className:"absolute top-[27px] left-[101px] cursor-pointer",onClick:r,children:"Education"}),(0,s.jsx)("img",{className:"absolute h-[67.61%] w-[19.59%] top-[26.05%] right-[70.41%] bottom-[6.34%] left-[10%] max-w-full overflow-hidden max-h-full",alt:"",src:"/group6.svg"})]}),(0,s.jsxs)("div",{className:"absolute top-[193px] left-[49px] bg-lightskyblue w-[245px] h-[71px]",children:[(0,s.jsx)("b",{className:"absolute top-[23px] left-[97px] cursor-pointer",onClick:p,children:"Events conducted"}),(0,s.jsx)("img",{className:"absolute h-[67.61%] w-[19.59%] top-[16.2%] right-[70.41%] bottom-[16.2%] left-[10%] max-w-full overflow-hidden max-h-full",alt:"",src:"/group7.svg"})]}),(0,s.jsxs)("div",{className:"absolute top-[277px] left-[39px] bg-lightskyblue w-[245px] h-[71px]",children:[(0,s.jsx)("b",{className:"absolute top-[23px] left-[110px] cursor-pointer",onClick:n,children:"Skills"}),(0,s.jsx)("img",{className:"absolute h-[63.38%] w-[18.37%] top-[19.72%] right-[66.94%] bottom-[16.9%] left-[14.69%] max-w-full overflow-hidden max-h-full",alt:"",src:"/vector3.svg"})]}),(0,s.jsxs)("div",{className:"absolute top-[375px] left-[50px] w-[245px] h-[71px]",children:[(0,s.jsx)("div",{className:"absolute top-[0px] left-[-7px] bg-lightskyblue w-[245px] h-[71px]"}),(0,s.jsx)("b",{className:"absolute top-[23px] left-[100px] cursor-pointer",onClick:x,children:"Experience"}),(0,s.jsx)("img",{className:"absolute h-[77.04%] w-[17.55%] top-[10.56%] right-[72.04%] bottom-[12.4%] left-[10.41%] max-w-full overflow-hidden max-h-full",alt:"",src:"/group8.svg"})]}),(0,s.jsxs)("div",{className:"absolute top-[466px] left-[50px] w-[245px] h-[71px]",children:[(0,s.jsx)("div",{className:"absolute top-[0px] left-[-7px] bg-lightskyblue w-[245px] h-[71px]"}),(0,s.jsx)("b",{className:"absolute top-[22px] left-[100px] cursor-pointer",onClick:i,children:(0,s.jsx)("p",{className:"m-0",children:"Contact info"})}),(0,s.jsx)("img",{className:"absolute h-[52.21%] w-[15.1%] top-[21.13%] right-[73.06%] bottom-[26.66%] left-[11.84%] max-w-full overflow-hidden max-h-full",alt:"",src:"/vector4.svg"})]})]})},p=l(1418),n=e=>{let{onClose:t}=e,l=(0,a.useRouter)();(0,o.useEffect)(()=>{let e=document.querySelectorAll("[data-animate-on-scroll]"),t=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting||l.intersectionRatio>0){let e=l.target;e.classList.add("animate"),t.unobserve(e)}},{threshold:.15});for(let l=0;l<e.length;l++)t.observe(e[l]);return()=>{for(let l=0;l<e.length;l++)t.unobserve(e[l])}},[]);let r=(0,o.useCallback)(()=>{l.push("/frame-component17")},[l]),p=(0,o.useCallback)(()=>{l.push("/frame-component16")},[l]),n=(0,o.useCallback)(()=>{l.push("/frame-component2")},[l]),x=(0,o.useCallback)(()=>{l.push("/frame-component3")},[l]);return(0,s.jsxs)("div",{className:"relative w-[344px] h-[624px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-full max-h-full overflow-auto","data-animate-on-scroll":!0,children:[(0,s.jsx)("div",{className:"absolute top-[0px] left-[0px] rounded-xl bg-lightskyblue w-[344px] h-[624px]"}),(0,s.jsxs)("button",{className:"cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[193px] left-[49px] w-[245px] h-[71px]",children:[(0,s.jsxs)("button",{className:"cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[-91px] left-[0px] w-[245px] h-[71px]",children:[(0,s.jsx)("div",{className:"absolute top-[0px] left-[0px] bg-lightskyblue w-[245px] h-[71px]"}),(0,s.jsx)("b",{className:"absolute top-[30px] left-[116px] text-base font-poppins text-black text-center cursor-pointer",onClick:r,children:"Workshops"}),(0,s.jsx)("img",{className:"absolute h-[73.63%] w-[20.82%] top-[21.13%] right-[66.53%] bottom-[5.24%] left-[12.65%] max-w-full overflow-hidden max-h-full",alt:"",src:"/group3.svg"})]}),(0,s.jsx)("div",{className:"absolute top-[0px] left-[0px] bg-lightskyblue w-[245px] h-[71px]"}),(0,s.jsx)("b",{className:"absolute top-[19px] left-[115px] text-base font-poppins text-black text-center cursor-pointer",onClick:p,children:"Seminars"}),(0,s.jsx)("img",{className:"absolute h-[67.61%] w-[19.59%] top-[15.49%] right-[67.35%] bottom-[16.9%] left-[13.06%] max-w-full overflow-hidden max-h-full",alt:"",src:"/group4.svg"})]}),(0,s.jsxs)("button",{className:"cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[369px] left-[49px] w-[245px] h-[71px]",onClick:n,children:[(0,s.jsxs)("button",{className:"cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[-91px] left-[0px] w-[245px] h-[71px]",children:[(0,s.jsx)("div",{className:"absolute top-[0px] left-[0px] bg-lightskyblue w-[245px] h-[71px]"}),(0,s.jsx)("b",{className:"absolute top-[26px] left-[113px] text-base font-poppins text-black text-center cursor-pointer",onClick:x,children:"Add workshops"}),(0,s.jsx)("img",{className:"absolute h-[73.63%] w-[20.82%] top-[21.13%] right-[66.53%] bottom-[5.24%] left-[12.65%] max-w-full overflow-hidden max-h-full",alt:"",src:"/group3.svg"})]}),(0,s.jsx)("div",{className:"absolute top-[0px] left-[0px] bg-lightskyblue w-[245px] h-[71px]"}),(0,s.jsx)("b",{className:"absolute top-[23px] left-[118px] text-base font-poppins text-black text-center",children:"Add Seminars"}),(0,s.jsx)("img",{className:"absolute h-[67.61%] w-[19.59%] top-[15.49%] right-[67.35%] bottom-[16.9%] left-[13.06%] max-w-full overflow-hidden max-h-full",alt:"",src:"/-icon-monitor.svg"})]})]})},x=e=>{let{onClose:t}=e,l=(0,a.useRouter)();(0,o.useEffect)(()=>{let e=document.querySelectorAll("[data-animate-on-scroll]"),t=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting||l.intersectionRatio>0){let e=l.target;e.classList.add("animate"),t.unobserve(e)}},{threshold:.15});for(let l=0;l<e.length;l++)t.observe(e[l]);return()=>{for(let l=0;l<e.length;l++)t.unobserve(e[l])}},[]);let r=(0,o.useCallback)(()=>{l.push("/frame-component7")},[l]),p=(0,o.useCallback)(()=>{l.push("/frame-component4")},[l]);return(0,s.jsxs)("div",{className:"relative w-[344px] h-[624px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-full max-h-full overflow-auto text-center text-base text-black font-poppins","data-animate-on-scroll":!0,children:[(0,s.jsx)("div",{className:"absolute top-[0px] left-[0px] rounded-xl bg-lightskyblue w-[344px] h-[624px]"}),(0,s.jsx)("div",{className:"absolute top-[228px] left-[49px] bg-lightskyblue w-[245px] h-[71px]"}),(0,s.jsx)("b",{className:"absolute top-[251px] left-[141px] cursor-pointer",onClick:r,children:"Project status"}),(0,s.jsx)("img",{className:"absolute h-[7.21%] w-[13.08%] top-[38.54%] right-[63.81%] bottom-[54.25%] left-[23.11%] max-w-full overflow-hidden max-h-full",alt:"",src:"/-icon-chart.svg"}),(0,s.jsx)("div",{className:"absolute top-[326px] left-[49px] bg-lightskyblue w-[245px] h-[71px] cursor-pointer",onClick:p}),(0,s.jsx)("b",{className:"absolute top-[329px] left-[141px] text-left",children:"Add projects"}),(0,s.jsx)("img",{className:"absolute h-[6.25%] w-[11.34%] top-[52%] right-[64.97%] bottom-[41.75%] left-[23.69%] max-w-full overflow-hidden max-h-full",alt:"",src:"/-icon-send-2.svg"})]})},i=e=>{let{onClose:t}=e,l=(0,a.useRouter)();(0,o.useEffect)(()=>{let e=document.querySelectorAll("[data-animate-on-scroll]"),t=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting||l.intersectionRatio>0){let e=l.target;e.classList.add("animate"),t.unobserve(e)}},{threshold:.15});for(let l=0;l<e.length;l++)t.observe(e[l]);return()=>{for(let l=0;l<e.length;l++)t.unobserve(e[l])}},[]);let r=(0,o.useCallback)(()=>{l.push("/frame-component8")},[l]),p=(0,o.useCallback)(()=>{l.push("/frame-component10")},[l]);return(0,s.jsx)("div",{className:"relative w-[344px] h-[624px] max-w-full max-h-full overflow-auto text-center text-base text-black font-poppins",children:(0,s.jsx)("div",{className:"absolute top-[0px] left-[0px] w-[344px] h-[624px]",children:(0,s.jsxs)("div",{className:"absolute top-[0px] left-[0px] w-[344px] h-[624px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-full max-h-full overflow-auto","data-animate-on-scroll":!0,children:[(0,s.jsx)("div",{className:"absolute top-[0px] left-[0px] rounded-xl bg-lightskyblue w-[344px] h-[624px]"}),(0,s.jsx)("div",{className:"absolute top-[314px] left-[48px] bg-lightskyblue w-[245px] h-[71px] cursor-pointer",onClick:r}),(0,s.jsx)("b",{className:"absolute top-[321px] left-[133px]",children:"Receipt submission"}),(0,s.jsx)("img",{className:"absolute h-[6.73%] w-[12.21%] top-[50.08%] right-[65.55%] bottom-[43.19%] left-[22.24%] max-w-full overflow-hidden max-h-full",alt:"",src:"/-icon-clock-1.svg"}),(0,s.jsxs)("div",{className:"absolute top-[210px] left-[50px] w-[245px] h-[71px] cursor-pointer",onClick:p,children:[(0,s.jsx)("div",{className:"absolute top-[0px] left-[0px] bg-lightskyblue w-[245px] h-[71px]"}),(0,s.jsx)("b",{className:"absolute top-[24px] left-[83px]",children:"Balance sheet"}),(0,s.jsx)("img",{className:"absolute h-[59.15%] w-[17.14%] top-[20.42%] right-[72.86%] bottom-[20.42%] left-[10%] max-w-full overflow-hidden max-h-full",alt:"",src:"/group1.svg"})]})]})})})},c=e=>{let{onClose:t}=e,l=(0,a.useRouter)();(0,o.useEffect)(()=>{let e=document.querySelectorAll("[data-animate-on-scroll]"),t=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting||l.intersectionRatio>0){let e=l.target;e.classList.add("animate"),t.unobserve(e)}},{threshold:.15});for(let l=0;l<e.length;l++)t.observe(e[l]);return()=>{for(let l=0;l<e.length;l++)t.unobserve(e[l])}},[]);let r=(0,o.useCallback)(()=>{l.push("/frame-component9")},[l]),p=(0,o.useCallback)(()=>{l.push("/")},[l]);return(0,s.jsx)("div",{className:"relative w-[344px] h-[624px] max-w-full max-h-full overflow-auto text-center text-base text-black font-poppins",children:(0,s.jsxs)("div",{className:"absolute top-[0px] left-[0px] w-[344px] h-[624px] [&.animate]:animate-[0.25s_ease_0s_1_normal_forwards_slide-in-left] opacity-[0] max-w-full max-h-full overflow-auto","data-animate-on-scroll":!0,children:[(0,s.jsx)("div",{className:"absolute top-[0px] left-[0px] rounded-xl bg-lightskyblue w-[344px] h-[624px]"}),(0,s.jsxs)("div",{className:"absolute top-[218px] left-[60px] w-[245px] h-[71px]",children:[(0,s.jsx)("div",{className:"absolute top-[0px] left-[0px] bg-lightskyblue w-[245px] h-[71px]"}),(0,s.jsx)("b",{className:"absolute top-[24px] left-[83px]",children:"Balance sheet"}),(0,s.jsx)("img",{className:"absolute h-[59.15%] w-[17.14%] top-[20.42%] right-[72.86%] bottom-[20.42%] left-[10%] max-w-full overflow-hidden max-h-full",alt:"",src:"/group.svg"}),(0,s.jsx)("div",{className:"absolute top-[-71px] left-[0px] bg-lightskyblue w-[245px] h-[71px]"})]}),(0,s.jsxs)("div",{className:"absolute top-[219px] left-[41px] w-[245px] h-[71px] cursor-pointer",onClick:r,children:[(0,s.jsx)("div",{className:"absolute top-[0px] left-[0px] bg-lightskyblue w-[245px] h-[71px]"}),(0,s.jsx)("b",{className:"absolute top-[25px] left-[80px]",children:"Feedbacks received"}),(0,s.jsx)("img",{className:"absolute h-[59.15%] w-[17.14%] top-[20.42%] right-[72.86%] bottom-[20.42%] left-[10%] max-w-full overflow-hidden max-h-full",alt:"",src:"/group.svg"})]}),(0,s.jsxs)("div",{className:"absolute top-[155px] left-[41px] w-[245px] h-[71px] cursor-pointer",onClick:p,children:[(0,s.jsx)("b",{className:"absolute top-[24px] left-[85px]",children:"Submit feedback"}),(0,s.jsx)("img",{className:"absolute h-[59.15%] w-[17.14%] top-[20.42%] right-[72.86%] bottom-[20.42%] left-[10%] max-w-full overflow-hidden max-h-full",alt:"",src:"/group.svg"})]})]})})},u=l(1314),m=()=>{let[e,t]=(0,o.useState)(!1),[l,a]=(0,o.useState)(!1),[m,h]=(0,o.useState)(!1),[f,b]=(0,o.useState)(!1),[d,g]=(0,o.useState)(!1),w=(0,o.useCallback)(()=>{t(!0)},[]),v=(0,o.useCallback)(()=>{t(!1)},[]),j=(0,o.useCallback)(()=>{a(!0)},[]),k=(0,o.useCallback)(()=>{a(!1)},[]),N=(0,o.useCallback)(()=>{h(!0)},[]),C=(0,o.useCallback)(()=>{h(!1)},[]),y=(0,o.useCallback)(()=>{b(!0)},[]),_=(0,o.useCallback)(()=>{b(!1)},[]),E=(0,o.useCallback)(()=>{g(!0)},[]),I=(0,o.useCallback)(()=>{g(!1)},[]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"relative bg-white w-full h-[1080px] text-center text-base text-black font-poppins",children:[(0,s.jsx)(u.Z,{propLeft:"151px"}),(0,s.jsx)("div",{className:"absolute top-[208px] left-[837px] bg-white w-[245px] h-[292px] text-6xl",children:(0,s.jsx)("p",{className:"m-0 absolute top-[204px] left-[0px] font-bold inline-block w-[209px] h-[90px]",children:(0,s.jsx)("span",{className:"block",children:"Faculty name"})})}),(0,s.jsx)("img",{className:"absolute top-[231px] left-[888px] w-[109px] h-[123px] object-cover cursor-pointer",alt:"",src:"/-icon-user@2x.png",onClick:w}),(0,s.jsx)("div",{className:"absolute top-[540px] left-[891px] w-[193px] h-[72px] overflow-hidden cursor-pointer",onClick:j,children:(0,s.jsx)("b",{className:"absolute top-[19px] left-[54px]",children:"Events"})}),(0,s.jsx)("img",{className:"absolute h-[5.54%] w-[3.11%] top-[50.62%] right-[52.59%] bottom-[43.85%] left-[44.3%] max-w-full overflow-hidden max-h-full",alt:"",src:"/-icon-task-square.svg"}),(0,s.jsx)("div",{className:"absolute top-[630px] left-[898px] w-[193px] h-[72px] overflow-hidden cursor-pointer",onClick:N,children:(0,s.jsx)("b",{className:"absolute top-[13px] left-[48px]",children:"Projects"})}),(0,s.jsx)("img",{className:"absolute top-[629px] left-[852px] w-[57px] h-[74px] overflow-hidden object-cover",alt:"",src:"/frame@2x.png"}),(0,s.jsx)("b",{className:"absolute top-[747px] left-[945px] inline-block w-[89px] h-7 cursor-pointer",onClick:y,children:"Finances"}),(0,s.jsx)("img",{className:"absolute h-[5.54%] w-[3.53%] top-[68.03%] right-[52.17%] bottom-[26.43%] left-[44.3%] max-w-full overflow-hidden max-h-full",alt:"",src:"/group-1.svg"}),(0,s.jsx)("img",{className:"absolute h-[5.54%] w-[3.11%] top-[86.66%] right-[52.59%] bottom-[7.81%] left-[44.3%] max-w-full overflow-hidden max-h-full",alt:"",src:"/group2.svg"}),(0,s.jsx)("b",{className:"absolute top-[960px] left-[949px]",children:(0,s.jsx)("p",{className:"m-0",children:"Calendar"})}),(0,s.jsx)("b",{className:"absolute top-[850px] left-[949px] cursor-pointer",onClick:E,children:"Feedback"}),(0,s.jsx)("img",{className:"absolute top-[839px] left-[852px] w-[57px] h-[57px] overflow-hidden",alt:"",src:"/frame1.svg"})]}),e&&(0,s.jsx)(p.Z,{overlayColor:"rgba(113, 113, 113, 0.3)",placement:"Centered",onOutsideClick:v,children:(0,s.jsx)(r,{onClose:v})}),l&&(0,s.jsx)(p.Z,{overlayColor:"rgba(113, 113, 113, 0.3)",placement:"Centered",onOutsideClick:k,children:(0,s.jsx)(n,{onClose:k})}),m&&(0,s.jsx)(p.Z,{overlayColor:"rgba(113, 113, 113, 0.3)",placement:"Centered",onOutsideClick:C,children:(0,s.jsx)(x,{onClose:C})}),f&&(0,s.jsx)(p.Z,{overlayColor:"rgba(113, 113, 113, 0.3)",placement:"Centered",onOutsideClick:_,children:(0,s.jsx)(i,{onClose:_})}),d&&(0,s.jsx)(p.Z,{overlayColor:"rgba(113, 113, 113, 0.3)",placement:"Centered",onOutsideClick:I,children:(0,s.jsx)(c,{onClose:I})})]})}},1163:function(e,t,l){e.exports=l(6885)}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=7896)}),_N_E=e.O()}]);