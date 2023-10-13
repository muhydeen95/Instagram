"use strict";(self.webpackChunkinstagram=self.webpackChunkinstagram||[]).push([[917],{6917:(Y,Z,s)=>{s.r(Z),s.d(Z,{RegistrationModule:()=>K});var b=s(8583),O=s(5727),o=s(665),F=s(3984),e=s(3018),q=s(3772);function T(r,l){1&r&&(e.TgZ(0,"div",27),e._uU(1," Required "),e.qZA())}function N(r,l){1&r&&(e.TgZ(0,"div",28),e.TgZ(1,"span"),e._uU(2,"Full must not container any special char and maximum of 50 chars"),e.qZA(),e.qZA())}function A(r,l){1&r&&(e.TgZ(0,"div",27),e._uU(1," Required "),e.qZA())}function y(r,l){1&r&&(e.TgZ(0,"div",27),e._uU(1," Required "),e.qZA())}function k(r,l){1&r&&(e.TgZ(0,"div",27),e._uU(1," Enter a valid email "),e.qZA())}function R(r,l){1&r&&(e.TgZ(0,"div",27),e._uU(1," Required "),e.qZA())}function E(r,l){1&r&&(e.TgZ(0,"div",27),e._uU(1," Required "),e.qZA())}function J(r,l){1&r&&(e.TgZ(0,"div",28),e.TgZ(1,"span"),e._uU(2,"Password must container at least 8 character with one uppercase, one lowercase and one number"),e.qZA(),e.qZA())}function S(r,l){1&r&&(e.TgZ(0,"div",28),e._uU(1," Passwords must match "),e.qZA())}const p=function(r){return{"is-invalid":r}},U=[{path:"",component:(()=>{class r{constructor(i){this.fb=i,this.sub=new F.w,this.isLoggingIn=!1,this.registerFormSubmitted=!1,this.error_message="",this.showPassword=!1,this.showConfirmPassword=!1}ngOnInit(){window.scroll(0,0),this.initRegisterForm()}initRegisterForm(){this.registerForm=this.fb.group({fullName:["",[o.kI.required,o.kI.pattern(/^(?=.?[A-Z])(?=.?[a-z]).{8,50}$/)]],userName:["",[o.kI.required]],email:["",[o.kI.required,o.kI.email]],phoneNumber:["",[o.kI.required]],password:["",[o.kI.required,o.kI.pattern(/^(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,30}$/)]],confirmPassword:["",o.kI.required]},{validators:[this.passwordMatchValidator]})}passwordMatchValidator(i){var n,t;return(null===(n=i.get("password"))||void 0===n?void 0:n.value)===(null===(t=i.get("confirmPassword"))||void 0===t?void 0:t.value)?null:{passwordMismatch:!0}}register(){this.registerFormSubmitted=!0}checkForKeyEnter(i){var n=i.key||i.keyCode;("Enter"==n||8==n)&&this.register()}ngOnDestroy(){this.sub.unsubscribe()}}return r.\u0275fac=function(i){return new(i||r)(e.Y36(o.qu))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-registration"]],decls:65,vars:33,consts:[[1,"login_wrapper"],[1,"login_wrapper-card"],[1,"login_wrapper-logo"],["src",e.$Z9`assets/images/logo.svg`,"alt","GOS HRM Logo"],[1,"login_wrapper-form"],[1,"row",3,"formGroup"],[3,"error_message"],[1,"col-md-6"],[1,"form_group","mb-5"],["for","fullName",1,"form-label"],["type","text","id","fullName","placeholder","Enter Full Name","formControlName","fullName",1,"form-control",3,"ngClass","keyup"],["class","invalid-feedback",4,"ngIf"],["class","text-danger",4,"ngIf"],["for","userName",1,"form-label"],["type","text","id","userName","placeholder","Enter Username","formControlName","userName",1,"form-control",3,"ngClass","keyup"],["for","email",1,"form-label"],["type","email","id","email","placeholder","Enter email address","formControlName","email","autocomplete","email",1,"form-control",3,"ngClass","keyup"],["type","tel","id","tel","placeholder","Enter Phone Number","formControlName","phoneNumber",1,"form-control",3,"ngClass","keyup"],[1,"form_group","position-relative","mb-3"],["for","password",1,"form-label"],["placeholder","*********","formControlName","password","autocomplete","current-password",1,"form-control","pr-2",3,"type","ngClass","keyup"],["alt","eye close icon",1,"svg_eye",3,"src","click"],["for","confirmPassword",1,"form-label"],["formControlName","confirmPassword","placeholder","Re-enter new password",1,"form-control","pr-2",3,"type","ngClass"],[1,"btn","wrapper__login_btn",3,"click"],[1,"login_wrapper__sign_up","text-center","mt-4"],["routerLink","/authentication/login"],[1,"invalid-feedback"],[1,"text-danger"]],template:function(i,n){if(1&i&&(e.TgZ(0,"section"),e.TgZ(1,"div",0),e.TgZ(2,"div",1),e.TgZ(3,"div",2),e._UZ(4,"embed",3),e.qZA(),e.TgZ(5,"div",4),e.TgZ(6,"div",5),e._UZ(7,"app-error",6),e.TgZ(8,"div",7),e.TgZ(9,"div",8),e.TgZ(10,"label",9),e._uU(11,"Full Name "),e.TgZ(12,"span"),e._uU(13,"\u25cf "),e.qZA(),e.qZA(),e.TgZ(14,"input",10),e.NdJ("keyup",function(g){return n.checkForKeyEnter(g)}),e.qZA(),e.YNc(15,T,2,0,"div",11),e.YNc(16,N,3,0,"div",12),e.qZA(),e.qZA(),e.TgZ(17,"div",7),e.TgZ(18,"div",8),e.TgZ(19,"label",13),e._uU(20,"Username "),e.TgZ(21,"span"),e._uU(22,"\u25cf "),e.qZA(),e.qZA(),e.TgZ(23,"input",14),e.NdJ("keyup",function(g){return n.checkForKeyEnter(g)}),e.qZA(),e.YNc(24,A,2,0,"div",11),e.qZA(),e.qZA(),e.TgZ(25,"div",7),e.TgZ(26,"div",8),e.TgZ(27,"label",15),e._uU(28,"Email "),e.qZA(),e.TgZ(29,"input",16),e.NdJ("keyup",function(g){return n.checkForKeyEnter(g)}),e.qZA(),e.YNc(30,y,2,0,"div",11),e.YNc(31,k,2,0,"div",11),e.qZA(),e.qZA(),e.TgZ(32,"div",7),e.TgZ(33,"div",8),e.TgZ(34,"label",15),e._uU(35,"Phone Number "),e.qZA(),e.TgZ(36,"input",17),e.NdJ("keyup",function(g){return n.checkForKeyEnter(g)}),e.qZA(),e.YNc(37,R,2,0,"div",11),e.qZA(),e.qZA(),e.TgZ(38,"div",7),e.TgZ(39,"div",18),e.TgZ(40,"label",19),e._uU(41,"Password "),e.TgZ(42,"span"),e._uU(43,"\u25cf "),e.qZA(),e.qZA(),e.TgZ(44,"input",20),e.NdJ("keyup",function(g){return n.checkForKeyEnter(g)}),e.qZA(),e.TgZ(45,"img",21),e.NdJ("click",function(){return n.showPassword=!n.showPassword}),e.qZA(),e.YNc(46,E,2,0,"div",11),e.YNc(47,J,3,0,"div",12),e.qZA(),e.qZA(),e.TgZ(48,"div",7),e.TgZ(49,"div",18),e.TgZ(50,"label",22),e._uU(51,"Confirm Password "),e.TgZ(52,"span"),e._uU(53,"\u25cf "),e.qZA(),e.qZA(),e._UZ(54,"input",23),e.TgZ(55,"img",21),e.NdJ("click",function(){return n.showConfirmPassword=!n.showConfirmPassword}),e.qZA(),e.YNc(56,S,2,0,"div",12),e.qZA(),e.qZA(),e.TgZ(57,"button",24),e.NdJ("click",function(){return n.register()}),e._uU(58," Rehister "),e.qZA(),e.TgZ(59,"div",25),e.TgZ(60,"p"),e._uU(61," Already have an account? "),e.TgZ(62,"a",26),e.TgZ(63,"span"),e._uU(64,"Login"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i){let t,g,d,a,_,m,f,C,u,h,c,w,P,v,M;e.xp6(6),e.Q6J("formGroup",n.registerForm),e.xp6(1),e.Q6J("error_message",n.error_message),e.xp6(7),e.Q6J("ngClass",e.VKq(21,p,(null==(t=n.registerForm.get("fullName"))?null:t.errors)&&(null==(t=n.registerForm.get("fullName"))?null:t.touched)||(null==(t=n.registerForm.get("fullName"))?null:t.hasError("required"))&&n.registerFormSubmitted||(null==(t=n.registerForm.get("fullName"))?null:t.hasError("fullName"))&&n.registerFormSubmitted)),e.xp6(1),e.Q6J("ngIf",(null==(g=n.registerForm.get("fullName"))?null:g.hasError("required"))&&n.registerFormSubmitted&&!(null!=(g=n.registerForm.get("fullName"))&&g.hasError("fullName"))&&n.registerFormSubmitted),e.xp6(1),e.Q6J("ngIf",(null==(d=n.registerForm.get("fullName"))?null:d.invalid)&&""!=(null==(d=n.registerForm.get("fullName"))?null:d.value)),e.xp6(7),e.Q6J("ngClass",e.VKq(23,p,(null==(a=n.registerForm.get("userName"))?null:a.errors)&&(null==(a=n.registerForm.get("userName"))?null:a.touched)||(null==(a=n.registerForm.get("userName"))?null:a.hasError("required"))&&n.registerFormSubmitted||(null==(a=n.registerForm.get("userName"))?null:a.hasError("userName"))&&n.registerFormSubmitted)),e.xp6(1),e.Q6J("ngIf",(null==(_=n.registerForm.get("userName"))?null:_.hasError("required"))&&n.registerFormSubmitted&&!(null!=(_=n.registerForm.get("userName"))&&_.hasError("userName"))&&n.registerFormSubmitted),e.xp6(5),e.Q6J("ngClass",e.VKq(25,p,(null==(m=n.registerForm.get("email"))?null:m.errors)&&(null==(m=n.registerForm.get("email"))?null:m.touched)||(null==(m=n.registerForm.get("email"))?null:m.hasError("required"))&&n.registerFormSubmitted||(null==(m=n.registerForm.get("email"))?null:m.hasError("email"))&&n.registerFormSubmitted)),e.xp6(1),e.Q6J("ngIf",(null==(f=n.registerForm.get("email"))?null:f.hasError("required"))&&n.registerFormSubmitted&&!(null!=(f=n.registerForm.get("email"))&&f.hasError("email"))&&n.registerFormSubmitted),e.xp6(1),e.Q6J("ngIf",(null==(C=n.registerForm.get("email"))?null:C.hasError("email"))&&n.registerFormSubmitted&&!(null!=(C=n.registerForm.get("email"))&&C.hasError("required"))&&n.registerFormSubmitted),e.xp6(5),e.Q6J("ngClass",e.VKq(27,p,(null==(u=n.registerForm.get("phoneNumber"))?null:u.errors)&&(null==(u=n.registerForm.get("phoneNumber"))?null:u.touched)||(null==(u=n.registerForm.get("phoneNumber"))?null:u.hasError("required"))&&n.registerFormSubmitted||(null==(u=n.registerForm.get("phoneNumber"))?null:u.hasError("phoneNumber"))&&n.registerFormSubmitted)),e.xp6(1),e.Q6J("ngIf",(null==(h=n.registerForm.get("phoneNumber"))?null:h.hasError("required"))&&n.registerFormSubmitted&&!(null!=(h=n.registerForm.get("phoneNumber"))&&h.hasError("phoneNumber"))&&n.registerFormSubmitted),e.xp6(7),e.Q6J("type",n.showPassword?"text":"password")("ngClass",e.VKq(29,p,(null==(c=n.registerForm.get("password"))?null:c.errors)&&(null==(c=n.registerForm.get("password"))?null:c.touched)||(null==(c=n.registerForm.get("password"))?null:c.hasError("required"))&&n.registerFormSubmitted)),e.xp6(1),e.MGl("src","assets/icons/eye-icon-",n.showPassword?"open":"close",".svg",e.LSH),e.xp6(1),e.Q6J("ngIf",(null==(w=n.registerForm.get("password"))?null:w.hasError("required"))&&n.registerFormSubmitted),e.xp6(1),e.Q6J("ngIf",(null==(P=n.registerForm.get("password"))?null:P.invalid)&&""!=(null==(P=n.registerForm.get("password"))?null:P.value)),e.xp6(7),e.Q6J("type",n.showConfirmPassword?"text":"password")("ngClass",e.VKq(31,p,n.registerForm.errors&&(null==(v=n.registerForm.get("confirmPassword"))?null:v.touched))),e.xp6(1),e.MGl("src","assets/icons/eye-icon-",n.showConfirmPassword?"open":"close",".svg",e.LSH),e.xp6(1),e.Q6J("ngIf",(null==(M=n.registerForm.get("Password"))?null:M.value)!==(null==(M=n.registerForm.get("confirmPassword"))?null:M.value))}},directives:[o.JL,o.sg,q.q,o.Fj,o.JJ,o.u,b.mk,b.O5,O.yS],styles:['.form_group[_ngcontent-%COMP%]{font-family:"poppins",sans-serif!important}.form_group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#182252;font-size:1.2rem;line-height:1.8rem}.form_group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#d93b2b;margin-left:.4rem}.form_group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form_group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:100%;margin-top:.4rem;height:4.8rem;border-radius:.8rem;font-size:1.4rem;color:#182252;padding:1.35rem 1.6rem;background:#EDF1FF;border:.2rem solid #EDF1FF}.form_group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:hover, .form_group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:hover{border:.1rem solid rgba(15,23,51,.1)!important}.form_group[_ngcontent-%COMP%]   input.is-invalid[_ngcontent-%COMP%], .form_group[_ngcontent-%COMP%]   select.is-invalid[_ngcontent-%COMP%]{border:.1rem solid #d93b2b!important;background:#ffffff}.form_group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form_group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{background:#ffffff;color:#182252;border:.1rem solid rgba(15,23,51,.1);box-shadow:none}.form_group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{background:rgba(24,34,82,.07) url(arrow-down.9ca8ee03998d63666761.svg) no-repeat 97% 50%}.form_group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus{background:#ffffff url(arrow-down.9ca8ee03998d63666761.svg) no-repeat 97% 50%}.form_group[_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]{width:100%}.form_group[_ngcontent-%COMP%]   .ng-select[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:3rem}.form_group[_ngcontent-%COMP%]   .ng-select.ng-select-single[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{border:none;margin-top:.4rem;box-sizing:border-box;outline:none;width:100%;height:4.8rem;border-radius:.8rem;font-size:1.4rem;color:#182252;padding:1.35rem 1.6rem;background:rgba(24,34,82,.07);display:flex;align-items:center}.form_group[_ngcontent-%COMP%]   .ng-select.ng-select-focused.ng-select-opened[_ngcontent-%COMP%] > .ng-select-container[_ngcontent-%COMP%]{background:#ffffff!important;color:#182252;border:.1rem solid rgba(24,34,82,.4);box-shadow:none}.form_group[_ngcontent-%COMP%]   .ng-select.ng-select-focused[_ngcontent-%COMP%]:not(.ng-select-opened) > .ng-select-container[_ngcontent-%COMP%]{border-color:#18225266;box-shadow:none}.form_group[_ngcontent-%COMP%]   .ng-select.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{border:.1rem solid #d93b2b!important;background:#ffffff}.form_group[_ngcontent-%COMP%]   .ng-select.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-arrow-wrapper[_ngcontent-%COMP%]   .ng-arrow[_ngcontent-%COMP%]{border-color:#d93b2b transparent transparent}.form_group[_ngcontent-%COMP%]   .ng-select.ng-invalid.ng-touched[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]{color:#d93b2b}section[_ngcontent-%COMP%]{background:url(auth-bg.a91d8bfb84bf4e1b7b2d.svg) no-repeat center center;background-size:cover;min-height:100vh;display:flex;flex-direction:column;box-shadow:inset 0 0 0 2000px #000000b3}section[_ngcontent-%COMP%]   .login_wrapper[_ngcontent-%COMP%]{height:100vh;display:flex;justify-content:center;align-items:center;text-align:left}section[_ngcontent-%COMP%]   .login_wrapper-card[_ngcontent-%COMP%]{background:#ffffff;width:65rem;min-height:50vh;padding:3rem;box-shadow:0 .4rem 1.6rem #0000000d;margin-top:3rem;margin-bottom:2rem}section[_ngcontent-%COMP%]   .login_wrapper-logo[_ngcontent-%COMP%]{margin-bottom:5.6rem;display:flex;justify-content:center}section[_ngcontent-%COMP%]   .login_wrapper-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:3.2rem;line-height:4.8rem}section[_ngcontent-%COMP%]   .login_wrapper-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.4rem;line-height:2.1rem;color:#000;margin-bottom:5.6rem}section[_ngcontent-%COMP%]   .login_wrapper[_ngcontent-%COMP%]   .position-relative[_ngcontent-%COMP%]   .fa[_ngcontent-%COMP%]{position:absolute;font-size:1.5rem;top:1.8rem;right:1.5rem}section[_ngcontent-%COMP%]   .login_wrapper[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:1.6rem}section[_ngcontent-%COMP%]   .login_wrapper__forgot[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .login_wrapper__sign_up[_ngcontent-%COMP%]{margin-bottom:3.4rem}section[_ngcontent-%COMP%]   .login_wrapper__forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .login_wrapper__forgot[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .login_wrapper__sign_up[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .login_wrapper__sign_up[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#182252;font-weight:600;font-size:1.4rem;line-height:1.8rem;text-decoration:none}section[_ngcontent-%COMP%]   .login_wrapper__forgot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .login_wrapper__sign_up[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#d9a724;text-decoration:underline}section[_ngcontent-%COMP%]   .login_wrapper__forgot[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .login_wrapper__forgot[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .login_wrapper__sign_up[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], section[_ngcontent-%COMP%]   .login_wrapper__sign_up[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#2d54e5}@media only screen and (max-width: 768px){section[_ngcontent-%COMP%]   .login_wrapper-card[_ngcontent-%COMP%]{background:#ffffff;width:35rem;min-height:50vh;padding:2.5rem}}']}),r})()}];let I=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[O.Bz.forChild(U)],O.Bz]}),r})();var Q=s(7484),z=s(2238);let K=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[b.ez,I,z.Is,Q.m,o.UX]]}),r})()}}]);