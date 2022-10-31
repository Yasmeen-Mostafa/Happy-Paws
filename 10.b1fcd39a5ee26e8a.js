"use strict";(self.webpackChunkHappy_Paws=self.webpackChunkHappy_Paws||[]).push([[10],{1010:(y,g,i)=>{i.r(g),i.d(g,{BlogModuleModule:()=>Z});var r=i(6895),c=i(1441),s=i(9751),t=i(4650),u=i(6897);function d(o,n){if(1&o&&(t.TgZ(0,"figure",7),t._UZ(1,"img",8),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("src",e.image,t.LSH)}}function p(o,n){if(1&o&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.data," ")}}function m(o,n){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,d,2,1,"figure",10),t.YNc(2,p,2,1,"p",11),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.Q6J("ngIf",e.image),t.xp6(1),t.Q6J("ngIf",e.data)}}let f=(()=>{class o{constructor(e,l){this._activeRoute=e,this._store=l,this.article={},this.blogData=new s.y}ngOnInit(){this.blogData=this._store.select("blog"),this.blogData.subscribe(e=>{let l=e.blog.find(a=>a.id===this._activeRoute.snapshot.queryParams.id);l&&(this.article=l)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.gz),t.Y36(u.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-details"]],decls:17,vars:5,consts:[[1,"py-4","blog-details"],[1,"container"],[1,"blog-title","mb-3"],[1,"fw-light","sub-title"],[1,"fa-regular","fa-user","me-1"],[1,"author-name","me-1"],[1,"fa-regular","fa-folder-closed","ms-2","me-2"],[1,"d-flex","justify-content-center","mt-4"],["alt","article-image",1,"img-fluid","mb-3",3,"src"],[4,"ngFor","ngForOf"],["class","d-flex justify-content-center mt-4",4,"ngIf"],[4,"ngIf"]],template:function(e,l){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"h1",2),t._uU(3),t.qZA(),t.TgZ(4,"p",3),t._UZ(5,"i",4),t._uU(6," By "),t.TgZ(7,"span",5),t._uU(8),t.qZA(),t._uU(9," | "),t._UZ(10,"i",6),t.TgZ(11,"span"),t._uU(12),t.qZA()(),t._UZ(13,"hr"),t.TgZ(14,"figure",7),t._UZ(15,"img",8),t.qZA(),t.YNc(16,m,3,2,"div",9),t.qZA()()),2&e&&(t.xp6(3),t.Oqu(l.article.title),t.xp6(5),t.Oqu(l.article.author),t.xp6(4),t.Oqu(l.article.type),t.xp6(3),t.Q6J("src",l.article.image,t.LSH),t.xp6(1),t.Q6J("ngForOf",l.article.body))},dependencies:[r.sg,r.O5],styles:[".blog-details[_ngcontent-%COMP%]{background-color:var(--auth-background)}.blog-details[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{width:50px}.blog-details[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:1000px}.blog-details[_ngcontent-%COMP%]   .blog-title[_ngcontent-%COMP%]{color:var(--dark-grey-color)}.blog-details[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{color:var(--grey-color)}.blog-details[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]   .author-name[_ngcontent-%COMP%]{color:#00a9ff}.blog-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--dark-grey-color)}"]}),o})(),_=(()=>{class o{constructor(e){this._router=e,this.article={}}ngOnInit(){}goToBlogDetails(){this._router.navigate(["/blog/details"],{queryParams:{id:this.article.id}})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-card"]],inputs:{article:"article"},decls:16,vars:5,consts:[[1,"blog-card","d-md-block","d-flex","justify-content-center","flex-column","align-items-center","pb-3",3,"click"],[1,"img-fluid",3,"src","alt"],[1,"d-flex","justify-content-between","w-100"],[1,"ms-2"],[1,"blog-card__title","mb-3"],[1,"fw-light","blog-card__sub-title"],[1,"fa-regular","fa-user","me-1"],[1,"author-name","me-1"],[1,"fa-regular","fa-folder-closed","ms-2","me-2"]],template:function(e,l){1&e&&(t.TgZ(0,"div",0),t.NdJ("click",function(){return l.goToBlogDetails()}),t.TgZ(1,"figure"),t._UZ(2,"img",1),t.qZA(),t.TgZ(3,"div",2)(4,"div",3)(5,"h5",4),t._uU(6),t.qZA(),t.TgZ(7,"p",5),t._UZ(8,"i",6),t._uU(9," By "),t.TgZ(10,"span",7),t._uU(11),t.qZA(),t._uU(12," | "),t._UZ(13,"i",8),t.TgZ(14,"span"),t._uU(15),t.qZA()()()()()),2&e&&(t.xp6(2),t.Q6J("src",l.article.image,t.LSH)("alt",l.article.title),t.xp6(4),t.Oqu(l.article.title),t.xp6(5),t.Oqu(l.article.author),t.xp6(4),t.Oqu(l.article.type))},styles:[".blog-card[_ngcontent-%COMP%]{border-radius:25px}.blog-card__title[_ngcontent-%COMP%]{color:var(--dark-grey-color)}.blog-card__sub-title[_ngcontent-%COMP%]{color:var(--grey-color)}.blog-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:25px 25px 0 0;height:250px;width:100%}.blog-card[_ngcontent-%COMP%]:hover{box-shadow:.5rem 1rem 2rem #00000026!important;cursor:pointer}"]}),o})();function b(o,n){if(1&o&&(t.TgZ(0,"div",4),t._UZ(1,"app-blog-card",5),t.qZA()),2&o){const e=n.$implicit;t.xp6(1),t.Q6J("article",e)}}const h=[{path:"",redirectTo:"articles",pathMatch:"full"},{path:"articles",component:(()=>{class o{constructor(e){this._store=e,this.bloglist=new s.y}ngOnInit(){this.bloglist=this._store.select("blog")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(u.yh))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-blog-list"]],decls:5,vars:3,consts:[[1,"py-5","blog"],[1,"container"],[1,"row"],["class","col-md-6 col-lg-4 p-3",4,"ngFor","ngForOf"],[1,"col-md-6","col-lg-4","p-3"],[3,"article"]],template:function(e,l){if(1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2),t.YNc(3,b,2,1,"div",3),t.ALo(4,"async"),t.qZA()()()),2&e){let a;t.xp6(3),t.Q6J("ngForOf",null==(a=t.lcZ(4,1,l.bloglist))?null:a.blog)}},dependencies:[r.sg,_,r.Ov],styles:[".blog[_ngcontent-%COMP%]{background-color:var(--auth-background);flex-grow:1}"]}),o})()},{path:"details",component:f}];let C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.Bz.forChild(h),c.Bz]}),o})(),Z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[r.ez,C]}),o})()}}]);