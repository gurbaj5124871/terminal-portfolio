const before = document.getElementById("before");
const getter = document.getElementById("getter");
let pw = false;
let psw = false;
const cmd = document.getElementById("writer"); //zone writing
const textarea = document.getElementById("setter"); //textarea
// var terminal = document.getElementById("terminal"); //orders entered
const historique = []; // Order history
let valueH = 0;

var close = document.getElementById("close"); // don't change for bye to reload from start
// frame project
// var back = document.getElementsByClassName("btn-back");
// var project = document.getElementsByClassName("prez-2");
// var projectLink = document.getElementsByClassName("btn-direction");

document.getElementById("start").addEventListener("mouseup", initialStartup);

function initialStartup() {
  document.querySelector(".animation").innerHTML =
    '<img src="img/animation.gif" alt="animation start launching" />';
  setTimeout(function () {
    playSound(start, 0.5);
  }, 500);

  //After load animation run()
  setTimeout(function () {
    boucleWrite(run, "", 120);
    document.querySelector(".animation").remove();
    textarea.focus();
  }, 6800);
}

window.addEventListener("keyup", enterKey);

//init
textarea.value = "";
cmd.innerHTML = textarea.value;

function enterKey(e) {
  if (e.keyCode == 181) {
    document.location.reload(true);
  }
  if (pw) {
    let et = "*";
    let w = textarea.value.length;
    cmd.innerHTML = et.repeat(w);
    if (textarea.value === password) {
      psw = true;
    }
    if (psw && e.keyCode == 13) {
      boucleWrite(secret, "colored margin", 120);
      cmd.innerHTML = "";
      textarea.value = "";
      psw = false;
      pw = false;
      getter.classList.remove("password");
      //playSound(goodPassword, 0.5);
    } else if (e.keyCode == 13) {
      addLine("Wrong password", "error", 0);
      cmd.innerHTML = "";
      textarea.value = "";
      pw = false;
      getter.classList.remove("password");
      playSound(wrongPassword, 0.5);
    }
  } else {
    if (e.keyCode == 13) {
      historique.push(cmd.innerHTML);
      valueH = historique.length;
      addLine("root> " + cmd.innerHTML, "no-animation", 0, true);
      if (cmd.innerHTML.toLowerCase() === "bye") {
        cmd.innerHTML = "";
        textarea.value = "";
        window.open(location, "_self").close();
      } else {
        testValue(cmd.innerHTML.toLowerCase());
      }
      cmd.innerHTML = "";
      textarea.value = "";
    }
    if (e.keyCode == 38 && valueH != 0) {
      valueH -= 1;
      textarea.value = historique[valueH];
      cmd.innerHTML = textarea.value;
    }
    if (e.keyCode == 40 && valueH != historique.length) {
      valueH += 1;
      if (historique[valueH] === undefined) {
        textarea.value = "";
      } else {
        textarea.value = historique[valueH];
      }
      cmd.innerHTML = textarea.value;
    }
  }
}

function testValue(test) {
  switch (test.toLowerCase()) {
    case "help":
      boucleWrite(help, "", 100);
      break;
    case "workspace":
      openTab(workspace, 1000);
      break;
    case "about":
      boucleWrite(about, "colored margin", 120);
      break;
    case "social":
      boucleWrite(social, "colored", 120);
      break;
    case "contact":
      addLine("My email :  " + email, "colored", 100);
      break;
    case "works":
      addLine("<<TODO>>", "colored", 10);
      break;
    case "credits":
      boucleWrite(credits, "colored", 120);
      break;
    case "secret":
      getter.classList.add("password");
      pw = true;
      playSound(passwordEnter, 0.5);
      break;

    //social link
    case "social github":
      openTab(github, 1000);
      break;
    case "social linkedin":
      openTab(linkedin, 1000);
      break;
    case "social angel":
      openTab(angel, 1000);
      break;
    case "social instagram":
      openTab(instagram, 1000);
      break;
    case "social workspace":
      openTab(workspace, 1000);
      break;
    case "ping":
      addLine("Pong !", "colored", 100);
      break;
    default:
      addLine("Command not recognized. Test the command 'help'", "error", 100);
      playSound(wrongCommand, 0.5);
      break;
  }
}

function boucleWrite(name, classe, time) {
  name.forEach(function (item, index) {
    addLine(item, classe, index * time);
  });
}

function addLine(text, classe, time) {
  var t = "";

  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
      t += "&nbsp;&nbsp;";
      i++;
    } else {
      t += text.charAt(i);
    }
  }

  setTimeout(function () {
    const txt = document.createElement("p");
    txt.innerHTML = t;
    txt.className = classe;

    before.parentNode.insertBefore(txt, before);

    window.scrollTo(0, document.body.offsetHeight);
    playAlea();
  }, time);
}

//play sound with effects
function playSound(audio, vol) {
  audio.volume = vol;
  audio.play();
}

// function play sound type alea
function playAlea() {
  const alea = Math.floor(Math.random() * Math.floor(4));
  const vl = 0.5;

  switch (alea) {
    case 0:
      playSound(type1, vl);
      break;
    case 1:
      playSound(type2, vl);
      break;
    case 2:
      playSound(type3, vl);
      break;
    case 3:
      playSound(type4, vl);
      break;
    case 4:
      playSound(type5, vl);
      break;
  }
}

function openTab(link, time) {
  addLine("open in " + time / 1000 + "s", "colored", 0);
  setTimeout(function () {
    window.open(link, "_blank");
  }, time);
}
