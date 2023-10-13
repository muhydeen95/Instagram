"use strict";(self.webpackChunkinstagram=self.webpackChunkinstagram||[]).push([[592],{3984:(_,s,o)=>{var a=o(993),l=o(4720),d=o(7382),c=o(8574),f=function(){function i(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}return i.prototype.unsubscribe=function(){var t;if(!this.closed){var r=this,e=r._parentOrParents,u=r._ctorUnsubscribe,g=r._unsubscribe,h=r._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,e instanceof i)e.remove(this);else if(null!==e)for(var m=0;m<e.length;++m)e[m].remove(this);if(d.isFunction(g)){u&&(this._unsubscribe=void 0);try{g.call(this)}catch(b){t=b instanceof c.UnsubscriptionError?p(b.errors):[b]}}if(a.isArray(h)){m=-1;for(var O=h.length;++m<O;){var w=h[m];if(l.isObject(w))try{w.unsubscribe()}catch(v){t=t||[],v instanceof c.UnsubscriptionError?t=t.concat(p(v.errors)):t.push(v)}}}if(t)throw new c.UnsubscriptionError(t)}},i.prototype.add=function(t){var r=t;if(!t)return i.EMPTY;switch(typeof t){case"function":r=new i(t);case"object":if(r===this||r.closed||"function"!=typeof r.unsubscribe)return r;if(this.closed)return r.unsubscribe(),r;if(!(r instanceof i)){var e=r;(r=new i)._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var u=r._parentOrParents;if(null===u)r._parentOrParents=this;else if(u instanceof i){if(u===this)return r;r._parentOrParents=[u,this]}else{if(-1!==u.indexOf(this))return r;u.push(this)}var g=this._subscriptions;return null===g?this._subscriptions=[r]:g.push(r),r},i.prototype.remove=function(t){var r=this._subscriptions;if(r){var e=r.indexOf(t);-1!==e&&r.splice(e,1)}},i.EMPTY=((t=new i).closed=!0,t),i;var t}();function p(i){return i.reduce(function(t,r){return t.concat(r instanceof c.UnsubscriptionError?r.errors:r)},[])}s.w=f},8574:(_,s)=>{Object.defineProperty(s,"__esModule",{value:!0});var o=function(){function n(a){return Error.call(this),this.message=a?a.length+" errors occurred during unsubscription:\n"+a.map(function(l,d){return d+1+") "+l.toString()}).join("\n  "):"",this.name="UnsubscriptionError",this.errors=a,this}return n.prototype=Object.create(Error.prototype),n}();s.UnsubscriptionError=o},993:(_,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.isArray=Array.isArray||function(o){return o&&"number"==typeof o.length}},7382:(_,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.isFunction=function(n){return"function"==typeof n}},4720:(_,s)=>{Object.defineProperty(s,"__esModule",{value:!0}),s.isObject=function(n){return null!==n&&"object"==typeof n}},3772:(_,s,o)=>{o.d(s,{q:()=>d});var n=o(3018),a=o(8583);function l(c,f){if(1&c&&(n.TgZ(0,"div",1),n.TgZ(1,"div",2),n.TgZ(2,"div",3),n._UZ(3,"img",4),n.qZA(),n._uU(4),n.qZA(),n.qZA()),2&c){const p=n.oxw();n.xp6(4),n.hij(" ",p.error_message," ")}}let d=(()=>{class c{constructor(){this.error_message="",this.loading=!1}ngOnInit(){}}return c.\u0275fac=function(p){return new(p||c)},c.\u0275cmp=n.Xpm({type:c,selectors:[["app-error"]],inputs:{error_message:"error_message",loading:"loading"},decls:1,vars:1,consts:[["class","wrapper_form",4,"ngIf"],[1,"wrapper_form"],[1,"d-flex","align-items-center"],[1,"wrapper_form-icon"],["src","assets/icons/error.svg","type","",1,"me-2"]],template:function(p,i){1&p&&n.YNc(0,l,5,1,"div",0),2&p&&n.Q6J("ngIf",""!=i.error_message&&null!=i.error_message&&!i.loading)},directives:[a.O5],styles:[".wrapper_form[_ngcontent-%COMP%]{font-size:1.2rem;background-color:#d93b2b1a;width:100%;padding:1.2rem 1.6rem;border-radius:.8rem;color:#d93b2b;margin-bottom:1rem}.wrapper_form-icon[_ngcontent-%COMP%]{margin-right:1.6rem}"],changeDetection:0}),c})()},1582:(_,s,o)=>{o.d(s,{v:()=>i});var n=o(3018),a=o(8583);const l=function(t){return{spin:t}},d=function(t){return{"width.px":t}};let c=(()=>{class t{constructor(){this.width=20,this.loading=!0,this.color="#ffffff"}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-loader"]],inputs:{width:"width",loading:"loading",color:"color"},decls:4,vars:7,consts:[[1,"loader",3,"ngClass","ngStyle"],["version","1.1","id","Layer_1","xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","x","0px","y","0px","viewBox","0 0 512 512",0,"xml","space","preserve"],["id","XMLID_1_"],["id","XMLID_5_","d","M256,0C116.4,0,3.7,111.7,0,250.4c2.8-121,95-217.8,207.6-217.8c114.5,0,207.6,100.5,207.6,224.3\n\t\tc0,26.1,21.4,48.4,48.4,48.4s48.4-21.4,48.4-48.4C512,114.5,397.5,0,256,0z M256,512c139.6,0,252.3-111.7,256-250.4\n\t\tc-2.8,121-95,217.8-207.6,217.8c-114.5,0-207.6-100.5-207.6-224.3c0-26.1-21.4-48.4-48.4-48.4S0,228.1,0,255.1\n\t\tC0,397.5,114.5,512,256,512z"]],template:function(e,u){1&e&&(n.TgZ(0,"div",0),n.O4$(),n.TgZ(1,"svg",1),n.TgZ(2,"g",2),n._UZ(3,"path",3),n.qZA(),n.qZA(),n.qZA()),2&e&&(n.Q6J("ngClass",n.VKq(3,l,u.loading))("ngStyle",n.VKq(5,d,u.width)),n.xp6(1),n.uIk("fill",u.color))},directives:[a.mk,a.PC],styles:[""]}),t})();function f(t,r){if(1&t&&(n.TgZ(0,"span"),n._uU(1),n.qZA()),2&t){const e=n.oxw();n.xp6(1),n.Oqu(e.text)}}function p(t,r){if(1&t&&n._UZ(0,"app-loader",3),2&t){const e=n.oxw();n.Q6J("width",e.loaderSize)("loading",!0)}}let i=(()=>{class t{constructor(){this.loaderSize=20}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-loading-button"]],inputs:{text:"text",condition:"condition",loaderSize:"loaderSize"},decls:3,vars:2,consts:[[1,"center"],[4,"ngIf"],[3,"width","loading",4,"ngIf"],[3,"width","loading"]],template:function(e,u){1&e&&(n.TgZ(0,"span",0),n.YNc(1,f,2,1,"span",1),n.YNc(2,p,1,2,"app-loader",2),n.qZA()),2&e&&(n.xp6(1),n.Q6J("ngIf",!u.condition),n.xp6(1),n.Q6J("ngIf",u.condition))},directives:[a.O5,c],styles:[".center[_ngcontent-%COMP%]{width:100%}"],changeDetection:0}),t})()}}]);