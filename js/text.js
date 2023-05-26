//Text write when the page was load
const currentDate = new Date();

function yearsDiff(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);
  const yearsDiff = date2.getFullYear() - date1.getFullYear();

  return yearsDiff;
}

function monthsDiff(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  const years = yearsDiff(d1, d2);
  const months = years * 12 + (date2.getMonth() - date1.getMonth());

  return months;
}

const run = [
  `<span class="indice">$ </span><span class="colored">cd ~/portfolios/${currentDate.getFullYear()}</span>`,
  '<span class="indice">$ </span><span class="colored">./gurbaj-portfolio.sh</span>',
  "┌=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=┐",
  "¦                                                                 ¦",
  "|    _____            _           _    _____ _             _      |",
  "¦   / ____|          | |         (_)  / ____(_)           | |     ¦",
  "|  | |  __ _   _ _ __| |__   __ _ _  | (___  _ _ __   __ _| |___  |",
  "¦  | | |_ | | | | '__| '_ \\ / _` | |  \\___ \\| | '_ \\ / _` | '_  \\ ¦",
  "|  | |__| | |_| | |  | |_) | (_| | |  ____) | | | | | (_| | | | | |",
  "¦   \\_____|\\__,_|_|  |_.__/ \\__,_| | |_____/|_|_| |_|\\__, |_| |_| ¦",
  "|                               _/ |                  __/ |       |",
  "¦                              |__/                  |___/        ¦",
  '|                                                         <span class="indice">[1.0.4]</span> |',
  "└=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=┘",
  'Welcome to you on my <span class="colored">portfolio<span>',
  "To start enter the command <span class=\"command\">'help'<span>",
];

//password
const password = "Linux";

// Text for the command 'Help'
const help = [
  "<br>",
  '<span class="command">workspace</span>      Visit new portfolio which is more expressive and better at showcasing my work',
  '<span class="command">about</span>          Learn more about me',
  // '<span class="command">works</span>          Show my works',
  '<span class="command">social</span>         Displays social networks',
  '<span class="command">contact</span>        Get my email',
  '<span class="command">credits</span>        Show the credits',
  // '<span class="command">secret</span>         z?◙░▓_da~▒_*? <span class="indice">[' +password + "]<span>",
  '<span class="command">bye</span>            Close terminal session',
  "<br>",
];

// email
const email =
  '<a href="mailto:singh.gurbaj5124871@gmail.com">singh.gurbaj5124871@gmail.com</a>';

// Text for the command 'about'
const startDateOfWorking = new Date(2017, 00, 01); // 01 Jan 2017

const workingExperience = new Date();
const workingMonths = monthsDiff(startDateOfWorking, workingExperience);
const noOfYears = workingMonths / 12;
const noOfMonths = workingMonths % 12;
let workingExperienceStr = `${parseInt(noOfYears)} years`;
if (noOfMonths > 0) {
  workingExperienceStr += ` ${noOfMonths} months`;
}

const about = [
  "<br>",
  "Hello there !",
  "<br>",
  'My Name is </span><span class="highlight">Gurbaj Singh</span>. I am a Software and Data Engineer with experience of',
  "working in various product based startups of about " + workingExperienceStr,
  'specialized in <span class="highlight">Backend</span>, <span class="highlight">Data</span> and <span class="highlight">Devops</span> with intermediate level of frontend.',
  "<br>",
  "• I am a database enthusiast (my currently favorite is cassandra)",
  "• A startup fanatic (if you feel you have an awesome idea reach me out)",
  "• And loves open source ❤",
  "<br>",
  "wubba lubba dub dub 🦾",
  "<br>",
  "<br>",
];

//link social
const github = "https://github.com/gurbaj5124871";
const linkedin = "https://www.linkedin.com/in/gurbaj-singh-b64198b5/";
const angel = "https://angel.co/u/gurbaj-singh-2";
const instagram = "https://www.instagram.com/gurbajgram";
const workspace = "https://workspace.gurbaj.dev";

//social
const social = [
  "<br>",
  `github         <a href="${github}" target="_blank"> ${github} </a>`,
  `linkedin       <a href="${linkedin}" target="_blank"> ${linkedin} </a>`,
  `angel        <a href="${angel}" target="_blank"> ${angel}</a>`,
  `instagram    <a href="${instagram}" target="_blank"> ${instagram}</a>`,
  `workspace    <a href="${workspace}" target="_blank"> ${workspace}</a>`,
  "<br>",
  'Type: <span class="command">social &lt;socialOption&gt;</span> to visit <span class="command">or</span> click on the above links.',
  "<br>",
];

//open windows
const openWindow = "new open window";

//works
const worksOpen = "works open";
const worksClos = "works close";

//credits
const credits = [
  "<br>",
  'All credits to <a href="https://www.behance.net/valentinsld" target="_blank">Valentin SLD</a> for designing this portfolio.',
  "If you loved his work, do support him or better just hire him.",
  "💗 to all open-source softwares, frameworks, libraries, scripts used.",
  "<br>",
];

//secret
secret = [
  "<br>",
  '<span class="command">historic</span>       View my order history',
  '<span class="command">color</span>          Enter color with a number 0 to 8 for change the apparence',
  '<span class="command">clear</span>          reset commands',
  '<span class="command">shutdown</span>       Stop the machin',
  '<span class="command">ping</span>',
  "<br>",
];

//audio
const start = new Audio("sounds/start.mp4");
const closeFrame = new Audio("sounds/CloseWindows.wav");
const openFrame = new Audio("sounds/OpenWindow.wav");
const wrongCommand = new Audio("sounds/WrongCommand.wav");
const passwordEnter = new Audio("sounds/Password.wav");
const wrongPassword = new Audio("sounds/WrongPassword.wav");
const goodPassword = new Audio("sounds/GoodPassword.wav");
const closeS = new Audio("sounds/end.mp4");
const type1 = new Audio("sounds/type1.wav");
const type2 = new Audio("sounds/type2.wav");
const type3 = new Audio("sounds/type3.wav");
const type4 = new Audio("sounds/type4.wav");
const type5 = new Audio("sounds/type5.wav");
