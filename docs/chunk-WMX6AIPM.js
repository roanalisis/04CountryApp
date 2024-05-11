import{A as C,B as T,C as F,D,E as w,F as W,G as M,H as S,I as j,J as X,K as Y,O as Z,Q as ee,R as te,S as L,W as ie,X as V,Y as ne,a as $,b as q,c as k,d as z,e as I,f as d,g as _,h as H,i as G,j as J,k as B,l as K,m as R,n as c,o as h,p as f,q as m,r as o,s as n,t as p,u as Q,v as b,w as v,x as P,y as a,z as u}from"./chunk-JFOTONOW.js";var g=(()=>{let e=class e{constructor(i){this.http=i,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountries:{term:"",countries:[]},byRegion:{region:"",countries:[]}}}getCountriesRequest(i){return this.http.get(i).pipe(k(()=>$([])))}searchCountryByAlphaCode(i){let r=`${this.apiUrl}/alpha/${i}`;return this.http.get(r).pipe(q(s=>s.length>0?s[0]:null),k(()=>$(null)))}searchCapital(i){let r=`${this.apiUrl}/capital/${i}`;return this.getCountriesRequest(r).pipe(I(s=>this.cacheStore.byCapital={term:i,countries:s}))}searchCountry(i){let r=`${this.apiUrl}/name/${i}`;return this.getCountriesRequest(r).pipe(I(s=>this.cacheStore.byCountries={term:i,countries:s}))}searchRegion(i){let r=`${this.apiUrl}/region/${i}`;return this.getCountriesRequest(r).pipe(I(s=>this.cacheStore.byRegion={region:i,countries:s}))}};e.\u0275fac=function(r){return new(r||e)(K(Y))},e.\u0275prov=J({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function me(t,e){t&1&&(o(0,"div",2),a(1,` No hay pa\xEDses que mostrar
`),n())}var pe=t=>["/countries/by",t];function ue(t,e){if(t&1&&(o(0,"tr")(1,"td"),a(2),n(),o(3,"td"),a(4),n(),o(5,"td"),p(6,"img",5),n(),o(7,"td"),a(8),n(),o(9,"td"),a(10),n(),o(11,"td"),a(12),F(13,"number"),n(),o(14,"td")(15,"a",6),a(16,"Info"),n()()()),t&2){let l=e.$implicit,i=e.index;c(2),u(i+1),c(2),C(" ",l.flag," "),c(2),m("src",l.flags.svg,R)("alt",l.name.common),c(2),u(l.name.common),c(2),u(l.capital),c(2),u(D(13,8,l.population)),c(3),m("routerLink",T(10,pe,l.cca3))}}function de(t,e){if(t&1&&(o(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),n(),o(5,"th"),a(6,"Icon"),n(),o(7,"th"),a(8,"Bandera"),n(),o(9,"th"),a(10,"Nombre"),n(),o(11,"th"),a(12,"Capital"),n(),o(13,"th"),a(14,"Poblaci\xF3n"),n(),p(15,"th"),n()(),o(16,"tbody"),f(17,ue,17,12,"tr",4),n()()),t&2){let l=v();c(17),m("ngForOf",l.countries)}}var E=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=d({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(r,s){if(r&1&&f(0,me,2,0,"div",0)(1,de,18,1,"ng-template",null,1,w),r&2){let y=P(2);m("ngIf",s.countries.length===0)("ngIfElse",y)}},dependencies:[M,S,te,j],styles:["img[_ngcontent-%COMP%]{width:25px}"]});let t=e;return t})();function fe(t,e){t&1&&p(0,"shared-loading-spiner")}var re=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCapital.countries,this.initialValue=this.countriesService.cacheStore.byCapital.term}searchByCapital(i){this.isLoading=!0,this.countriesService.searchCapital(i).subscribe(r=>{this.countries=r,this.isLoading=!1})}};e.\u0275fac=function(r){return new(r||e)(h(g))},e.\u0275cmp=d({type:e,selectors:[["app-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(r,s){r&1&&(o(0,"h2"),a(1,"Por Capital"),n(),p(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onDebounce",function(O){return s.searchByCapital(O)}),n()()(),o(6,"div",0)(7,"div",1),p(8,"hr"),f(9,fe,1,0,"shared-loading-spiner",3),p(10,"countries-table",4),n()()),r&2&&(c(5),m("initialValue",s.initialValue),c(4),m("ngIf",s.isLoading),c(),m("countries",s.countries))},dependencies:[S,ie,V,E]});let t=e;return t})();var oe=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.initialValue=""}ngOnInit(){this.countries=this.countriesService.cacheStore.byCountries.countries,this.initialValue=this.countriesService.cacheStore.byCountries.term}searchByCountry(i){this.countriesService.searchCountry(i).subscribe(r=>{this.countries=r})}};e.\u0275fac=function(r){return new(r||e)(h(g))},e.\u0275cmp=d({type:e,selectors:[["app-by-contry-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por pa\xEDs",3,"initialValue","onDebounce"],[3,"countries"]],template:function(r,s){r&1&&(o(0,"h2"),a(1,"Por Pa\xEDs"),n(),p(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onDebounce",function(O){return s.searchByCountry(O)}),n()()(),o(6,"div",0)(7,"div",1),p(8,"hr")(9,"countries-table",3),n()()),r&2&&(c(5),m("initialValue",s.initialValue),c(4),m("countries",s.countries))},dependencies:[V,E]});let t=e;return t})();var ge=t=>({"btn-outline-primary":t});function ye(t,e){if(t&1){let l=Q();o(0,"button",5),b("click",function(){let s=H(l).$implicit,y=v();return G(y.searchByRegion(s))}),a(1),n()}if(t&2){let l=e.$implicit,i=v();m("ngClass",T(2,ge,i.selectedRegion===l)),c(),C(" ",l," ")}}var ae=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[],this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.countries=this.countriesService.cacheStore.byRegion.countries,this.selectedRegion=this.countriesService.cacheStore.byRegion.region}searchByRegion(i){this.selectedRegion=i,this.countriesService.searchRegion(i).subscribe(r=>{this.countries=r})}};e.\u0275fac=function(r){return new(r||e)(h(g))},e.\u0275cmp=d({type:e,selectors:[["app-by-region-page"]],decls:10,vars:2,consts:[[1,"row"],[1,"colt","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[3,"countries"],[1,"btn","mx-2",3,"ngClass","click"]],template:function(r,s){r&1&&(o(0,"h2"),a(1,"Por Regi\xF3n"),n(),p(2,"hr"),o(3,"div",0)(4,"div",1),f(5,ye,2,4,"button",2),n()(),o(6,"div",0)(7,"div",3),p(8,"hr")(9,"countries-table",4),n()()),r&2&&(c(5),m("ngForOf",s.regions),c(4),m("countries",s.countries))},dependencies:[W,M,E]});let t=e;return t})();function ve(t,e){t&1&&(o(0,"div",2),a(1," Espere por favor "),n())}function Ce(t,e){if(t&1&&(o(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4,"Pa\xEDs "),o(5,"strong"),a(6),n()(),p(7,"hr"),n()(),o(8,"div",3)(9,"div",5)(10,"h3"),a(11,"Bandera"),n(),p(12,"img",6),n(),o(13,"div",7)(14,"h3"),a(15,"Informaci\xF3n"),n(),o(16,"ul",8)(17,"li",9)(18,"strong"),a(19,"Poblaci\xF3n:"),n(),a(20),F(21,"number"),n(),o(22,"li",9)(23,"strong"),a(24,"C\xF3digo:"),n(),a(25),n()()()(),o(26,"div",10)(27,"div",7)(28,"h3"),a(29,"Traducciones"),n(),o(30,"div",11)(31,"span",12),a(32),n(),o(33,"span",12),a(34),n(),o(35,"span",12),a(36),n(),o(37,"span",12),a(38),n(),o(39,"span",12),a(40),n(),o(41,"span",12),a(42),n()()()()()),t&2){let l=v();c(6),u(l.country.name.common),c(6),m("src",l.country.flags.svg,R)("alt",l.country.name.common),c(8),C(" ",D(21,11,l.country.population)," "),c(5),C(" ",l.country.cca3," "),c(7),u(l.country.translations.ara.common),c(2),u(l.country.translations.bre.common),c(2),u(l.country.translations.fra.common),c(2),u(l.country.translations.kor.common),c(2),u(l.country.translations.jpn.common),c(2),u(l.country.translations.est.common)}}var ce=(()=>{let e=class e{constructor(i,r,s){this.activatedRoute=i,this.countriesService=r,this.router=s}ngOnInit(){this.activatedRoute.params.pipe(z(({id:i})=>this.countriesService.searchCountryByAlphaCode(i))).subscribe(i=>i?this.country=i:this.router.navigateByUrl(""))}};e.\u0275fac=function(r){return new(r||e)(h(Z),h(g),h(ee))},e.\u0275cmp=d({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m1"]],template:function(r,s){if(r&1&&f(0,ve,2,0,"ng-template",null,0,w)(2,Ce,43,13,"div",1),r&2){let y=P(1);c(2),m("ngIf",s.country)("ngIfElse",y)}},dependencies:[S,j]});let t=e;return t})();var xe=[{path:"by-capital",component:re},{path:"by-country",component:oe},{path:"by-region",component:ae},{path:"by/:id",component:ce},{path:"**",redirectTo:"by-capital"}],se=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=_({type:e}),e.\u0275inj=B({imports:[L.forChild(xe),L]});let t=e;return t})();var Ke=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=_({type:e}),e.\u0275inj=B({imports:[X,se,ne]});let t=e;return t})();export{Ke as CountriesModule};