"use strict";(self.webpackChunkinstagram=self.webpackChunkinstagram||[]).push([[822],{5822:(k,m,c)=>{c.r(m),c.d(m,{ForgotPasswordModule:()=>x});var l=c(8583),a=c(5727),g=c(665),_=c(5319),f=c(8634),n=c(3018),s=c(2238),d=c(1582);const u=["close"];let P=(()=>{class t{constructor(o,e,r){this.data=o,this.fb=e,this.router=r,this.sub=new _.w,this.isLoading=!1,this.event=new n.vpe}ngOnInit(){this.initotpForm()}initotpForm(){this.otpForm=this.fb.group({otp:["",g.kI.required]})}submit(){this.close.nativeElement.click(),this.router.navigate(["/authentication/reset-password"])}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(s.WI),n.Y36(g.qu),n.Y36(a.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-dialog"]],viewQuery:function(o,e){if(1&o&&n.Gf(u,5),2&o){let r;n.iGM(r=n.CRH())&&(e.close=r.first)}},outputs:{event:"event"},decls:20,vars:4,consts:[["mat-dialog-title","",1,"d-flex","justify-content-between"],["mat-dialog-title",""],["mat-dialog-close","",1,"click"],["src","assets/icons/x.svg","alt",""],[1,"mat-typography"],[3,"formGroup"],[1,"row"],[1,"col-12"],[1,"form_group","mb-5"],["for","",1,"form-label"],["type","number","formControlName","otp",1,"form-control"],["align","end"],[1,"btn","btn-outline-green","btn-md","me-4","px-4","d-none",3,"mat-dialog-close"],["close",""],[1,"btn","btn-green","btn-md","px-4",3,"click"],[3,"text","condition"]],template:function(o,e){1&o&&(n.TgZ(0,"div",0),n.TgZ(1,"h2",1),n._uU(2,"OTP "),n.qZA(),n.TgZ(3,"div",2),n._UZ(4,"img",3),n.qZA(),n.qZA(),n.TgZ(5,"mat-dialog-content",4),n.TgZ(6,"div"),n.TgZ(7,"form",5),n.TgZ(8,"div",6),n.TgZ(9,"div",7),n.TgZ(10,"div",8),n.TgZ(11,"label",9),n._uU(12,"OTP "),n.qZA(),n._UZ(13,"input",10),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.TgZ(14,"mat-dialog-actions",11),n.TgZ(15,"button",12,13),n._uU(17," No, cancel "),n.qZA(),n.TgZ(18,"button",14),n.NdJ("click",function(){return e.submit()}),n._UZ(19,"app-loading-button",15),n.qZA(),n.qZA()),2&o&&(n.xp6(7),n.Q6J("formGroup",e.otpForm),n.xp6(8),n.Q6J("mat-dialog-close",!1),n.xp6(4),n.Q6J("text","Done")("condition",e.isLoading))},directives:[s.uh,s.ZT,s.xY,g._Y,g.JL,g.sg,g.wV,g.Fj,g.JJ,g.u,s.H8,d.v],styles:['@import"https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap";.mat-typography[_ngcontent-%COMP%]{font-family:"Poppins",sans-serif}.mat-typography[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%]{font-size:3.15rem;font-weight:bold;color:#182252}.mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.7rem;line-height:3rem;color:#596180}.mat-typography[_ngcontent-%COMP%]   .text-primary[_ngcontent-%COMP%]{color:#1890ff}']}),t})();var C=c(3772);function M(t,i){1&t&&(n.TgZ(0,"div",18),n._uU(1," Required "),n.qZA())}function O(t,i){if(1&t&&(n.TgZ(0,"h3",19),n._uU(1),n.ALo(2,"formatTime"),n.qZA()),2&t){const o=n.oxw();n.xp6(1),n.Oqu(n.lcZ(2,1,o.counter))}}function h(t,i){1&t&&n._UZ(0,"i",22)}function w(t,i){if(1&t){const o=n.EpF();n.TgZ(0,"p",20),n.NdJ("click",function(){return n.CHM(o),n.oxw().submit()}),n._uU(1," Resend Code "),n.YNc(2,h,1,0,"i",21),n.qZA()}if(2&t){const o=n.oxw();n.xp6(2),n.Q6J("ngIf",o.sending)}}const b=function(t){return{"is-invalid":t}};let Z=(()=>{class t{constructor(o,e,r){this.dialog=o,this.fb=e,this.router=r,this.sub=new _.w,this.countDown=new _.w,this.forgotPasswordFormSubmitted=!1,this.isLoggingIn=!1,this.error_message="",this.isError=!1,this.counter=10,this.tick=1e3,this.sending=!1}ngOnInit(){this.initForgotPasswordForm(),this.countDown=(0,f.H)(0,this.tick).subscribe(()=>--this.counter)}initForgotPasswordForm(){this.forgotPasswordForm=this.fb.group({email:["",[g.kI.required]]})}openDialog(o){this.dialog.open(P,{data:o,panelClass:"modal-width"}).componentInstance.event.subscribe(p=>{})}submit(){this.forgotPasswordForm.valid&&this.openDialog(!1)}checkForKeyEnter(o){var e=o.key||o.keyCode;("Enter"==e||8==e)&&this.submit()}back(){this.router.navigate(["/authentication/login"])}ngOnDestroy(){this.sub.unsubscribe()}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(s.uw),n.Y36(g.qu),n.Y36(a.F0))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-registration"]],decls:27,vars:10,consts:[[1,"login_wrapper"],[1,"login_wrapper-card"],[1,"login_wrapper-logo"],["src",n.$Z9`assets/images/logo.svg`,"alt","GOS HRM Logo"],[1,"login_wrapper__header"],[1,"login_wrapper-form"],[3,"error_message"],[3,"formGroup"],[1,"form_group","mb-5"],["type","text","id","email","placeholder","Enter Email or Phone Number","formControlName","email",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],[1,"text-center"],["class","timer py-3",4,"ngIf"],["class","timer click py-4",3,"click",4,"ngIf"],[1,"btn","wrapper__login_btn",3,"click"],[3,"text","condition"],[1,"wrapper__sign_up","text-center","mt-4"],["routerLink","/authentication/login"],[1,"invalid-feedback"],[1,"timer","py-3"],[1,"timer","click","py-4",3,"click"],["class","fa fa-spin fa-spinner",4,"ngIf"],[1,"fa","fa-spin","fa-spinner"]],template:function(o,e){if(1&o&&(n.TgZ(0,"section"),n.TgZ(1,"div",0),n.TgZ(2,"div",1),n.TgZ(3,"div",2),n._UZ(4,"embed",3),n.qZA(),n.TgZ(5,"div",4),n.TgZ(6,"h1"),n._uU(7,"Forgot Password?"),n.qZA(),n.TgZ(8,"p"),n._uU(9," Enter the email or phone number you used to register to get a password reset link. "),n.qZA(),n.qZA(),n.TgZ(10,"div",5),n._UZ(11,"app-error",6),n.TgZ(12,"form",7),n.TgZ(13,"div",8),n._UZ(14,"input",9),n.YNc(15,M,2,0,"div",10),n.qZA(),n.TgZ(16,"div",11),n.YNc(17,O,3,3,"h3",12),n.YNc(18,w,3,1,"p",13),n.qZA(),n.TgZ(19,"button",14),n.NdJ("click",function(){return e.submit()}),n._UZ(20,"app-loading-button",15),n.qZA(),n.TgZ(21,"div",16),n.TgZ(22,"p"),n._uU(23," I remember my password. "),n.TgZ(24,"a",17),n.TgZ(25,"span"),n._uU(26,"Login"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o){let r,p;n.xp6(11),n.Q6J("error_message",e.error_message),n.xp6(1),n.Q6J("formGroup",e.forgotPasswordForm),n.xp6(2),n.Q6J("ngClass",n.VKq(8,b,(null==(r=e.forgotPasswordForm.get("email"))?null:r.errors)&&(null==(r=e.forgotPasswordForm.get("email"))?null:r.touched)||(null==(r=e.forgotPasswordForm.get("email"))?null:r.hasError("required"))&&e.forgotPasswordFormSubmitted||(null==(r=e.forgotPasswordForm.get("email"))?null:r.hasError("email"))&&e.forgotPasswordFormSubmitted)),n.xp6(1),n.Q6J("ngIf",(null==(p=e.forgotPasswordForm.get("email"))?null:p.hasError("required"))&&e.forgotPasswordFormSubmitted&&!(null!=(p=e.forgotPasswordForm.get("email"))&&p.hasError("email"))&&e.forgotPasswordFormSubmitted),n.xp6(2),n.Q6J("ngIf",e.counter>0),n.xp6(1),n.Q6J("ngIf",e.counter<=0),n.xp6(2),n.Q6J("text","Send Link")("condition",e.isLoggingIn)}},directives:function(){return[C.q,g._Y,g.JL,g.sg,g.Fj,g.JJ,g.u,l.mk,l.O5,d.v,a.yS]},pipes:function(){return[v]},styles:['.form_group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:rgba(24,34,82,.07) url(arrow-down.9ca8ee03998d63666761.svg) no-repeat 97% 50%}.form_group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{background:#ffffff url(arrow-down.9ca8ee03998d63666761.svg) no-repeat 97% 50%}.wrapper[_ngcontent-%COMP%]{height:100%}.wrapper_top[_ngcontent-%COMP%]{display:flex;margin-bottom:3rem;align-items:center;text-align:center}.wrapper_top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500;font-size:1.4rem;line-height:2.1rem;color:#596180}.wrapper__logo[_ngcontent-%COMP%]{padding-bottom:2.5rem;margin-bottom:2.5rem;border-bottom:.1rem solid rgba(15,23,51,.1)}.wrapper__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:"poppins bold",sans-serif!important;font-size:2rem;line-height:2.4rem;font-weight:900}.wrapper__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.4rem;line-height:150%;font-weight:400;color:#182252;margin-bottom:3.6rem}.wrapper[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:700;color:#2d54e5}.wrapper__forgot[_ngcontent-%COMP%], .wrapper__sign_up[_ngcontent-%COMP%]{margin-bottom:3.4rem}.wrapper__forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .wrapper__forgot[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .wrapper__sign_up[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .wrapper__sign_up[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#182252;font-weight:600;font-size:1.4rem;line-height:1.8rem;text-decoration:none}.wrapper__forgot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .wrapper__sign_up[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#d9a724;text-decoration:underline}.wrapper__forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .wrapper__forgot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .wrapper__sign_up[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .wrapper__sign_up[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#2d54e5}.wrapper__login_btn[_ngcontent-%COMP%]{margin-top:3rem}@media only screen and (max-width: 768px){.wrapper[_ngcontent-%COMP%]{padding:3rem}}.form_group[_ngcontent-%COMP%]{font-family:"poppins",sans-serif!important}.form_group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#182252;font-size:1.2rem;line-height:1.8rem}.form_group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#d93b2b;margin-left:.4rem}.form_group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form_group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;margin-top:.4rem;height:4.8rem;border-radius:.8rem;font-size:1.4rem;color:#182252;padding:1.35rem 1.6rem;background:#EDF1FF;border:.2rem solid #EDF1FF}.form_group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .form_group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover{border:.1rem solid rgba(15,23,51,.1)!important}.form_group[_ngcontent-%COMP%]   input.is-invalid[_ngcontent-%COMP%], .form_group[_ngcontent-%COMP%]   select.is-invalid[_ngcontent-%COMP%]{border:.1rem solid #d93b2b!important;background:#ffffff}.form_group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form_group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{background:#ffffff;color:#182252;border:.1rem solid rgba(15,23,51,.1);box-shadow:none}.form_group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:rgba(24,34,82,.07) url(arrow-down.9ca8ee03998d63666761.svg) no-repeat 97% 50%}.form_group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{background:#ffffff url(arrow-down.9ca8ee03998d63666761.svg) no-repeat 97% 50%}.form_group[_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]{width:100%}.form_group[_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:3rem}.form_group[_ngcontent-%COMP%]   .ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{border:none;margin-top:.4rem;box-sizing:border-box;outline:none;width:100%;height:4.8rem;border-radius:.8rem;font-size:1.4rem;color:#182252;padding:1.35rem 1.6rem;background:rgba(24,34,82,.07);display:flex;align-items:center}.form_group[_ngcontent-%COMP%]   .ng-select.ng-select-focused.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background:#ffffff!important;color:#182252;border:.1rem solid rgba(24,34,82,.4);box-shadow:none}.form_group[_ngcontent-%COMP%]   .ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened) > .ng-select-container[_ngcontent-%COMP%]{border-color:#18225266;box-shadow:none}.form_group[_ngcontent-%COMP%]   .ng-select.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{border:.1rem solid #d93b2b!important;background:#ffffff}.form_group[_ngcontent-%COMP%]   .ng-select.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{border-color:#d93b2b transparent transparent}.form_group[_ngcontent-%COMP%]   .ng-select.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{color:#d93b2b}section[_ngcontent-%COMP%]{background:url(auth-bg.a91d8bfb84bf4e1b7b2d.svg) no-repeat center center;background-size:cover;min-height:100vh;display:flex;flex-direction:column;box-shadow:inset 0 0 0 2000px #000000b3}section[_ngcontent-%COMP%]   .login_wrapper[_ngcontent-%COMP%]{height:100vh;display:flex;justify-content:center;align-items:center;text-align:left}section[_ngcontent-%COMP%]   .login_wrapper__header[_ngcontent-%COMP%]{text-align:center}section[_ngcontent-%COMP%]   .login_wrapper__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:"poppins bold",sans-serif!important;font-size:2rem;line-height:2.4rem;font-weight:900}section[_ngcontent-%COMP%]   .login_wrapper__header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.4rem;line-height:150%;font-weight:400;color:#182252;margin-bottom:3.6rem}section[_ngcontent-%COMP%]   .login_wrapper[_ngcontent-%COMP%]   .timer[_ngcontent-%COMP%]{font-size:1.4rem;font-weight:700;color:#2d54e5}section[_ngcontent-%COMP%]   .login_wrapper-card[_ngcontent-%COMP%]{background:#ffffff;width:45rem;min-height:50vh;padding:3rem;box-shadow:0 .4rem 1.6rem #0000000d;margin-top:3rem;margin-bottom:2rem}section[_ngcontent-%COMP%]   .login_wrapper-logo[_ngcontent-%COMP%]{margin-bottom:5.6rem;display:flex;justify-content:center}section[_ngcontent-%COMP%]   .login_wrapper-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.2rem;line-height:4.8rem}section[_ngcontent-%COMP%]   .login_wrapper-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.4rem;line-height:2.1rem;color:#000;margin-bottom:5.6rem}section[_ngcontent-%COMP%]   .login_wrapper[_ngcontent-%COMP%]   .position-relative[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{position:absolute;font-size:1.5rem;top:1.8rem;right:1.5rem}section[_ngcontent-%COMP%]   .login_wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1.6rem}section[_ngcontent-%COMP%]   .login_wrapper__forgot[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .login_wrapper__sign_up[_ngcontent-%COMP%]{margin-bottom:3.4rem}section[_ngcontent-%COMP%]   .login_wrapper__forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .login_wrapper__forgot[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .login_wrapper__sign_up[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .login_wrapper__sign_up[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#182252;font-weight:600;font-size:1.4rem;line-height:1.8rem;text-decoration:none}section[_ngcontent-%COMP%]   .login_wrapper__forgot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .login_wrapper__sign_up[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#d9a724;text-decoration:underline}section[_ngcontent-%COMP%]   .login_wrapper__forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .login_wrapper__forgot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .login_wrapper__sign_up[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .login_wrapper__sign_up[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#2d54e5}@media only screen and (max-width: 768px){section[_ngcontent-%COMP%]   .login_wrapper-card[_ngcontent-%COMP%]{background:#ffffff;width:35rem;min-height:50vh;padding:2.5rem}}']}),t})(),v=(()=>{class t{transform(o){const e=Math.floor(o/60);return("00"+e).slice(-2)+":"+("00"+Math.floor(o-60*e)).slice(-2)}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275pipe=n.Yjl({name:"formatTime",type:t,pure:!0}),t})();const F=[{path:"",component:Z}];let y=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[a.Bz.forChild(F)],a.Bz]}),t})();var T=c(7484);let x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[l.ez,y,T.m,g.UX,s.Is]]}),t})()}}]);