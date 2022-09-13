import{S as ge,C,H as be,D as ve,G as _e,P as R,W as Se,s as ke,a as ye,b as xe,c as Ae,d as Ce,A as ee,e as q,E as He,R as De,f as Le,g as Me,V as M,h as Ee,O as Pe,i as Ve,j as Fe,k as Ge,F as Te,B as K,l as T,U as We,m as ze,M as Re,n as Be,o as Ie,p as Oe,q as je,T as Ne,r as Ue,t as Xe,u as Q,v as Je,w as Ye}from"./SMAAPass.9cd29069.js";const w=function(t,e,s,a,i,o,n,d,r,f){this.path=t,this.animData=null,this.location_x=e,this.location_y=s,this.location_z=a,this.head=null,this.tail=null,this.bones=[],this.showVis=i,this.partialhuman=r,this.showLabelinstant=!1,f&&(this.showLabelinstant=!0),this.fakeMeshGeometry=new Ge(5,5,5,5,15,5,30),this.mesh=null,this.meshScale=1,this.skeleton=null,this.boneVisHelper=null,this.verticesVisHelper=null,this.isReConstructed=o,this.color1=new C(0,0,1),this.color2=new C(0,1,0),this.isReConstructed&&(this.color1=new C(1,0,0),this.color2=new C(1,.5,0)),this.transparentBone=!1,n&&(this.transparentBone=!0),this.transparentVertices=!1,d&&(this.transparentVertices=!0),this.Label=null,this.tracks=[],this.clip=null,this.mixer=null,this.clipAction=null};w.prototype={constructor:w,initContent:function(){this._reportProgress({detail:{text:"Loading: "+this.path}});const t=new Te,e=this,s=function(a){console.log("Loading complete: "+e.path),e._reportProgress({detail:{text:""}}),e.animData=JSON.parse(a);const i=[e.animData.length,e.animData[0].length,e.animData[0][0].length];console.log(i),i[1]===21?(e.head=[0,1,2,3,0,5,6,7,0,9,10,11,0,13,14,15,0,17,18,19],e.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],e.meshScale=1.5):i[1]===38&&e.partialhuman?(e.head=[0,1,2,3,4,5,0,7,8,9,10,11,0,13,14,15,16,17,18,15],e.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],e.meshScale=2):(e.head=[0,1,2,3,4,5,0,7,8,9,10,11,0,13,14,15,16,17,18,15,20,21,22,23,24,25,23,27,15,29,30,31,32,33,34,32,36],e.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],e.meshScale=2),e.createSkeleton(),e.createFakeSkinMesh(),e.createSkinMesh(),e.setUpAnimation()};t.load(e.path,s)},loadDataFromFile:function(t){this.animData=JSON.parse(t);const e=[this.animData.length,this.animData[0].length,this.animData[0][0].length];console.log(e),e[1]===21?(this.head=[0,1,2,3,0,5,6,7,0,9,10,11,0,13,14,15,0,17,18,19],this.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]):(this.head=[0,1,2,3,4,5,0,7,8,9,10,11,0,13,14,15,16,17,18,15,20,21,22,23,24,25,23,27,15,29,30,31,32,33,34,32,36],this.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],this.meshScale=.07),this.createSkeleton(),this.createFakeSkinMesh(),this.createSkinMesh(),this.setUpAnimation()},_reportProgress:function(t){let e="";t.detail!==null&&t.detail!==void 0&&t.detail.text&&(e=t.detail.text),console.log("Progress: "+e)},createSkeleton:function(){let t=new K;t.name="bone_0",this.bones.push(t);let e=[],s=this.animData[0][0][0],a=this.animData[1][0][0],i=this.animData[2][0][0];t.position.set(s,a,i),e.push(t.position);for(let o=1;o!==this.head.length+1;++o){let n=new K;this.bones[this.head[o-1]].add(n),n.name="bone_"+this.tail[o-1],this.bones.push(n);let d=this.head[o-1];s=this.animData[0][o][0]-this.animData[0][d][0],a=this.animData[1][o][0]-this.animData[1][d][0],i=this.animData[2][o][0]-this.animData[2][d][0],n.position.set(s,a,i),e.push(n.position)}},createFakeSkinMesh:function(){const t=this.fakeMeshGeometry.attributes.position,e=new T,s=[],a=[];for(let i=0;i<t.count;i++){e.fromBufferAttribute(t,i);const o=1,n=1;s.push(o,o+1,0,0),a.push(1-n,n,0,0)}this.fakeMeshGeometry.setAttribute("skinIndex",new We(s,4)),this.fakeMeshGeometry.setAttribute("skinWeight",new ze(a,4))},createSkinMesh:function(){const t=new Re({color:16737095,wireframe:!0});this.mesh=new Be(this.fakeMeshGeometry,t),this.skeleton=new Ie(this.bones);const e=this.skeleton.bones[0];this.mesh.add(e),this.mesh.visible=!1,this.mesh.bind(this.skeleton),this.mesh.position.set(this.location_x,this.location_y,this.location_z),this.mesh.scale.set(this.meshScale,this.meshScale,this.meshScale),u.add(this.mesh),this.boneVisHelper=new Oe(this.mesh,this.color1,this.color2,this.transparentBone,p),this.boneVisHelper.visible=this.showVis,u.add(this.boneVisHelper),console.log(this.boneVisHelper);const s=new je({color:this.color2,size:10,sizeAttenuation:!1,map:new Ne().load("../models/files/disc.png"),alphaTest:.5});this.verticesVisHelper=new Ue(this.boneVisHelper.geometry,s),this.boneVisHelper.add(this.verticesVisHelper),this.transparentVertices&&(this.verticesVisHelper.material.opacity=0);const a=this.path.split("/"),n=a[a.length-1].split(".")[0],d=n.split("_")[3];var r=null;d==="corrupted"?r=n.split("_")[1]+"-"+n.split("_")[2]+"-"+n.split("_")[3]:r=n.split("_")[1]+"-"+n.split("_")[2];const f=document.createElement("div");f.className="label",f.textContent=r,f.style.color=this.color2.getStyle(),this.Label=new Xe(f),this.Label.position.copy(this.boneVisHelper.position),this.Label.visible=!1,this.showLabelinstant||(this.Label.position.y=this.Label.position.y+.05),this.tail.length!==20?(this.Label.visible=!0,this.Label.position.y=this.Label.position.y-.4):(this.Label.visible=!0,this.Label.position.x=this.Label.position.x+.2),this.boneVisHelper.add(this.Label)},setUpAnimation:function(){const t=this.animData[0][0].length,e=t===24?24:120,s=t/e,a=[],i=[],o=new T;for(let r=0;r<t;r++){a.push(r/e);let f=this.animData[0][0][r],x=this.animData[1][0][r],V=this.animData[2][0][r];o.set(f,x,V).toArray(i,i.length)}const n=".bones[bone_0].position",d=new Q(n,a,i);this.tracks.push(d);for(let r=1;r<this.head.length;r++){const f=[],x=[],V=new T;for(let m=0;m<t;m++){f.push(m/e);let F=this.head[r-1],G=this.tail[r-1],ue=this.animData[0][G][m]-this.animData[0][F][m],me=this.animData[1][G][m]-this.animData[1][F][m],we=this.animData[2][G][m]-this.animData[2][F][m];V.set(ue,me,we).toArray(x,x.length)}const pe=".bones[bone_"+r+"].position",fe=new Q(pe,f,x);this.tracks.push(fe)}this.clip=new Je("Action",s,this.tracks),this.mixer=new ee(this.mesh),this.clipAction=this.mixer.clipAction(this.clip),this.clipAction.play(),y.push(this.clipAction),J.push(this.mixer)}};let u,p,c,B,g,v,k,I="Perspective",A,W,L,te,qe=[],_=[];const J=[],y=[],h=[];let b;const ie=4;let S;const O=[],D={idle:{weight:1},walk:{weight:0},run:{weight:0}},E={sneak_pose:{weight:0},sad_pose:{weight:0},agree:{weight:0},headShake:{weight:0}};let l,j;Ke();let P=!1,N=0;Qe();const ne=new w("../models/files/skipgated_MTM/SkipGated_recon_cover_corrupted.json",-1,.3,0,!0,!0,!1,!1,!1,!0);ne.initContent();h.push(ne);const se=new w("../models/files/skipgated_MTM/SkipGated_gt_cover_uncorrupted.json",-1,.3,0,!0,!1,!1,!1,!1,!1);se.initContent();h.push(se);const ae=new w("../models/files/skipgated_MTM/SkipGated_recon_secret_corrupted.json",0,.3,0,!0,!0,!1,!1,!1,!0);ae.initContent();h.push(ae);const oe=new w("../models/files/skipgated_MTM/SkipGated_gt_secret_uncorrupted.json",1,.3,0,!0,!1,!1,!1,!1,!1);oe.initContent();h.push(oe);const le=new w("../models/files/skipgated_MTM/SkipGated_recon_secret_corrupted.json",1,.3,0,!0,!0,!1,!1,!1,!0);le.initContent();h.push(le);function Ke(){const t=document.getElementById("container");document.getElementById("file1").addEventListener("change",ft,!1),document.getElementById("file2").addEventListener("change",ut,!1);var e=document.getElementById("header"),s=document.createTextNode("MTM - SkipGated");e.appendChild(s),te=new Ye,u=new ge,u.background=new C(4473924),new be(16777215,4473924).position.set(0,20,0);const i=new ve(16777215);i.position.set(3,10,10),i.castShadow=!0,i.shadow.camera.top=2,i.shadow.camera.bottom=-2,i.shadow.camera.left=-2,i.shadow.camera.right=2,i.shadow.camera.near=.1,i.shadow.camera.far=40,k=new _e(20,20,8947848),u.add(k);const o=window.innerWidth,n=window.innerHeight;c=new R(45,o/n,1,100),c.position.set(0,1,3),p=new Se({antialias:!0}),p.setPixelRatio(window.devicePixelRatio),p.setSize(window.innerWidth,window.innerHeight),p.outputEncoding=ke,p.shadowMap.enabled=!0,t.appendChild(p.domElement),re(),he(),g=new ye,g.setSize(window.innerWidth,window.innerHeight),g.domElement.style.position="absolute",g.domElement.style.top="0px",g.domElement.style.pointerEvents="none",t.appendChild(g.domElement),B=new xe,t.appendChild(B.dom),window.addEventListener("resize",mt)}function Qe(){new Ae().load("../models/gltf/Xbot.glb",function(e){A=e.scene,u.add(A),A.traverse(function(a){a.isMesh&&(a.castShadow=!0),a.isMesh&&(a.visible=!1)}),W=new Ce(A),W.visible=!1,u.add(W);const s=e.animations;L=new ee(A),j=s.length;for(let a=0;a!==j;++a){let i=s[a];const o=i.name;if(D[o]){const n=L.clipAction(i);$(n),D[o].action=n,O.push(n)}else if(E[o]){q.makeClipAdditive(i),i.name.endsWith("_pose")&&(i=q.subclip(i,i.name,2,3,30));const n=L.clipAction(i);$(n),E[o].action=n,O.push(n)}}Ze(),de()})}function re(){v=new He(p);const t=new De(u,c);v.addPass(t),S=new Le(Me),S.uniforms.sourceTextureSize.value=new M(window.innerWidth,window.innerHeight),S.uniforms.sourceTexelSize.value=new M(1.5/window.innerWidth,1.5/window.innerHeight),v.addPass(S);const e=new Ee(window.innerWidth*p.getPixelRatio(),window.innerHeight*p.getPixelRatio());v.addPass(e)}function he(){b=new Pe(c,p.domElement),b.enablePan=!0,b.autoRotate=!0,b.target.set(0,1,0),b.update()}function Ze(){const t=new Ve({width:310});t.close();const e=t.addFolder("Visibility"),s=t.addFolder("Camera Controls"),a=t.addFolder("Activation/Deactivation"),i=t.addFolder("Pause Stepping"),o=t.addFolder("General Speed"),n=t.addFolder("Scale and Pos");l={"show hand demo":function(){z("hand")},"show human demo":function(){z("human")},"clear all scene object":function(){z("None")},"camera rotate":!0,"set photo mode":!1,"modify time scale":1,"deactivate all":ot,"activate all":lt,"pause/continue":rt,"make single step":ct,"modify step size":.05,"set Grid scale":1,"set Grid XY":1,"set Obj Rotate Angle":1,"bone opacity (transparent)":1,"vertices opacity (transparent)":1,"show/disable label":!0,"show/disable dilation(post-process)":!0,"perspective camera":U,"orthographic camera":U},s.add(l,"camera rotate").onChange(ce),s.add(l,"set photo mode").onChange(tt),_.push(s.add(l,"perspective camera")),_.push(s.add(l,"orthographic camera")),e.add(l,"bone opacity (transparent)",0,1,1).onChange(et),e.add(l,"vertices opacity (transparent)",0,1,1).onChange($e),e.add(l,"show/disable label").onChange(H),e.add(l,"show/disable dilation(post-process)"),a.add(l,"deactivate all"),a.add(l,"activate all"),i.add(l,"pause/continue"),i.add(l,"make single step"),i.add(l,"modify step size",.01,.1,.001),o.add(l,"modify time scale",0,1.5,.01).onChange(at),n.add(l,"set Grid scale",.01,3,.01).onChange(it),n.add(l,"set Grid XY",.01,2,.01).onChange(nt),n.add(l,"set Obj Rotate Angle",.01,4,.01).onChange(st),e.open(),a.open(),i.open(),o.open(),n.open(),qe.forEach(function(d){d.setInactive=function(){d.domElement.classList.add("control-inactive")},d.setActive=function(){d.domElement.classList.remove("control-inactive")};const r=D[d.property];(!r||!r.weight)&&d.setInactive()})}function H(t){h.forEach(function(e){e.boneVisHelper.visible===!0&&(e.Label.visible=t)})}function $e(t){h.forEach(function(e){e.verticesVisHelper.material.opacity=t})}function et(t){h.forEach(function(e){e.boneVisHelper.material.opacity=t})}function ce(t){b.autoRotate=t,c.position.set(0,1,3)}function tt(t){t?(U(),k.rotation.x=Math.PI/2):k.rotation.x=Math.PI}function U(){c instanceof R?(c=new Fe(window.innerWidth/-1e3,window.innerWidth/1e3,window.innerHeight/1e3,window.innerHeight/-1e3,1,10),c.position.x=0,c.position.y=1,c.position.z=3,I="Orthographic"):(c=new R(45,window.innerWidth/window.innerHeight,.1,1e3),c.position.x=0,c.position.y=1,c.position.z=3,I="Perspective"),re(),he(),ce(!1)}function z(t){t==="hand"?h.forEach(function(e){e.tail.length===20?(e.boneVisHelper.visible=!0,H(l["show/disable label"])):(e.boneVisHelper.visible=!1,e.Label.visible=!1,H(l["show/disable label"]))}):t==="human"?h.forEach(function(e){e.tail.length!==20?(e.boneVisHelper.visible=!0,H(l["show/disable label"])):(e.boneVisHelper.visible=!1,e.Label.visible=!1,H(l["show/disable label"]))}):h.forEach(function(e){e.boneVisHelper.visible=!1,e.Label.visible=!1,e.path==="dummy/path"&&Y(e)})}function it(t){k.scale.set(t,t,t)}function nt(t){k.position.set(t,t,0)}function st(t){h.forEach(function(e){e.mesh.rotation.set(0,t,0)})}function at(t){for(const e of J)e.timeScale=t}function ot(){y.forEach(function(t){t.stop()})}function lt(){y.forEach(function(t){t.play()})}function rt(){P?(P=!1,X()):y[0].paused?X():ht()}function ht(){y.forEach(function(t){t.paused=!0})}function X(){y.forEach(function(t){t.paused=!1})}let Z=0;function ct(){X(),P=!0,N=l["modify step size"],Z+=1,console.log(Z)}function $(t){const e=t.getClip(),s=D[e.name]||E[e.name];dt(t,s.weight),t.play()}function dt(t,e){t.enabled=!0,t.setEffectiveTimeScale(1),t.setEffectiveWeight(e)}function Y(t){t.mesh.removeFromParent(),t.boneVisHelper.removeFromParent(),u.remove(t),console.log(t.path+"has been remove"),console.log(h)}function pt(){I==="Perspective"?(_[0].disable(),_[1].enable()):(_[1].disable(),_[0].enable())}function ft(t){var e=t.target.files[0],s=new FileReader;s.onload=function(a){return function(i){const o=new w("dummy/folder_1",.5,1.15,0,!0,!1);if(o.loadDataFromFile(s.result),h.length>=ie+2){let n=h.splice(-2,1);Y(n[0])}h.push(o)}}(),s.readAsText(e)}function ut(t){var e=t.target.files[0],s=new FileReader;s.onload=function(a){return function(i){const o=new w("dummy/folder_2",-.5,.75,0,!0,!1);if(o.loadDataFromFile(s.result),h.length>=ie+2){let n=h.splice(-2,1);Y(n[0])}h.push(o)}}(),s.readAsText(e)}function mt(){c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight),v.setSize(window.innerWidth,window.innerHeight),S.uniforms.sourceTextureSize.value=new M(window.innerWidth,window.innerHeight),S.uniforms.sourceTexelSize.value=new M(1/window.innerWidth,1/window.innerHeight),g.setSize(window.innerWidth,window.innerHeight)}function wt(){B.update(),g.render(u,c),l["show/disable dilation(post-process)"]?v.render():p.render(u,c)}function de(){requestAnimationFrame(de);for(let e=0;e!==j;++e){const s=O[e],a=s.getClip(),i=D[a.name]||E[a.name];i.weight=s.getEffectiveWeight()}pt(),b.update();let t=te.getDelta();P&&(t=N,N=0),L.update(t);for(const e of J)e.update(t);wt()}
