document.addEventListener('DOMContentLoaded', () => {
    const slider = document.getElementById('calcSlider');
    const sliderVal = document.getElementById('sliderVal');
    const tabs = document.querySelectorAll('.calc-tab');
    const calcBtn = document.getElementById('calcBtn');
    const resultDiv = document.getElementById('calcResult');

    const resPower = document.getElementById('resPower');
    const resPanels = document.getElementById('resPanels');
    const resRoi = document.getElementById('resRoi');
    const resInv = document.getElementById('resInv');

    let currentSystem = 'ongrid';

    if(slider && sliderVal) {
        slider.addEventListener('input', (e) => {
            sliderVal.innerText = e.target.value;
        });
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentSystem = tab.dataset.sys;
        });
    });

    if(calcBtn) {
        calcBtn.addEventListener('click', () => {
            const bill = parseInt(slider.value);
            // Rough estimation logic based on AZN bill
            // Assume 1 AZN = ~10 kWh, solar yields ~4 kWh/kWp/day
            // This is purely for demonstration
            
            let powerNeeded = Math.max(3, Math.round((bill * 10) / 120)); 
            let panels = Math.round(powerNeeded * 1000 / 550); // 550W panels
            
            let costPerKw = 1200; // AZN per kW OnGrid
            if(currentSystem === 'hybrid') costPerKw = 2500;
            if(currentSystem === 'offgrid') costPerKw = 3000;

            let investment = powerNeeded * costPerKw;
            let roi = (currentSystem === 'ongrid') ? (investment / (bill * 12)).toFixed(1) : "-";

            resPower.innerText = powerNeeded + " kW";
            resPanels.innerText = panels + " ədəd (550W)";
            resInv.innerText = "~ " + investment.toLocaleString() + " AZN";
            resRoi.innerText = (roi === "-") ? "Mövcud deyil" : roi + " il";

            resultDiv.classList.add('show');
        });
    }
});
