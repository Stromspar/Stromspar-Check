/* script.js — alle Rechner-Logiken zentral (Strom, Wasser, CO2) */
/* Läuft lokal, keine Daten werden übertragen. */

document.addEventListener('DOMContentLoaded', ()=> {
  // Sticky year in footer (if element id=year exists)
  const y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();
});

/* --- Utility --- */
function formatEur(v){ return '€ ' + v.toFixed(2); }
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])); }

/* --- STROM-RECHNER (embedded examples will call computeStrom or use the dedicated page) --- */
function computeStromFromAnnual(kwh, pricePerKwh=0.4, solarKwp=0){
  kwh = parseFloat(kwh)||0; pricePerKwh = parseFloat(pricePerKwh)||0;
  const solarProd = (parseFloat(solarKwp)||0) * 900; // conservative DE estimate
  const net = Math.max(0, kwh - solarProd);
  const cost = net * pricePerKwh;
  const co2 = kwh * 0.4; // kg CO2 per kWh approx.
  return { totalKwh: kwh, cost, co2, solarProd, net };
}

/* Example usage: computeStromFromAnnual(3600, 0.40, 0.6) */

/* --- Simple helper to download text report (used on pages) --- */
function downloadTextReport(filename, text){
  const blob = new Blob([text], {type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = filename; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
}

/* --- Small DOM helper for calculators on pages (used by in-page scripts) --- */
window.ecoHelpers = {
  computeStromFromAnnual,
  formatEur,
  downloadTextReport,
  escapeHtml
};

