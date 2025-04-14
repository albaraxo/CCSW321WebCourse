// Color alert on radio select
document.querySelectorAll('input[name="color"]').forEach(radio => {
    radio.addEventListener('change', () => {
      alert("You selected: " + radio.value);
    });
  });
  
  // Change sofa design
  function changeDesign(designNumber) {
    document.getElementById("sofaImage").src = `sofa${designNumber}.jpg`;
    document.getElementById("designText").textContent = `This is Design ${designNumber}`;
  }
  