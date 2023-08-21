import{S as P,C as b,P as z,W as S,O as x,V as g,B as y,F as M,a as A,A as B,b as I,c as k}from"./OrbitControls-5e651079.js";import{d as T,r as W,o as E,c as F,g as H}from"./index-222dc20d.js";const G=T({__name:"index",setup(R){const s=W();return E(()=>{var p;console.clear();let r=new P;r.background=new b(1441814);let t=new z(60,innerWidth/innerHeight,1,1e3);t.position.set(0,4,21);let n=new S;n.setSize(innerWidth,innerHeight),(p=s.value)==null||p.appendChild(n.domElement),window.addEventListener("resize",e=>{t.aspect=innerWidth/innerHeight,t.updateProjectionMatrix(),n.setSize(innerWidth,innerHeight)});let o=new x(t,n.domElement);o.enableDamping=!0,o.enablePan;let d={time:{value:0}},i=[],c=[],m=()=>{c.push(Math.random()*Math.PI,Math.random()*Math.PI*2,(Math.random()*.9+.1)*Math.PI*.1,Math.random()*.9+.1)},f=new Array(5e4).fill().map(e=>(i.push(Math.random()*1.5+.5),m(),new g().randomDirection().multiplyScalar(Math.random()*.5+9.5)));for(let e=0;e<1e5;e++){let h=10,u=40,v=Math.pow(Math.random(),1.5),C=Math.sqrt(u*u*v+(1-v)*h*h);f.push(new g().setFromCylindricalCoords(C,Math.random()*2*Math.PI,(Math.random()-.5)*2)),i.push(Math.random()*1.5+.5),m()}let l=new y().setFromPoints(f);l.setAttribute("sizes",new M(i,1)),l.setAttribute("shift",new M(c,4));let _=new A({size:.125,transparent:!0,depthTest:!1,blending:B,onBeforeCompile:e=>{e.uniforms.time=d.time,e.vertexShader=`
                uniform float time;
                attribute float sizes;
                attribute vec4 shift;
                varying vec3 vColor;
                ${e.vertexShader}
                `.replace("gl_PointSize = size;","gl_PointSize = size * sizes;").replace("#include <color_vertex>",`#include <color_vertex>
                    float d = length(abs(position)/vec3(40.,10.,40));
                    d=clamp(d,0.,1.);
                    vColor = mix(vec3(227.,155.,0.),vec3(100.,50.,255.),d)/255.;`).replace("#include <begin_vertex>",`#include <begin_vertex>
                            float t = time;
                            float moveT = mod(shift.x + shift.z * t,PI2);
                            float moveS = mod(shift.y + shift.z * t,PI2);
                            transformed += vec3(cos(moveS) * sin(moveT),cos(moveT),sin(moveS)*sin(moveT)) * shift.w;
                            `),e.fragmentShader=`
                    varying vec3 vColor;
                    ${e.fragmentShader}
                `.replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
                        float d = length(gl_PointCoord.xy - 0.5);
                    `).replace("vec4 diffuseColor = vec4( diffuse, opacity );","vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.1, d)/* * 0.5+0.5*/);")}}),a=new I(l,_);a.rotation.order="ZYX",a.rotation.z=.2,r.add(a);let w=new k;n.setAnimationLoop(()=>{o.update();let e=w.getElapsedTime()*.5;d.time.value=e*Math.PI,a.rotation.y=e*.05,n.render(r,t)})}),(r,t)=>(H(),F("div",{ref_key:"canvesRef",ref:s},null,512))}});export{G as default};
