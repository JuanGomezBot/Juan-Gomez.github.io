const carajinput = document.getElementById("termInput");
const termBody = document.getElementById("termBody");
const mirror = document.getElementById("mirror");
const cursor = document.querySelector(".cursor");
carajinput.focus();
const commands = {
  whoami: [
    "Juan Gomez — Software Developer",
    "Based in Rochester, NY",
    "LinkedIn: linkedin.com/in/juan-g0mez · GitHub: github.com/JuanGomezBot"
  ],
  skills: [
    "Languages: Python, Java, C#, Bash, HTML5, CSS3, PHP, JavaScript/jQuery",
    "Tools: Git, VS Code, Tkinter, Java Swing, SSMS, Discord API, Docker, Azure",
    "Other: accessibility-first UI design, QA & testing, security best practices"
  ],
  projects: [
    "Smart Antivirus (CLI, Python) — heuristic/signature-based scanning engine with modular design, tuned to minimize false positives",
    "Ashmod (Discord Bot) — moderation, ticketing, leveling, and economy features handling 1,000+ weekly interactions",
    "Beehive Monitor — Arduino + Raspberry Pi system tracking temperature and CO2 levels, with a live dashboard and SMS alerts (school project)",
    "Evamailer — Tkinter tool for automated email campaigns, processing 300+ emails per run with CSV and attachment support"
  ],
  experience: [
    "Tutor, Rochester Institute of Technology (Oct 2024 - Present) — mentoring 10-15 students weekly, running programming workshops each semester",
    "Web/Software Developer Intern, NTID Technology and Information Services (Jan - Jul 2025) — built front-end features with a PHP/SQL backend, automated Python reports cutting manual workload by 40%",
    "Web/Software Developer Intern, Proyección Laboral, Bogotá (Dec 2023 - Feb 2024) — built 4+ client websites, developed Evamailer, saved clients 15 hours/week"
  ],
  education: [
    "M.S. in Cybersecurity, NYU Tandon School of Engineering — starting Fall 2026",
    "B.S. Computing and Information Technology, RIT — expected May 2026",
    "A.A. Applied Computer Technology, RIT — May 2024"
  ],
  leadership: [
    "Club President, RIT NTID Offensive & Defensive Research (Jan 2024 - Present) — led 25+ students per semester across workshops and hands-on labs, coordinated 5+ events"
  ],
  contact: [
    "Email: jag7850@rit.edu",
    "LinkedIn: linkedin.com/in/juan-g0mez",
    "GitHub: github.com/JuanGomezBot"
  ],
  help: [
    "Available commands: whoami, skills, projects, experience, education, leadership, contact"
  ],
  clear: ["Clears the terminal"],
  "sudo dame-tinto": [
  "        ..",
  "      ..  ..",
  "            ..",
  "             ..",
  "            ..",
  "           ..",
  "         ..",
  "##       ..    ####",
  "##.............##  ##",
  "##.............##   ##",
  "##.............## ##",
  "##.............###",
  " ##...........##",
  "  #############",
  "  #############",
  "#################",
  "here's your virtual tinto, parcero"
],
"cat origin.txt":["Bogotá, Colombia -> Rochester, NY",
   "nostalgia compiles, but never throws an error"]
};
function actualizarCursor() {
  mirror.textContent = carajinput.value;
  const ancho = mirror.offsetWidth;
  cursor.style.left = ancho + "px";
}
carajinput.addEventListener("input", function() {
  actualizarCursor()
});

carajinput.addEventListener("keydown",function(e){
    if (e.key === "Enter")
    { 
        if(carajinput.value === "clear"){
          termBody.innerHTML = "";
        }  
        
        
        else if(commands[carajinput.value]){
          
        commands[carajinput.value].forEach(function(line) {
        const cline = document.createElement("div")
        cline.textContent = line;
        if (carajinput.value === "sudo dame-tinto") {
        cline.classList.add("ascii");
        }
        termBody.appendChild(cline)
        termBody.scrollTop = termBody.scrollHeight;
        });
        }
        else if (!commands[carajinput.value]) {
        const Err = document.createElement("p")
        Err.className = "line-error"
        Err.textContent = "Error command not found"
        termBody.appendChild(Err)
        termBody.scrollTop = termBody.scrollHeight;
        }
        
        carajinput.value = ""
        actualizarCursor()
        termBody.scrollTop = termBody.scrollHeight;
    }
});
