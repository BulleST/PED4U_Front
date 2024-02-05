"use strict";(self.webpackChunkPED4U=self.webpackChunkPED4U||[]).push([[75],{3075:(G,m,i)=>{i.r(m),i.d(m,{UsuariosModule:()=>z});var g=i(6814),u=i(2999),C=i(590),v=i(708),r=i(2832),l=i(5219);class O{constructor(){this.id=0,this.perfilAcesso=void 0,this.perfilAcesso_Id=void 0,this.name="",this.email="",this.telefoneCelular=""}}var T=[{field:"id",header:"Id",maskType:r.O.undefined,filterType:r.vA.text,filterDisplay:r.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:l.a6.EQUALS},{field:"name",header:"Nome",filterType:r.vA.text,filterDisplay:r.w2.menu,maskType:r.O.substring,substringLength:22,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:l.a6.CONTAINS},{field:"email",header:"E-mail",filterType:r.vA.text,filterDisplay:r.w2.menu,maskType:r.O.substring,substringLength:30,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:l.a6.CONTAINS},{field:"telefoneCelular",header:"Telefone/Celular",filterType:r.vA.text,filterDisplay:r.w2.menu,maskType:r.O.undefined,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:l.a6.CONTAINS},{field:"perfilAcesso.perfil",header:"Tipo de Acesso",maskType:r.O.options,filterType:r.vA.text,filterDisplay:r.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:l.a6.EQUALS,values:[{value:"Admin",output:"Admin",class:"flag-yellow"},{value:"Master",output:"Master",class:"flag-info"}]},{field:"ativo",header:"Ativo",maskType:r.O.options,filterType:r.vA.text,filterDisplay:r.w2.menu,showAddButton:!1,showMatchMode:!1,showOperator:!1,filterMatchMode:l.a6.EQUALS,values:[{value:!0,output:"Ativo",class:"flag-green"},{value:!1,output:"Inativo",class:"flag-danger"}]}],t=i(9468),b=i(8787),S=i(9947),y=i(9862),h=i(5619),x=i(9397),F=i(2096),A=i(697),M=i(2425),U=i(2667),w=i(6434);let N=(()=>{class s{constructor(e,a,o,c,p){this.table=e,this.http=a,this.toastr=o,this.crypto=c,this.accountService=p,this.url=S.N.url,this.list=new h.X([]),this.objeto=new h.X(void 0),this.account=new A.mR,this.perfilAcesso=new h.X([]),this.loading=new h.X(!1),this.accountService.account.subscribe(f=>this.account=f??new A.mR)}getObject(){var e=localStorage.getItem("usuario");return e&&this.setObject(this.crypto.decrypt(e)??new O),this.objeto}setObject(e){localStorage.setItem("usuario",this.crypto.encrypt(e)??""),this.objeto.next(e)}getList(e=!1){return this.loading.next(e),this.table.loading.next(!0),this.http.get(`${this.url}/usuario`).pipe((0,x.b)({next:a=>(a=a.map(o=>(o.ativo=!o.dataDesativado,o)),this.list.next(a),this.loading.next(!1),(0,F.of)(a)),error:a=>this.toastr.error("N\xe3o foi poss\xedvel carregar usu\xe1rios.")}))}get(e){return this.http.get(`${this.url}/usuario/${e}`,{headers:new y.WM({loading:"true"})})}getPerfilAcesso(){return this.http.get(`${this.url}/perfilAcesso/getAll`).pipe((0,x.b)({next:e=>(this.perfilAcesso.next(e),e),error:e=>this.toastr.error("N\xe3o foi poss\xedvel carregar perfil.")}))}create(e){return this.http.post(`${this.url}/usuario`,e)}edit(e){return this.http.put(`${this.url}/usuario`,e)}delete(e){return this.http.delete(`${this.url}/usuario/${e}`)}deactivated(e,a){return this.http.patch(`${this.url}/usuario/${e}/${a}`,{})}resetPassword(e){return this.http.patch(`${this.url}/usuario/reset-password/${e}`,{})}static#t=this.\u0275fac=function(a){return new(a||s)(t.LFG(b.i),t.LFG(y.eN),t.LFG(M._W),t.LFG(U.w),t.LFG(w.B))};static#e=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var L=i(6361),d=i(4844);function P(s,Y){1&s&&t._UZ(0,"span",9)}const D=function(){return["cadastrar"]};function I(s,Y){1&s&&(t.TgZ(0,"div",10)(1,"a",11)(2,"span",12),t._uU(3," Cadastrar Usu\xe1rio"),t.qZA()()()),2&s&&(t.xp6(1),t.Q6J("routerLink",t.DdM(1,D)))}const $=function(){return{"min-width":"50rem"}},B=function(){return[""]},j=[{path:"",component:(()=>{class s{constructor(e,a,o){this.table=e,this.userService=a,this.accountService=o,this.faUsers=C.FVb,this.list=[],this.tableLinks=[],this.columns=T,this.subscription=[],this.loading=!1;var c=this.userService.list.subscribe(n=>this.list=Object.assign([],n));this.subscription.push(c);var p=this.userService.loading.subscribe(n=>this.loading=n);this.subscription.push(p),(0,v.n)(this.userService.getList(!0));var f=this.table.selected.subscribe(n=>{n&&(this.tableLinks=[{label:"Editar",routePath:["editar"],paramsFieldName:["id"]},{label:n.ativo?"Desabilitar":"Habilitar",routePath:[n.ativo?"desabilitar":"habilitar"],paramsFieldName:["id"]},{label:"Resetar senha",routePath:["reset-password"],paramsFieldName:["id"]}],1==this.accountService.accountValue?.perfilAcesso_Id&&this.tableLinks.push({label:"Excluir",routePath:["excluir"],paramsFieldName:["id"]}),this.tableLinks=this.table.encryptParams(this.tableLinks))});this.subscription.push(f)}ngOnDestroy(){this.subscription.forEach(e=>e.unsubscribe())}getList(){(0,v.n)(this.userService.getList(!0))}static#t=this.\u0275fac=function(a){return new(a||s)(t.Y36(b.i),t.Y36(N),t.Y36(w.B))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-list"]],decls:12,vars:11,consts:[[1,"Usuarios"],["header","Usu\xe1rios",1,"page__header"],[1,"ms-auto"],[1,"btn","btn-dark",3,"disabled","click"],["class","spinner-border spinner-border-sm me-1",4,"ngIf"],[1,"card","table-responsive"],["sortField","","dataKey","id","styleClass","p-datatable-striped","currentPageReportTemplate","Mostrando {first} a {last} de {totalRecords} p\xe1ginas",1,"table",3,"value","tableStyle","paginator","rows","showCurrentPageReport","filterDelay","globalFilterFields"],["dt",""],["topActions",""],[1,"spinner-border","spinner-border-sm","me-1"],[1,"col-xl-4","col-lg-4","col-md-4","col-sm-6","col-12","mb-2","me-md-2","mx-md-1","px-0","ng-star-inserted"],[1,"btn","btn-primary","d-flex","align-items-center","align-baseline","justify-content-center","me-md-0","me-sm-1",3,"routerLink"],[2,"margin-top","-1px","margin-bottom","1px"]],template:function(a,o){1&a&&(t.TgZ(0,"p-tabView",0)(1,"p-tabPanel",1)(2,"div",2)(3,"button",3),t.NdJ("click",function(){return o.getList()}),t.YNc(4,P,1,0,"span",4),t._uU(5,"Atualizar"),t.qZA()(),t.TgZ(6,"div",5)(7,"p-table",6,7),t.YNc(9,I,4,2,"ng-template",null,8,t.W1O),t._UZ(11,"router-outlet"),t.qZA()()()()),2&a&&(t.xp6(3),t.Q6J("disabled",o.loading),t.xp6(1),t.Q6J("ngIf",o.loading),t.xp6(3),t.Q6J("value",o.list)("tableStyle",t.DdM(9,$))("paginator",!0)("rows",5)("showCurrentPageReport",!0)("filterDelay",0)("globalFilterFields",t.DdM(10,B)))},dependencies:[g.O5,u.lC,u.rH,L.iA,d.xf,d.x4],styles:["[_ngcontent-%COMP%]:root{--primary: #ff6315;--primary-highlight: #8c47dc;--secondary: #fff;--secondary-highlight: #F94184 ;--grey: #181818;--grey-highlight: #5a5c60}.page__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;flex-flow:wrap;padding:15px 20px;background-color:#fff;box-shadow:2px 2px 2px #0000001c;width:98%;margin:0 auto 10px}.page__body[_ngcontent-%COMP%]{padding:15px 20px;width:98%;height:100%;margin:10px auto;background-color:#fff;box-shadow:2px 2px 2px #0000001c}h3[_ngcontent-%COMP%]{margin-bottom:5px;font-size:18pt;margin-left:20px;background:#ffffff;border-color:#181818;color:var(--primary)}"]})}return s})(),children:[]}];let E=(()=>{class s{static#t=this.\u0275fac=function(a){return new(a||s)};static#e=this.\u0275mod=t.oAB({type:s});static#s=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(j),u.Bz]})}return s})();var R=i(5597),J=i(95),Z=i(4532),Q=i(1979);let z=(()=>{class s{static#t=this.\u0275fac=function(a){return new(a||s)};static#e=this.\u0275mod=t.oAB({type:s});static#s=this.\u0275inj=t.cJS({imports:[g.ez,E,R.uH,L.U$,d.LU,Z.d,Q.IJ,M.Rh,J.u5]})}return s})()}}]);