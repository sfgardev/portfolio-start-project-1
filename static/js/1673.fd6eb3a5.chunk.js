"use strict";(self.webpackChunkportfolio_start=self.webpackChunkportfolio_start||[]).push([[1673],{1673:function(e,n,t){t.r(n),t.d(n,{BaseMover:function(){return u}});var r=t(4165),i=t(5861),a=t(5671),o=t(3144),s=t(4709),u=function(){function e(){(0,a.Z)(this,e)}return(0,o.Z)(e,[{key:"init",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n){var i,a,o;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=n.options,a=i.move.gravity,n.gravity={enable:a.enable,acceleration:(0,s.Gu)(a.acceleration),inverse:a.inverse},e.next=4,t.e(8430).then(t.bind(t,8430));case 4:return o=e.sent,(0,o.initSpin)(n),e.next=9,Promise.resolve();case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},{key:"isEnabled",value:function(e){return!e.destroyed&&e.options.move.enable}},{key:"move",value:function(){var e=(0,i.Z)((0,r.Z)().mark((function e(n,i){var a,o,u,c,p,v,l,f,d,m,b,x,h,k,y,Z,S,w,g,D,G,z,C;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v=n.options,(l=v.move).enable){e.next=3;break}return e.abrupt("return");case 3:return f=n.container,d=f.retina.pixelRatio,null!==(o=(a=n.retina).moveSpeed)&&void 0!==o||(a.moveSpeed=(0,s.Gu)(l.speed)*d),null!==(c=(u=n.retina).moveDrift)&&void 0!==c||(u.moveDrift=(0,s.Gu)(n.options.move.drift)*d),e.next=8,t.e(8430).then(t.bind(t,8430));case 8:if(m=e.sent,b=m.getProximitySpeedFactor,x=b(n),h=n.retina.moveSpeed*f.retina.reduceFactor,k=n.retina.moveDrift,y=(0,s.KI)(v.size.value)*d,Z=l.size?n.getRadius()/y:1,S=i.factor||1,w=h*Z*x*S/2,g=null!==(p=n.retina.maxSpeed)&&void 0!==p?p:f.retina.maxSpeed,!l.spin.enable){e.next=26;break}return e.next=21,t.e(8430).then(t.bind(t,8430));case 21:D=e.sent,(0,D.spin)(n,w),e.next=32;break;case 26:return e.next=28,t.e(8430).then(t.bind(t,8430));case 28:return G=e.sent,z=G.move,e.next=32,z(n,l,w,g,k,i);case 32:return e.next=34,t.e(8430).then(t.bind(t,8430));case 34:C=e.sent,(0,C.applyDistance)(n);case 37:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}()}]),e}()}}]);
//# sourceMappingURL=1673.fd6eb3a5.chunk.js.map