"use strict";(self.webpackChunkdummy_code_documentation=self.webpackChunkdummy_code_documentation||[]).push([[7007],{3999:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var r=t(7294),o=t(7961),n=t(2389);const i=(0,t(2515).eI)("https://kpevqglhzvbotejyzebj.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtwZXZxZ2xoenZib3Rlanl6ZWJqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njc3NjI2ODcsImV4cCI6MTk4MzMzODY4N30.nFnatcRjTbMdKfECAvJizShq_RhwE0xU8Jd_jP8fvM0");function c(){const e=(0,n.Z)(),[a,t]=(0,r.useState)(""),[c,l]=(0,r.useState)(""),s=e?new URL(window.location.href):{search:""},u=new URLSearchParams(s.search).get("email");return r.createElement(o.Z,{title:"recuperar contrase\xf1a",description:"Description will go into a meta tag in <head />"},r.createElement("main",null,r.createElement("p",null,"Actualiza tu contrasen\u0303a"),r.createElement("input",{type:"text",className:"--ifm-color-primary-lightest",placeholder:"Codigo de validacion",value:a,onChange:e=>t(e.target.value)}),r.createElement("input",{type:"password",className:"--ifm-color-primary-lightest",placeholder:"Nueva contrase\xf1a",value:c,onChange:e=>l(e.target.value)}),r.createElement("button",{onClick:async()=>{if(!u)return alert("Debes acceder a este sitio desde la url que te enviamos por correo");if(!a||!c)return alert("Todos los campos son obligatorios");const{data:e,error:r}=await i.auth.verifyOtp({email:u,token:a,type:"email"});if(r)return alert("El codigo es incorrecto, o ha expirado");const{data:o,error:n}=i.auth.updateUser({email:u,password:c});n?alert("No se ha podido recuperar la contrasen\u0303a"):(t(""),l(""),alert("Se ha actualizado la contrasen\u0303a"))}},"Actualizar")))}}}]);