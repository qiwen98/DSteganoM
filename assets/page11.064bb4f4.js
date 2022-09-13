import{S as ue,C,H as me,D as we,G as ge,P as R,W as be,s as ve,a as Se,b as ke,c as _e,d as xe,A as $,e as Y,E as ye,R as Ae,f as Ce,g as He,V as M,h as De,O as Le,i as Me,j as Pe,k as Ee,F as Ve,B as q,l as z,U as Ge,m as We,M as ze,n as Fe,o as Te,p as Re,q as Be,T as Ie,r as Oe,t as Ne,u as K,v as Ue,w as je}from"./SMAAPass.9cd29069.js";const k=function(t,e,a,n,i,o,s,c,r,f){this.path=t,this.animData=null,this.location_x=e,this.location_y=a,this.location_z=n,this.head=null,this.tail=null,this.bones=[],this.showVis=i,this.partialhuman=r,this.showLabelinstant=!1,f&&(this.showLabelinstant=!0),this.fakeMeshGeometry=new Ee(5,5,5,5,15,5,30),this.mesh=null,this.meshScale=1,this.skeleton=null,this.boneVisHelper=null,this.verticesVisHelper=null,this.isReConstructed=o,this.color1=new C(0,0,1),this.color2=new C(0,1,0),this.isReConstructed&&(this.color1=new C(1,0,0),this.color2=new C(1,.5,0)),this.transparentBone=!1,s&&(this.transparentBone=!0),this.transparentVertices=!1,c&&(this.transparentVertices=!0),this.Label=null,this.tracks=[],this.clip=null,this.mixer=null,this.clipAction=null};k.prototype={constructor:k,initContent:function(){this._reportProgress({detail:{text:"Loading: "+this.path}});const t=new Ve,e=this,a=function(n){console.log("Loading complete: "+e.path),e._reportProgress({detail:{text:""}}),e.animData=JSON.parse(n);const i=[e.animData.length,e.animData[0].length,e.animData[0][0].length];console.log(i),i[1]===21?(e.head=[0,1,2,3,0,5,6,7,0,9,10,11,0,13,14,15,0,17,18,19],e.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],e.meshScale=1.5):i[1]===38&&e.partialhuman?(e.head=[0,1,2,3,4,5,0,7,8,9,10,11,0,13,14,15,16,17,18,15],e.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],e.meshScale=2):(e.head=[0,1,2,3,4,5,0,7,8,9,10,11,0,13,14,15,16,17,18,15,20,21,22,23,24,25,23,27,15,29,30,31,32,33,34,32,36],e.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],e.meshScale=2),e.createSkeleton(),e.createFakeSkinMesh(),e.createSkinMesh(),e.setUpAnimation()};t.load(e.path,a)},loadDataFromFile:function(t){this.animData=JSON.parse(t);const e=[this.animData.length,this.animData[0].length,this.animData[0][0].length];console.log(e),e[1]===21?(this.head=[0,1,2,3,0,5,6,7,0,9,10,11,0,13,14,15,0,17,18,19],this.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]):(this.head=[0,1,2,3,4,5,0,7,8,9,10,11,0,13,14,15,16,17,18,15,20,21,22,23,24,25,23,27,15,29,30,31,32,33,34,32,36],this.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],this.meshScale=.07),this.createSkeleton(),this.createFakeSkinMesh(),this.createSkinMesh(),this.setUpAnimation()},_reportProgress:function(t){let e="";t.detail!==null&&t.detail!==void 0&&t.detail.text&&(e=t.detail.text),console.log("Progress: "+e)},createSkeleton:function(){let t=new q;t.name="bone_0",this.bones.push(t);let e=[],a=this.animData[0][0][0],n=this.animData[1][0][0],i=this.animData[2][0][0];t.position.set(a,n,i),e.push(t.position);for(let o=1;o!==this.head.length+1;++o){let s=new q;this.bones[this.head[o-1]].add(s),s.name="bone_"+this.tail[o-1],this.bones.push(s);let c=this.head[o-1];a=this.animData[0][o][0]-this.animData[0][c][0],n=this.animData[1][o][0]-this.animData[1][c][0],i=this.animData[2][o][0]-this.animData[2][c][0],s.position.set(a,n,i),e.push(s.position)}},createFakeSkinMesh:function(){const t=this.fakeMeshGeometry.attributes.position,e=new z,a=[],n=[];for(let i=0;i<t.count;i++){e.fromBufferAttribute(t,i);const o=1,s=1;a.push(o,o+1,0,0),n.push(1-s,s,0,0)}this.fakeMeshGeometry.setAttribute("skinIndex",new Ge(a,4)),this.fakeMeshGeometry.setAttribute("skinWeight",new We(n,4))},createSkinMesh:function(){const t=new ze({color:16737095,wireframe:!0});this.mesh=new Fe(this.fakeMeshGeometry,t),this.skeleton=new Te(this.bones);const e=this.skeleton.bones[0];this.mesh.add(e),this.mesh.visible=!1,this.mesh.bind(this.skeleton),this.mesh.position.set(this.location_x,this.location_y,this.location_z),this.mesh.scale.set(this.meshScale,this.meshScale,this.meshScale),u.add(this.mesh),this.boneVisHelper=new Re(this.mesh,this.color1,this.color2,this.transparentBone,d),this.boneVisHelper.visible=this.showVis,u.add(this.boneVisHelper),console.log(this.boneVisHelper);const a=new Be({color:this.color2,size:10,sizeAttenuation:!1,map:new Ie().load("../models/files/disc.png"),alphaTest:.5});this.verticesVisHelper=new Oe(this.boneVisHelper.geometry,a),this.boneVisHelper.add(this.verticesVisHelper),this.transparentVertices&&(this.verticesVisHelper.material.opacity=0);const n=this.path.split("/"),s=n[n.length-1].split(".")[0],c=s.split("_")[3];var r=null;c==="corrupted"?r=s.split("_")[1]+"-"+s.split("_")[2]+"-"+s.split("_")[3]:r=s.split("_")[1]+"-"+s.split("_")[2];const f=document.createElement("div");f.className="label",f.textContent=r,f.style.color=this.color2.getStyle(),this.Label=new Ne(f),this.Label.position.copy(this.boneVisHelper.position),this.Label.visible=!1,this.showLabelinstant||(this.Label.position.y=this.Label.position.y+.05),this.tail.length!==20?(this.Label.visible=!0,this.Label.position.y=this.Label.position.y-.4):(this.Label.visible=!0,this.Label.position.x=this.Label.position.x+.2),this.boneVisHelper.add(this.Label)},setUpAnimation:function(){const t=this.animData[0][0].length,e=t===24?24:120,a=t/e,n=[],i=[],o=new z;for(let r=0;r<t;r++){n.push(r/e);let f=this.animData[0][0][r],y=this.animData[1][0][r],V=this.animData[2][0][r];o.set(f,y,V).toArray(i,i.length)}const s=".bones[bone_0].position",c=new K(s,n,i);this.tracks.push(c);for(let r=1;r<this.head.length;r++){const f=[],y=[],V=new z;for(let m=0;m<t;m++){f.push(m/e);let G=this.head[r-1],W=this.tail[r-1],de=this.animData[0][W][m]-this.animData[0][G][m],pe=this.animData[1][W][m]-this.animData[1][G][m],fe=this.animData[2][W][m]-this.animData[2][G][m];V.set(de,pe,fe).toArray(y,y.length)}const he=".bones[bone_"+r+"].position",ce=new K(he,f,y);this.tracks.push(ce)}this.clip=new Ue("Action",a,this.tracks),this.mixer=new $(this.mesh),this.clipAction=this.mixer.clipAction(this.clip),this.clipAction.play(),x.push(this.clipAction),J.push(this.mixer)}};let u,d,h,B,w,b,_,I="Perspective",A,F,L,ee,Xe=[],v=[];const J=[],x=[],p=[];let g,S;const O=[],D={idle:{weight:1},walk:{weight:0},run:{weight:0}},P={sneak_pose:{weight:0},sad_pose:{weight:0},agree:{weight:0},headShake:{weight:0}};let l,N;Je();let E=!1,U=0;Ye();const te=new k("../models/files/skipgated_MTM/SkipGated_gt_secret_uncorrupted.json",-1,.3,0,!0,!1,!1,!1,!1,!0);te.initContent();p.push(te);const ie=new k("../models/files/skipgated_MTM/SkipGated_recon_secret_uncorrupted.json",0,.3,0,!0,!0,!1,!1,!1,!0);ie.initContent();p.push(ie);const se=new k("../models/files/skipgated_MTM/SkipGated_gt_secret_uncorrupted.json",1,.3,0,!0,!1,!1,!1,!1,!1);se.initContent();p.push(se);const ne=new k("../models/files/skipgated_MTM/SkipGated_recon_secret_uncorrupted.json",1,.3,0,!0,!0,!1,!1,!1,!0);ne.initContent();p.push(ne);function Je(){const t=document.getElementById("container");var e=document.getElementById("header"),a=document.createTextNode("MTM - SkipGated");e.appendChild(a),ee=new je,u=new ue,u.background=new C(4473924),new me(16777215,4473924).position.set(0,20,0);const i=new we(16777215);i.position.set(3,10,10),i.castShadow=!0,i.shadow.camera.top=2,i.shadow.camera.bottom=-2,i.shadow.camera.left=-2,i.shadow.camera.right=2,i.shadow.camera.near=.1,i.shadow.camera.far=40,_=new ge(20,20,8947848),u.add(_);const o=window.innerWidth,s=window.innerHeight;h=new R(45,o/s,1,100),h.position.set(0,1,3),d=new be({antialias:!0}),d.setPixelRatio(window.devicePixelRatio),d.setSize(window.innerWidth,window.innerHeight),d.outputEncoding=ve,d.shadowMap.enabled=!0,t.appendChild(d.domElement),ae(),oe(),w=new Se,w.setSize(window.innerWidth,window.innerHeight),w.domElement.style.position="absolute",w.domElement.style.top="0px",w.domElement.style.pointerEvents="none",t.appendChild(w.domElement),B=new ke,t.appendChild(B.dom),window.addEventListener("resize",dt)}function Ye(){new _e().load("../models/gltf/Xbot.glb",function(e){A=e.scene,u.add(A),A.traverse(function(n){n.isMesh&&(n.castShadow=!0),n.isMesh&&(n.visible=!1)}),F=new xe(A),F.visible=!1,u.add(F);const a=e.animations;L=new $(A),N=a.length;for(let n=0;n!==N;++n){let i=a[n];const o=i.name;if(D[o]){const s=L.clipAction(i);Z(s),D[o].action=s,O.push(s)}else if(P[o]){Y.makeClipAdditive(i),i.name.endsWith("_pose")&&(i=Y.subclip(i,i.name,2,3,30));const s=L.clipAction(i);Z(s),P[o].action=s,O.push(s)}}qe(),re()})}function ae(){b=new ye(d);const t=new Ae(u,h);b.addPass(t),S=new Ce(He),S.uniforms.sourceTextureSize.value=new M(window.innerWidth,window.innerHeight),S.uniforms.sourceTexelSize.value=new M(1.5/window.innerWidth,1.5/window.innerHeight),b.addPass(S);const e=new De(window.innerWidth*d.getPixelRatio(),window.innerHeight*d.getPixelRatio());b.addPass(e)}function oe(){g=new Le(h,d.domElement),g.enablePan=!0,g.autoRotate=!0,g.target.set(0,1,0),g.update()}function qe(){const t=new Me({width:310});t.close();const e=t.addFolder("Visibility"),a=t.addFolder("Camera Controls"),n=t.addFolder("Activation/Deactivation"),i=t.addFolder("Pause Stepping"),o=t.addFolder("General Speed"),s=t.addFolder("Scale and Pos");l={"show hand demo":function(){T("hand")},"show human demo":function(){T("human")},"clear all scene object":function(){T("None")},"camera rotate":!0,"set photo mode":!1,"modify time scale":1,"deactivate all":st,"activate all":nt,"pause/continue":at,"make single step":lt,"modify step size":.05,"set Grid scale":1,"set Grid XY":1,"set Obj Rotate Angle":1,"bone opacity (transparent)":1,"vertices opacity (transparent)":1,"show/disable label":!0,"show/disable dilation(post-process)":!0,"perspective camera":j,"orthographic camera":j},a.add(l,"camera rotate").onChange(le),a.add(l,"set photo mode").onChange(Ze),v.push(a.add(l,"perspective camera")),v.push(a.add(l,"orthographic camera")),e.add(l,"bone opacity (transparent)",0,1,1).onChange(Qe),e.add(l,"vertices opacity (transparent)",0,1,1).onChange(Ke),e.add(l,"show/disable label").onChange(H),e.add(l,"show/disable dilation(post-process)"),n.add(l,"deactivate all"),n.add(l,"activate all"),i.add(l,"pause/continue"),i.add(l,"make single step"),i.add(l,"modify step size",.01,.1,.001),o.add(l,"modify time scale",0,1.5,.01).onChange(it),s.add(l,"set Grid scale",.01,3,.01).onChange($e),s.add(l,"set Grid XY",.01,2,.01).onChange(et),s.add(l,"set Obj Rotate Angle",.01,4,.01).onChange(tt),e.open(),n.open(),i.open(),o.open(),s.open(),Xe.forEach(function(c){c.setInactive=function(){c.domElement.classList.add("control-inactive")},c.setActive=function(){c.domElement.classList.remove("control-inactive")};const r=D[c.property];(!r||!r.weight)&&c.setInactive()})}function H(t){p.forEach(function(e){e.boneVisHelper.visible===!0&&(e.Label.visible=t)})}function Ke(t){p.forEach(function(e){e.verticesVisHelper.material.opacity=t})}function Qe(t){p.forEach(function(e){e.boneVisHelper.material.opacity=t})}function le(t){g.autoRotate=t,h.position.set(0,1,3)}function Ze(t){t?(j(),_.rotation.x=Math.PI/2):_.rotation.x=Math.PI}function j(){h instanceof R?(h=new Pe(window.innerWidth/-1e3,window.innerWidth/1e3,window.innerHeight/1e3,window.innerHeight/-1e3,1,10),h.position.x=0,h.position.y=1,h.position.z=3,I="Orthographic"):(h=new R(45,window.innerWidth/window.innerHeight,.1,1e3),h.position.x=0,h.position.y=1,h.position.z=3,I="Perspective"),ae(),oe(),le(!1)}function T(t){t==="hand"?p.forEach(function(e){e.tail.length===20?(e.boneVisHelper.visible=!0,H(l["show/disable label"])):(e.boneVisHelper.visible=!1,e.Label.visible=!1,H(l["show/disable label"]))}):t==="human"?p.forEach(function(e){e.tail.length!==20?(e.boneVisHelper.visible=!0,H(l["show/disable label"])):(e.boneVisHelper.visible=!1,e.Label.visible=!1,H(l["show/disable label"]))}):p.forEach(function(e){e.boneVisHelper.visible=!1,e.Label.visible=!1,e.path==="dummy/path"&&ht(e)})}function $e(t){_.scale.set(t,t,t)}function et(t){_.position.set(t,t,0)}function tt(t){p.forEach(function(e){e.mesh.rotation.set(0,t,0)})}function it(t){for(const e of J)e.timeScale=t}function st(){x.forEach(function(t){t.stop()})}function nt(){x.forEach(function(t){t.play()})}function at(){E?(E=!1,X()):x[0].paused?X():ot()}function ot(){x.forEach(function(t){t.paused=!0})}function X(){x.forEach(function(t){t.paused=!1})}let Q=0;function lt(){X(),E=!0,U=l["modify step size"],Q+=1,console.log(Q)}function Z(t){const e=t.getClip(),a=D[e.name]||P[e.name];rt(t,a.weight),t.play()}function rt(t,e){t.enabled=!0,t.setEffectiveTimeScale(1),t.setEffectiveWeight(e)}function ht(t){t.mesh.removeFromParent(),t.boneVisHelper.removeFromParent(),u.remove(t),console.log(t.path+"has been remove"),console.log(p)}function ct(){I==="Perspective"?(v[0].disable(),v[1].enable()):(v[1].disable(),v[0].enable())}function dt(){h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),d.setSize(window.innerWidth,window.innerHeight),b.setSize(window.innerWidth,window.innerHeight),S.uniforms.sourceTextureSize.value=new M(window.innerWidth,window.innerHeight),S.uniforms.sourceTexelSize.value=new M(1/window.innerWidth,1/window.innerHeight),w.setSize(window.innerWidth,window.innerHeight)}function pt(){B.update(),w.render(u,h),l["show/disable dilation(post-process)"]?b.render():d.render(u,h)}function re(){requestAnimationFrame(re);for(let e=0;e!==N;++e){const a=O[e],n=a.getClip(),i=D[n.name]||P[n.name];i.weight=a.getEffectiveWeight()}ct(),g.update();let t=ee.getDelta();E&&(t=U,U=0),L.update(t);for(const e of J)e.update(t);pt()}
