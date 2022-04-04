class Layer {
  constructor(){
    this.sides = SIDES
    this.numShapes = this.sides
    this.angle = 360 / this.numShapes
    this.stepsOut = 8
    this.singleStep = (OBJ_SIZE / 2) / this.stepsOut
    this.thinStroke = 1
    this.thickStroke = 3
    this.strokeColor = randomColor()
  }
}

class Circles extends Layer {
  constructor() {
    super()
    this.shapeSize = (OBJ_SIZE / 2) * 0.93
    this.position = (OBJ_SIZE / 2) - (this.shapeSize / 2)
  }

  render() {
    noFill()
    stroke(this.strokeColor)
    strokeWeight(1)
    push()
      translate(width/2, height/2)
      for(let i = 0; i <= this.numShapes; i++){
        ellipse(this.position, 0, this.shapeSize, this.shapeSize)
        rotate(this.angle)
      }
    pop()
  }
}

class SimpleLines extends Layer {
  
  constructor(){
    super()
    this.numSteps = randomSelectTwo() ? this.stepsOut : int(this.stepsOut * 1.25)
    this.step = (OBJ_SIZE / 2) / this.numSteps
    this.start = floor(random(0, this.numSteps))
    this.stop = floor(random(this.start, this.numSteps + 1))
    this.weight = randomSelectTwo() ? this.thinStroke : this.thinStroke
  }
  
  render(){
    noFill()
    stroke(this.strokeColor)
    strokeWeight(weight)
    push()
    translate(width/2, height/2)
    for(let i = 0; i < this.numShapes; i++){
      line(this.start * this.step, 0, this.stop * this.step, 0)
      rotate(this.angle)
    }
    pop()
  }
}

// class Outline extends Layer {
//   constructor(){
//     super()
//   }

//   render(){
//     stroke(this.strokeColor)
//     strokeWeight(weight)
//     push()
//       translate(width/2, height/2)
//       if (hexagonTrue) {
//         hexagon(0, 0, OBJ_SIZE / 2)
//       } else {
//         ellipse(0, 0, OBJ_SIZE, OBJ_SIZE)
//       }
//     pop()
//   }
// }