import{$ as C,M as c,N as l,O as d,Q as u,T as s,U as f,V as h,_ as M,aa as g,g as e,i as a,j as r,r as n,s as p,t as m}from"./chunk-6BTXXS36.js";var N=[{path:"about",component:f},{path:"contact",component:h},{path:"countries",loadChildren:()=>import("./chunk-G2HED3U2.js").then(t=>t.CountriesModule)},{path:"**",redirectTo:"countries"}],A=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=r({type:t})}static{this.\u0275inj=e({imports:[s.forRoot(N),s]})}}return t})();var y=(()=>{class t{constructor(){this.title="CountryApp"}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=a({type:t,selectors:[["app-root"]],decls:5,vars:0,consts:[[1,"row","mt-4"],[1,"col-12","col-md-3","mb-3"],[1,"col-12","col-md-9"]],template:function(o,w){o&1&&(n(0,"div",0)(1,"div",1),m(2,"shared-sidebar"),p(),n(3,"div",2),m(4,"router-outlet"),p()())},dependencies:[u,C]})}}return t})();var v=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=r({type:t,bootstrap:[y]})}static{this.\u0275inj=e({imports:[d,A,c,g,M]})}}return t})();l().bootstrapModule(v).catch(t=>console.error(t));
