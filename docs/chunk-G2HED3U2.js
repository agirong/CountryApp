import{A as d,B as I,C as _,D as P,E as Q,F as L,G as W,H as N,I as x,J as V,K as X,L as Y,P as Z,R as ee,S as te,T as A,W as ie,X as j,Y as ne,Z as oe,_ as re,a as U,aa as ae,b as J,c as k,d as H,e as S,f as K,g as B,h as G,i as p,j as T,k as R,l as w,m as F,n as l,o as u,p as f,q as s,r,s as n,t as c,u as M,v as y,w as C,x as D,y as a,z as m}from"./chunk-6BTXXS36.js";var v=(()=>{class t{constructor(e){this.http=e,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(e){return this.http.get(e).pipe(k(()=>U([])))}searchCountryByAlphaCode(e){let o=`${this.apiUrl}/alpha/${e}`;return this.http.get(o).pipe(J(i=>i.length>0?i[0]:null),k(i=>U(null)))}searchCapital(e){let o=`${this.apiUrl}/capital/${e}`;return this.getCountriesRequest(o).pipe(S(i=>this.cacheStore.byCapital={term:e,countries:i}),S(()=>this.saveToLocalStorage()))}searchCountry(e){let o=`${this.apiUrl}/name/${e}`;return this.getCountriesRequest(o).pipe(S(i=>this.cacheStore.byCountries={term:e,countries:i}),S(()=>this.saveToLocalStorage()))}searchRegion(e){let o=`${this.apiUrl}/region/${e}`;return this.getCountriesRequest(o).pipe(S(i=>this.cacheStore.byRegion={region:e,countries:i}),S(()=>this.saveToLocalStorage()))}static{this.\u0275fac=function(o){return new(o||t)(G(Y))}}static{this.\u0275prov=K({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var de=t=>({itemsPerPage:10,currentPage:t}),ge=t=>["/countries/by/",t];function he(t,g){t&1&&(r(0,"div",2),a(1,` No hay pa\xEDses que mostrar
`),n())}function fe(t,g){if(t&1&&(r(0,"tr")(1,"td"),a(2),n(),r(3,"td"),a(4),n(),r(5,"td"),c(6,"img",7),n(),r(7,"td"),a(8),n(),r(9,"td"),a(10),n(),r(11,"td"),a(12),_(13,"number"),n(),r(14,"td")(15,"a",8),a(16,"Info..."),n()()()),t&2){let e=g.$implicit,o=g.index;l(2),m(o+1),l(2),d(" ",e.flag," "),l(2),s("src",e.flags.svg,F)("alt",e.name.common),l(2),m(e.name.common),l(2),m(e.capital),l(2),m(P(13,8,e.population)),l(3),s("routerLink",I(10,ge,e.cca3))}}function ye(t,g){if(t&1){let e=M();r(0,"div",3)(1,"table",4)(2,"thead")(3,"tr")(4,"th"),a(5,"Id"),n(),r(6,"th"),a(7,"Icon"),n(),r(8,"th"),a(9,"Bandera"),n(),r(10,"th"),a(11,"Nombre"),n(),r(12,"th"),a(13,"Capital"),n(),r(14,"th"),a(15,"Poblaci\xF3n"),n(),c(16,"th"),n()(),r(17,"tbody"),f(18,fe,17,12,"tr",5),_(19,"paginate"),n()(),r(20,"pagination-controls",6),y("pageChange",function(i){R(e);let h=C();return w(h.page=i)}),n()()}if(t&2){let e=C();l(18),s("ngForOf",Q(19,1,e.countries,I(4,de,e.page)))}}var E=(()=>{class t{constructor(){this.page=1,this.countries=[]}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=p({type:t,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table-responsive"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],["previousLabel","Prev","nextLabel","Next",3,"pageChange"],[1,"img-fluid",2,"max-width","50px",3,"src","alt"],[3,"routerLink"]],template:function(o,i){if(o&1&&f(0,he,2,0,"div",1)(1,ye,21,6,"ng-template",null,0,L),o&2){let h=D(2);s("ngIf",i.countries.length==0)("ngIfElse",h)}},dependencies:[N,x,te,oe,V,ne],styles:["img[_ngcontent-%COMP%]{width:25px}"]})}}return t})();function ve(t,g){t&1&&c(0,"shared-loading-spinner")}var le=(()=>{class t{constructor(e){this.countriesService=e,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(e){this.isLoading=!0,this.countriesService.searchCapital(e).subscribe(o=>{this.countries=o,this.isLoading=!1})}static{this.\u0275fac=function(o){return new(o||t)(u(v))}}static{this.\u0275cmp=p({type:t,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar Capital...",3,"onDebounce","initialValue"],[4,"ngIf"],[3,"countries"]],template:function(o,i){o&1&&(r(0,"h3"),a(1,"Por nombre de Capital"),n(),c(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),y("onDebounce",function($){return i.searchByCapital($)}),n()()(),r(6,"div",0)(7,"div",1),c(8,"hr"),f(9,ve,1,0,"shared-loading-spinner",3),c(10,"countries-table",4),n()()),o&2&&(l(5),s("initialValue",i.initialValue),l(4),s("ngIf",i.isLoading),l(),s("countries",i.countries))},dependencies:[x,ie,j,E]})}}return t})();var se=(()=>{class t{constructor(e){this.countriesService=e,this.countries=[],this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountry(e){this.countriesService.searchCountry(e).subscribe(o=>{this.countries=o})}static{this.\u0275fac=function(o){return new(o||t)(u(v))}}static{this.\u0275cmp=p({type:t,selectors:[["app-by-country-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","Buscar pa\xEDs...",3,"onDebounce","initialValue"],[3,"countries"]],template:function(o,i){o&1&&(r(0,"h3"),a(1,"Por nombre del Pa\xEDs"),n(),c(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),y("onDebounce",function($){return i.searchByCountry($)}),n()()(),r(6,"div",0)(7,"div",1),c(8,"hr")(9,"countries-table",3),n()()),o&2&&(l(5),s("initialValue",i.initialValue),l(4),s("countries",i.countries))},dependencies:[j,E]})}}return t})();var Se=t=>({"btn-outline-primary":t});function be(t,g){if(t&1){let e=M();r(0,"button",5),y("click",function(){let i=R(e).$implicit,h=C();return w(h.searchByRegion(i))}),a(1),n()}if(t&2){let e=g.$implicit,o=C();s("ngClass",I(2,Se,o.regionSelected===e)),l(),d(" ",e," ")}}var ce=(()=>{class t{constructor(e){this.countriesService=e,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.regionSelected=this.countriesService.cacheStore.byRegion.region}searchByRegion(e){this.regionSelected=e,this.countriesService.searchRegion(e).subscribe(o=>{this.countries=o})}static{this.\u0275fac=function(o){return new(o||t)(u(v))}}static{this.\u0275cmp=p({type:t,selectors:[["app-by-region-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","mx-2",3,"click","ngClass"]],template:function(o,i){o&1&&(r(0,"h3"),a(1,"Por Continente"),n(),c(2,"hr"),r(3,"div",0)(4,"div",1),f(5,be,2,4,"button",2),n()(),r(6,"div",0)(7,"div",3),c(8,"hr")(9,"countries-table",4),n()()),o&2&&(l(5),s("ngForOf",i.regions),l(4),s("countries",i.countries))},dependencies:[W,N,E]})}}return t})();function _e(t,g){t&1&&(r(0,"div",11),a(1," Espere.... "),n())}function xe(t,g){if(t&1&&(r(0,"div")(1,"div",2)(2,"div",12)(3,"h2"),a(4,"Pa\xEDs: "),r(5,"strong"),a(6),n()(),c(7,"hr"),n()()()),t&2){let e=C();l(6),m(e.country.name.common)}}var me=(()=>{class t{constructor(e,o,i){this.activatedRoute=e,this.router=o,this.countriesService=i}ngOnInit(){this.activatedRoute.params.pipe(H(({id:e})=>this.countriesService.searchCountryByAlphaCode(e))).subscribe(e=>e?this.country=e:this.router.navigateByUrl(""))}static{this.\u0275fac=function(o){return new(o||t)(u(Z),u(ee),u(v))}}static{this.\u0275cmp=p({type:t,selectors:[["app-country-page"]],decls:47,vars:17,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"row"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"],[1,"alert","alert-info","text-center"],[1,"col-12"]],template:function(o,i){if(o&1&&(f(0,_e,2,0,"ng-template",null,0,L)(2,xe,8,1,"div",1),r(3,"div",2)(4,"div",3)(5,"h3"),a(6,"Badera"),n(),c(7,"img",4),n(),r(8,"div",5)(9,"h3"),a(10,"Informaci\xF3n"),n(),r(11,"ul",6)(12,"li",7)(13,"strong"),a(14,"Capital: "),n(),a(15),n(),r(16,"li",7)(17,"strong"),a(18,"Poblaci\xF3n: "),n(),a(19),_(20,"number"),n(),r(21,"li",7)(22,"strong"),a(23,"\xC1rea: "),n(),a(24),_(25,"number"),n(),r(26,"li",7)(27,"strong"),a(28,"Ubicaci\xF3n: "),n(),a(29),n(),r(30,"li",7)(31,"strong"),a(32,"Prefijo: "),n(),a(33),n()()(),r(34,"div",8)(35,"div",5)(36,"h3"),a(37,"Lenguajes"),n(),r(38,"div",9)(39,"span",10),a(40),n(),r(41,"span",10),a(42),n(),r(43,"span",10),a(44),n(),r(45,"span",10),a(46),n()()()()()),o&2){let h=D(1);l(2),s("ngIf",i.country)("ngIfElse",h),l(5),s("src",i.country==null||i.country.flags==null?null:i.country.flags.svg,F)("alt",i.country==null||i.country.name==null?null:i.country.name.common),l(8),d("",i.country==null?null:i.country.capital," "),l(4),d("",P(20,13,i.country==null?null:i.country.population)," "),l(5),d("",P(25,15,i.country==null?null:i.country.area)," Kms2 "),l(5),d("",i.country==null||i.country.capitalInfo==null?null:i.country.capitalInfo.latlng," "),l(4),d("",i.country==null?null:i.country.cca3," "),l(7),m(i.country==null||i.country.languages==null?null:i.country.languages.spa),l(2),m(i.country==null||i.country.languages==null?null:i.country.languages.eng),l(2),m(i.country==null||i.country.languages==null?null:i.country.languages.ita),l(2),m(i.country==null||i.country.languages==null?null:i.country.languages.ara)}},dependencies:[x,V]})}}return t})();var Ee=[{path:"by-capital",component:le},{path:"by-country",component:se},{path:"by-region",component:ce},{path:"by/:id",component:me},{path:"**",redirectTo:"by-capital"}],pe=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=T({type:t})}static{this.\u0275inj=B({imports:[A.forChild(Ee),A]})}}return t})();var et=(()=>{class t{static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275mod=T({type:t})}static{this.\u0275inj=B({imports:[X,pe,ae,re]})}}return t})();export{et as CountriesModule};
