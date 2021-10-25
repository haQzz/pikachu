const string = `
 .skin * {
 box-sizing: border-box;
 margin: 0;
 padding: 0;
}
.skin *::after {
 box-sizing: border-box;
}
.skin *::before {
 box-sizing: border-box;
}
.skin {
 min-height: 50vh;
 background: #ffe600;
 position: relative;
}
.nose {
 border: 10px solid red;
 border-color: red transparent transparent;
 border-bottom: none;
 position: relative;
 width: 0;
 height: 0;
 left: 50%;
 top: 245px;
 margin-left: -10px;
 z-index: 2;
}
@keyframes wave {
 0% {
   transform: rotate(0deg);
 }
 33% {
   transform: rotate(15deg);
 }
 66% {
   transform: rotate(-15deg);
 }
 100% {
   transform: rotate(0deg);
 }
}
.nose:hover {
 transform-origin: 50% 100%;
 animation: wave 500ms infinite linear;
}
.yuan {
 width: 20px;
 height: 7px;
 position: absolute;
 top: -16px;
 left: -10px;
 border-radius: 10px 10px 0 0;
 background: red;
}
.eye {
 position: absolute;
 border: 2px solid black;
 width: 64px;
 height: 64px;
 left: 50%;
 top: 200px;
 margin-left: -32px;
 background: #2e2e2e;
 border-radius: 50%;
}
.eye::before {
 position: relative;
 content: "";
 display: block;
 background: #fff;
 height: 25px;
 width: 25px;
 border: 3px solid #000;
 left: 7px;
 top: 4px;
 border-radius: 50%;
}
.eye.left {
 transform: translateX(-100px);
}
.eye.right {
 transform: translateX(100px);
}
.mouth {
 height: 200px;
 width: 200px;
 position: absolute;
 left: 50%;
 top: 270px;
 margin-left: -100px;
}
.mouth .up {
 position: relative;
 top: -6px;
 z-index: 1;
}
.mouth .up .lip {
 width: 100px;
 height: 30px;
 border: 5px solid black;
 border-top-color: transparent;
 position: relative;
 left: 50%;
 background: #ffe600;
}
.mouth .up .lip.left {
 border-radius: 0 0 0 50px;
 margin-left: -95px;
 transform: rotate(-15deg);
}
.mouth .up .lip.right {
 border-radius: 0 0 50px 0;
 margin-left: -5px;
 top: -30px;
 transform: rotate(15deg) translateX(7px);
}
.mouth .up .lip.left::before {
 content: "";
 height: 30px;
 width: 7px;
 display: block;
 position: absolute;
 left: 89px;
 top: -4px;
 background: #ffe600;
}
.mouth .up .lip.right::before {
 content: "";
 height: 29px;
 width: 7px;
 display: block;
 position: absolute;
 left: -6px;
 top: -9px;
 background: #ffe600;
}
.mouth .down {
 width: 100%;
 height: 180px;
 position: absolute;
 top: 0px;
 overflow: hidden;
}
.mouth .down .yuan1 {
 height: 1000px;
 width: 150px;
 position: absolute;
 border: 3px solid black;
 left: 50%;
 margin-left: -75px;
 bottom: 0;
 border-radius: 75px/300px;
 background: #9b000a;
 overflow: hidden;
}
.mouth .down .yuan1 .yuan2 {
 width: 200px;
 height: 300px;
 position: absolute;
 background: green;
 bottom: -155px;
 left: 50%;
 margin-left: -100px;
 border-radius: 100px;
 background: #ff485f;
}
.face {
 position: absolute;
 width: 80px;
 height: 80px;
 border: 1px solid red;
 left: 50%;
 margin-left: -40px;
 top: 300px;
 z-index: 3;
 border: 3px solid black;
}
.face.left {
 transform: translateX(-180px);
 background: #ff0000;
 border-radius: 50%;
}
.face.right {
 transform: translateX(180px);
 background: #ff0000;
 border-radius: 50%;
}
`
let n = 1
demo1.innerText = string.substr(0,n)
demo2.innerHTML = string.substr(0,n)
let time = 100
const run = () => {
  n += 1
    if(n > string.length){
        clearInterval(id)
        return           //这里在每次计时时都会有一个id               //return终止这行代码不执行下面的代码了
    }
    demo1.innerText = string.substr(0,n)
    demo2.innerHTML = string.substr(0,n)
    demo1.scrollTop = demo1.scrollHeight  // scrollTop 距离顶部的距离
}
const play = () => {
   return  setInterval(run,time)
}
const pause = () => {
  window.clearInterval(id)
}
let id = play()
const slow = () => {
  pause()
  time = 100
  id = play()
}
const normal = () => {
  pause()
  time = 30
  id = play()
}
const fast = () => {
  pause()
  time = 0
  id = play()
}
btnPause.onclick = pause
btnPlay.onclick = () => {
  id = play()
}
btnSlow.onclick = slow
btnNormal.onclick = normal
btnFast.onclick = fast
