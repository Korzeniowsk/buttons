(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{5557:function(e,t,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l(5044)}])},7600:function(e,t,l){"use strict";var o=l(5893),s=l(7294),a=l(1418),n=l(1163);let r=e=>{let{onClose:t}=e,[l,x]=(0,s.useState)(!1),p=(0,n.useRouter)(),i=(0,s.useCallback)(()=>{x(!0)},[]),c=(0,s.useCallback)(()=>{x(!1)},[]),u=(0,s.useCallback)(()=>{p.push("/frame-component74")},[p]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"relative rounded-xl bg-white shadow-[10px_10px_10px_rgba(0,_0,_0,_0.25)] box-border w-[811px] h-[489px] cursor-pointer max-w-full max-h-full overflow-auto text-center text-5xl text-black font-poppins border-[1px] border-solid border-black",onClick:i,children:[(0,o.jsx)("div",{className:"absolute top-[0px] left-[0px] rounded-xl bg-steelblue-100 w-[811px] h-[489px]"}),(0,o.jsxs)("button",{className:"cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[7.5%] w-[3.78%] top-[4.09%] right-[2.76%] bottom-[88.41%] left-[93.46%]",children:[(0,o.jsx)("img",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full",alt:"",src:"/vector.svg"}),(0,o.jsx)("img",{className:"absolute h-[99.96%] w-[99.91%] top-[0%] right-[0.09%] bottom-[0.04%] left-[0%] max-w-full overflow-hidden max-h-full",alt:"",src:"/vector1.svg"})]}),(0,o.jsx)("div",{className:"absolute top-[329px] left-[196px] inline-block w-[432px] h-[58px] cursor-pointer",onClick:u,children:"Try logging in again"}),(0,o.jsx)("b",{className:"absolute top-[102px] left-[106px] text-21xl inline-block w-[603px] h-[182px]",children:"A new password has been sent to your email!"})]}),l&&(0,o.jsx)(a.Z,{overlayColor:"rgba(113, 113, 113, 0.3)",placement:"Centered",onOutsideClick:c,children:(0,o.jsx)(r,{onClose:c})})]})};t.Z=r},1418:function(e,t,l){"use strict";var o=l(5893),s=l(7294),a=l(3935);let n=e=>{let{children:t,containerId:l="portals"}=e;{let e=document.getElementById(l);return e||((e=document.createElement("div")).setAttribute("id",l),document.body.appendChild(e)),(0,a.createPortal)(t,e)}};t.Z=e=>{let{children:t,overlayColor:l,placement:a="Centered",onOutsideClick:r,zIndex:x=100,left:p=0,right:i=0,top:c=0,bottom:u=0,relativeLayerRef:d}=e,b=(0,s.useRef)(null),[h,f]=(0,s.useState)({opacity:0}),m=(0,s.useMemo)(()=>{let e={};if(e.zIndex=x,l&&(e.backgroundColor=l),!(null==d?void 0:d.current))switch(a){case"Centered":e.alignItems="center",e.justifyContent="center";break;case"Top left":e.alignItems="flex-start";break;case"Top center":e.alignItems="center";break;case"Top right":e.alignItems="flex-end";break;case"Bottom left":e.alignItems="flex-start",e.justifyContent="flex-end";break;case"Bottom center":e.alignItems="center",e.justifyContent="flex-end";break;case"Bottom right":e.alignItems="flex-end",e.justifyContent="flex-end"}return e.opacity=1,e},[a,l,x,null==d?void 0:d.current]),g=(0,s.useCallback)(()=>{var e,t;let l=null==d?void 0:null===(e=d.current)||void 0===e?void 0:e.getBoundingClientRect(),o=null==b?void 0:null===(t=b.current)||void 0===t?void 0:t.getBoundingClientRect(),s={opacity:1};if(l&&o){let{x:e,y:t,width:n,height:r}=l,{width:x,height:d}=o;switch(s.position="absolute",a){case"Top left":s.top=t-d-c,s.left=e+p;break;case"Top right":s.top=t-d-c,s.left=e+n-x-i;break;case"Bottom left":s.top=t+r+u,s.left=e+p;break;case"Bottom right":s.top=t+r+u,s.left=e+n-x-i}f(s)}else s.maxWidth="90%",s.maxHeight="90%",f(s)},[p,i,c,u,a,null==d?void 0:d.current,null==b?void 0:b.current]);(0,s.useEffect)(()=>(g(),window.addEventListener("resize",g),window.addEventListener("scroll",g,!0),()=>{window.removeEventListener("resize",g),window.removeEventListener("scroll",g,!0)}),[g]);let w=(0,s.useCallback)(e=>{r&&e.target.classList.contains("portalPopupOverlay")&&r(),e.stopPropagation()},[r]);return(0,o.jsx)(n,{children:(0,o.jsx)("div",{className:"flex flex-col fixed inset-0 portalPopupOverlay",style:m,onClick:w,children:(0,o.jsx)("div",{ref:b,style:h,children:t})})})}},6967:function(e,t,l){"use strict";var o=l(5893),s=l(7294);t.Z=e=>{let{search1Top:t,search1Left:l,propLeft:a,propLeft1:n}=e,r=(0,s.useMemo)(()=>({top:t,left:l}),[t,l]),x=(0,s.useMemo)(()=>({left:a}),[a]),p=(0,s.useMemo)(()=>({left:n}),[n]);return(0,o.jsxs)("div",{className:"absolute top-[0px] left-[0px] w-[1920px] h-[187px] text-left text-21xl text-gray-300 font-poppins",children:[(0,o.jsx)("div",{className:"absolute top-[0px] left-[0px] bg-gainsboro-200 w-[1920px] h-[187px]"}),(0,o.jsxs)("div",{className:"absolute top-[21px] left-[56px] w-[433px] h-[132px]",children:[(0,o.jsx)("b",{className:"absolute top-[43px] left-[144px] inline-block w-[289px] h-[60px]",children:"SCERT KERALA"}),(0,o.jsx)("img",{className:"absolute top-[0px] left-[0px] w-36 h-[132px] object-cover",alt:"",src:"/logoremovebgpreview-1@2x.png"})]}),(0,o.jsxs)("div",{className:"absolute top-[64px] left-[1240px] w-[600px] h-[77px]",style:r,children:[(0,o.jsx)("input",{className:"[border:none] bg-whitesmoke-100 absolute top-[-1px] left-[205px] rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[395px] h-[77px]",type:"search",maxLength:!0,minLength:!0,style:x}),(0,o.jsx)("img",{className:"absolute top-[20px] left-[153px] w-[38.48px] h-[38.48px] object-cover",alt:"",src:"/search-1@2x.png",style:p})]})]})}},5044:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return i}});var o=l(5893),s=l(7294),a=l(7600),n=l(1418),r=l(1163),x=e=>{let{onClose:t}=e,[l,x]=(0,s.useState)(!1),p=(0,r.useRouter)(),i=(0,s.useCallback)(()=>{x(!0)},[]),c=(0,s.useCallback)(()=>{x(!1)},[]),u=(0,s.useCallback)(()=>{p.push("/frame-component15")},[p]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"relative rounded-xl bg-white shadow-[10px_10px_10px_rgba(0,_0,_0,_0.25)] box-border w-[811px] h-[489px] cursor-pointer max-w-full max-h-full overflow-auto text-center text-21xl text-black font-poppins border-[1px] border-solid border-black",onClick:i,children:[(0,o.jsx)("div",{className:"absolute top-[0px] left-[0px] rounded-xl bg-steelblue-100 w-[811px] h-[489px]"}),(0,o.jsxs)("button",{className:"cursor-pointer [border:none] p-0 bg-[transparent] absolute h-[7.5%] w-[3.78%] top-[4.09%] right-[2.76%] bottom-[88.41%] left-[93.46%]",onClick:u,children:[(0,o.jsx)("img",{className:"absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full",alt:"",src:"/vector.svg"}),(0,o.jsx)("img",{className:"absolute h-[99.96%] w-[99.91%] top-[0%] right-[0.09%] bottom-[0.04%] left-[0%] max-w-full overflow-hidden max-h-full",alt:"",src:"/vector1.svg"})]}),(0,o.jsx)("b",{className:"absolute top-[173px] left-[110px] inline-block w-[603px]",children:"Submitted!"})]}),l&&(0,o.jsx)(n.Z,{overlayColor:"rgba(113, 113, 113, 0.3)",placement:"Centered",onOutsideClick:c,children:(0,o.jsx)(a.Z,{onClose:c})})]})},p=l(6967),i=()=>{let[e,t]=(0,s.useState)(!1),l=(0,r.useRouter)(),a=(0,s.useCallback)(()=>{l.push("/frame-component15")},[l]),i=(0,s.useCallback)(()=>{t(!0)},[]),c=(0,s.useCallback)(()=>{t(!1)},[]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{className:"relative w-full h-[1080px] text-left text-21xl text-black font-poppins",children:[(0,o.jsx)("div",{className:"absolute top-[0px] left-[0px] bg-white w-[1920px] h-[1080px]"}),(0,o.jsx)(p.Z,{search1Top:"64px",search1Left:"1240px",propLeft:"205px",propLeft1:"147px"}),(0,o.jsxs)("button",{className:"cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[256px] left-[1523px] w-[262px] h-[55px]",onClick:a,children:[(0,o.jsx)("input",{className:"[border:none] bg-steelblue-100 absolute top-[-22px] left-[3px] rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[262px] h-[77px]",type:"text",maxLength:!0,minLength:!0}),(0,o.jsx)("b",{className:"absolute top-[0px] left-[0px] text-xl inline-block font-poppins text-gray-200 text-center w-[262px] h-[55px]",children:"Back to main page"})]}),(0,o.jsx)("b",{className:"absolute top-[224px] left-[70px] inline-block w-[829px] h-[87px]",children:"SUBMIT FEEDBACK"}),(0,o.jsxs)("div",{className:"absolute top-[311px] left-[43px] shadow-[10px_10px_10px_rgba(0,_0,_0,_0.25)] w-[1797px] h-[733px] text-5xl",children:[(0,o.jsx)("div",{className:"absolute top-[48px] left-[-8px] rounded-xl bg-gainsboro-200 w-[1797px] h-[716px]"}),(0,o.jsx)("div",{className:"absolute top-[263px] left-[40px] rounded-xl bg-white shadow-[10px_10px_4px_rgba(0,_0,_0,_0.25)] w-[1702px] h-[194px]"}),(0,o.jsx)("b",{className:"absolute top-[79px] left-[40px] inline-block w-[602px] h-[54px]",children:"Which event did you attend?"}),(0,o.jsx)("b",{className:"absolute top-[221px] left-[40px] inline-block w-[602px] h-[54px]",children:"Your comments on the attended event?"}),(0,o.jsx)("b",{className:"absolute top-[493px] left-[40px] inline-block w-[602px] h-[54px]",children:"Google form for further analysis"}),(0,o.jsx)("input",{className:"[border:none] bg-steelblue-100 absolute top-[656px] left-[1352px] rounded-xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[262px] h-[77px] cursor-pointer",type:"text",maxLength:!0,minLength:!0,onClick:i}),(0,o.jsx)("b",{className:"absolute top-[677px] left-[1389px] inline-block text-white text-center w-[187px] h-[30px]",children:"Submit"}),(0,o.jsx)("input",{className:"[border:none] bg-gray-100 absolute top-[131px] left-[42px] rounded-xl shadow-[10px_10px_4px_rgba(0,_0,_0,_0.25)] w-[759px] h-[69px]",type:"text",maxLength:!0,minLength:!0})]})]}),e&&(0,o.jsx)(n.Z,{overlayColor:"rgba(113, 113, 113, 0.3)",placement:"Centered",onOutsideClick:c,children:(0,o.jsx)(x,{onClose:c})})]})}},1163:function(e,t,l){e.exports=l(6885)}},function(e){e.O(0,[9774,2888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);