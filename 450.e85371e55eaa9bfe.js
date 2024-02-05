"use strict";(self.webpackChunkPED4U=self.webpackChunkPED4U||[]).push([[450],{8450:(he,Z,d)=>{d.r(Z),d.d(Z,{TurmasModule:()=>fe});var _=d(6814),u=d(2999),m=d(6361),b=d(4844),E=d(74),c=d(95),O=d(4532),P=d(1979),U=d(7680),x=d(2160),w=d(6263),g=d(2425),p=d(708),e=d(9468),J=d(5619),F=d(9397),j=d(9947),M=d(9862);let f=(()=>{class o{constructor(t){this.httpClient=t,this.url=j.N.url,this.list=new J.X([])}getList(){return this.httpClient.get(`${this.url}/Turma`).pipe((0,F.b)({next:t=>{this.list.next(t)}}))}get(t){return this.httpClient.get(`${this.url}/Turma/${t}`)}getTurmaPerfilRel(){}post(t){return this.httpClient.post(`${this.url}/Turma`,t)}postTurmaPerfilRel(t){return this.httpClient.post(`${this.url}/Turma_Perfil_Rel`,t)}delete(t){return this.httpClient.delete(`${this.url}/Turma/${t}`)}static#e=this.\u0275fac=function(a){return new(a||o)(e.LFG(M.eN))};static#t=this.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"})}return o})();var N=d(4527),C=d(5219);const k=["dt"],I=function(){return["cadastrar"]};function Q(o,s){if(1&o){const t=e.EpF();e.TgZ(0,"div",8)(1,"div")(2,"a",9),e._uU(3,"Cadastrar"),e.qZA()(),e.TgZ(4,"div",10)(5,"button",11),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(),l=e.MAs(4);return e.KtG(n.clear(l))}),e.TgZ(6,"span",12),e._uU(7,"Limpar filtros"),e.qZA(),e._UZ(8,"i",13),e.qZA(),e.TgZ(9,"span",14),e._UZ(10,"i",15),e.TgZ(11,"input",16),e.NdJ("input",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.applyFilterGlobal(n,"contains"))}),e.qZA()()()()}2&o&&(e.xp6(2),e.Q6J("routerLink",e.DdM(1,I)))}function Y(o,s){1&o&&(e.TgZ(0,"tr"),e._UZ(1,"th"),e.TgZ(2,"th",17),e._uU(3," Dia da Semana: "),e._UZ(4,"p-columnFilter",18)(5,"p-sortIcon",19),e.qZA(),e.TgZ(6,"th",20),e._uU(7," Hor\xe1rio: "),e._UZ(8,"p-columnFilter",21)(9,"p-sortIcon",22),e.qZA(),e.TgZ(10,"th",23),e._uU(11," Capacidade de Alunos: "),e._UZ(12,"p-columnFilter",24)(13,"p-sortIcon",25),e.qZA(),e.TgZ(14,"th",26),e._uU(15," Educador: "),e._UZ(16,"p-columnFilter",27)(17,"p-sortIcon",28),e.qZA(),e.TgZ(18,"th",29),e._uU(19," Perfil: "),e._UZ(20,"p-columnFilter",30)(21,"p-sortIcon",31),e.qZA(),e._UZ(22,"th")(23,"th")(24,"th"),e.qZA())}const D=function(o){return["editar",o]},L=function(o){return["excluir",o]};function R(o,s){if(1&o&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td")(14,"a",32),e._uU(15,"Editar"),e.qZA(),e.TgZ(16,"a",33),e._uU(17,"Excluir"),e.qZA()(),e._UZ(18,"td")(19,"td"),e.qZA()),2&o){const t=s.$implicit,a=e.oxw();e.xp6(2),e.Oqu(t.id),e.xp6(2),e.Oqu(a.getDiaSemana(t.diaSemana)),e.xp6(2),e.Oqu(t.horario),e.xp6(2),e.Oqu(t.vagasRestantes),e.xp6(2),e.Oqu(t.nomeEducador),e.xp6(2),e.Oqu(t.perfis),e.xp6(2),e.Q6J("routerLink",e.VKq(8,D,t.id)),e.xp6(2),e.Q6J("routerLink",e.VKq(10,L,t.id))}}const H=function(){return{"min-width":"50rem"}},z=function(){return["id","diaSemana","horario","qtdeMaxAlunos","vagasRestantes","nomeEducador","perfis"]};let $=(()=>{class o{constructor(t,a){this.turmasService=t,this.loadingHelper=a,this.list=[],this.diaSemanaList=[{id:1,nome:"Segunda-Feira"},{id:2,nome:"Ter\xe7a-Feira"},{id:3,nome:"Quarta-Feira"},{id:4,nome:"Quinta-Feira"},{id:5,nome:"Sexta-Feira"},{id:6,nome:"S\xe1bado"}],this.loading=!1,this.loadingHelper.loading.subscribe(n=>this.loading=n),this.turmasService.list.subscribe(n=>{this.list=Object.assign([],n),console.log("lista de turmas ",n)}),this.loadingHelper.loading.next(!0),(0,p.n)(t.getList()),this.loadingHelper.loading.next(!1)}clear(t){t.clear()}applyFilterGlobal(t,a){this.dt.filterGlobal(t.target.value,a)}getDiaSemana(t){return this.diaSemanaList.find(a=>a.id==t)?.nome}static#e=this.\u0275fac=function(a){return new(a||o)(e.Y36(f),e.Y36(N.b))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["turma"]],viewQuery:function(a,n){if(1&a&&e.Gf(k,5),2&a){let l;e.iGM(l=e.CRH())&&(n.dt=l.first)}},decls:9,vars:9,consts:[[1,"educadores"],["header","Turmas"],[1,"card","table-responsive"],["sortField","","dataKey","id","styleClass","p-datatable-striped","currentPageReportTemplate","Mostrando {first} a {last} de {totalRecords} p\xe1ginas",1,"table",3,"value","tableStyle","paginator","rows","showCurrentPageReport","filterDelay","globalFilterFields"],["dt",""],["pTemplate","caption"],["pTemplate","header"],["pTemplate","body"],[1,"flex"],[1,"btn-primary",3,"routerLink"],[1,"p-2"],[1,"btn-clear",3,"click"],[1,"me-2"],[1,"pi","pi-filter-slash"],[1,"p-2","p-input-icon-right"],[1,"pi","pi-search","me-2","ml-3"],["pInputText","","type","text","placeholder","Digite a Palavra-Chave",1,"generalInput",3,"input"],["pSortableColumn","diaSemana",1,"diaSemana"],["type","text","field","diaSemana","display","menu"],["field","diaSemana"],["pSortableColumn","horario",1,"horario"],["type","text","field","horario","display","menu"],["field","horario"],["pSortableColumn","vagasRestantes",1,"vagasRestantes"],["type","text","field","vagasRestantes","display","menu"],["field","vagasRestantes"],["pSortableColumn","nomeEducador",1,"nomeEducador"],["type","text","field","nomeEducador","display","menu"],["field","nomeEducador"],["pSortableColumn","perfis",1,"perfis"],["type","text","field","perfis","display","menu"],["field","perfis"],[1,"btn","btn-edit","me-2",3,"routerLink"],[1,"btn","btn-delete",3,"routerLink"]],template:function(a,n){1&a&&(e.TgZ(0,"p-tabView",0)(1,"p-tabPanel",1)(2,"div",2)(3,"p-table",3,4),e.YNc(5,Q,12,2,"ng-template",5),e.YNc(6,Y,25,0,"ng-template",6),e.YNc(7,R,20,12,"ng-template",7),e.qZA()()()(),e._UZ(8,"router-outlet")),2&a&&(e.xp6(3),e.Q6J("value",n.list)("tableStyle",e.DdM(7,H))("paginator",!0)("rows",5)("showCurrentPageReport",!0)("filterDelay",0)("globalFilterFields",e.DdM(8,z)))},dependencies:[u.lC,u.rH,m.iA,C.jx,m.lQ,m.fz,m.xl,b.xf,b.x4],styles:["[_ngcontent-%COMP%]:root{--primary: #ff6315;--primary-highlight: #8c47dc;--secondary: #fff;--secondary-highlight: #F94184 ;--grey: #181818;--grey-highlight: #5a5c60}.p-tabview[_ngcontent-%COMP%]   .p-tabview-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .p-tabview-nav-link[_ngcontent-%COMP%]{border:solid #dee2e6;border-width:0 0 2px 0;border-color:transparent transparent #dee2e6 transparent;background:#ffffff;color:#181818;padding:1.25rem;font-weight:700;border-top-right-radius:6px;border-top-left-radius:6px;transition:box-shadow .2s;margin:0 0 -2px;display:flex;flex-direction:row}.p-tabview-nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:flex;flex-direction:row;font-size:15pt;margin-left:20px;background:#ffffff;border-color:#343a40;color:#181818}.p-datatable[_ngcontent-%COMP%]   .p-datatable-thead[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > th[_ngcontent-%COMP%]{text-align:center;padding:20px 4px;border:1px solid #dee2e6;border-width:0 0 1px 0;font-weight:700;color:#343a40;background:#f8f9fa;transition:box-shadow .2s;font-size:11pt}.flex[_ngcontent-%COMP%]{display:flex!important;justify-content:space-between}.p-button.p-button-outlined[_ngcontent-%COMP%]{background-color:transparent;color:#181818;border:1px solid;text-decoration:none;font-weight:700}td[_ngcontent-%COMP%]{text-align:center;vertical-align:middle}.p-tabview[_ngcontent-%COMP%]   .p-tabview-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:row;padding:.75rem 1.25rem;margin-bottom:0}.p-checkbox[_ngcontent-%COMP%]   .p-checkbox-box[_ngcontent-%COMP%]{border:2px solid #ced4da;background:#ffffff;width:22px;height:22px;color:#495057;border-radius:6px;transition:background-color .2s,color .2s,border-color .2s,box-shadow .2s}.flex[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.less-rounded[_ngcontent-%COMP%]   span.p-tag.p-tag-rounded[_ngcontent-%COMP%]{border-radius:25px}"]})}return o})();var A=d(5861);class y{constructor(){this.id=0,this.horario="",this.diaSemana="",this.qtdeMaxAlunos="",this.educador_Id="",this.unidade_Id=""}}class q{constructor(){this.id=0,this.turma_Id=0,this.perfil_Id=0}}var S=d(3859),v=d(4055);function G(o,s){if(1&o&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&o){const t=e.oxw();e.xp6(2),e.Oqu(t.selectedDiaSemana.nome)}}function V(o,s){if(1&o&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&o){const t=s.$implicit;e.xp6(2),e.Oqu(t.nome)}}function K(o,s){1&o&&(e.TgZ(0,"p",14),e._uU(1," Esse campo \xe9 obrigat\xf3rio. "),e.qZA())}function B(o,s){1&o&&(e.TgZ(0,"p",14),e._uU(1," N\xe3o insira espa\xe7os em branco antes ou no final do campo "),e.qZA())}function W(o,s){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,K,2,0,"p",35),e.YNc(2,B,2,0,"p",35),e.TgZ(3,"p",14),e._uU(4),e.qZA()()),2&o){const t=e.oxw(),a=e.MAs(34);e.xp6(1),e.Q6J("ngIf",a.errors.required),e.xp6(1),e.Q6J("ngIf",a.errors.pattern),e.xp6(2),e.Oqu(t.erro)}}function X(o,s){1&o&&(e.TgZ(0,"p",14),e._uU(1," Esse campo \xe9 obrigat\xf3rio "),e.qZA())}function ee(o,s){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,X,2,0,"p",35),e.qZA()),2&o){e.oxw();const t=e.MAs(42);e.xp6(1),e.Q6J("ngIf",t.errors.required)}}function te(o,s){if(1&o&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&o){const t=e.oxw();e.xp6(2),e.Oqu(t.selectedEducadores.name)}}function oe(o,s){if(1&o&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&o){const t=s.$implicit;e.xp6(2),e.Oqu(t.nome)}}function ae(o,s){if(1&o&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&o){const t=e.oxw();e.xp6(2),e.Oqu(null==t.selectedDiaSemana?null:t.selectedDiaSemana.nome)}}function ie(o,s){if(1&o&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&o){const t=s.$implicit;e.xp6(2),e.Oqu(t.nome)}}function re(o,s){1&o&&(e.TgZ(0,"p",14),e._uU(1," Esse campo \xe9 obrigat\xf3rio. "),e.qZA())}function de(o,s){1&o&&(e.TgZ(0,"p",14),e._uU(1," N\xe3o insira espa\xe7os em branco antes ou no final do campo "),e.qZA())}function se(o,s){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,re,2,0,"p",35),e.YNc(2,de,2,0,"p",35),e.TgZ(3,"p",14),e._uU(4),e.qZA()()),2&o){const t=e.oxw(),a=e.MAs(34);e.xp6(1),e.Q6J("ngIf",a.errors.required),e.xp6(1),e.Q6J("ngIf",a.errors.pattern),e.xp6(2),e.Oqu(t.erro)}}function le(o,s){1&o&&(e.TgZ(0,"p",14),e._uU(1," Esse campo \xe9 obrigat\xf3rio "),e.qZA())}function ce(o,s){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,le,2,0,"p",35),e.qZA()),2&o){e.oxw();const t=e.MAs(42);e.xp6(1),e.Q6J("ngIf",t.errors.required)}}function pe(o,s){if(1&o&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&o){const t=e.oxw();e.xp6(2),e.Oqu(null==t.selectedEducadores?null:t.selectedEducadores.name)}}function ue(o,s){if(1&o&&(e.TgZ(0,"div")(1,"div"),e._uU(2),e.qZA()()),2&o){const t=s.$implicit;e.xp6(2),e.Oqu(t.nome)}}const me=[{path:"",component:$,children:[{path:"cadastrar",component:(()=>{class o{constructor(t,a,n,l,i,r){this.activatedRoute=t,this.router=a,this.turmasService=n,this.httpClient=l,this.toastr=i,this.perfilService=r,this.open=!0,this.object=new y,this.id=0,this.erro="",this.loading=!1,this.perfis=[],this.diaSemana=[{id:1,nome:"Segunda-Feira"},{id:2,nome:"Ter\xe7a-Feira"},{id:3,nome:"Quarta-Feira"},{id:4,nome:"Quinta-Feira"},{id:5,nome:"Sexta-Feira"},{id:6,nome:"S\xe1bado"}],this.educadores=[{id:1,name:"Lucas",email:""},{id:2,name:"Marina",email:""},{id:3,name:"Luana",email:""},{id:4,name:"Ant\xf4nio",email:""},{id:5,name:"Let\xedcia",email:""}],this.selectedPerfis=[],this.selectedDiaSemana={id:-1,nome:""},this.selectedEducadores={id:-1,name:"",email:""},this.selectHorario="",this.perfilService.list.subscribe(h=>{this.perfis=Object.assign([],h)}),(0,p.n)(r.getList())}close(){this.open=!1,this.router.navigate(["turmas"])}save(){var t=this;return(0,A.Z)(function*(){t.loading=!0,t.object.horario=t.formatTime(t.selectHorario),-1!=t.selectedDiaSemana.id?(t.object.diaSemana=t.selectedDiaSemana.id,-1!=t.selectedEducadores.id?(t.object.educador_Id=t.selectedEducadores.id,t.object.qtdeMaxAlunos=parseInt(t.object.qtdeMaxAlunos.toString()),t.object.unidade_Id=0,console.log(t.object),(0,p.n)(t.turmasService.post(t.object)).then(a=>{if(console.log(a),a.success){let n=parseInt(a.object?a.object:"0");0!=n&&t.sendPerfil(n),t.close(),t.toastr.success("Opera\xe7\xe3o conclu\xedda com sucesso"),(0,p.n)(t.turmasService.getList())}else t.erro=a.message,t.toastr.error(a.message);t.loading=!1}).catch(a=>{t.erro=a,console.error("console catch"+a)}).finally(()=>{t.loading=!1})):t.erro="Selecione um Educador v\xe1lido"):t.erro="Selecione um dia da Semana v\xe1lido"})()}formatTime(t){return t+":00.000000"}concatenatePerfil(t){let a="";for(let n=0;n<t.length;n++)a+=t[n],n!=t.length-1&&(a+=", ");return a}sendPerfil(t){this.selectedPerfis.forEach(a=>{let n=new q;n.turma_Id=t,n.perfil_Id=a,console.log(n),(0,p.n)(this.turmasService.postTurmaPerfilRel(n))})}static#e=this.\u0275fac=function(a){return new(a||o)(e.Y36(u.gz),e.Y36(u.F0),e.Y36(f),e.Y36(M.eN),e.Y36(g._W),e.Y36(S.F))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["create-alunos"]],decls:62,vars:15,consts:[[1,"modal"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"click"],[1,"modal-body"],["form","ngForm"],[1,"column"],[1,"form-container","mb-4"],[1,"campo-container"],[1,"row"],[1,"form-group","col-md-6","col-12"],["for","perfis"],[1,"text-danger"],["name","perfis","optionLabel","nome","optionValue","id","placeholder","Selecione o perfil da turma",1,"dropdown",3,"options","ngModel","ngModelChange"],["for","diaSemana"],["optionLabel","nome","name","diaSemana","placeholder","Selecione o dia da semana",1,"dropdown",3,"options","ngModel","ngModelChange"],["pTemplate","selectedItem"],["pTemplate","item"],[1,"form-group","col-md-4","col-12"],["for","horarioTurma"],["type","time","id","horario","name","horario","pattern","\\S(.*\\S)?","required","","minlength","3","maxlength","30",1,"form-control",3,"ngModel","ngModelChange","change"],["horario","ngModel"],[4,"ngIf"],["for","qtdeMaxAlunos"],["type","number","mask","00","pattern","[0-9]","id","qtdeMaxAlunos","name","qtdeMaxAlunos","placeholder"," ex: 12","required","",1,"form-control",3,"ngModel","ngModelChange"],["qtdeMaxAlunos","ngModel"],["for","nomeEducador"],["optionLabel","nome","name","nomeEducador","placeholder","Selecione o educador",1,"dropdown",3,"options","ngModel","ngModelChange"],[1,"modal-footer"],[1,"me-auto","bd-highlight"],["type","reset",1,"btn-clear"],["type","button",1,"btn-cancel",3,"disabled","click"],["type","button","data-dismiss","modal",1,"btn-save",3,"disabled","click"],["class","text-danger",4,"ngIf"]],template:function(a,n){if(1&a){const l=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),e._uU(5,"Cadastrar Turma"),e.qZA(),e.TgZ(6,"a",5),e.NdJ("click",function(){return n.close()}),e.qZA()(),e.TgZ(7,"div",6)(8,"form",null,7)(10,"div",8)(11,"div",9)(12,"div",10)(13,"div",11)(14,"div",12)(15,"label",13),e._uU(16,"Perfil: "),e.TgZ(17,"span",14),e._uU(18,"*"),e.qZA()(),e.TgZ(19,"p-multiSelect",15),e.NdJ("ngModelChange",function(r){return n.selectedPerfis=r}),e.qZA()(),e.TgZ(20,"div",12)(21,"label",16),e._uU(22,"Dia da Semana: "),e.TgZ(23,"span",14),e._uU(24,"*"),e.qZA()(),e.TgZ(25,"p-dropdown",17),e.NdJ("ngModelChange",function(r){return n.selectedDiaSemana=r}),e.YNc(26,G,3,1,"ng-template",18),e.YNc(27,V,3,1,"ng-template",19),e.qZA()(),e.TgZ(28,"div",20)(29,"label",21),e._uU(30," Hor\xe1rio: "),e.TgZ(31,"span",14),e._uU(32,"*"),e.qZA()(),e.TgZ(33,"input",22,23),e.NdJ("ngModelChange",function(r){return n.selectHorario=r})("change",function(){e.CHM(l);const r=e.MAs(34);return e.KtG(n.selectHorario=r.value)}),e.qZA(),e.YNc(35,W,5,3,"div",24),e.qZA(),e.TgZ(36,"div",20)(37,"label",25),e._uU(38,"Capacidade de Alunos: "),e.TgZ(39,"span",14),e._uU(40,"*"),e.qZA()(),e.TgZ(41,"input",26,27),e.NdJ("ngModelChange",function(r){return n.object.qtdeMaxAlunos=r}),e.qZA(),e.YNc(43,ee,2,1,"div",24),e.qZA(),e.TgZ(44,"div",20)(45,"label",28),e._uU(46,"Educador: "),e.TgZ(47,"span",14),e._uU(48,"*"),e.qZA()(),e.TgZ(49,"p-dropdown",29),e.NdJ("ngModelChange",function(r){return n.selectedEducadores=r}),e.YNc(50,te,3,1,"ng-template",18),e.YNc(51,oe,3,1,"ng-template",19),e.qZA()()(),e.TgZ(52,"div",30)(53,"div",31)(54,"button",32),e._uU(55,"Limpar Campos"),e.qZA()(),e.TgZ(56,"button",33),e.NdJ("click",function(){return n.close()}),e._uU(57," Cancelar "),e.qZA(),e.TgZ(58,"button",34),e.NdJ("click",function(){return n.save()}),e._uU(59," Salvar "),e.qZA(),e.TgZ(60,"p",14),e._uU(61),e.qZA()()()()()()()()()()}if(2&a){const l=e.MAs(34),i=e.MAs(42);e.ekj("modal--show",n.open),e.xp6(19),e.Q6J("options",n.perfis)("ngModel",n.selectedPerfis),e.xp6(6),e.Q6J("options",n.diaSemana)("ngModel",n.selectedDiaSemana),e.xp6(8),e.Q6J("ngModel",n.selectHorario),e.xp6(2),e.Q6J("ngIf",l.touched&&l.errors),e.xp6(6),e.Q6J("ngModel",n.object.qtdeMaxAlunos),e.xp6(2),e.Q6J("ngIf",i.touched&&i.errors),e.xp6(6),e.Q6J("options",n.educadores)("ngModel",n.selectedEducadores),e.xp6(7),e.Q6J("disabled",n.loading),e.xp6(2),e.Q6J("disabled",n.loading),e.xp6(3),e.Oqu(n.erro)}},dependencies:[_.O5,C.jx,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.Q7,c.wO,c.nD,c.c5,c.On,c.F,x.Lt,v.NU],styles:["[_ngcontent-%COMP%]:root{--primary: #ff6315;--primary-highlight: #8c47dc;--secondary: #fff;--secondary-highlight: #F94184 ;--grey: #181818;--grey-highlight: #5a5c60}.container-header[_ngcontent-%COMP%]{background-color:var(--primary);color:#fff;padding:8px 30px;font-weight:400;letter-spacing:1.5px;text-transform:uppercase;margin-top:0;margin-bottom:0;font-size:12pt}[_nghost-%COMP%]     .p-dropdown{width:100%}.container-header[_ngcontent-%COMP%]{background-color:var(--grey-highlight);color:#fff;padding:8px 30px;font-weight:400;letter-spacing:1.5px;text-transform:uppercase;margin-top:0;margin-bottom:0;font-size:12pt;font-family:sans-serif}.campo-container[_ngcontent-%COMP%]{padding:10px 30px}.modal-dialog[_ngcontent-%COMP%]{max-width:1000px;width:95%;max-height:95vh;padding:0;margin:auto}h5[_ngcontent-%COMP%]{font-family:sans-serif;font-size:14pt;color:#ff6315;margin-top:10px}.modal-body[_ngcontent-%COMP%]{background-color:#fff;border-radius:var(--bs-modal-border-radius)}.btn-clear[_ngcontent-%COMP%]{background-color:#5a5c60;display:flex;justify-content:right;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:none}.btn-cancel[_ngcontent-%COMP%]{background-color:#5a5c60;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:none}.btn-save[_ngcontent-%COMP%]{background-color:#ff6315;border-color:#ff6315;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:#9b9c9d}.form-control[_ngcontent-%COMP%]{padding:.375rem .75rem}.d-flex[_ngcontent-%COMP%]{display:flex!important;justify-content:right;margin-bottom:8px}.me-2[_ngcontent-%COMP%]{margin-left:8px!important;margin-top:7px;width:17px;height:16px}"]})}return o})()},{path:"editar/:id",component:(()=>{class o{constructor(t,a,n,l,i){this.activatedRoute=t,this.router=a,this.turmasService=n,this.toastr=l,this.perfilService=i,this.open=!0,this.object=new y,this.id=0,this.erro="",this.loading=!1,this.perfis=[],this.diaSemana=[{id:1,nome:"Segunda-Feira"},{id:2,nome:"Ter\xe7a-Feira"},{id:3,nome:"Quarta-Feira"},{id:4,nome:"Quinta-Feira"},{id:5,nome:"Sexta-Feira"},{id:6,nome:"S\xe1bado"}],this.educadores=[{id:1,name:"Lucas",email:""},{id:2,name:"Marina",email:""},{id:3,name:"Luana",email:""},{id:4,name:"Ant\xf4nio",email:""},{id:5,name:"Let\xedcia",email:""}],this.selectedPerfis=[],this.selectedDiaSemana={id:-1,nome:""},this.selectedEducadores={id:-1,name:"",email:""},this.selectHorario="",this.activatedRoute.params.subscribe(r=>{r.id?(this.object.id=r.id,(0,p.n)(this.turmasService.get(this.object.id)).then(h=>{this.open=!0,this.object=h,this.selectedDiaSemana=this.diaSemana.find(T=>T.id==this.object.diaSemana),this.selectedEducadores=this.educadores.find(T=>T.id==this.object.educador_Id),console.log(this.object.educador_Id),this.loading=!1}).catch(h=>{this.close(),this.toastr.error("N\xe3o foi poss\xedvel acessar essa p\xe1gina")})):(this.close(),this.toastr.error("N\xe3o foi poss\xedvel acessar essa p\xe1gina"))}),this.perfilService.list.subscribe(r=>{this.perfis=Object.assign([],r)}),(0,p.n)(i.getList())}close(){this.open=!1,this.router.navigate(["turmas"])}save(){var t=this;return(0,A.Z)(function*(){t.loading=!0,t.object.horario=t.formatTime(t.selectHorario),t.selectedDiaSemana?(t.object.diaSemana=t.selectedDiaSemana.id,t.selectedEducadores?(t.object.educador_Id=t.selectedEducadores?t.selectedEducadores.id:0,t.object.qtdeMaxAlunos=parseInt(t.object.qtdeMaxAlunos.toString()),t.object.unidade_Id=0,console.log(t.object),(0,p.n)(t.turmasService.post(t.object)).then(a=>{if(console.log(a),a.success){let n=parseInt(a.object?a.object:"0");0!=n&&t.sendPerfil(n),t.close(),t.toastr.success("Opera\xe7\xe3o conclu\xedda com sucesso"),(0,p.n)(t.turmasService.getList())}else t.erro=a.message,t.toastr.error(a.message);t.loading=!1}).catch(a=>{t.erro=a,console.error("console catch"+a)}).finally(()=>{t.loading=!1})):t.erro="Selecione um Educador v\xe1lido"):t.erro="Selecione um dia da Semana v\xe1lido"})()}formatTime(t){return t+":00.000000"}concatenatePerfil(t){let a="";for(let n=0;n<t.length;n++)a+=t[n],n!=t.length-1&&(a+=", ");return a}sendPerfil(t){this.selectedPerfis.forEach(a=>{let n=new q;n.turma_Id=t,n.perfil_Id=a,console.log(n),(0,p.n)(this.turmasService.postTurmaPerfilRel(n))})}static#e=this.\u0275fac=function(a){return new(a||o)(e.Y36(u.gz),e.Y36(u.F0),e.Y36(f),e.Y36(g._W),e.Y36(S.F))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["edit-alunos"]],decls:62,vars:15,consts:[[1,"modal"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"click"],[1,"modal-body"],["form","ngForm"],[1,"column"],[1,"form-container","mb-4"],[1,"campo-container"],[1,"row"],[1,"form-group","col-md-6","col-12"],["for","perfis"],[1,"text-danger"],["name","perfis","optionLabel","nome","optionValue","id","placeholder","Selecione o perfil da turma",1,"dropdown",3,"options","ngModel","ngModelChange"],["for","diaSemana"],["optionLabel","nome","name","diaSemana","placeholder","Selecione o dia da semana",1,"dropdown",3,"options","ngModel","ngModelChange"],["pTemplate","selectedItem"],["pTemplate","item"],[1,"form-group","col-md-4","col-12"],["for","horarioTurma"],["type","time","id","horario","name","horario","pattern","\\S(.*\\S)?","required","","minlength","3","maxlength","30",1,"form-control",3,"ngModel","ngModelChange","change"],["horario","ngModel"],[4,"ngIf"],["for","qtdeMaxAlunos"],["type","number","mask","00","pattern","[0-9]","id","qtdeMaxAlunos","name","qtdeMaxAlunos","placeholder"," ex: 12","required","",1,"form-control",3,"ngModel","ngModelChange"],["qtdeMaxAlunos","ngModel"],["for","nomeEducador"],["optionLabel","nome","name","nomeEducador","placeholder","Selecione o educador",1,"dropdown",3,"options","ngModel","ngModelChange"],[1,"modal-footer"],[1,"me-auto","bd-highlight"],["type","reset",1,"btn-clear"],["type","button",1,"btn-cancel",3,"disabled","click"],["type","button","data-dismiss","modal",1,"btn-save",3,"disabled","click"],["class","text-danger",4,"ngIf"]],template:function(a,n){if(1&a){const l=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),e._uU(5,"Editar Turma"),e.qZA(),e.TgZ(6,"a",5),e.NdJ("click",function(){return n.close()}),e.qZA()(),e.TgZ(7,"div",6)(8,"form",null,7)(10,"div",8)(11,"div",9)(12,"div",10)(13,"div",11)(14,"div",12)(15,"label",13),e._uU(16,"Perfil: "),e.TgZ(17,"span",14),e._uU(18,"*"),e.qZA()(),e.TgZ(19,"p-multiSelect",15),e.NdJ("ngModelChange",function(r){return n.selectedPerfis=r}),e.qZA()(),e.TgZ(20,"div",12)(21,"label",16),e._uU(22,"Dia da Semana: "),e.TgZ(23,"span",14),e._uU(24,"*"),e.qZA()(),e.TgZ(25,"p-dropdown",17),e.NdJ("ngModelChange",function(r){return n.selectedDiaSemana=r}),e.YNc(26,ae,3,1,"ng-template",18),e.YNc(27,ie,3,1,"ng-template",19),e.qZA()(),e.TgZ(28,"div",20)(29,"label",21),e._uU(30," Hor\xe1rio: "),e.TgZ(31,"span",14),e._uU(32,"*"),e.qZA()(),e.TgZ(33,"input",22,23),e.NdJ("ngModelChange",function(r){return n.selectHorario=r})("change",function(){e.CHM(l);const r=e.MAs(34);return e.KtG(n.selectHorario=r.value)}),e.qZA(),e.YNc(35,se,5,3,"div",24),e.qZA(),e.TgZ(36,"div",20)(37,"label",25),e._uU(38,"Capacidade de Alunos: "),e.TgZ(39,"span",14),e._uU(40,"*"),e.qZA()(),e.TgZ(41,"input",26,27),e.NdJ("ngModelChange",function(r){return n.object.qtdeMaxAlunos=r}),e.qZA(),e.YNc(43,ce,2,1,"div",24),e.qZA(),e.TgZ(44,"div",20)(45,"label",28),e._uU(46,"Educador: "),e.TgZ(47,"span",14),e._uU(48,"*"),e.qZA()(),e.TgZ(49,"p-dropdown",29),e.NdJ("ngModelChange",function(r){return n.selectedEducadores=r}),e.YNc(50,pe,3,1,"ng-template",18),e.YNc(51,ue,3,1,"ng-template",19),e.qZA()()(),e.TgZ(52,"div",30)(53,"div",31)(54,"button",32),e._uU(55,"Limpar Campos"),e.qZA()(),e.TgZ(56,"button",33),e.NdJ("click",function(){return n.close()}),e._uU(57," Cancelar "),e.qZA(),e.TgZ(58,"button",34),e.NdJ("click",function(){return n.save()}),e._uU(59," Salvar "),e.qZA(),e.TgZ(60,"p",14),e._uU(61),e.qZA()()()()()()()()()()}if(2&a){const l=e.MAs(34),i=e.MAs(42);e.ekj("modal--show",n.open),e.xp6(19),e.Q6J("options",n.perfis)("ngModel",n.selectedPerfis),e.xp6(6),e.Q6J("options",n.diaSemana)("ngModel",n.selectedDiaSemana),e.xp6(8),e.Q6J("ngModel",n.selectHorario),e.xp6(2),e.Q6J("ngIf",l.touched&&l.errors),e.xp6(6),e.Q6J("ngModel",n.object.qtdeMaxAlunos),e.xp6(2),e.Q6J("ngIf",i.touched&&i.errors),e.xp6(6),e.Q6J("options",n.educadores)("ngModel",n.selectedEducadores),e.xp6(7),e.Q6J("disabled",n.loading),e.xp6(2),e.Q6J("disabled",n.loading),e.xp6(3),e.Oqu(n.erro)}},dependencies:[_.O5,C.jx,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.Q7,c.wO,c.nD,c.c5,c.On,c.F,x.Lt,v.NU],styles:["[_ngcontent-%COMP%]:root{--primary: #ff6315;--primary-highlight: #8c47dc;--secondary: #fff;--secondary-highlight: #F94184 ;--grey: #181818;--grey-highlight: #5a5c60}.container-header[_ngcontent-%COMP%]{background-color:var(--primary);color:#fff;padding:8px 30px;font-weight:400;letter-spacing:1.5px;text-transform:uppercase;margin-top:0;margin-bottom:0;font-size:12pt}.form-container[_ngcontent-%COMP%]{background-color:#fff;border-radius:4px;border:1px solid rgba(0,0,0,.164)}[_nghost-%COMP%]     .p-dropdown{width:100%}.container-header[_ngcontent-%COMP%]{background-color:var(--grey-highlight);color:#fff;padding:8px 30px;font-weight:400;letter-spacing:1.5px;text-transform:uppercase;margin-top:0;margin-bottom:0;font-size:12pt;font-family:sans-serif}.campo-container[_ngcontent-%COMP%]{padding:10px 30px}.modal-dialog[_ngcontent-%COMP%]{max-width:1000px;width:95%;max-height:95vh;padding:0;margin:auto}h5[_ngcontent-%COMP%]{font-family:sans-serif;font-size:14pt;color:#ff6315;margin-top:10px}.modal-body[_ngcontent-%COMP%]{background-color:#fff}.btn-clear[_ngcontent-%COMP%]{background-color:#5a5c60;display:flex;justify-content:right;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:none}.btn-cancel[_ngcontent-%COMP%]{background-color:#5a5c60;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:none}.btn-save[_ngcontent-%COMP%]{background-color:#ff6315;border-color:#ff6315;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:#9b9c9d}.form-control[_ngcontent-%COMP%]{padding:.375rem .75rem}.d-flex[_ngcontent-%COMP%]{display:flex!important;justify-content:right;margin-bottom:8px}.me-2[_ngcontent-%COMP%]{margin-left:8px!important;margin-top:7px;width:17px;height:16px}"]})}return o})()},{path:"excluir/:id",component:(()=>{class o{constructor(t,a,n,l){this.activatedRoute=t,this.router=a,this.turmaService=n,this.toastr=l,this.open=!0,this.id=0,this.erro="",this.loading=!1,this.activatedRoute.params.subscribe(i=>{i.id?(this.id=i.id,this.open=!0):(this.close(),this.toastr.error("N\xe3o foi poss\xedvel acessar essa p\xe1gina")),console.log(i)})}close(){this.open=!1,this.router.navigate(["turmas"])}delete(){this.loading=!0,(0,p.n)(this.turmaService.delete(this.id)).then(t=>{t.success?((0,p.n)(this.turmaService.getList()),this.close(),this.toastr.success("Opera\xe7\xe3o conclu\xedda com sucesso")):(this.erro=t.message,this.toastr.error(t.message)),this.loading=!1}).catch(t=>{this.erro=t,console.error("console catch"+t)}).finally(()=>{this.loading=!1})}static#e=this.\u0275fac=function(a){return new(a||o)(e.Y36(u.gz),e.Y36(u.F0),e.Y36(f),e.Y36(g._W))};static#t=this.\u0275cmp=e.Xpm({type:o,selectors:[["delete-alunos"]],decls:19,vars:6,consts:[[1,"modal","modal-delete"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button",1,"btn-close",3,"disabled","click"],[1,"modal-body"],[1,"text-danger"],[1,"modal-footer"],["type","button",1,"btn-cancel",3,"disabled","click"],["type","button",1,"btn-save",3,"disabled","click"]],template:function(a,n){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),e._uU(5,"Excluir Cadastro de Turma"),e.qZA(),e.TgZ(6,"button",5),e.NdJ("click",function(){return n.close()}),e.qZA()(),e.TgZ(7,"div",6)(8,"p"),e._uU(9,"Tem certeza que deseja excluir esse cadastro?"),e._UZ(10,"br"),e._uU(11," Essa a\xe7\xe3o \xe9 irrevers\xedvel e voc\xea n\xe3o poder\xe1 recuperar esses dados!"),e.qZA(),e.TgZ(12,"p",7),e._uU(13),e.qZA()(),e.TgZ(14,"div",8)(15,"button",9),e.NdJ("click",function(){return n.close()}),e._uU(16,"Cancelar "),e.qZA(),e.TgZ(17,"button",10),e.NdJ("click",function(){return n.delete()}),e._uU(18,"Excluir "),e.qZA()()()()()),2&a&&(e.ekj("modal--show",n.open),e.xp6(6),e.Q6J("disabled",n.loading),e.xp6(7),e.Oqu(n.erro),e.xp6(2),e.Q6J("disabled",n.loading),e.xp6(2),e.Q6J("disabled",n.loading))},styles:["[_ngcontent-%COMP%]:root{--primary: #ff6315;--primary-highlight: #8c47dc;--secondary: #fff;--secondary-highlight: #F94184 ;--grey: #181818;--grey-highlight: #5a5c60}.container-header[_ngcontent-%COMP%]{background-color:var(--primary);color:#fff;padding:8px 30px;font-weight:400;letter-spacing:1.5px;text-transform:uppercase;margin-top:0;margin-bottom:0;font-size:12pt}h5[_ngcontent-%COMP%]{font-family:sans-serif;font-size:14pt;color:#ff6315;margin-top:10px}.btn-cancel[_ngcontent-%COMP%]{background-color:#5a5c60;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:none}.btn-save[_ngcontent-%COMP%]{background-color:#ff6315;border-color:#ff6315;color:#fff;padding:10px;border-radius:10px;margin:6px;cursor:pointer;border:#9b9c9d}"]})}return o})()}]}];let ge=(()=>{class o{static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(me),u.Bz]})}return o})(),fe=(()=>{class o{static#e=this.\u0275fac=function(a){return new(a||o)};static#t=this.\u0275mod=e.oAB({type:o});static#o=this.\u0275inj=e.cJS({imports:[ge,_.ez,u.Bz,m.U$,b.LU,E.ml,c.u5,P.IJ,O.d,x.kW,U.L,w.W,g.Rh,v.q4]})}return o})()}}]);