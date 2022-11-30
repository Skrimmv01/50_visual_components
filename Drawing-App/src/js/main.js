const colorCircles = document.querySelectorAll('.color-circle');
const clearBtn = document.querySelector('.clear-btn');
const downloadPaint = document.querySelector('a');

let penSize = 10;
let isDrawing;
let x;
let y;

const canvas = document.querySelector('canvas');
c = canvas.getContext('2d');

clearBtn.addEventListener('click', function ()
{
    c.clearRect(0, 0, canvas.width, canvas.height)
})

canvas.addEventListener('mousedown', (e) =>
{
    isDrawing = true;
    x = e.offsetX;
    y = e.offsetY;

})

canvas.addEventListener('mouseup', () =>
{
    isDrawing = false;
    x = undefined;
    y = undefined;
})

canvas.addEventListener('mousemove', (e) =>
{
    draw(e.offsetX, e.offsetY)
})

c.fillStyle = 'hotpink';
c.strokeStyle = c.fillStyle

function draw(x2, y2)
{
    if (isDrawing)
    {
        c.beginPath()
        c.arc(x2, y2, penSize, 0, Math.PI * 2);
        c.closePath()
        c.fill()
        drawLine(x, y, x2, y2)
    }

    x = x2;
    y = y2;
}

function drawLine(x1, y1, x2, y2)
{
    c.beginPath()
    c.moveTo(x1, y1)
    c.lineTo(x2, y2)
    c.strokeStyle = c.fillStyle;
    c.lineWidth = penSize * 2;
    c.stroke()
}

const selectColor = (elem) =>
{
    removeActiveCircle()

    c.fillStyle = elem.getAttribute('data-color');
    elem.classList.add('active')
}

const removeActiveCircle = () =>
{
    colorCircles.forEach(circle =>
    {
        circle.classList.remove('active')
    })
}

function penSizeChange(value)
{
    penSize = value;
}

const favColor = (elem) =>
{
    removeActiveCircle()
    c.fillStyle = elem.value;
}

downloadPaint.addEventListener('click', (e) => e.target.href = canvas.toDataURL())
