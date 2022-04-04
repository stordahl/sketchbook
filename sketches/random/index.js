
const OBJ_SIZE = 500
const SIDES = 6
let PALETTE = [

]

function setup() {
  createCanvas(550, 550, SVG)

  PALETTE = [
    color(255, 52, 154),
    color(4, 0, 152)
  ]

  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  // testLines()
  // outlineShape()
  // simpleLines()
  // circles()
  // let picker = random(1)
  // if(picker > 0.3){
  //   outlineShape()
  // }

  // picker = random(1)
  // if(picker > 0.3) {
  //   simpleLines()
  // }

  // picker = random(1)
  // if(picker > 0.3) {
  //   circles()
  // }

  const layer = new Circles()

  layer.render()
}


function outlineShape() {
  const strokeColor = randomColor()
  const weight = randomSelectTwo() ? 1 : 3
  const hexagonTrue = randomSelectTwo()

  stroke(strokeColor)
  strokeWeight(weight)
  push()
    translate(width/2, height/2)
    if (hexagonTrue) {
      hexagon(0, 0, OBJ_SIZE / 2)
    } else {
      ellipse(0, 0, OBJ_SIZE, OBJ_SIZE)
    }
  pop()
}

function testLines() {
  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2

  noFill()
  stroke(PALETTE[0])
  push()
    translate(width/2, height/2)
    ellipse(0, 0, OBJ_SIZE, OBJ_SIZE)
    stroke(PALETTE[1])
    const angle = 360 / numShapes
    for(let i = 0; i < numShapes; i++){
      line(0, 0, i, OBJ_SIZE / 2)
      rotate(angle)
    }
  pop()
}

function randomSelectTwo() {
  const num = random(1)
  if(num > 0.5){
    return true
  } else { return false }
}

function randomColor() {
  const color = floor(random(0, PALETTE.length))
  return PALETTE[color]
}

function hexagon(posX, posY, radius) {                     
  const rotAngle = 360 / 6
  beginShape()
  for (let i = 0; i < 6; i++) {
    const thisVertex = pointOnCircle(posX, posY, radius, i * rotAngle)
    vertex(thisVertex.x, thisVertex.y)
  }
  endShape(CLOSE)
}

function pointOnCircle(posX, posY, radius, angle) {         
  const x = posX + radius * cos(angle)
  const y = posY + radius * sin(angle)
  return createVector(x, y)
}

function simpleLines() {
  const stepsOut = 8
  const numSteps = randomSelectTwo() ? stepsOut : int(stepsOut * 1.25)
  const step = (OBJ_SIZE / 2) / numSteps
  const start = floor(random(0, numSteps))
  const stop = floor(random(start, numSteps + 1))

  let numShapes = randomSelectTwo() ? SIDES : SIDES * 2
  const strokeColor = randomColor()
  const weight = randomSelectTwo() ? 1 : 3
  
  noFill()
  stroke(strokeColor)
  strokeWeight(weight)
  push()
    translate(width/2, height/2)
    const angle = 360 / numShapes
    for(let i = 0; i < numShapes; i++){
      line(start * step, 0, stop * step, 0)
      rotate(angle)
    }
  pop()
}