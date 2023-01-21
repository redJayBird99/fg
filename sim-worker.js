(()=>{"use strict";const e={pos:"gk",row:-2,col:6},o={pos:"cb",row:0,col:2},s={pos:"cb",row:0,col:3},t={pos:"cb",row:0,col:4},n={pos:"cb",row:0,col:6},l={pos:"cb",row:0,col:8},i={pos:"cb",row:0,col:9},c={pos:"cb",row:0,col:10},r={pos:"rb",row:0,col:0},a={pos:"lb",row:0,col:12},p={pos:"dm",row:2,col:4},m={pos:"dm",row:2,col:6},f={pos:"dm",row:2,col:8},y={pos:"cm",row:3,col:2},d={pos:"cm",row:3,col:3},w={pos:"cm",row:3,col:4},b={pos:"cm",row:3,col:6},u={pos:"cm",row:3,col:8},h={pos:"cm",row:3,col:9},g={pos:"cm",row:3,col:10},k={pos:"lm",row:3,col:12},P={pos:"rm",row:3,col:0},S={pos:"am",row:4,col:2},v={pos:"am",row:4,col:3},M={pos:"am",row:4,col:6},B={pos:"am",row:4,col:9},q={pos:"am",row:4,col:10},F={pos:"rw",row:6,col:2},j={pos:"lw",row:6,col:10},x={pos:"cf",row:6,col:4},E={pos:"cf",row:6,col:6},N={pos:"cf",row:6,col:8},O={"3-5-2":[e,o,n,c,P,d,b,h,k,x,N],"3-5-2(1)":[e,o,n,c,P,p,f,M,k,x,N],"3-5-2(2)":[e,o,n,c,P,m,d,h,k,x,N],"3-5-2(3)":[e,o,n,c,P,b,v,B,k,x,N],"3-5-2(4)":[e,o,n,c,P,m,v,B,k,x,N],"3-4-3":[e,o,n,c,P,w,u,k,F,E,j],"3-4-3(1)":[e,o,n,c,P,p,f,k,F,E,j],"4-3-3":[e,t,l,r,a,y,b,g,F,E,j],"4-3-3(1)":[e,t,l,r,a,y,m,g,F,E,j],"4-3-3(2)":[e,t,l,r,a,p,f,M,F,E,j],"4-3-3(3)":[e,t,l,r,a,b,S,q,F,E,j],"4-5-1":[e,t,l,r,a,d,b,h,P,k,E],"4-5-1(1)":[e,t,l,r,a,d,m,h,P,k,E],"4-5-1(2)":[e,t,l,r,a,p,f,M,P,k,E],"4-5-1(3)":[e,t,l,r,a,p,f,M,S,q,E],"4-4-2":[e,t,l,r,a,w,u,P,k,x,N],"4-4-2(1)":[e,t,l,r,a,p,f,P,k,x,N],"4-4-2(2)":[e,t,l,r,a,p,f,S,q,x,N],"4-4-2(3)":[e,t,l,r,a,m,y,g,M,x,N],"4-4-2(4)":[e,t,l,r,a,w,u,S,q,x,N],"5-3-2":[e,s,n,i,r,a,y,b,g,x,N],"5-3-2(1)":[e,s,n,i,r,a,y,m,g,x,N],"5-3-2(2)":[e,s,n,i,r,a,S,b,q,x,N],"5-3-2(3)":[e,s,n,i,r,a,p,f,M,x,N],"5-4-1":[e,s,n,i,r,a,w,u,P,k,E],"5-4-1(1)":[e,s,n,i,r,a,m,y,g,M,E],"5-4-1(2)":[e,s,n,i,r,a,p,f,P,k,E],"5-4-1(3)":[e,s,n,i,r,a,w,u,S,q,E],"5-4-1(4)":[e,s,n,i,r,a,p,f,S,q,E]};Math.round(3200),Math.round(64e3);const U={mobility:["speed","agility","stamina"],physic:["strength","height"],goalkeeper:["reflexes","handling","diving"],defense:["defensivePositioning","interception","marking"],ability:["passing","vision","technique"],offense:["offensivePositioning","shot","finishing"]},z=(Object.keys(U),{gk:{smallPenalty:[],midPenalty:[]},lb:{smallPenalty:["rb"],midPenalty:["cb","lm"]},rb:{smallPenalty:["lb"],midPenalty:["cb","rm"]},cb:{smallPenalty:[],midPenalty:["lb","rb"]},dm:{smallPenalty:["cm"],midPenalty:["cb","lb","rb","rm","lm"]},lm:{smallPenalty:["rm"],midPenalty:["lb","lw","rw","cm","am"]},rm:{smallPenalty:["lm"],midPenalty:["rb","lw","rw","cm","am"]},cm:{smallPenalty:["dm","am"],midPenalty:["lm","rm"]},am:{smallPenalty:["cm"],midPenalty:["lm","rm","lw","rw","cf"]},lw:{smallPenalty:["lm","am","rw"],midPenalty:["rm","cf"]},rw:{smallPenalty:["rm","am","lw"],midPenalty:["lm","cf"]},cf:{smallPenalty:[],midPenalty:["lw","rw"]}}),A=new Set(["defensivePositioning","interception","marking","offensivePositioning","finishing","vision"]),C=new Set(["height"]);function D(e,o,s=e.position,t=!0){return U[o].reduce(((o,n)=>function(e,o,s=e.position,t=!0){const n=C.has(o)||!t?e.skills[o]:e.skills[o]*e.growthState;return A.has(o)?n-n*function(e,o=e.position){return e.position===o?0:z[e.position].smallPenalty.includes(o)?.05:z[e.position].midPenalty.includes(o)?.1:.2}(e,s):n}(e,n,s,t)+o),0)/U[o].length}function G(e,o=e.position,s=!0){let t=0;for(const n in K[o]){const l=n;t+=D(e,l,o,s)*K[o][l]}return t}const H={goalkeeper:0,mobility:.25,physic:.05,defense:.5,offense:0,ability:.2},I={goalkeeper:0,mobility:.25,physic:.05,defense:.09,ability:.52,offense:.09},J={goalkeeper:0,mobility:.19,physic:.11,ability:.35,offense:.35,defense:0},K={gk:{goalkeeper:.49,mobility:.12,physic:.28,ability:.11,offense:0,defense:0},cb:{goalkeeper:0,mobility:.1,physic:.2,defense:.5,offense:0,ability:.2},lb:H,rb:H,dm:{goalkeeper:0,mobility:.15,physic:.1,defense:.35,offense:0,ability:.4},cm:{goalkeeper:0,mobility:.13,physic:.1,defense:.11,ability:.55,offense:.11},am:{goalkeeper:0,mobility:.13,physic:.1,ability:.47,offense:.25,defense:.05},lm:I,rm:I,lw:J,rw:J,cf:{goalkeeper:0,mobility:.125,physic:.125,ability:.2,offense:.55,defense:0}};class L{constructor(e){this.pls=e,this.cacheScores=new Map(e.map((e=>[e,new Map])))}getScore(e,o){return this.cacheScores.get(e)?.has(o)||this.cacheScores.get(e)?.set(o,G(e,o)),this.cacheScores.get(e).get(o)}pickBest(e,o,s=!0){let t,n=0;for(const l of this.pls)if(!(e.has(l)||s&&l.position!==o)){const e=this.getScore(l,o);n<e&&(t=l,n=e)}return t}}function Q(e,o){const s={key:e,picked:new Set,lineup:new Map,score:0};for(const t of O[e]){const e=o.pickBest(s.picked,t.pos);e&&(s.lineup.set(t,e),s.picked.add(e))}return s.score=T(s.lineup),s}function R(e,o){const s=[],t=[];for(const o of O[e.key])e.lineup.has(o)?s.push(o):t.push(o);for(const s of t){const t=o.pickBest(e.picked,s.pos,!1);t&&(e.lineup.set(s,t),e.picked.add(t))}for(const t of s){const s=o.pickBest(e.picked,t.pos,!1),n=e.lineup.get(t);s&&G(n,t.pos)<G(s,t.pos)&&(e.lineup.set(t,s),e.picked.add(s),e.picked.delete(n))}return e.score=T(e.lineup),e}function T(e){let o=0;for(const[s,t]of e)o+=G(t,s.pos);return o}function V(e){const o=[];for(const[s,t]of e.lineup)o.push({sp:s,pl:t});return{name:e.key,lineup:o}}function W(e){return V(function(e){let o=[];const s=new L(e);for(const e in O)o.push(Q(e,s));return o=o.sort(((e,o)=>o.score-e.score)),o.length=3,o.forEach((e=>R(e,s))),o.reduce(((e,o)=>e.score>=o.score?e:o))}(e))}function X(e,o){const s=new L(e);return V(R(Q(o,s),s))}onmessage=e=>{"getNewFormations"===e.data.type?postMessage(e.data.reqs.map((e=>({team:e.team,f:W(e.pls)})))):"getUpdatedFormations"===e.data.type&&postMessage(e.data.reqs.map((e=>({team:e.team,f:e.f?X(e.pls,e.f):W(e.pls)}))))}})();