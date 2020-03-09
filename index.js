const root = document.documentElement;
let x;

function ChangeTheme() {
  if (x === true) {
    root.style.setProperty("--bg-primary", "#12151a");
    root.style.setProperty("--bg-secondary", "#1a1f25");
    root.style.setProperty("--text-primary", "white");
    root.style.setProperty("--bg-third", "#46b3e6");
    root.style.setProperty("--bg-select", "#12151a");
    root.style.setProperty("--night-theme", "1");
    root.style.setProperty("--morning-theme", "0");

    x = false;
  } else {
    root.style.setProperty("--bg-primary", "#f7f7f7");
    root.style.setProperty("--bg-secondary", "white");
    root.style.setProperty("--text-primary", "black");
    root.style.setProperty("--bg-third", "#46b3e6");
    root.style.setProperty("--bg-select", "#e3e3e3");
    root.style.setProperty("--night-theme", "0");
    root.style.setProperty("--morning-theme", "1");

    x = true;
  }
}
