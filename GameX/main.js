let Loader;
let app;
let main;
let factorDiv;

let factors = [
  "Makablity",
  "Accessablity",
  "Feasiblity",
  "Time",
  "Uniqueness",
  "Addictivity",
  "Releventness",
  "PlatformScope",
  "FeatureScope"
];

let mb, ac, fe, t, u, ad, re, ps, fs;

window.onload = () => {
  Loader = document.getElementById("Loader");
  main = document.getElementById("main");
  app = document.getElementById("app");
  factorDiv = document.getElementById("factors");
  AddFormFields(factorDiv);
  mb = document.getElementById("Makablity");
  ac = document.getElementById("Accessablity");
  fe = document.getElementById("Feasiblity");
  t = document.getElementById("Time");
  u = document.getElementById("Uniqueness");
  ad = document.getElementById("Addictivity");
  re = document.getElementById("Releventness");
  ps = document.getElementById("PlatformScope");
  fs = document.getElementById("FeatureScope");
  setTimeout(() => {
    Loader.style.display = "none";
    main.style.display = "block";
  }, 3000);
};

function AddFormFields(div) {
  factors.forEach(e => {
    let newField = document.createElement("div");
    newField.className = "factor";
    newField.innerHTML =
      "<label>" +
      e +
      '</label><input required id = "' +
      e +
      '" Placeholder = "0 to 1"/>';
    div.appendChild(newField);
  });
}

function Calculate() {
  if (t.value == 0) {
    t.value = 0.01;
  }
  let x = parseFloat(
    ((4 * parseFloat(mb.value) +
      2 * parseFloat(ac.value) +
      parseFloat(fe.value) +
      parseFloat(u.value) +
      2 * parseFloat(ad.value) +
      parseFloat(re.value) +
      3 * parseFloat(ps.value)) *
      parseFloat(fs.value)) /
      t.value
  );

  console.log(x);
}
