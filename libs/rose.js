const width = window.innerWidth
const height = window.innerHeight

function setup() {
    createCanvas(width, height)
}

function draw() {
    translate(width/2, height/2)
    const n = random(1, 7)
    const d = random(1, 9)
    const k = n/d
    clear()
    beginShape()
    stroke(color(random(0,255), random(0,255), random(0,255)))
    for (a = 0; a < TWO_PI * 10; a += 0.1) {
        let r = sin(k * a * noise(1,20) * 100) * width * 0.45
        let x = r * cos(a)
        let y = r * sin(a)
        vertex(x, y)
    }
    endShape()
}
