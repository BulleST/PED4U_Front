"use strict";(self.webpackChunkPED4U=self.webpackChunkPED4U||[]).push([[17],{8017:(dt,T,i)=>{i.r(T),i.d(T,{ReposicaoModule:()=>ct});var m=i(6814),p=i(2999),g=i(708),t=i(9468),O=i(5619),Z=i(9397),P=i(9947),f=i(9862);let h=(()=>{class o{constructor(e){this.httpClient=e,this.url=P.N.url,this.list=new O.X([])}getList(){return this.httpClient.get(`${this.url}/Reposicao`).pipe((0,Z.b)({next:e=>{this.list.next(e)}}))}getListPerfil(){return this.httpClient.get(`${this.url}/Reposicao`).pipe((0,Z.b)({next:e=>{this.list.next(e)}}))}get(e){return this.httpClient.get(`${this.url}/Reposicao/${e}`)}post(e){return this.httpClient.post(`${this.url}/Reposicao`,e)}delete(e){return this.httpClient.delete(`${this.url}/Reposicao/${e}`)}static#t=this.\u0275fac=function(n){return new(n||o)(t.LFG(f.eN))};static#e=this.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var b=i(4844),A=i(5219),u=i(6361);const U=["dt"],w=function(){return["cadastrar"]};function q(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"div",8)(1,"div")(2,"a",9),t._uU(3,"Cadastrar"),t.qZA()(),t.TgZ(4,"div",10)(5,"button",11),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(),s=t.MAs(4);return t.KtG(r.clear(s))}),t.TgZ(6,"span",12),t._uU(7,"Limpar filtros"),t.qZA(),t._UZ(8,"i",13),t.qZA(),t.TgZ(9,"span",14),t._UZ(10,"i",15),t.TgZ(11,"input",16),t.NdJ("input",function(r){t.CHM(e);const s=t.oxw();return t.KtG(s.applyFilterGlobal(r,"contains"))}),t.qZA()()()()}2&o&&(t.xp6(2),t.Q6J("routerLink",t.DdM(1,w)))}function J(o,d){1&o&&(t.TgZ(0,"tr"),t._UZ(1,"th"),t.TgZ(2,"th",17),t._uU(3," Dia da Semana "),t._UZ(4,"p-columnFilter",18)(5,"p-sortIcon",19),t.qZA(),t.TgZ(6,"th",20),t._uU(7," Hor\xe1rio "),t._UZ(8,"p-columnFilter",21)(9,"p-sortIcon",22),t.qZA(),t.TgZ(10,"th",23),t._uU(11," Perfil da Turma "),t._UZ(12,"p-columnFilter",24)(13,"p-sortIcon",25),t.qZA(),t.TgZ(14,"th",26),t._uU(15," Vagas na Turma "),t._UZ(16,"p-columnFilter",27)(17,"p-sortIcon",28),t.qZA(),t._UZ(18,"th"),t.qZA())}const k=function(o){return["editar",o]},E=function(o){return["excluir",o]};function F(o,d){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"date"),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td")(13,"a",29),t._uU(14,"Editar"),t.qZA(),t.TgZ(15,"a",30),t._uU(16,"Excluir"),t.qZA()()()),2&o){const e=d.$implicit,n=t.oxw();t.xp6(2),t.Oqu(e.id),t.xp6(2),t.Oqu(e.diaTurma),t.xp6(2),t.Oqu(t.xi3(7,7,e.horarioTurma,"shortTime")),t.xp6(3),t.Oqu(n.concatenatePerfil(e)),t.xp6(2),t.Oqu(e.vagasTurma),t.xp6(2),t.Q6J("routerLink",t.VKq(10,k,e.id)),t.xp6(2),t.Q6J("routerLink",t.VKq(12,E,e.id))}}const S=function(){return{"min-width":"50rem"}},j=function(){return["id","diaTurma","horarioTurma","perfil","vagasTurma"]};let N=(()=>{class o{constructor(e){this.reposicaoService=e,this.open=!0,this.list=[],this.id=0,this.erro="",this.reposicaoService.list.subscribe(n=>{this.list=Object.assign([],n),console.log("perfis",n)}),(0,g.n)(e.getList())}clear(e){e.clear()}applyFilterGlobal(e,n){this.dt.filterGlobal(e.target.value,n)}concatenatePerfil(e){let n="";for(let r=0;r<e.perfil.length;r++)n+=e.perfil[r].nome,r!=e.perfil.length-1&&(n+=", ");return n}getValueFalta(e){switch(e){case!0:return"Presente";case!1:return"Ausente"}}getValueReposicao(e){switch(e){case!0:return"Sim";case!1:return"N\xe3o"}}getSeverity(e){switch(e){case!0:return"success";case!1:return"danger"}}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(h))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["aulas"]],viewQuery:function(n,r){if(1&n&&t.Gf(U,5),2&n){let s;t.iGM(s=t.CRH())&&(r.dt=s.first)}},decls:9,vars:9,consts:[[1,"aulas"],["header","Reposi\xe7\xf5es"],[1,"card","table-responsive"],["sortField","","dataKey","id","styleClass","p-datatable-striped","currentPageReportTemplate","Mostrando {first} a {last} de {totalRecords} p\xe1ginas",1,"table",3,"value","tableStyle","paginator","rows","showCurrentPageReport","filterDelay","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"flex"],[1,"btn-primary",3,"routerLink"],[1,"p-2"],[1,"btn-clear",3,"click"],[1,"me-2"],[1,"pi","pi-filter-slash"],[1,"p-2","p-input-icon-right"],[1,"pi","pi-search"],["pInputText","","type","text","placeholder","Digite a Palavra-Chave",1,"generalInput",3,"input"],["pSortableColumn","diaTurma",1,"diaTurma"],["type","text","field","diaTurma","display","menu"],["field","diaTurma"],["pSortableColumn","horarioTurma",1,"horarioTurma"],["type","text","field","horarioTurma","display","menu"],["field","horarioTurma"],["pSortableColumn","perfil",1,"perfil"],["type","text","field","perfil","display","menu"],["field","perfil"],["pSortableColumn","vagasTurma",1,"vagasTurma"],["type","text","field","vagasTurma","display","menu"],["field","va"],[1,"btn","btn-edit","me-2",3,"routerLink"],[1,"btn","btn-delete",3,"routerLink"]],template:function(n,r){1&n&&(t.TgZ(0,"p-tabView",0)(1,"p-tabPanel",1)(2,"div",2)(3,"p-table",3,4),t.YNc(5,q,12,2,"ng-template",5),t.YNc(6,J,19,0,"ng-template",6),t.YNc(7,F,17,14,"ng-template",7),t.qZA()()()(),t._UZ(8,"router-outlet")),2&n&&(t.xp6(3),t.Q6J("value",r.list)("tableStyle",t.DdM(7,S))("paginator",!0)("rows",5)("showCurrentPageReport",!0)("filterDelay",0)("globalFilterFields",t.DdM(8,j)))},dependencies:[p.lC,p.rH,b.xf,b.x4,A.jx,u.iA,u.lQ,u.fz,u.xl,m.uU],styles:["[_ngcontent-%COMP%]:root{--primary: #ff6315;--primary-highlight: #8c47dc;--secondary: #fff;--secondary-highlight: #F94184 ;--grey: #181818;--grey-highlight: #5a5c60}.p-tabview[_ngcontent-%COMP%]   .p-tabview-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .p-tabview-nav-link[_ngcontent-%COMP%]{border:solid #dee2e6;border-width:0 0 2px 0;border-color:transparent transparent #dee2e6 transparent;background:#ffffff;color:#181818;padding:1.25rem;font-weight:700;border-top-right-radius:6px;border-top-left-radius:6px;transition:box-shadow .2s;margin:0 0 -2px;display:flex;flex-direction:row}.p-tabview-nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;flex-direction:row;font-size:15pt;margin-left:20px;background:#ffffff;border-color:#343a40;color:#181818}.p-datatable[_ngcontent-%COMP%]   .p-datatable-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{text-align:center;padding:20px 4px;border:1px solid #dee2e6;border-width:0 0 1px 0;font-weight:700;color:#343a40;background:#f8f9fa;transition:box-shadow .2s;font-size:11pt}.flex[_ngcontent-%COMP%]{display:flex!important;justify-content:space-between}.p-button.p-button-outlined[_ngcontent-%COMP%]{background-color:transparent;color:#181818;border:1px solid;text-decoration:none;font-weight:700}td[_ngcontent-%COMP%]{text-align:center;vertical-align:middle}.p-tabview[_ngcontent-%COMP%]   .p-tabview-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:row;padding:.75rem 1.25rem;margin-bottom:0}.p-checkbox[_ngcontent-%COMP%]   .p-checkbox-box[_ngcontent-%COMP%]{border:2px solid #ced4da;background:#ffffff;width:22px;height:22px;color:#495057;border-radius:6px;transition:background-color .2s,color .2s,border-color .2s,box-shadow .2s}.flex[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.btn-clear[_ngcontent-%COMP%]{background-color:#5a5c60;color:#fff;padding:10px;border-radius:10px;border:none;margin:6px;cursor:pointer}.btn-primary[_ngcontent-%COMP%]{background-color:var(--primary);color:#fff;padding:10px;border-radius:10px;margin:6px;font-weight:none}.btn-edit[_ngcontent-%COMP%]{background-color:#fff;color:var(--grey-highlight);border:2px solid #5a5c60;padding:7px;border-radius:10px;font-family:sans-serif;font-weight:700;font-size:14pt;transition:background-color .2s,color .2s,border-color .2s,box-shadow .2s}.btn-delete[_ngcontent-%COMP%]{background-color:var(--secondary);color:#ff6315;border:2px solid #ff6315;padding:7px;border-radius:10px;margin:6px;font-weight:none;font-size:14pt;font-weight:700}.btn[_ngcontent-%COMP%]:hover{background-color:#f94184;color:#fff;border-color:#f94184}.btn.active[_ngcontent-%COMP%]{color:#ff6315}.less-rounded[_ngcontent-%COMP%]   span.p-tag.p-tag-rounded[_ngcontent-%COMP%]{border-radius:25px}.btn-reposicao[_ngcontent-%COMP%] > .p-tag[_ngcontent-%COMP%]{width:50%}"]})}return o})();var M=i(5861);class _{constructor(){this.id=0,this.diaTurma="",this.horarioTurma=new Date,this.perfil=[],this.vagasTurma=""}}var x=i(2425),Q=i(3859),c=i(95),C=i(2160),v=i(4055);function R(o,d){1&o&&(t.TgZ(0,"p",16),t._uU(1," Esse campo \xe9 obrigat\xf3rio. "),t.qZA())}function Y(o,d){1&o&&(t.TgZ(0,"p",16),t._uU(1," N\xe3o insira espa\xe7os em branco antes ou no final do campo "),t.qZA())}function L(o,d){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,R,2,0,"p",29),t.YNc(2,Y,2,0,"p",29),t.TgZ(3,"p",16),t._uU(4),t.qZA()()),2&o){const e=t.oxw(),n=t.MAs(29);t.xp6(1),t.Q6J("ngIf",n.errors.required),t.xp6(1),t.Q6J("ngIf",n.errors.pattern),t.xp6(2),t.Oqu(e.erro)}}function z(o,d){1&o&&(t.TgZ(0,"p",16),t._uU(1," Esse campo \xe9 obrigat\xf3rio "),t.qZA())}function D(o,d){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,z,2,0,"p",29),t.qZA()),2&o){t.oxw();const e=t.MAs(46);t.xp6(1),t.Q6J("ngIf",e.errors.required)}}let I=(()=>{class o{constructor(e,n,r,s,a,l){this.activatedRoute=e,this.router=n,this.reposicaoService=r,this.httpClient=s,this.toastr=a,this.perfilService=l,this.open=!0,this.object=new _,this.id=0,this.erro="",this.loading=!1,this.perfis=[],this.diaTurma=["Segunda-Feira","Ter\xe7a-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","S\xe1bado"],this.perfilService.list.subscribe(y=>{this.perfis=Object.assign([],y),console.log("perfis",y)}),(0,g.n)(l.getList())}close(){this.open=!1,this.router.navigate(["reposicao"])}save(){var e=this;return(0,M.Z)(function*(){e.loading=!0,console.log(e.object),(0,g.n)(e.reposicaoService.post(e.object)).then(n=>{n.success?(e.close(),e.toastr.success("Opera\xe7\xe3o conclu\xedda com sucesso"),(0,g.n)(e.reposicaoService.getList())):(e.erro=n.message,e.toastr.error(n.message)),e.loading=!1}).catch(n=>{e.erro=n,console.error("console catch"+n)}).finally(()=>{e.loading=!1})})()}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(p.gz),t.Y36(p.F0),t.Y36(h),t.Y36(f.eN),t.Y36(x._W),t.Y36(Q.F))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["create-reposicao"]],decls:53,vars:13,consts:[[1,"modal"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"click"],[1,"modal-body"],["form","ngForm"],[1,"d-flex","mb-3"],["type","reset",1,"btn-clear"],[1,"column"],[1,"form-container","mb-4"],[1,"campo-container"],[1,"row"],[1,"form-group","col-md-4","col-12"],["for","diaTurma"],[1,"text-danger"],["name","perfil","placeholder","Selecione o dia da semana",1,"dropdown",3,"options","ngModel","ngModelChange"],["for","horarioTurma"],["type","time","id","horarioTurma","name","horarioTurma","pattern","\\S(.*\\S)?","required","","minlength","3","maxlength","30",1,"form-control",3,"ngModel","ngModelChange","change"],["horarioTurma","ngModel"],[4,"ngIf"],["for","perfil"],["optionLabel","nome","placeholder","Selecione o perfil da turma",1,"dropdown",3,"options","ngModel","ngModelChange"],["type","text","id","vagasTurma","name","vagasTurma","placeholder"," ex: 12","required","","minlength","12","maxlength","12",1,"form-control",3,"ngModel","ngModelChange"],["vagasTurma","ngModel"],[1,"modal-footer"],["type","button",1,"btn-cancel",3,"disabled","click"],["type","button","data-dismiss","modal",1,"btn-save",3,"disabled","click"],["class","text-danger",4,"ngIf"]],template:function(n,r){if(1&n){const s=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),t._uU(5,"Cadastrar Reposi\xe7\xe3o"),t.qZA(),t.TgZ(6,"a",5),t.NdJ("click",function(){return r.close()}),t.qZA()(),t.TgZ(7,"div",6)(8,"form",null,7)(10,"div",8)(11,"button",9),t._uU(12,"Limpar Campos"),t.qZA()(),t.TgZ(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13)(17,"div",14)(18,"label",15),t._uU(19,"Dia da Semana: "),t.TgZ(20,"span",16),t._uU(21,"*"),t.qZA()(),t.TgZ(22,"p-dropdown",17),t.NdJ("ngModelChange",function(l){return r.object.diaTurma=l}),t.qZA()(),t.TgZ(23,"div",14)(24,"label",18),t._uU(25," Hor\xe1rio: "),t.TgZ(26,"span",16),t._uU(27,"*"),t.qZA()(),t.TgZ(28,"input",19,20),t.NdJ("ngModelChange",function(l){return r.object.horarioTurma=l})("change",function(){t.CHM(s);const l=t.MAs(29);return t.KtG(r.object.horarioTurma=l.value.trim())}),t.qZA(),t.YNc(30,L,5,3,"div",21),t.qZA(),t.TgZ(31,"div",14)(32,"label",22),t._uU(33,"Perfil da Turma: "),t.TgZ(34,"span",16),t._uU(35,"*"),t.qZA()(),t.TgZ(36,"p-multiSelect",23),t.NdJ("ngModelChange",function(l){return r.object.perfil=l}),t.qZA(),t.TgZ(37,"p",16),t._uU(38),t.qZA()()(),t.TgZ(39,"div",13)(40,"div",14)(41,"label",22),t._uU(42,"Vagas na Turma: "),t.TgZ(43,"span",16),t._uU(44,"*"),t.qZA()(),t.TgZ(45,"input",24,25),t.NdJ("ngModelChange",function(l){return r.object.vagasTurma=l}),t.qZA(),t.YNc(47,D,2,1,"div",21),t.qZA()(),t.TgZ(48,"div",26)(49,"button",27),t.NdJ("click",function(){return r.close()}),t._uU(50," Cancelar "),t.qZA(),t.TgZ(51,"button",28),t.NdJ("click",function(){return r.save()}),t._uU(52," Salvar "),t.qZA()()()()()()()()()()}if(2&n){const s=t.MAs(29),a=t.MAs(46);t.ekj("modal--show",r.open),t.xp6(22),t.Q6J("options",r.diaTurma)("ngModel",r.object.diaTurma),t.xp6(6),t.Q6J("ngModel",r.object.horarioTurma),t.xp6(2),t.Q6J("ngIf",s.touched&&s.errors),t.xp6(6),t.Q6J("options",r.perfis)("ngModel",r.object.perfil),t.xp6(2),t.Oqu(r.erro),t.xp6(7),t.Q6J("ngModel",r.object.vagasTurma),t.xp6(2),t.Q6J("ngIf",a.touched&&a.errors),t.xp6(2),t.Q6J("disabled",r.loading),t.xp6(2),t.Q6J("disabled",r.loading)}},dependencies:[m.O5,c._Y,c.Fj,c.JJ,c.JL,c.Q7,c.wO,c.nD,c.c5,c.On,c.F,C.Lt,v.NU],styles:["[_ngcontent-%COMP%]:root{--primary: #ff6315;--primary-highlight: #8c47dc;--secondary: #fff;--secondary-highlight: #F94184 ;--grey: #181818;--grey-highlight: #5a5c60}.container-header[_ngcontent-%COMP%]{background-color:var(--primary);color:#fff;padding:8px 30px;font-weight:400;letter-spacing:1.5px;text-transform:uppercase;margin-top:0;margin-bottom:0;font-size:12pt}.form-container[_ngcontent-%COMP%]{background-color:#fff;border-radius:4px;border:1px solid rgba(0,0,0,.164)}[_nghost-%COMP%]     .p-dropdown{width:100%}.container-header[_ngcontent-%COMP%]{background-color:var(--grey-highlight);color:#fff;padding:8px 30px;font-weight:400;letter-spacing:1.5px;text-transform:uppercase;margin-top:0;margin-bottom:0;font-size:12pt;font-family:sans-serif}.campo-container[_ngcontent-%COMP%]{padding:10px 30px}.modal-dialog[_ngcontent-%COMP%]{max-width:1000px;width:95%;max-height:95vh;padding:0;margin:auto}h5[_ngcontent-%COMP%]{font-family:sans-serif;font-size:14pt;color:#ff6315;margin-top:10px}.modal-body[_ngcontent-%COMP%]{background-color:#fff}.btn-clear[_ngcontent-%COMP%]{background-color:#5a5c60;display:flex;justify-content:right;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:none}.btn-cancel[_ngcontent-%COMP%]{background-color:#5a5c60;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:none}.btn-save[_ngcontent-%COMP%]{background-color:#ff6315;border-color:#ff6315;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:#9b9c9d}.form-control[_ngcontent-%COMP%]{padding:.375rem .75rem}.d-flex[_ngcontent-%COMP%]{display:flex!important;justify-content:right;margin-bottom:8px}"]})}return o})();function G(o,d){1&o&&(t.TgZ(0,"p",16),t._uU(1," Esse campo \xe9 obrigat\xf3rio. "),t.qZA())}function $(o,d){1&o&&(t.TgZ(0,"p",16),t._uU(1," N\xe3o insira espa\xe7os em branco antes ou no final do campo "),t.qZA())}function H(o,d){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,G,2,0,"p",29),t.YNc(2,$,2,0,"p",29),t.TgZ(3,"p",16),t._uU(4),t.qZA()()),2&o){const e=t.oxw(),n=t.MAs(29);t.xp6(1),t.Q6J("ngIf",n.errors.required),t.xp6(1),t.Q6J("ngIf",n.errors.pattern),t.xp6(2),t.Oqu(e.erro)}}function V(o,d){1&o&&(t.TgZ(0,"p",16),t._uU(1," Esse campo \xe9 obrigat\xf3rio "),t.qZA())}function K(o,d){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,V,2,0,"p",29),t.qZA()),2&o){t.oxw();const e=t.MAs(46);t.xp6(1),t.Q6J("ngIf",e.errors.required)}}let B=(()=>{class o{constructor(e,n,r,s,a){this.activatedRoute=e,this.router=n,this.reposicaoService=r,this.httpClient=s,this.toastr=a,this.open=!0,this.object=new _,this.id=0,this.erro="",this.loading=!1,this.perfis=[],this.diaTurma=["Segunda-Feira","Ter\xe7a-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","S\xe1bado"],(0,g.n)(this.reposicaoService.getList())}close(){this.open=!1,this.router.navigate(["reposicao"])}save(){var e=this;return(0,M.Z)(function*(){e.loading=!0,console.log(e.object),(0,g.n)(e.reposicaoService.post(e.object)).then(n=>{n.success?(e.close(),e.toastr.success("Opera\xe7\xe3o conclu\xedda com sucesso"),(0,g.n)(e.reposicaoService.getList())):(e.erro=n.message,e.toastr.error(n.message)),e.loading=!1}).catch(n=>{e.erro=n,console.error("console catch"+n)}).finally(()=>{e.loading=!1})})()}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(p.gz),t.Y36(p.F0),t.Y36(h),t.Y36(f.eN),t.Y36(x._W))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["edit-reposicao"]],decls:53,vars:13,consts:[[1,"modal"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"click"],[1,"modal-body"],["form","ngForm"],[1,"d-flex","mb-3"],["type","reset",1,"btn-clear"],[1,"column"],[1,"form-container","mb-4"],[1,"campo-container"],[1,"row"],[1,"form-group","col-md-4","col-12"],["for","diaTurma"],[1,"text-danger"],["name","perfil","placeholder","Selecione o dia da semana",1,"dropdown",3,"options","ngModel","ngModelChange"],["for","horarioTurma"],["type","time","id","horarioTurma","name","horarioTurma","pattern","\\S(.*\\S)?","required","","minlength","3","maxlength","30",1,"form-control",3,"ngModel","ngModelChange","change"],["horarioTurma","ngModel"],[4,"ngIf"],["for","perfil"],["optionLabel","nome","placeholder","Selecione o perfil da turma",1,"dropdown",3,"options","ngModel","ngModelChange"],["type","text","id","vagasTurma","name","vagasTurma","placeholder"," ex: 12","required","","minlength","12","maxlength","12",1,"form-control",3,"ngModel","ngModelChange"],["vagasTurma","ngModel"],[1,"modal-footer"],["type","button",1,"btn-cancel",3,"disabled","click"],["type","button","data-dismiss","modal",1,"btn-save",3,"disabled","click"],["class","text-danger",4,"ngIf"]],template:function(n,r){if(1&n){const s=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),t._uU(5,"Editar Cadastro de Reposi\xe7\xe3o"),t.qZA(),t.TgZ(6,"a",5),t.NdJ("click",function(){return r.close()}),t.qZA()(),t.TgZ(7,"div",6)(8,"form",null,7)(10,"div",8)(11,"button",9),t._uU(12,"Limpar Campos"),t.qZA()(),t.TgZ(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13)(17,"div",14)(18,"label",15),t._uU(19,"Dia da Semana: "),t.TgZ(20,"span",16),t._uU(21,"*"),t.qZA()(),t.TgZ(22,"p-dropdown",17),t.NdJ("ngModelChange",function(l){return r.object.diaTurma=l}),t.qZA()(),t.TgZ(23,"div",14)(24,"label",18),t._uU(25," Hor\xe1rio: "),t.TgZ(26,"span",16),t._uU(27,"*"),t.qZA()(),t.TgZ(28,"input",19,20),t.NdJ("ngModelChange",function(l){return r.object.horarioTurma=l})("change",function(){t.CHM(s);const l=t.MAs(29);return t.KtG(r.object.horarioTurma=l.value.trim())}),t.qZA(),t.YNc(30,H,5,3,"div",21),t.qZA(),t.TgZ(31,"div",14)(32,"label",22),t._uU(33,"Perfil da Turma: "),t.TgZ(34,"span",16),t._uU(35,"*"),t.qZA()(),t.TgZ(36,"p-multiSelect",23),t.NdJ("ngModelChange",function(l){return r.object.perfil=l}),t.qZA(),t.TgZ(37,"p",16),t._uU(38),t.qZA()()(),t.TgZ(39,"div",13)(40,"div",14)(41,"label",22),t._uU(42,"Vagas na Turma: "),t.TgZ(43,"span",16),t._uU(44,"*"),t.qZA()(),t.TgZ(45,"input",24,25),t.NdJ("ngModelChange",function(l){return r.object.vagasTurma=l}),t.qZA(),t.YNc(47,K,2,1,"div",21),t.qZA()(),t.TgZ(48,"div",26)(49,"button",27),t.NdJ("click",function(){return r.close()}),t._uU(50," Cancelar "),t.qZA(),t.TgZ(51,"button",28),t.NdJ("click",function(){return r.save()}),t._uU(52," Salvar "),t.qZA()()()()()()()()()()}if(2&n){const s=t.MAs(29),a=t.MAs(46);t.ekj("modal--show",r.open),t.xp6(22),t.Q6J("options",r.diaTurma)("ngModel",r.object.diaTurma),t.xp6(6),t.Q6J("ngModel",r.object.horarioTurma),t.xp6(2),t.Q6J("ngIf",s.touched&&s.errors),t.xp6(6),t.Q6J("options",r.perfis)("ngModel",r.object.perfil),t.xp6(2),t.Oqu(r.erro),t.xp6(7),t.Q6J("ngModel",r.object.vagasTurma),t.xp6(2),t.Q6J("ngIf",a.touched&&a.errors),t.xp6(2),t.Q6J("disabled",r.loading),t.xp6(2),t.Q6J("disabled",r.loading)}},dependencies:[m.O5,c._Y,c.Fj,c.JJ,c.JL,c.Q7,c.wO,c.nD,c.c5,c.On,c.F,C.Lt,v.NU],styles:["[_ngcontent-%COMP%]:root{--primary: #ff6315;--primary-highlight: #8c47dc;--secondary: #fff;--secondary-highlight: #F94184 ;--grey: #181818;--grey-highlight: #5a5c60}.container-header[_ngcontent-%COMP%]{background-color:var(--primary);color:#fff;padding:8px 30px;font-weight:400;letter-spacing:1.5px;text-transform:uppercase;margin-top:0;margin-bottom:0;font-size:12pt}.form-container[_ngcontent-%COMP%]{background-color:#fff;border-radius:4px;border:1px solid rgba(0,0,0,.164)}[_nghost-%COMP%]     .p-dropdown{width:100%}.container-header[_ngcontent-%COMP%]{background-color:var(--grey-highlight);color:#fff;padding:8px 30px;font-weight:400;letter-spacing:1.5px;text-transform:uppercase;margin-top:0;margin-bottom:0;font-size:12pt;font-family:sans-serif}.campo-container[_ngcontent-%COMP%]{padding:10px 30px}.modal-dialog[_ngcontent-%COMP%]{max-width:1000px;width:95%;max-height:95vh;padding:0;margin:auto}h5[_ngcontent-%COMP%]{font-family:sans-serif;font-size:14pt;color:#ff6315;margin-top:10px}.modal-body[_ngcontent-%COMP%]{background-color:#fff}.btn-clear[_ngcontent-%COMP%]{background-color:#5a5c60;display:flex;justify-content:right;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:none}.btn-cancel[_ngcontent-%COMP%]{background-color:#5a5c60;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:none}.btn-save[_ngcontent-%COMP%]{background-color:#ff6315;border-color:#ff6315;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:#9b9c9d}.form-control[_ngcontent-%COMP%]{padding:.375rem .75rem}.d-flex[_ngcontent-%COMP%]{display:flex!important;justify-content:right;margin-bottom:8px}.me-2[_ngcontent-%COMP%]{margin-left:8px!important;margin-top:7px;width:17px;height:16px}"]})}return o})();var W=i(8034);const X=[{path:"",component:N,children:[{path:"cadastrar",component:I},{path:"editar/:id",component:B},{path:"excluir/:id",component:(()=>{class o{constructor(e,n,r,s){this.activatedRoute=e,this.router=n,this.AulasService=r,this.toastr=s,this.open=!0,this.object=new _,this.id=0,this.erro="",this.loading=!1,this.activatedRoute.params.subscribe(a=>{a.id?(this.id=a.id,this.open=!0):(this.close(),this.toastr.error("N\xe3o foi poss\xedvel acessar essa p\xe1gina")),console.log(a)})}close(){this.open=!1,this.router.navigate(["reposicao"])}delete(){this.loading=!0,(0,g.n)(this.AulasService.delete(this.id)).then(e=>{e.success?((0,g.n)(this.AulasService.getList()),this.close(),this.toastr.success("Opera\xe7\xe3o conclu\xedda com sucesso")):(this.erro=e.message,this.toastr.error(e.message)),this.loading=!1}).catch(e=>{this.erro=e,console.error("console catch"+e)}).finally(()=>{this.loading=!1})}static#t=this.\u0275fac=function(n){return new(n||o)(t.Y36(p.gz),t.Y36(p.F0),t.Y36(W.e),t.Y36(x._W))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["delete-alunos"]],decls:19,vars:6,consts:[[1,"modal","modal-delete"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"disabled","click"],[1,"modal-body"],[1,"text-danger"],[1,"modal-footer"],["type","button",1,"btn-cancel",3,"disabled","click"],["type","button",1,"btn-save",3,"disabled","click"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),t._uU(5,"Excluir Cadastro de Reposi\xe7\xe3o"),t.qZA(),t.TgZ(6,"button",5),t.NdJ("click",function(){return r.close()}),t.qZA()(),t.TgZ(7,"div",6)(8,"p"),t._uU(9,"Tem certeza que deseja excluir esse cadastro?"),t._UZ(10,"br"),t._uU(11," Essa a\xe7\xe3o \xe9 irrevers\xedvel e voc\xea n\xe3o poder\xe1 recuperar esses dados!"),t.qZA(),t.TgZ(12,"p",7),t._uU(13),t.qZA()(),t.TgZ(14,"div",8)(15,"button",9),t.NdJ("click",function(){return r.close()}),t._uU(16,"Cancelar "),t.qZA(),t.TgZ(17,"button",10),t.NdJ("click",function(){return r.delete()}),t._uU(18,"Excluir "),t.qZA()()()()()),2&n&&(t.ekj("modal--show",r.open),t.xp6(6),t.Q6J("disabled",r.loading),t.xp6(7),t.Oqu(r.erro),t.xp6(2),t.Q6J("disabled",r.loading),t.xp6(2),t.Q6J("disabled",r.loading))},styles:["[_ngcontent-%COMP%]:root{--primary: #ff6315;--primary-highlight: #8c47dc;--secondary: #fff;--secondary-highlight: #F94184 ;--grey: #181818;--grey-highlight: #5a5c60}.container-header[_ngcontent-%COMP%]{background-color:var(--primary);color:#fff;padding:8px 30px;font-weight:400;letter-spacing:1.5px;text-transform:uppercase;margin-top:0;margin-bottom:0;font-size:12pt}.form-container[_ngcontent-%COMP%]{background-color:#fff;border-radius:4px;border:1px solid rgba(0,0,0,.164)}[_nghost-%COMP%]     .p-dropdown{width:100%}.container-header[_ngcontent-%COMP%]{background-color:var(--grey-highlight);color:#fff;padding:8px 30px;font-weight:400;letter-spacing:1.5px;text-transform:uppercase;margin-top:0;margin-bottom:0;font-size:12pt;font-family:sans-serif}.campo-container[_ngcontent-%COMP%]{padding:10px 30px}.modal-dialog[_ngcontent-%COMP%]{max-width:1000px;width:95%;max-height:95vh;padding:0;margin:auto}h5[_ngcontent-%COMP%]{font-family:sans-serif;font-size:14pt;color:#ff6315;margin-top:10px}.modal-body[_ngcontent-%COMP%]{background-color:#fff}.btn-clear[_ngcontent-%COMP%]{background-color:#5a5c60;display:flex;justify-content:right;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:none}.btn-cancel[_ngcontent-%COMP%]{background-color:#5a5c60;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:none}.btn-save[_ngcontent-%COMP%]{background-color:#ff6315;border-color:#ff6315;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:#9b9c9d}.form-control[_ngcontent-%COMP%]{padding:.375rem .75rem}.d-flex[_ngcontent-%COMP%]{display:flex!important;justify-content:right;margin-bottom:8px}.me-2[_ngcontent-%COMP%]{margin-left:8px!important;margin-top:7px;width:17px;height:16px}"]})}return o})()}]}];let tt=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(X),p.Bz]})}return o})();var et=i(6263),ot=i(707),nt=i(8057),rt=i(1865),at=i(6128),it=i(6804),st=i(354),lt=i(1532);let ct=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[m.ez,p.Bz,tt,b.LU,u.U$,et.W,ot.hJ,c.u5,nt.nD,C.kW,rt.cc,at.Qy,it.KZ,st.L$,lt._8,v.q4]})}return o})()}}]);