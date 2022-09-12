import{S as ve,C as D,H as Se,D as _e,G as ke,P as I,W as ye,s as xe,a as Ae,b as Ce,c as De,d as He,A as ie,e as Q,E as Le,R as Me,f as Ee,g as Pe,V as P,h as Ve,O as Fe,i as Ge,j as Te,k as We,F as ze,B as Z,l as z,U as Re,m as Be,M as Ie,n as Oe,o as je,p as Ne,q as Ue,T as Xe,r as Je,t as Ye,u as $,v as qe,w as Ke}from"./SMAAPass.9cd29069.js";const w=function(t,e,n,s,i,o,a,d,r,v){this.path=t,this.animData=null,this.location_x=e,this.location_y=n,this.location_z=s,this.head=null,this.tail=null,this.bones=[],this.showVis=i,this.partialhuman=r,this.showLabelinstant=!1,v&&(this.showLabelinstant=!0),this.fakeMeshGeometry=new We(5,5,5,5,15,5,30),this.mesh=null,this.meshScale=1,this.skeleton=null,this.boneVisHelper=null,this.verticesVisHelper=null,this.isReConstructed=o,this.color1=new D(0,0,1),this.color2=new D(0,1,0),this.isReConstructed&&(this.color1=new D(1,0,0),this.color2=new D(1,.5,0)),this.transparentBone=!1,a&&(this.transparentBone=!0),this.transparentVertices=!1,d&&(this.transparentVertices=!0),this.Label=null,this.tracks=[],this.clip=null,this.mixer=null,this.clipAction=null};w.prototype={constructor:w,initContent:function(){this._reportProgress({detail:{text:"Loading: "+this.path}});const t=new ze,e=this,n=function(s){console.log("Loading complete: "+e.path),e._reportProgress({detail:{text:""}}),e.animData=JSON.parse(s);const i=[e.animData.length,e.animData[0].length,e.animData[0][0].length];console.log(i),i[1]===21?(e.head=[0,1,2,3,0,5,6,7,0,9,10,11,0,13,14,15,0,17,18,19],e.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],e.meshScale=1.5):i[1]===38&&e.partialhuman?(e.head=[0,1,2,3,4,5,0,7,8,9,10,11,0,13,14,15,16,17,18,15],e.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],e.meshScale=2):(e.head=[0,1,2,3,4,5,0,7,8,9,10,11,0,13,14,15,16,17,18,15,20,21,22,23,24,25,23,27,15,29,30,31,32,33,34,32,36],e.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],e.meshScale=2),e.createSkeleton(),e.createFakeSkinMesh(),e.createSkinMesh(),e.setUpAnimation()};t.load(e.path,n)},loadDataFromFile:function(t){this.animData=JSON.parse(t);const e=[this.animData.length,this.animData[0].length,this.animData[0][0].length];console.log(e),e[1]===21?(this.head=[0,1,2,3,0,5,6,7,0,9,10,11,0,13,14,15,0,17,18,19],this.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]):(this.head=[0,1,2,3,4,5,0,7,8,9,10,11,0,13,14,15,16,17,18,15,20,21,22,23,24,25,23,27,15,29,30,31,32,33,34,32,36],this.tail=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37],this.meshScale=.07),this.createSkeleton(),this.createFakeSkinMesh(),this.createSkinMesh(),this.setUpAnimation()},_reportProgress:function(t){let e="";t.detail!==null&&t.detail!==void 0&&t.detail.text&&(e=t.detail.text),console.log("Progress: "+e)},createSkeleton:function(){let t=new Z;t.name="bone_0",this.bones.push(t);let e=[],n=this.animData[0][0][0],s=this.animData[1][0][0],i=this.animData[2][0][0];t.position.set(n,s,i),e.push(t.position);for(let o=1;o!==this.head.length+1;++o){let a=new Z;this.bones[this.head[o-1]].add(a),a.name="bone_"+this.tail[o-1],this.bones.push(a);let d=this.head[o-1];n=this.animData[0][o][0]-this.animData[0][d][0],s=this.animData[1][o][0]-this.animData[1][d][0],i=this.animData[2][o][0]-this.animData[2][d][0],a.position.set(n,s,i),e.push(a.position)}},createFakeSkinMesh:function(){const t=this.fakeMeshGeometry.attributes.position,e=new z,n=[],s=[];for(let i=0;i<t.count;i++){e.fromBufferAttribute(t,i);const o=1,a=1;n.push(o,o+1,0,0),s.push(1-a,a,0,0)}this.fakeMeshGeometry.setAttribute("skinIndex",new Re(n,4)),this.fakeMeshGeometry.setAttribute("skinWeight",new Be(s,4))},createSkinMesh:function(){const t=new Ie({color:16737095,wireframe:!0});this.mesh=new Oe(this.fakeMeshGeometry,t),this.skeleton=new je(this.bones);const e=this.skeleton.bones[0];this.mesh.add(e),this.mesh.visible=!1,this.mesh.bind(this.skeleton),this.mesh.position.set(this.location_x,this.location_y,this.location_z),this.mesh.scale.set(this.meshScale,this.meshScale,this.meshScale),f.add(this.mesh),this.boneVisHelper=new Ne(this.mesh,this.color1,this.color2,this.transparentBone,p),this.boneVisHelper.visible=this.showVis,f.add(this.boneVisHelper),console.log(this.boneVisHelper);const n=new Ue({color:this.color2,size:10,sizeAttenuation:!1,map:new Xe().load("../models/files/disc.png"),alphaTest:.5});this.verticesVisHelper=new Je(this.boneVisHelper.geometry,n),this.boneVisHelper.add(this.verticesVisHelper),this.transparentVertices&&(this.verticesVisHelper.material.opacity=0);const s=this.path.split("/"),a=s[s.length-1].split(".")[0],d=a.split("_")[1]+"_"+a.split("_")[2],r=document.createElement("div");r.className="label",r.textContent=d,r.style.color=this.color2.getStyle(),this.Label=new Ye(r),this.Label.position.copy(this.boneVisHelper.position),this.Label.visible=!1,this.showLabelinstant||(this.Label.position.y=this.Label.position.y+.05),this.tail.length!==20?(this.Label.visible=!0,this.Label.position.y=this.Label.position.y-.4):(this.Label.visible=!0,this.Label.position.x=this.Label.position.x+.2),this.boneVisHelper.add(this.Label)},setUpAnimation:function(){const t=this.animData[0][0].length,e=t===24?24:120,n=t/e,s=[],i=[],o=new z;for(let r=0;r<t;r++){s.push(r/e);let v=this.animData[0][0][r],A=this.animData[1][0][r],G=this.animData[2][0][r];o.set(v,A,G).toArray(i,i.length)}const a=".bones[bone_0].position",d=new $(a,s,i);this.tracks.push(d);for(let r=1;r<this.head.length;r++){const v=[],A=[],G=new z;for(let u=0;u<t;u++){v.push(u/e);let T=this.head[r-1],W=this.tail[r-1],we=this.animData[0][W][u]-this.animData[0][T][u],ge=this.animData[1][W][u]-this.animData[1][T][u],be=this.animData[2][W][u]-this.animData[2][T][u];G.set(we,ge,be).toArray(A,A.length)}const ue=".bones[bone_"+r+"].position",me=new $(ue,v,A);this.tracks.push(me)}this.clip=new qe("Action",n,this.tracks),this.mixer=new ie(this.mesh),this.clipAction=this.mixer.clipAction(this.clip),this.clipAction.play(),x.push(this.clipAction),q.push(this.mixer)}};let f,p,c,O,g,S,y,j="Perspective",C,R,E,ne,Qe=[],m=[],_=[];const q=[],x=[],h=[];let b,L="hand";const se=4;let k;const N=[],M={idle:{weight:1},walk:{weight:0},run:{weight:0}},V={sneak_pose:{weight:0},sad_pose:{weight:0},agree:{weight:0},headShake:{weight:0}};let l,U;Ze();let F=!1,X=0;$e();const ae=new w("../models/files/skipgated_MTM/SkipGated_recon_cover_corrupted.json",-1,.3,0,!0,!0,!1,!1,!1,!0);ae.initContent();h.push(ae);const oe=new w("../models/files/skipgated_MTM/SkipGated_gt_cover_uncorrupted.json",-1,.3,0,!0,!1,!1,!1,!1,!1);oe.initContent();h.push(oe);const le=new w("../models/files/skipgated_MTM/SkipGated_recon_secret_corrupted.json",0,.3,0,!0,!0,!1,!1,!1,!0);le.initContent();h.push(le);const re=new w("../models/files/skipgated_MTM/SkipGated_gt_secret_uncorrupted.json",1,.3,0,!0,!1,!1,!1,!1,!1);re.initContent();h.push(re);const he=new w("../models/files/skipgated_MTM/SkipGated_recon_secret_corrupted.json",1,.3,0,!0,!0,!1,!1,!1,!0);he.initContent();h.push(he);function Ze(){const t=document.getElementById("container");document.getElementById("file1").addEventListener("change",wt,!1),document.getElementById("file2").addEventListener("change",gt,!1);var e=document.getElementById("header"),n=document.createTextNode("MTM SkipGated");e.appendChild(n),ne=new Ke,f=new ve,f.background=new D(4473924),new Se(16777215,4473924).position.set(0,20,0);const i=new _e(16777215);i.position.set(3,10,10),i.castShadow=!0,i.shadow.camera.top=2,i.shadow.camera.bottom=-2,i.shadow.camera.left=-2,i.shadow.camera.right=2,i.shadow.camera.near=.1,i.shadow.camera.far=40,y=new ke(20,20,8947848),f.add(y);const o=window.innerWidth,a=window.innerHeight;c=new I(45,o/a,1,100),c.position.set(0,1,3),p=new ye({antialias:!0}),p.setPixelRatio(window.devicePixelRatio),p.setSize(window.innerWidth,window.innerHeight),p.outputEncoding=xe,p.shadowMap.enabled=!0,t.appendChild(p.domElement),ce(),de(),g=new Ae,g.setSize(window.innerWidth,window.innerHeight),g.domElement.style.position="absolute",g.domElement.style.top="0px",g.domElement.style.pointerEvents="none",t.appendChild(g.domElement),O=new Ce,t.appendChild(O.dom),window.addEventListener("resize",bt)}function $e(){new De().load("../models/gltf/Xbot.glb",function(e){C=e.scene,f.add(C),C.traverse(function(s){s.isMesh&&(s.castShadow=!0),s.isMesh&&(s.visible=!1)}),R=new He(C),R.visible=!1,f.add(R);const n=e.animations;E=new ie(C),U=n.length;for(let s=0;s!==U;++s){let i=n[s];const o=i.name;if(M[o]){const a=E.clipAction(i);te(a),M[o].action=a,N.push(a)}else if(V[o]){Q.makeClipAdditive(i),i.name.endsWith("_pose")&&(i=Q.subclip(i,i.name,2,3,30));const a=E.clipAction(i);te(a),V[o].action=a,N.push(a)}}et(),fe()})}function ce(){S=new Le(p);const t=new Me(f,c);S.addPass(t),k=new Ee(Pe),k.uniforms.sourceTextureSize.value=new P(window.innerWidth,window.innerHeight),k.uniforms.sourceTexelSize.value=new P(1.5/window.innerWidth,1.5/window.innerHeight),S.addPass(k);const e=new Ve(window.innerWidth*p.getPixelRatio(),window.innerHeight*p.getPixelRatio());S.addPass(e)}function de(){b=new Fe(c,p.domElement),b.enablePan=!0,b.autoRotate=!0,b.target.set(0,1,0),b.update()}function et(){const t=new Ge({width:310});t.close();const e=t.addFolder("Visibility"),n=t.addFolder("Camera Controls"),s=t.addFolder("Activation/Deactivation"),i=t.addFolder("Pause Stepping"),o=t.addFolder("General Speed"),a=t.addFolder("Scale and Pos");l={"show hand demo":function(){B("hand"),L="hand"},"show human demo":function(){B("human"),L="human"},"clear all scene object":function(){B("None"),L="None"},"camera rotate":!0,"set photo mode":!1,"modify time scale":1,"deactivate all":rt,"activate all":ht,"pause/continue":ct,"make single step":pt,"modify step size":.05,"set Grid scale":1,"set Grid XY":1,"set Obj Rotate Angle":1,"bone opacity (transparent)":1,"vertices opacity (transparent)":1,"show/disable label":!0,"show/disable dilation(post-process)":!0,"perspective camera":J,"orthographic camera":J},m.push(e.add(l,"show hand demo")),m.push(e.add(l,"show human demo")),m.push(e.add(l,"clear all scene object")),n.add(l,"camera rotate").onChange(pe),n.add(l,"set photo mode").onChange(nt),_.push(n.add(l,"perspective camera")),_.push(n.add(l,"orthographic camera")),e.add(l,"bone opacity (transparent)",0,1,1).onChange(it),e.add(l,"vertices opacity (transparent)",0,1,1).onChange(tt),e.add(l,"show/disable label").onChange(H),e.add(l,"show/disable dilation(post-process)"),s.add(l,"deactivate all"),s.add(l,"activate all"),i.add(l,"pause/continue"),i.add(l,"make single step"),i.add(l,"modify step size",.01,.1,.001),o.add(l,"modify time scale",0,1.5,.01).onChange(lt),a.add(l,"set Grid scale",.01,3,.01).onChange(st),a.add(l,"set Grid XY",.01,2,.01).onChange(at),a.add(l,"set Obj Rotate Angle",.01,4,.01).onChange(ot),e.open(),s.open(),i.open(),o.open(),a.open(),Qe.forEach(function(d){d.setInactive=function(){d.domElement.classList.add("control-inactive")},d.setActive=function(){d.domElement.classList.remove("control-inactive")};const r=M[d.property];(!r||!r.weight)&&d.setInactive()})}function H(t){h.forEach(function(e){e.boneVisHelper.visible===!0&&(e.Label.visible=t)})}function tt(t){h.forEach(function(e){e.verticesVisHelper.material.opacity=t})}function it(t){h.forEach(function(e){e.boneVisHelper.material.opacity=t})}function pe(t){b.autoRotate=t,c.position.set(0,1,3)}function nt(t){t?(J(),y.rotation.x=Math.PI/2):y.rotation.x=Math.PI}function J(){c instanceof I?(c=new Te(window.innerWidth/-1e3,window.innerWidth/1e3,window.innerHeight/1e3,window.innerHeight/-1e3,1,10),c.position.x=0,c.position.y=1,c.position.z=3,j="Orthographic"):(c=new I(45,window.innerWidth/window.innerHeight,.1,1e3),c.position.x=0,c.position.y=1,c.position.z=3,j="Perspective"),ce(),de(),pe(!1)}function B(t){t==="hand"?h.forEach(function(e){e.tail.length===20?(e.boneVisHelper.visible=!0,H(l["show/disable label"])):(e.boneVisHelper.visible=!1,e.Label.visible=!1,H(l["show/disable label"]))}):t==="human"?h.forEach(function(e){e.tail.length!==20?(e.boneVisHelper.visible=!0,H(l["show/disable label"])):(e.boneVisHelper.visible=!1,e.Label.visible=!1,H(l["show/disable label"]))}):h.forEach(function(e){e.boneVisHelper.visible=!1,e.Label.visible=!1,e.path==="dummy/path"&&K(e)})}function st(t){y.scale.set(t,t,t)}function at(t){y.position.set(t,t,0)}function ot(t){h.forEach(function(e){e.mesh.rotation.set(0,t,0)})}function lt(t){for(const e of q)e.timeScale=t}function rt(){x.forEach(function(t){t.stop()})}function ht(){x.forEach(function(t){t.play()})}function ct(){F?(F=!1,Y()):x[0].paused?Y():dt()}function dt(){x.forEach(function(t){t.paused=!0})}function Y(){x.forEach(function(t){t.paused=!1})}let ee=0;function pt(){Y(),F=!0,X=l["modify step size"],ee+=1,console.log(ee)}function te(t){const e=t.getClip(),n=M[e.name]||V[e.name];ft(t,n.weight),t.play()}function ft(t,e){t.enabled=!0,t.setEffectiveTimeScale(1),t.setEffectiveWeight(e)}function K(t){t.mesh.removeFromParent(),t.boneVisHelper.removeFromParent(),f.remove(t),console.log(t.path+"has been remove"),console.log(h)}function ut(){L==="hand"?(m[0].disable(),m[1].enable()):L==="human"?(m[0].enable(),m[1].disable()):(m[0].enable(),m[1].enable())}function mt(){j==="Perspective"?(_[0].disable(),_[1].enable()):(_[1].disable(),_[0].enable())}function wt(t){var e=t.target.files[0],n=new FileReader;n.onload=function(s){return function(i){const o=new w("dummy/folder_1",.5,1.15,0,!0,!1);if(o.loadDataFromFile(n.result),h.length>=se+2){let a=h.splice(-2,1);K(a[0])}h.push(o)}}(),n.readAsText(e)}function gt(t){var e=t.target.files[0],n=new FileReader;n.onload=function(s){return function(i){const o=new w("dummy/folder_2",-.5,.75,0,!0,!1);if(o.loadDataFromFile(n.result),h.length>=se+2){let a=h.splice(-2,1);K(a[0])}h.push(o)}}(),n.readAsText(e)}function bt(){c.aspect=window.innerWidth/window.innerHeight,c.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight),S.setSize(window.innerWidth,window.innerHeight),k.uniforms.sourceTextureSize.value=new P(window.innerWidth,window.innerHeight),k.uniforms.sourceTexelSize.value=new P(1/window.innerWidth,1/window.innerHeight),g.setSize(window.innerWidth,window.innerHeight)}function vt(){O.update(),g.render(f,c),l["show/disable dilation(post-process)"]?S.render():p.render(f,c)}function fe(){requestAnimationFrame(fe);for(let e=0;e!==U;++e){const n=N[e],s=n.getClip(),i=M[s.name]||V[s.name];i.weight=n.getEffectiveWeight()}mt(),ut(),b.update();let t=ne.getDelta();F&&(t=X,X=0),E.update(t);for(const e of q)e.update(t);vt()}
