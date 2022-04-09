const width = window.innerWidth
const height = window.innerHeight

function setup() {
    createCanvas(width, height)
}

function draw() {
    translate(width/2, height/2)
    stroke('green')
    strokeWeight(3)
    beginShape()
    const k = 50
    const R = width * 0.4
    for (a = 0; a <= TWO_PI; a += 0.01) {
        const X = R * cos(a)
        const Y = R * sin(a)
        const r = R/k * sin(k * a)
        const x = X + r * cos(a)
        const y = Y + r * sin(a)
        vertex(x, y)
    }
    endShape()
}