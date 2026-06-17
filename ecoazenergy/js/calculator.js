document.addEventListener('DOMContentLoaded', () => {
  
  // Tab Switching Logic
  const initTabs = () => {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const container = btn.closest('.tabs-container');
        
        // Remove active class from all buttons and contents in this container
        container.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        // Add active class to clicked button and target content
        btn.classList.add('active');
        document.getElementById(targetId).classList.add('active');
      });
    });
  };
  
  initTabs();

  // Calculator Logic
  const calcForm = document.getElementById('solar-calculator');
  if (calcForm) {
    const billSlider = document.getElementById('bill-slider');
    const billDisplay = document.getElementById('bill-display');
    const calcBtn = document.getElementById('calc-btn');
    const resultsArea = document.getElementById('calc-results');
    
    // Segmented control logic for System Type
    let selectedSystem = 'on-grid';
    document.querySelectorAll('.segment-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.segment-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSystem = btn.getAttribute('data-value');
      });
    });

    // Update slider display
    billSlider.addEventListener('input', (e) => {
      billDisplay.innerText = `${e.target.value} AZN`;
      // Update slider display position slightly
      const percent = (e.target.value - e.target.min) / (e.target.max - e.target.min);
      billDisplay.style.left = `calc(${percent * 100}% + (${8 - percent * 16}px))`;
    });

    // Calculation function
    calcBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      const bill = parseFloat(billSlider.value);
      const area = parseFloat(document.getElementById('area-input').value) || 0;
      
      // Simple mockup calculation logic
      // Assume 1 AZN = ~10 kWh per month (roughly 0.1 AZN/kWh)
      // So bill * 10 = monthly kWh. Daily kWh = (bill * 10) / 30
      // Assume 4 peak sun hours in Azerbaijan -> Required kW = Daily kWh / 4
      let requiredKW = ((bill * 10) / 30) / 4;
      
      // Adjust based on area constraint (assume 1 kW needs ~5 sqm)
      const maxKWByArea = area > 0 ? area / 5 : Infinity;
      requiredKW = Math.min(requiredKW, maxKWByArea);
      
      if (requiredKW < 1) requiredKW = 1; // Minimum 1kW
      
      // Assume 550W panels
      const panelCount = Math.ceil((requiredKW * 1000) / 550);
      requiredKW = (panelCount * 550) / 1000; // Recalculate exact kW based on panels
      
      // Pricing logic based on system type
      let pricePerKW;
      if (selectedSystem === 'on-grid') pricePerKW = 900;
      else if (selectedSystem === 'hibrid') pricePerKW = 1400;
      else pricePerKW = 1600; // off-grid
      
      const totalInvestment = requiredKW * pricePerKW;
      
      // Savings logic
      const monthlySavings = bill * 0.9; // Assume 90% savings for display
      const yearlySavings = monthlySavings * 12;
      const roiYears = totalInvestment / yearlySavings;

      // Animate Results Display
      resultsArea.style.display = 'block';
      
      // Scroll to results smoothly
      resultsArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      
      // Animate numbers
      animateValue('res-kw', requiredKW, 1);
      animateValue('res-panels', panelCount, 0);
      animateValue('res-investment', totalInvestment, 0, true);
      animateValue('res-monthly', monthlySavings, 0, true);
      animateValue('res-yearly', yearlySavings, 0, true);
      animateValue('res-roi', roiYears, 1);
    });

    // Simple counter animation for results
    function animateValue(id, target, decimals, isCurrency = false) {
      const obj = document.getElementById(id);
      let start = 0;
      const duration = 1500;
      const startTime = performance.now();
      
      function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = easeOut * target;
        
        let displayVal = current.toFixed(decimals);
        if(isCurrency) {
          displayVal = Number(displayVal).toLocaleString('az-Latn-AZ');
        }
        
        obj.innerHTML = displayVal;
        
        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          let finalVal = target.toFixed(decimals);
          if(isCurrency) finalVal = Number(finalVal).toLocaleString('az-Latn-AZ');
          obj.innerHTML = finalVal;
        }
      }
      requestAnimationFrame(update);
    }
  }
});
