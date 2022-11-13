import * as THREE from "node_modules/three"
import NET from "node_modules/vanta/dist/vanta.net.min.js"

const body = document.getElementByTagName('main')

VANTA.NET({
  el: body,
  THREE,
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x3fff77,
  points: 20.00,
  maxDistance: 27.00,
  spacing: 17.00
})
