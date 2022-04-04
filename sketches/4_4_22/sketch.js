const OBJ_SIZE = 100
const SIDES = 6
let BG_COLOR
let LINE_COLOR

const MARGIN = OBJ_SIZE / 3
const COLUMNS = 5
const ROWS = 5
const PADDING = OBJ_SIZE * 0.2
const GRIDBOX = OBJ_SIZE + PADDING
const START = (OBJ_SIZE * 2) + MARGIN

let gridArr = []

class Shape {
  constructor(posX, posY){
    this.OBJ_SIZE = OBJ_SIZE
    this.BG_COLOR = BG_COLOR
    this.LINE_COLOR = LINE_COLOR
    this.POINT_COUNT = 10
    this.ANGLE = 360 / this.POINT_COUNT
    this.POS_X = posX
    this.POS_Y = posY
  }

  render(){
    // noFill()
    stroke(this.LINE_COLOR)
    strokeWeight(20)
    push()
      translate(this.POS_X, this.POS_Y)
      for(let i = 0; i < (this.POINT_COUNT); i++){
        line((this.OBJ_SIZE / 2) * this.OBJ_SIZE, 0, this.OBJ_SIZE * floor(random(1) * i), 0)
        // line(floor(random(i)) * (this.OBJ_SIZE / 5), floor(random(i)), (this.OBJ_SIZE / 5) * floor(random(1) * i), floor(random(i)))
        rotate(floor((random(i) * this.ANGLE) + random(i)))
        // translate((this.POS_X * i), (this.POS_Y * i))
        // rotate(floor(random(i)))
      }
    pop()
  }
}

function setup() {
  const xAxis = START + GRIDBOX * COLUMNS
  const yAxis = START + GRIDBOX * ROWS
  createCanvas(xAxis, yAxis, SVG)

  let WHITE = color(255,255,255)
  let BLACK = color(0,0,0)

  BG_COLOR = WHITE
  LINE_COLOR = BLACK

  background(BG_COLOR)
  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw(){
  for (let x = 0; x < COLUMNS; x++){
    for (let y = 0; y < ROWS; y++){
      const posX = START + (x * GRIDBOX)
      const posY = START + (y * GRIDBOX)
      gridArr.push(new Shape(posX, posY))

    }
  }
  gridArr.forEach(o => o.render())
}


function drawLine(posX, posY, radius) {           
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

function randomSelectTwo() {
  const num = random(1)
  if(num > 0.5){
    return true
  } else { return false }
}