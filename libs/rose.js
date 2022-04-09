const width = window.innerWidth
const height = window.innerHeight

function setup() {
    createCanvas(width, height)
}

function draw() {
    translate(width/2, height/2)
    const n = 5
    const d = 8
    const k = n/d
    stroke('green')
    strokeWeight(3)
    beginShape()
    for (a = 0; a <= TWO_PI * d; a += 0.01) {
        const r = cos(k * a) * width * 0.45
        const x = r * cos(a)
        const y = r * sin(a)
        vertex(x, y)
    }
    endShape()
}
