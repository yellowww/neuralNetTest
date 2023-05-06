const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth-10;
canvas.height = window.innerHeight-10;
const c = canvas.getContext("2d");
let data = [];
const mouse = {x:null,y:null};

canvas.onmousemove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

document.body.onkeydown = (e) => {
    if(e.key==="Backspace"){data.pop(); return renderPoints()}
    if(e.key!=="1" && e.key!=="2") return;
    const input = e.key == "1"? 0:1;
    data.push([mouse.x,mouse.y,input]);
    renderPoints();
}

function renderPoints() {
    c.clearRect(0,0,canvas.width,canvas.height);
    for(let i=0;i<data.length;i++) {
        c.fillStyle = data[i][2]==1? "red":"blue";
        c.beginPath();
        c.arc(data[i][0],data[i][1],4,0,Math.PI*2);
        c.fill();
    }
    toXML();
}

function toXML() {
    let xml = `<testData>\n\t<schema><inputCount>2</inputCount></schema>\n`;
    for(let i=0;i<data.length;i++) {
        const entry = `\t<entry>
        \t<i0>${data[i][0]}</i0>
        \t<i1>${data[i][1]}</i1>
        \t<output>${data[i][2]}</output>
        </entry>\n`;
        xml+=entry;
    }
    xml+="</testData>"
    navigator.clipboard.writeText(xml)
}