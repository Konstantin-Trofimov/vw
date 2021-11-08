

  function performanceDataOutput(absoluteValue, qualityValue) {
    document.querySelector('.performance-diagram-quality-value').textContent = qualityValue + '%';
    document.querySelector('.performance-diagram-absolute-value').textContent = absoluteValue  + '%';
  }

 



export default performanceDataOutput