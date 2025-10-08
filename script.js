// ====== ECO-RECHNER JAVASCRIPT ======

// Stromkostenrechner
function calcStrom() {
  const kwh = parseFloat(document.getElementById("stromKwh").value);
  const price = parseFloat(document.getElementById("stromPreis").value);
  if (isNaN(kwh) || isNaN(price)) {
    document.getElementById("stromResult").innerText = "Bitte gültige Werte eingeben.";
    return;
  }
  const cost = kwh * price;
  document.getElementById("stromResult").innerText = `Jährliche Stromkosten: ${cost.toFixed(2)} €`;
}

// Wasserverbrauch
function calcWasser() {
  const liter = parseFloat(document.getElementById("wasserLiter").value);
  const kosten = parseFloat(document.getElementById("wasserPreis").value);
  if (isNaN(liter) || isNaN(kosten)) {
    document.getElementById("wasserResult").innerText = "Bitte gültige Werte eingeben.";
    return;
  }
  const total = (liter / 1000) * kosten;
  document.getElementById("wasserResult").innerText = `Wasserkosten pro Jahr: ${total.toFixed(2)} €`;
}

// CO2-Rechner
function calcCO2() {
  const strom = parseFloat(document.getElementById("stromCO2").value);
  const faktor = 0.366; // kg CO2 pro kWh (Deutschland Durchschnitt)
  if (isNaN(strom)) {
    document.getElementById("co2Result").innerText = "Bitte gültigen Stromverbrauch eingeben.";
    return;
  }
  const emission = strom * faktor;
  document.getElementById("co2Result").innerText = `CO₂-Ausstoß: ${emission.toFixed(2)} kg/Jahr`;
}
