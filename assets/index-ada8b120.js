import{U as o,cy as a,_ as u}from"./index-85f30e3b.js";async function i(t,e){return a(t,async c=>{const{InAppWebConnector:n}=await u(()=>import("./web-connector-0f490e85.js"),["assets/web-connector-0f490e85.js","assets/index-85f30e3b.js","assets/index-b41033e1.css","assets/sign-login-payload-b3e2334a.js","assets/oauth-0547ff36.js"]);return new n({client:c,ecosystem:e})},e)}async function r(t){const{client:e}=t,n=await(await i(e)).getUser();switch(n.status){case o.LOGGED_IN_WALLET_INITIALIZED:return n}}async function l(t){const e=await r(t);if(e&&"email"in e.authDetails)return e.authDetails.email}async function d(t){const e=await r(t);if(e&&"phoneNumber"in e.authDetails)return e.authDetails.phoneNumber}async function h(t){return(await i(t.client,t.ecosystem)).preAuthenticate(t)}async function p(t){const e=await i(t.client,t.ecosystem);return(t.redirect||t.mode!=="popup")&&e.authenticateWithRedirect&&t.strategy?e.authenticateWithRedirect(t.strategy,t.mode,t.redirectUrl):e.connect(t)}export{p as authenticate,r as getAuthenticatedUser,l as getUserEmail,d as getUserPhoneNumber,h as preAuthenticate};
