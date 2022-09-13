import{S as be,C as A,H as _e,D as ve,G as Se,P as T,W as ke,s as Ce,a as xe,b as ye,c as Ae,d as He,A as $,e as Y,E as Me,R as De,f as Le,g as Pe,V as L,h as Ee,O as Ve,i as Ge,j as We,k as ze,F as Fe,B as q,l as z,U as Re,m as Te,M as Be,n as Oe,o as Ie,p as Ue,q as je,T as Ne,r as Xe,t as Je,u as K,v as Ye,w as qe}from"./SMAAPass.9cd29069.js";const m=function(t,e,a,n,i,o,s,c,r,u){this.path=t,this.animData=null,this.location_x=e,this.location_y=a,this.location_z=n,this.head=null,this.tail=null,this.bones=[],this.showVis=i,this.partialhuman=r,this.showLabelinstant=!1,u&&(this.showLabelinstant=!0),this.fakeMeshGeometry=new ze(5,5,5,5,15,5,30),this.mesh=null,this.meshScale=1,this.skeleton=null,this.boneVisHelper=null,this.verticesVisHelper=null,this.isReConstructed=o,this.color1=new A(0,0,1),this.color2=new A(0,1,0),this.isReConstructed&&(this.color1=new A(1,0,0),this.color2=new A(1,.5,0)),this.transparentBone=!1,s&&(this.transparentBone=!0),this.transparentVertices=!1,c&&(this.transparentVertices=!0),this.Label=null,this.tracks=[],this.clip=null,this.mixer=null,this.clipAction=null};m.prototype={constructor:m,initContent:function(){this._reportProgress({detail:{text:"Loading: "+this.path}});const t=new Fe,e=this,a=function(n){console.log("Loading complete: "+e.path),e._reportProgress({detail:{text:""}}),e.animData=JSON.parse(n);const i=[e.animData.length,e.animData[0].length,e.animData[0][0].length];console.log(i),i[1]===21?(e.head=[0,1,2,3,0,5,6,7,0,9,10,11,0,13,14,15,0,17,18,19],e.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],e.meshScale=1.5):i[1]===38&&e.partialhuman?(e.head=[0,1,2,3,4,5,0,7,8,9,10,11,0,13,14,15,16,17,18,15],e.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],e.meshScale=2):(e.head=[0,1,2,3,4,5,0,7,8,9,10,11,0,13,14,15,16,17,18,15,20,21,22,23,24,25,23,27,15,29,30,31,32,33,34,32,36],e.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],e.meshScale=2),e.createSkeleton(),e.createFakeSkinMesh(),e.createSkinMesh(),e.setUpAnimation()};t.load(e.path,a)},loadDataFromFile:function(t){this.animData=JSON.parse(t);const e=[this.animData.length,this.animData[0].length,this.animData[0][0].length];console.log(e),e[1]===21?(this.head=[0,1,2,3,0,5,6,7,0,9,10,11,0,13,14,15,0,17,18,19],this.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]):(this.head=[0,1,2,3,4,5,0,7,8,9,10,11,0,13,14,15,16,17,18,15,20,21,22,23,24,25,23,27,15,29,30,31,32,33,34,32,36],this.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],this.meshScale=.07),this.createSkeleton(),this.createFakeSkinMesh(),this.createSkinMesh(),this.setUpAnimation()},_reportProgress:function(t){let e="";t.detail!==null&&t.detail!==void 0&&t.detail.text&&(e=t.detail.text),console.log("Progress: "+e)},createSkeleton:function(){let t=new q;t.name="bone_0",this.bones.push(t);let e=[],a=this.animData[0][0][0],n=this.animData[1][0][0],i=this.animData[2][0][0];t.position.set(a,n,i),e.push(t.position);for(let o=1;o!==this.head.length+1;++o){let s=new q;this.bones[this.head[o-1]].add(s),s.name="bone_"+this.tail[o-1],this.bones.push(s);let c=this.head[o-1];a=this.animData[0][o][0]-this.animData[0][c][0],n=this.animData[1][o][0]-this.animData[1][c][0],i=this.animData[2][o][0]-this.animData[2][c][0],s.position.set(a,n,i),e.push(s.position)}},createFakeSkinMesh:function(){const t=this.fakeMeshGeometry.attributes.position,e=new z,a=[],n=[];for(let i=0;i<t.count;i++){e.fromBufferAttribute(t,i);const o=1,s=1;a.push(o,o+1,0,0),n.push(1-s,s,0,0)}this.fakeMeshGeometry.setAttribute("skinIndex",new Re(a,4)),this.fakeMeshGeometry.setAttribute("skinWeight",new Te(n,4))},createSkinMesh:function(){const t=new Be({color:16737095,wireframe:!0});this.mesh=new Oe(this.fakeMeshGeometry,t),this.skeleton=new Ie(this.bones);const e=this.skeleton.bones[0];this.mesh.add(e),this.mesh.visible=!1,this.mesh.bind(this.skeleton),this.mesh.position.set(this.location_x,this.location_y,this.location_z),this.mesh.scale.set(this.meshScale,this.meshScale,this.meshScale),f.add(this.mesh),this.boneVisHelper=new Ue(this.mesh,this.color1,this.color2,this.transparentBone,p),this.boneVisHelper.visible=this.showVis,f.add(this.boneVisHelper),console.log(this.boneVisHelper);const a=new je({color:this.color2,size:10,sizeAttenuation:!1,map:new Ne().load("../models/files/disc.png"),alphaTest:.5});this.verticesVisHelper=new Xe(this.boneVisHelper.geometry,a),this.boneVisHelper.add(this.verticesVisHelper),this.transparentVertices&&(this.verticesVisHelper.material.opacity=0);const n=this.path.split("/"),s=n[n.length-1].split(".")[0],c=s.split("_")[3];var r=null;c==="corrupted"?r=s.split("_")[1]+"-"+s.split("_")[2]+"-"+s.split("_")[3]:r=s.split("_")[1]+"-"+s.split("_")[2];const u=document.createElement("div");u.className="label",u.textContent=r,u.style.color=this.color2.getStyle(),this.Label=new Je(u),this.Label.position.copy(this.boneVisHelper.position),this.Label.visible=!1,this.showLabelinstant||(this.Label.position.y=this.Label.position.y+.05),this.tail.length!==20?(this.Label.visible=!0,this.Label.position.y=this.Label.position.y-.4):this.Label.position.x=this.Label.position.x+.2,this.boneVisHelper.add(this.Label)},setUpAnimation:function(){const t=this.animData[0][0].length,e=t===24?24:120,a=t/e,n=[],i=[],o=new z;for(let r=0;r<t;r++){n.push(r/e);let u=this.animData[0][0][r],x=this.animData[1][0][r],V=this.animData[2][0][r];o.set(u,x,V).toArray(i,i.length)}const s=".bones[bone_0].position",c=new K(s,n,i);this.tracks.push(c);for(let r=1;r<this.head.length;r++){const u=[],x=[],V=new z;for(let w=0;w<t;w++){u.push(w/e);let G=this.head[r-1],W=this.tail[r-1],me=this.animData[0][W][w]-this.animData[0][G][w],we=this.animData[1][W][w]-this.animData[1][G][w],ge=this.animData[2][W][w]-this.animData[2][G][w];V.set(me,we,ge).toArray(x,x.length)}const ue=".bones[bone_"+r+"].position",fe=new K(ue,u,x);this.tracks.push(fe)}this.clip=new Ye("Action",a,this.tracks),this.mixer=new $(this.mesh),this.clipAction=this.mixer.clipAction(this.clip),this.clipAction.play(),C.push(this.clipAction),J.push(this.mixer)}};let f,p,h,B,g,_,k,O="Perspective",y,F,D,ee,Ke=[],v=[];const J=[],C=[],d=[];let b,S;const I=[],M={idle:{weight:1},walk:{weight:0},run:{weight:0}},P={sneak_pose:{weight:0},sad_pose:{weight:0},agree:{weight:0},headShake:{weight:0}};let l,U;Qe();let E=!1,j=0;Ze();const te=new m("../models/files/oursgated_MTM/OursGated_gt_cover_uncorrupted.json",-1,.3,0,!1,!1,!1,!1,!1,!0);te.initContent();d.push(te);const ie=new m("../models/files/oursgated_MTM/OursGated_recon_cover_uncorrupted.json",0,.3,0,!1,!0,!1,!1,!1,!0);ie.initContent();d.push(ie);const se=new m("../models/files/oursgated_MTM/OursGated_gt_cover_uncorrupted.json",1,.3,0,!1,!1,!1,!1,!1,!1);se.initContent();d.push(se);const ne=new m("../models/files/oursgated_MTM/OursGated_recon_cover_uncorrupted.json",1,.3,0,!1,!0,!1,!1,!1,!0);ne.initContent();d.push(ne);const ae=new m("../models/files/skipgated_CMU/SkipGated_gt_secret_uncorrupted.json",-1,1.15,0,!0,!1,!1,!1,!1,!0);ae.initContent();d.push(ae);const oe=new m("../models/files/skipgated_CMU/SkipGated_recon_secret_uncorrupted.json",0,1.15,0,!0,!0,!1,!1,!1,!0);oe.initContent();d.push(oe);const le=new m("../models/files/skipgated_CMU/SkipGated_gt_secret_uncorrupted.json",1,1.15,0,!0,!1,!1,!1,!1,!1);le.initContent();d.push(le);const re=new m("../models/files/skipgated_CMU/SkipGated_recon_secret_uncorrupted.json",1,1.15,0,!0,!0,!1,!1,!1,!0);re.initContent();d.push(re);function Qe(){const t=document.getElementById("container");var e=document.getElementById("header"),a=document.createTextNode("CMU - SkipGated");e.appendChild(a),ee=new qe,f=new be,f.background=new A(4473924),new _e(16777215,4473924).position.set(0,20,0);const i=new ve(16777215);i.position.set(3,10,10),i.castShadow=!0,i.shadow.camera.top=2,i.shadow.camera.bottom=-2,i.shadow.camera.left=-2,i.shadow.camera.right=2,i.shadow.camera.near=.1,i.shadow.camera.far=40,k=new Se(20,20,8947848),f.add(k);const o=window.innerWidth,s=window.innerHeight;h=new T(45,o/s,1,100),h.position.set(0,1,3),p=new ke({antialias:!0}),p.setPixelRatio(window.devicePixelRatio),p.setSize(window.innerWidth,window.innerHeight),p.outputEncoding=Ce,p.shadowMap.enabled=!0,t.appendChild(p.domElement),he(),ce(),g=new xe,g.setSize(window.innerWidth,window.innerHeight),g.domElement.style.position="absolute",g.domElement.style.top="0px",g.domElement.style.pointerEvents="none",t.appendChild(g.domElement),B=new ye,t.appendChild(B.dom),window.addEventListener("resize",mt)}function Ze(){new Ae().load("../models/gltf/Xbot.glb",function(e){y=e.scene,f.add(y),y.traverse(function(n){n.isMesh&&(n.castShadow=!0),n.isMesh&&(n.visible=!1)}),F=new He(y),F.visible=!1,f.add(F);const a=e.animations;D=new $(y),U=a.length;for(let n=0;n!==U;++n){let i=a[n];const o=i.name;if(M[o]){const s=D.clipAction(i);Z(s),M[o].action=s,I.push(s)}else if(P[o]){Y.makeClipAdditive(i),i.name.endsWith("_pose")&&(i=Y.subclip(i,i.name,2,3,30));const s=D.clipAction(i);Z(s),P[o].action=s,I.push(s)}}$e(),pe()})}function he(){_=new Me(p);const t=new De(f,h);_.addPass(t),S=new Le(Pe),S.uniforms.sourceTextureSize.value=new L(window.innerWidth,window.innerHeight),S.uniforms.sourceTexelSize.value=new L(1.5/window.innerWidth,1.5/window.innerHeight),_.addPass(S);const e=new Ee(window.innerWidth*p.getPixelRatio(),window.innerHeight*p.getPixelRatio());_.addPass(e)}function ce(){b=new Ve(h,p.domElement),b.enablePan=!0,b.autoRotate=!0,b.target.set(0,1,0),b.update()}function $e(){const t=new Ge({width:310});t.close();const e=t.addFolder("Visibility"),a=t.addFolder("Camera Controls"),n=t.addFolder("Activation/Deactivation"),i=t.addFolder("Pause Stepping"),o=t.addFolder("General Speed"),s=t.addFolder("Scale and Pos");l={"show hand demo":function(){R("hand")},"show human demo":function(){R("human")},"clear all scene object":function(){R("None")},"camera rotate":!0,"set photo mode":!1,"modify time scale":1,"deactivate all":lt,"activate all":rt,"pause/continue":ht,"make single step":dt,"modify step size":.05,"set Grid scale":1,"set Grid XY":1,"set Obj Rotate Angle":1,"bone opacity (transparent)":1,"vertices opacity (transparent)":1,"show/disable label":!0,"show/disable dilation(post-process)":!0,"perspective camera":N,"orthographic camera":N},a.add(l,"camera rotate").onChange(de),a.add(l,"set photo mode").onChange(it),v.push(a.add(l,"perspective camera")),v.push(a.add(l,"orthographic camera")),e.add(l,"bone opacity (transparent)",0,1,1).onChange(tt),e.add(l,"vertices opacity (transparent)",0,1,1).onChange(et),e.add(l,"show/disable label").onChange(H),e.add(l,"show/disable dilation(post-process)"),n.add(l,"deactivate all"),n.add(l,"activate all"),i.add(l,"pause/continue"),i.add(l,"make single step"),i.add(l,"modify step size",.01,.1,.001),o.add(l,"modify time scale",0,1.5,.01).onChange(ot),s.add(l,"set Grid scale",.01,3,.01).onChange(st),s.add(l,"set Grid XY",.01,2,.01).onChange(nt),s.add(l,"set Obj Rotate Angle",.01,4,.01).onChange(at),e.open(),n.open(),i.open(),o.open(),s.open(),Ke.forEach(function(c){c.setInactive=function(){c.domElement.classList.add("control-inactive")},c.setActive=function(){c.domElement.classList.remove("control-inactive")};const r=M[c.property];(!r||!r.weight)&&c.setInactive()})}function H(t){d.forEach(function(e){e.boneVisHelper.visible===!0&&(e.Label.visible=t)})}function et(t){d.forEach(function(e){e.verticesVisHelper.material.opacity=t})}function tt(t){d.forEach(function(e){e.boneVisHelper.material.opacity=t})}function de(t){b.autoRotate=t,h.position.set(0,1,3)}function it(t){t?(N(),k.rotation.x=Math.PI/2):k.rotation.x=Math.PI}function N(){h instanceof T?(h=new We(window.innerWidth/-1e3,window.innerWidth/1e3,window.innerHeight/1e3,window.innerHeight/-1e3,1,10),h.position.x=0,h.position.y=1,h.position.z=3,O="Orthographic"):(h=new T(45,window.innerWidth/window.innerHeight,.1,1e3),h.position.x=0,h.position.y=1,h.position.z=3,O="Perspective"),he(),ce(),de(!1)}function R(t){t==="hand"?d.forEach(function(e){e.tail.length===20?(e.boneVisHelper.visible=!0,H(l["show/disable label"])):(e.boneVisHelper.visible=!1,e.Label.visible=!1,H(l["show/disable label"]))}):t==="human"?d.forEach(function(e){e.tail.length!==20?(e.boneVisHelper.visible=!0,H(l["show/disable label"])):(e.boneVisHelper.visible=!1,e.Label.visible=!1,H(l["show/disable label"]))}):d.forEach(function(e){e.boneVisHelper.visible=!1,e.Label.visible=!1,e.path==="dummy/path"&&ut(e)})}function st(t){k.scale.set(t,t,t)}function nt(t){k.position.set(t,t,0)}function at(t){d.forEach(function(e){e.mesh.rotation.set(0,t,0)})}function ot(t){for(const e of J)e.timeScale=t}function lt(){C.forEach(function(t){t.stop()})}function rt(){C.forEach(function(t){t.play()})}function ht(){E?(E=!1,X()):C[0].paused?X():ct()}function ct(){C.forEach(function(t){t.paused=!0})}function X(){C.forEach(function(t){t.paused=!1})}let Q=0;function dt(){X(),E=!0,j=l["modify step size"],Q+=1,console.log(Q)}function Z(t){const e=t.getClip(),a=M[e.name]||P[e.name];pt(t,a.weight),t.play()}function pt(t,e){t.enabled=!0,t.setEffectiveTimeScale(1),t.setEffectiveWeight(e)}function ut(t){t.mesh.removeFromParent(),t.boneVisHelper.removeFromParent(),f.remove(t),console.log(t.path+"has been remove"),console.log(d)}function ft(){O==="Perspective"?(v[0].disable(),v[1].enable()):(v[1].disable(),v[0].enable())}function mt(){h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight),_.setSize(window.innerWidth,window.innerHeight),S.uniforms.sourceTextureSize.value=new L(window.innerWidth,window.innerHeight),S.uniforms.sourceTexelSize.value=new L(1/window.innerWidth,1/window.innerHeight),g.setSize(window.innerWidth,window.innerHeight)}function wt(){B.update(),g.render(f,h),l["show/disable dilation(post-process)"]?_.render():p.render(f,h)}function pe(){requestAnimationFrame(pe);for(let e=0;e!==U;++e){const a=I[e],n=a.getClip(),i=M[n.name]||P[n.name];i.weight=a.getEffectiveWeight()}ft(),b.update();let t=ee.getDelta();E&&(t=j,j=0),D.update(t);for(const e of J)e.update(t);wt()}
