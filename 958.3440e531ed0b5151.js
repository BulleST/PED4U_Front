"use strict";(self.webpackChunkPED4U=self.webpackChunkPED4U||[]).push([[958],{5958:(st,x,l)=>{l.r(x),l.d(x,{AbacoModule:()=>it});var d=l(2999),g=l(708),t=l(9468),m=l(40),u=l(6361),T=l(5219),h=l(4844),v=l(6263);const M=["dt"],y=function(){return["cadastrar"]};function A(e,p){if(1&e){const o=t.EpF();t.TgZ(0,"div",8)(1,"div")(2,"a",9),t._uU(3,"Cadastrar"),t.qZA()(),t.TgZ(4,"div",10)(5,"button",11),t.NdJ("click",function(){t.CHM(o);const r=t.oxw(),i=t.MAs(4);return t.KtG(r.clear(i))}),t.TgZ(6,"span",12),t._uU(7,"Limpar filtros"),t.qZA(),t._UZ(8,"i",13),t.qZA(),t.TgZ(9,"span",14),t._UZ(10,"i",15),t.TgZ(11,"input",16),t.NdJ("input",function(r){t.CHM(o);const i=t.oxw();return t.KtG(i.applyFilterGlobal(r,"contains"))}),t.qZA()()()()}2&e&&(t.xp6(2),t.Q6J("routerLink",t.DdM(1,y)))}function E(e,p){1&e&&(t.TgZ(0,"tr"),t._UZ(1,"th"),t.TgZ(2,"th",17),t._uU(3," Nome "),t._UZ(4,"p-columnFilter",18)(5,"p-sortIcon",19),t.qZA(),t.TgZ(6,"th",20),t._uU(7," P\xe1ginas Com Exerc\xedcios "),t._UZ(8,"p-columnFilter",21)(9,"p-sortIcon",22),t.qZA(),t.TgZ(10,"th",23),t._uU(11," Material Extra "),t._UZ(12,"p-columnFilter",24)(13,"p-sortIcon",25),t.qZA(),t._UZ(14,"th")(15,"th")(16,"th"),t.qZA())}const q=function(e){return["editar",e]},P=function(e){return["excluir",e]};function O(e,p){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._UZ(8,"p-tag",26),t.qZA(),t._UZ(9,"td")(10,"td"),t.TgZ(11,"td")(12,"a",27),t._uU(13,"Editar"),t.qZA(),t.TgZ(14,"a",28),t._uU(15,"Excluir"),t.qZA()()()),2&e){const o=p.$implicit,n=t.oxw();t.xp6(2),t.Oqu(o.id),t.xp6(2),t.Oqu(o.nome),t.xp6(2),t.Oqu(o.qtdePaginas),t.xp6(2),t.Q6J("value",o.materialExtra)("severity",n.getSeverity(o.materialExtra)),t.xp6(4),t.Q6J("routerLink",t.VKq(7,q,o.id)),t.xp6(2),t.Q6J("routerLink",t.VKq(9,P,o.id))}}const U=function(){return{"min-width":"50rem"}},J=function(){return["id","nome","qtdePaginas","materialExtra"]};let k=(()=>{class e{constructor(o){this.apostilasService=o,this.list=[],this.apostilasService.list.subscribe(n=>{this.list=Object.assign([],n),console.log("lista de apostilas ",n)}),(0,g.n)(o.getList())}clear(o){o.clear()}applyFilterGlobal(o,n){this.dt.filterGlobal(o.target.value,n)}getValue(o){switch(o){case!0:return"Sim";case!1:return"N\xe3o"}}getSeverity(o){switch(o){case"Sim":return"success";case"N\xe3o":return"danger";default:return"info"}}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(m.Y))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["apostilas-abaco-apostilas"]],viewQuery:function(n,r){if(1&n&&t.Gf(M,5),2&n){let i;t.iGM(i=t.CRH())&&(r.dt=i.first)}},decls:9,vars:9,consts:[[1,"apostilaAbaco"],["header","Apostila de \xc1baco"],[1,"card","table-responsive"],["sortField","","dataKey","id","styleClass","p-datatable-striped","currentPageReportTemplate","Mostrando {first} a {last} de {totalRecords} p\xe1ginas",1,"table",3,"value","tableStyle","paginator","rows","showCurrentPageReport","filterDelay","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"flex"],[1,"btn-primary",3,"routerLink"],[1,"p-2"],[1,"btn-clear",3,"click"],[1,"me-2"],[1,"pi","pi-filter-slash"],[1,"p-2","p-input-icon-right"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Digite a Palavra-Chave",1,"generalInput",3,"input"],["pSortableColumn","nome",1,"nome"],["type","text","field","nome","display","menu"],["field","nome"],["pSortableColumn","qtdePaginas",1,"qtdePaginas"],["type","text","field","qtdePaginas","display","menu"],["field","qtdePaginas"],["pSortableColumn","materialExtra",1,"materialExtra"],["type","text","field","materialExtra","display","menu"],["field","materialExtra"],[3,"value","severity"],[1,"btn","btn-edit","me-2",3,"routerLink"],[1,"btn","btn-delete",3,"routerLink"]],template:function(n,r){1&n&&(t.TgZ(0,"p-tabView",0)(1,"p-tabPanel",1)(2,"div",2)(3,"p-table",3,4),t.YNc(5,A,12,2,"ng-template",5),t.YNc(6,E,17,0,"ng-template",6),t.YNc(7,O,16,11,"ng-template",7),t.qZA()()()(),t._UZ(8,"router-outlet")),2&n&&(t.xp6(3),t.Q6J("value",r.list)("tableStyle",t.DdM(7,U))("paginator",!0)("rows",5)("showCurrentPageReport",!0)("filterDelay",0)("globalFilterFields",t.DdM(8,J)))},dependencies:[d.lC,d.rH,u.iA,T.jx,u.lQ,u.fz,u.xl,h.xf,h.x4,v.V],styles:["[_ngcontent-%COMP%]:root{--primary: #ff6315;--primary-highlight: #8c47dc;--secondary: #fff;--secondary-highlight: #F94184 ;--grey: #181818;--grey-highlight: #5a5c60}.p-tabview[_ngcontent-%COMP%]   .p-tabview-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .p-tabview-nav-link[_ngcontent-%COMP%]{border:solid #dee2e6;border-width:0 0 2px 0;border-color:transparent transparent #dee2e6 transparent;background:#ffffff;color:#181818;padding:1.25rem;font-weight:700;border-top-right-radius:6px;border-top-left-radius:6px;transition:box-shadow .2s;margin:0 0 -2px;display:flex;flex-direction:row}.p-tabview-nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;flex-direction:row;font-size:15pt;margin-left:20px;background:#ffffff;border-color:#343a40;color:#181818}.p-datatable[_ngcontent-%COMP%]   .p-datatable-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{text-align:center;padding:20px 4px;border:1px solid #dee2e6;border-width:0 0 1px 0;font-weight:700;color:#343a40;background:#f8f9fa;transition:box-shadow .2s;font-size:11pt}.flex[_ngcontent-%COMP%]{display:flex!important;justify-content:space-between}.p-button.p-button-outlined[_ngcontent-%COMP%]{background-color:transparent;color:#181818;border:1px solid;text-decoration:none;font-weight:700}td[_ngcontent-%COMP%]{text-align:center;vertical-align:middle}.p-tabview[_ngcontent-%COMP%]   .p-tabview-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:row;padding:.75rem 1.25rem;margin-bottom:0}.p-checkbox[_ngcontent-%COMP%]   .p-checkbox-box[_ngcontent-%COMP%]{border:2px solid #ced4da;background:#ffffff;width:22px;height:22px;color:#495057;border-radius:6px;transition:background-color .2s,color .2s,border-color .2s,box-shadow .2s}.flex[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.btn-clear[_ngcontent-%COMP%]{background-color:#5a5c60;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer}.btn-primary[_ngcontent-%COMP%]{background-color:var(--primary);color:#fff;padding:10px;border-radius:10px;margin:6px;font-weight:none}.btn-edit[_ngcontent-%COMP%]{background-color:#fff;color:var(--grey-highlight);border:2px solid #5a5c60;padding:7px;border-radius:10px;font-family:sans-serif;font-weight:700;font-size:14pt;transition:background-color .2s,color .2s,border-color .2s,box-shadow .2s}.btn-delete[_ngcontent-%COMP%]{background-color:var(--secondary);color:#ff6315;border:2px solid #ff6315;padding:7px;border-radius:10px;margin:6px;font-weight:none;font-size:14pt;font-weight:700}.btn[_ngcontent-%COMP%]:hover{background-color:#f94184;color:#fff;border-color:#f94184}.btn.active[_ngcontent-%COMP%]{color:#ff6315}.less-rounded[_ngcontent-%COMP%]   span.p-tag.p-tag-rounded[_ngcontent-%COMP%]{border-radius:25px}"]})}return e})();var w=l(5861),_=l(8931),f=l(2425),N=l(9862),b=l(6814),c=l(95),C=l(7680);function Y(e,p){1&e&&(t.TgZ(0,"p",16),t._uU(1," Esse campo \xe9 obrigat\xf3rio. "),t.qZA())}function Q(e,p){1&e&&(t.TgZ(0,"p",16),t._uU(1," N\xe3o insira espa\xe7os em branco antes ou no final do campo "),t.qZA())}function F(e,p){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,Y,2,0,"p",31),t.YNc(2,Q,2,0,"p",31),t.qZA()),2&e){t.oxw();const o=t.MAs(23);t.xp6(1),t.Q6J("ngIf",o.errors.required),t.xp6(1),t.Q6J("ngIf",o.errors.pattern)}}function j(e,p){1&e&&(t.TgZ(0,"p",16),t._uU(1," Esse campo \xe9 obrigat\xf3rio "),t.qZA())}function S(e,p){1&e&&(t.TgZ(0,"p",16),t._uU(1," N\xe3o insira espa\xe7os em branco antes ou no final do campo "),t.qZA())}function I(e,p){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,j,2,0,"p",31),t.YNc(2,S,2,0,"p",31),t.TgZ(3,"p",16),t._uU(4),t.qZA()()),2&e){const o=t.oxw(),n=t.MAs(32);t.xp6(1),t.Q6J("ngIf",n.errors.required),t.xp6(1),t.Q6J("ngIf",n.errors.pattern),t.xp6(2),t.Oqu(o.erro)}}function D(e,p){1&e&&(t.TgZ(0,"p",16),t._uU(1," Esse campo \xe9 obrigat\xf3rio "),t.qZA())}function z(e,p){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,D,2,0,"p",31),t.TgZ(2,"p",16),t._uU(3),t.qZA()()),2&e){const o=t.oxw(),n=t.MAs(39);t.xp6(1),t.Q6J("ngIf",n.errors.required),t.xp6(2),t.Oqu(o.erro)}}function L(e,p){1&e&&(t.TgZ(0,"div",32),t._UZ(1,"p-progressSpinner",33),t.qZA())}function G(e,p){1&e&&(t.TgZ(0,"p",15),t._uU(1," Esse campo \xe9 obrigat\xf3rio. "),t.qZA())}function W(e,p){1&e&&(t.TgZ(0,"p",15),t._uU(1," N\xe3o insira espa\xe7os em branco antes ou no final do campo "),t.qZA())}function K(e,p){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,G,2,0,"p",29),t.YNc(2,W,2,0,"p",29),t.qZA()),2&e){t.oxw();const o=t.MAs(20);t.xp6(1),t.Q6J("ngIf",o.errors.required),t.xp6(1),t.Q6J("ngIf",o.errors.pattern)}}function H(e,p){1&e&&(t.TgZ(0,"p",15),t._uU(1," Esse campo \xe9 obrigat\xf3rio "),t.qZA())}function V(e,p){1&e&&(t.TgZ(0,"p",15),t._uU(1," N\xe3o insira espa\xe7os em branco antes ou no final do campo "),t.qZA())}function B(e,p){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,H,2,0,"p",29),t.YNc(2,V,2,0,"p",29),t.TgZ(3,"p",15),t._uU(4),t.qZA()()),2&e){const o=t.oxw(),n=t.MAs(29);t.xp6(1),t.Q6J("ngIf",n.errors.required),t.xp6(1),t.Q6J("ngIf",n.errors.pattern),t.xp6(2),t.Oqu(o.erro)}}function X(e,p){1&e&&(t.TgZ(0,"p",15),t._uU(1," Esse campo \xe9 obrigat\xf3rio "),t.qZA())}function $(e,p){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,X,2,0,"p",29),t.qZA()),2&e){t.oxw();const o=t.MAs(36);t.xp6(1),t.Q6J("ngIf",o.errors.required)}}const tt=[{path:"",component:k,children:[{path:"cadastrar",component:(()=>{class e{constructor(o,n,r,i,a){this.activatedRoute=o,this.router=n,this.apostilasService=r,this.toastr=i,this.http=a,this.open=!0,this.object=new _.Y,this.id=0,this.erro="",this.loading=!1}close(){this.open=!1,this.router.navigate(["abaco"])}save(){var o=this;return(0,w.Z)(function*(){o.loading=!0,console.log(o.object),(0,g.n)(o.apostilasService.post(o.object)).then(n=>{n.success?(o.close(),o.toastr.success("Opera\xe7\xe3o conclu\xedda com sucesso"),(0,g.n)(o.apostilasService.getList())):(o.erro=n.message,o.toastr.error(n.message)),o.loading=!1}).catch(n=>{o.erro=n,console.error("console catch"+n)}).finally(()=>{o.loading=!1})})()}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(d.gz),t.Y36(d.F0),t.Y36(m.Y),t.Y36(f._W),t.Y36(N.eN))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["create-apostilas"]],decls:47,vars:11,consts:[[1,"modal"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"click"],[1,"modal-body"],["form","ngForm"],[1,"d-flex","mb-3"],["type","reset",1,"btn-clear"],[1,"column"],[1,"form-container","mb-4"],[1,"campo-container"],[1,"row"],[1,"form-group","col-md-6","col-12"],["for","nome"],[1,"text-danger"],["type","text","id","nome","name","nome","pattern","\\S(.*\\S)?","required","","minlength","5","maxlength","30",1,"form-control",3,"ngModel","change","ngModelChange"],["nome","ngModel"],[4,"ngIf"],["for","paginas"],["type","text","id","paginas","name","paginas","pattern","\\S(.*\\S)?","mask","0*","required","","minlength","1","maxlength","4",1,"form-control",3,"ngModel","ngModelChange"],["paginas","ngModel"],[1,"form-group","col-12"],["for","material"],["type","checkbox","id","material","name","material",1,"me-2",3,"ngModel","ngModelChange"],["material","ngModel"],[1,"modal-footer"],["type","button",1,"btn-cancel",3,"disabled","click"],["type","button","data-dismiss","modal",1,"btn-save",3,"disabled","click"],["class","progress-spinner",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"progress-spinner"],["styleClass","color-spinner","strokeWidth","8"]],template:function(n,r){if(1&n){const i=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),t._uU(5,"Cadastrar Apostila"),t.qZA(),t.TgZ(6,"a",5),t.NdJ("click",function(){return r.close()}),t.qZA()(),t.TgZ(7,"div",6)(8,"form",null,7)(10,"div",8)(11,"button",9),t._uU(12,"Limpar Campos"),t.qZA()(),t.TgZ(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13)(17,"div",14)(18,"label",15),t._uU(19,"T\xedtulo da apostila: "),t.TgZ(20,"span",16),t._uU(21,"*"),t.qZA()(),t.TgZ(22,"input",17,18),t.NdJ("change",function(){t.CHM(i);const s=t.MAs(23);return t.KtG(r.object.nome=s.value.trim())})("ngModelChange",function(s){return r.object.nome=s}),t.qZA(),t.YNc(24,F,3,2,"div",19),t.qZA()(),t.TgZ(25,"div",13)(26,"div",14)(27,"label",20),t._uU(28,"Quantidade de p\xe1ginas: "),t.TgZ(29,"span",16),t._uU(30,"*"),t.qZA()(),t.TgZ(31,"input",21,22),t.NdJ("ngModelChange",function(s){return r.object.qtdePaginas=s}),t.qZA(),t.YNc(33,I,5,3,"div",19),t.qZA(),t.TgZ(34,"div",13)(35,"div",23)(36,"label",24),t._uU(37,"Material Extra:"),t.qZA(),t.TgZ(38,"input",25,26),t.NdJ("ngModelChange",function(s){return r.object.materialExtra=s}),t.qZA(),t.YNc(40,z,4,2,"div",19),t.qZA()(),t.TgZ(41,"div",27)(42,"button",28),t.NdJ("click",function(){return r.close()}),t._uU(43,"Cancelar "),t.qZA(),t.TgZ(44,"button",29),t.NdJ("click",function(){return r.save()}),t._uU(45,"Salvar "),t.qZA()()()()()()()()()()(),t.YNc(46,L,2,0,"div",30)}if(2&n){const i=t.MAs(23),a=t.MAs(32),s=t.MAs(39);t.ekj("modal--show",r.open),t.xp6(22),t.Q6J("ngModel",r.object.nome),t.xp6(2),t.Q6J("ngIf",i.touched&&i.errors),t.xp6(7),t.Q6J("ngModel",r.object.qtdePaginas),t.xp6(2),t.Q6J("ngIf",a.touched&&a.errors),t.xp6(5),t.Q6J("ngModel",r.object.materialExtra),t.xp6(2),t.Q6J("ngIf",s.touched&&s.errors),t.xp6(2),t.Q6J("disabled",r.loading),t.xp6(2),t.Q6J("disabled",r.loading),t.xp6(2),t.Q6J("ngIf",r.loading)}},dependencies:[b.O5,c._Y,c.Fj,c.Wl,c.JJ,c.JL,c.Q7,c.wO,c.nD,c.c5,c.On,c.F,C.G],styles:["[_ngcontent-%COMP%]:root{--primary: #ff6315;--primary-highlight: #8c47dc;--secondary: #fff;--secondary-highlight: #F94184 ;--grey: #181818;--grey-highlight: #5a5c60}.container-header[_ngcontent-%COMP%]{background-color:var(--primary);color:#fff;padding:8px 30px;font-weight:400;letter-spacing:1.5px;text-transform:uppercase;margin-top:0;margin-bottom:0;font-size:12pt}h5[_ngcontent-%COMP%]{font-family:sans-serif;font-size:14pt;color:#ff6315;margin-top:10px}.form-control[_ngcontent-%COMP%]{padding:.375rem .75rem}.d-flex[_ngcontent-%COMP%]{display:flex!important;justify-content:right;margin-bottom:8px}.me-2[_ngcontent-%COMP%]{margin-left:8px!important;margin-top:7px;width:17px;height:16px}.btn-clear[_ngcontent-%COMP%]{background-color:#5a5c60;display:flex;justify-content:right;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:none}.btn-cancel[_ngcontent-%COMP%]{background-color:#5a5c60;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:none}.btn-save[_ngcontent-%COMP%]{background-color:#ff6315;border-color:#ff6315;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:#9b9c9d}"]})}return e})()},{path:"editar/:id",component:(()=>{class e{constructor(o,n,r,i){this.activatedRoute=o,this.router=n,this.apostilasService=r,this.toastr=i,this.open=!0,this.object=new _.Y,this.erro="",this.loading=!0,this.activatedRoute.params.subscribe(a=>{a.id?(this.object.id=a.id,(0,g.n)(this.apostilasService.get(this.object.id)).then(s=>{this.open=!0,this.object=s,this.loading=!1}).catch(s=>{this.close(),this.toastr.error("N\xe3o foi poss\xedvel acessar essa p\xe1gina")})):(this.close(),this.toastr.error("N\xe3o foi poss\xedvel acessar essa p\xe1gina")),console.log(a)})}close(){this.open=!1,this.router.navigate(["abaco"])}send(){this.loading=!0,(0,g.n)(this.apostilasService.post(this.object)).then(o=>{o.success?((0,g.n)(this.apostilasService.getList()),this.close(),this.toastr.success("Opera\xe7\xe3o conclu\xedda com sucesso")):(this.erro=o.message,this.toastr.error(o.message)),this.loading=!1}).catch(o=>{this.erro=o,console.error("console error"+o)}).finally(()=>{this.loading=!1})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(d.gz),t.Y36(d.F0),t.Y36(m.Y),t.Y36(f._W))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["edit"]],decls:43,vars:9,consts:[[1,"modal"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"click"],[1,"modal-body"],[3,"ngSubmit"],["form","ngForm"],[1,"column"],[1,"form-container","mb-4"],[1,"campo-container"],[1,"row"],[1,"form-group","col-md-6","col-12"],["for","nome"],[1,"text-danger"],["type","text","id","nome","name","nome","pattern","\\S(.*\\S)?","required","","minlength","5","maxlength","30",1,"form-control",3,"ngModel","ngModelChange","change"],["nome","ngModel"],[4,"ngIf"],["for","qtdePaginas"],["type","text","id","qtdePaginas","name","qtdePaginas","pattern","\\S(.*\\S)?","mask","0*","required","","minlength","1","maxlength","4",1,"form-control",3,"ngModel","ngModelChange"],["qtdePaginas","ngModel"],[1,"form-group","col-12"],["for","materialExtra"],["type","checkbox","id","materialExtra","name","materialExtra",1,"me-2",3,"ngModel","ngModelChange"],["materialExtra","ngModel"],[1,"modal-footer"],["type","button",1,"btn-cancel",3,"click"],["type","submit",1,"btn-save",3,"disabled"],["class","text-danger",4,"ngIf"]],template:function(n,r){if(1&n){const i=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),t._uU(5,"Editar Apostila"),t.qZA(),t.TgZ(6,"a",5),t.NdJ("click",function(){return r.close()}),t.qZA()(),t.TgZ(7,"div",6)(8,"form",7,8),t.NdJ("ngSubmit",function(){return r.send()}),t.TgZ(10,"div",9)(11,"div",10)(12,"div",11)(13,"div",12)(14,"div",13)(15,"label",14),t._uU(16,"T\xedtulo da apostila: "),t.TgZ(17,"span",15),t._uU(18,"*"),t.qZA()(),t.TgZ(19,"input",16,17),t.NdJ("ngModelChange",function(s){return r.object.nome=s})("change",function(){t.CHM(i);const s=t.MAs(20);return t.KtG(r.object.nome=s.value.trim())}),t.qZA(),t.YNc(21,K,3,2,"div",18),t.qZA()(),t.TgZ(22,"div",12)(23,"div",13)(24,"label",19),t._uU(25,"Quantidade de p\xe1ginas: "),t.TgZ(26,"span",15),t._uU(27,"*"),t.qZA()(),t.TgZ(28,"input",20,21),t.NdJ("ngModelChange",function(s){return r.object.qtdePaginas=s}),t.qZA(),t.YNc(30,B,5,3,"div",18),t.qZA(),t.TgZ(31,"div",12)(32,"div",22)(33,"label",23),t._uU(34,"Material Extra:"),t.qZA(),t.TgZ(35,"input",24,25),t.NdJ("ngModelChange",function(s){return r.object.materialExtra=s}),t.qZA(),t.YNc(37,$,2,1,"div",18),t.qZA()(),t.TgZ(38,"div",26)(39,"button",27),t.NdJ("click",function(){return r.close()}),t._uU(40,"Cancelar "),t.qZA(),t.TgZ(41,"button",28),t._uU(42,"Salvar "),t.qZA()()()()()()()()()()()}if(2&n){const i=t.MAs(9),a=t.MAs(20),s=t.MAs(29),Z=t.MAs(36);t.ekj("modal--show",r.open),t.xp6(19),t.Q6J("ngModel",r.object.nome),t.xp6(2),t.Q6J("ngIf",a.touched&&a.errors),t.xp6(7),t.Q6J("ngModel",r.object.qtdePaginas),t.xp6(2),t.Q6J("ngIf",s.touched&&s.errors),t.xp6(5),t.Q6J("ngModel",r.object.materialExtra),t.xp6(2),t.Q6J("ngIf",Z.touched&&Z.errors),t.xp6(4),t.Q6J("disabled",i.invalid||r.loading)}},dependencies:[b.O5,c._Y,c.Fj,c.Wl,c.JJ,c.JL,c.Q7,c.wO,c.nD,c.c5,c.On,c.F],styles:["[_ngcontent-%COMP%]:root{--primary: #ff6315;--primary-highlight: #8c47dc;--secondary: #fff;--secondary-highlight: #F94184 ;--grey: #181818;--grey-highlight: #5a5c60}.container-header[_ngcontent-%COMP%]{background-color:var(--primary);color:#fff;padding:8px 30px;font-weight:400;letter-spacing:1.5px;text-transform:uppercase;margin-top:0;margin-bottom:0;font-size:12pt}h5[_ngcontent-%COMP%]{font-family:sans-serif;font-size:14pt;color:#ff6315;margin-top:10px}.form-control[_ngcontent-%COMP%]{padding:.375rem .75rem}.d-flex[_ngcontent-%COMP%]{display:flex!important;justify-content:right;margin-bottom:8px}.me-2[_ngcontent-%COMP%]{margin-left:8px!important;margin-top:7px;width:17px;height:16px}.btn-clear[_ngcontent-%COMP%]{background-color:#5a5c60;display:flex;justify-content:right;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:none}.btn-cancel[_ngcontent-%COMP%]{background-color:#5a5c60;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:none}.btn-save[_ngcontent-%COMP%]{background-color:#ff6315;border-color:#ff6315;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:#9b9c9d}"]})}return e})()},{path:"excluir/:id",component:(()=>{class e{constructor(o,n,r,i){this.activatedRoute=o,this.router=n,this.apostilasService=r,this.toastr=i,this.open=!0,this.abaco=new _.Y,this.id=0,this.erro="",this.loading=!1,this.activatedRoute.params.subscribe(a=>{a.id?(this.id=a.id,this.open=!0):(this.close(),this.toastr.error("N\xe3o foi poss\xedvel acessar essa p\xe1gina")),console.log(a)})}close(){this.open=!1,this.router.navigate(["abaco"])}delete(){this.loading=!0,(0,g.n)(this.apostilasService.delete(this.id)).then(o=>{o.success?((0,g.n)(this.apostilasService.getList()),this.close(),this.toastr.success("Opera\xe7\xe3o conclu\xedda com sucesso")):(this.erro=o.message,this.toastr.error(o.message)),this.loading=!1}).catch(o=>{this.erro=o,console.error("console catch"+o)}).finally(()=>{this.loading=!1})}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(d.gz),t.Y36(d.F0),t.Y36(m.Y),t.Y36(f._W))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["delete-apostilas"]],decls:19,vars:6,consts:[[1,"modal","modal-delete"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"disabled","click"],[1,"modal-body"],[1,"text-danger"],[1,"modal-footer"],["type","button",1,"btn-cancel",3,"disabled","click"],["type","button",1,"btn-save",3,"disabled","click"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),t._uU(5,"Excluir Apostila"),t.qZA(),t.TgZ(6,"button",5),t.NdJ("click",function(){return r.close()}),t.qZA()(),t.TgZ(7,"div",6)(8,"p"),t._uU(9,"Tem certeza que deseja excluir essa apostila?"),t._UZ(10,"br"),t._uU(11," Essa a\xe7\xe3o \xe9 irrevers\xedvel e voc\xea n\xe3o poder\xe1 recuperar esses dados!"),t.qZA(),t.TgZ(12,"p",7),t._uU(13),t.qZA()(),t.TgZ(14,"div",8)(15,"button",9),t.NdJ("click",function(){return r.close()}),t._uU(16,"Cancelar "),t.qZA(),t.TgZ(17,"button",10),t.NdJ("click",function(){return r.delete()}),t._uU(18,"Excluir "),t.qZA()()()()()),2&n&&(t.ekj("modal--show",r.open),t.xp6(6),t.Q6J("disabled",r.loading),t.xp6(7),t.Oqu(r.erro),t.xp6(2),t.Q6J("disabled",r.loading),t.xp6(2),t.Q6J("disabled",r.loading))},styles:["[_ngcontent-%COMP%]:root{--primary: #ff6315;--primary-highlight: #8c47dc;--secondary: #fff;--secondary-highlight: #F94184 ;--grey: #181818;--grey-highlight: #5a5c60}.container-header[_ngcontent-%COMP%]{background-color:var(--primary);color:#fff;padding:8px 30px;font-weight:400;letter-spacing:1.5px;text-transform:uppercase;margin-top:0;margin-bottom:0;font-size:12pt}h5[_ngcontent-%COMP%]{font-family:sans-serif;font-size:14pt;color:#ff6315;margin-top:10px}.btn-cancel[_ngcontent-%COMP%]{background-color:#5a5c60;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:none}.btn-save[_ngcontent-%COMP%]{background-color:#ff6315;border-color:#ff6315;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:#9b9c9d}"]})}return e})()}]}];let et=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(tt),d.Bz]})}return e})();var ot=l(74),nt=l(4532),rt=l(1979),at=l(2160);let it=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#o=this.\u0275inj=t.cJS({imports:[b.ez,d.Bz,et,u.U$,h.LU,ot.ml,c.u5,rt.IJ,nt.d,at.kW,C.L,v.W,f.Rh]})}return e})()}}]);