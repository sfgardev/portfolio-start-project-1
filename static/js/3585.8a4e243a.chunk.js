"use strict";(self.webpackChunkportfolio_start=self.webpackChunkportfolio_start||[]).push([[3585],{3585:function(t,i,o){o.r(i),o.d(i,{bounceHorizontal:function(){return r},bounceVertical:function(){return s}});var e=o(4709),n=0,c=0;function r(t){if(!("bounce"!==t.outMode&&"split"!==t.outMode||"left"!==t.direction&&"right"!==t.direction)){t.bounds.right<c&&"left"===t.direction?t.particle.position.x=t.size+t.offset.x:t.bounds.left>t.canvasSize.width&&"right"===t.direction&&(t.particle.position.x=t.canvasSize.width-t.size-t.offset.x);var i=t.particle.velocity.x,o=!1;if("right"===t.direction&&t.bounds.right>=t.canvasSize.width&&i>n||"left"===t.direction&&t.bounds.left<=c&&i<n){var r=(0,e.Gu)(t.particle.options.bounce.horizontal.value);t.particle.velocity.x*=-r,o=!0}if(o){var s=t.offset.x+t.size;t.bounds.right>=t.canvasSize.width&&"right"===t.direction?t.particle.position.x=t.canvasSize.width-s:t.bounds.left<=c&&"left"===t.direction&&(t.particle.position.x=s),"split"===t.outMode&&t.particle.destroy()}}}function s(t){if(!("bounce"!==t.outMode&&"split"!==t.outMode||"bottom"!==t.direction&&"top"!==t.direction)){t.bounds.bottom<c&&"top"===t.direction?t.particle.position.y=t.size+t.offset.y:t.bounds.top>t.canvasSize.height&&"bottom"===t.direction&&(t.particle.position.y=t.canvasSize.height-t.size-t.offset.y);var i=t.particle.velocity.y,o=!1;if("bottom"===t.direction&&t.bounds.bottom>=t.canvasSize.height&&i>n||"top"===t.direction&&t.bounds.top<=c&&i<n){var r=(0,e.Gu)(t.particle.options.bounce.vertical.value);t.particle.velocity.y*=-r,o=!0}if(o){var s=t.offset.y+t.size;t.bounds.bottom>=t.canvasSize.height&&"bottom"===t.direction?t.particle.position.y=t.canvasSize.height-s:t.bounds.top<=c&&"top"===t.direction&&(t.particle.position.y=s),"split"===t.outMode&&t.particle.destroy()}}}}}]);
//# sourceMappingURL=3585.8a4e243a.chunk.js.map