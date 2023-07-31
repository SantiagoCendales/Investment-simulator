const getOrCreateTooltip = (chart) => {
  let tooltipEl = chart.canvas.parentNode.querySelector('div');

  if (!tooltipEl) {
    tooltipEl = document.createElement('div');
    tooltipEl.style.background = 'rgba(221, 220, 255, 1)';
    tooltipEl.style.borderRadius = '50%';
    tooltipEl.style.color = 'black';
    tooltipEl.style.fontSize = '8px';
    tooltipEl.style.opacity = 1;
    tooltipEl.style.pointerEvents = 'none';
    tooltipEl.style.position = 'absolute';
    tooltipEl.style.height = '50px';
    tooltipEl.style.width = '50px';
    tooltipEl.style.transform = 'translate(-50%, -110%)';
    tooltipEl.style.transition = 'all .1s ease';
    tooltipEl.style.display = 'flex';
    tooltipEl.style.alignItems = 'center';
    tooltipEl.style.justifyContent = 'center';

    const table = document.createElement('table');
    table.style.margin = '0px';

    tooltipEl.appendChild(table);
    chart.canvas.parentNode.appendChild(tooltipEl);
  }

  return tooltipEl;
};

const externalTooltipHandler = (context: unknown) => {
  // Tooltip Element
  const {chart, tooltip}: any= context;
  const tooltipEl = getOrCreateTooltip(chart);

  // Hide if no tooltip
  if (tooltip.opacity === 0) {
    tooltipEl.style.opacity = 0;
    return;
  }

  // Set Text
  if (tooltip.body) {
    const bodyLines = tooltip.body.map(b => b.lines);

    const tableHead = document.createElement('thead');

    const tableBody = document.createElement('tbody');
    bodyLines.forEach((body, i) => {
      const colors = tooltip.labelColors[i];

      const span = document.createElement('span');
      span.style.background = colors.backgroundColor;
      span.style.borderColor = colors.borderColor;
      span.style.margin = '0 auto'
      span.style.display = 'inline-block';

      const tr = document.createElement('tr');
      tr.style.backgroundColor = 'inherit';
      tr.style.borderWidth = '0';

      const td = document.createElement('td');
      td.style.borderWidth = '0';
      
      const initialText = body[0].slice(0,3) 
      const valueText = body[0].match(/(\d+)/);

      const text = document.createTextNode(initialText + valueText);

      // td.appendChild(span);
      td.appendChild(text);
      tr.appendChild(td);
      tableBody.appendChild(tr);
    });

    const tableRoot = tooltipEl.querySelector('table');

    // Remove old children
    while (tableRoot.firstChild) {
      tableRoot.firstChild.remove();
    }

    // Add new children
    tableRoot.appendChild(tableHead);
    tableRoot.appendChild(tableBody);
  }

  const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.left = positionX + tooltip.caretX + 'px';
  tooltipEl.style.top = positionY + tooltip.caretY + 'px';
  tooltipEl.style.font = tooltip.options.bodyFont.string;
  tooltipEl.style.padding = tooltip.options.padding + 'px ' + tooltip.options.padding + 'px';
};

export const options = {
  plugins: {
    legend: {
      labels: {
        usePointStyle: true,
        pointStyle: 'circle'
      }
    },
    title: {
      display: false,
      text: '',
    },
    tooltip: {
      enabled: false,
      position: 'nearest',
      external: externalTooltipHandler
    }
  },
  aspectRatio: 1.5,
  responsive: true,
  maintainAspectRatio: true,
  interaction: {
    mode: 'index'
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: true,
        drawTicks: false,
        tickWidth: 2,
        tickLength: 2
      },
      ticks: {
        padding: 10,
      }
    },
    y: {
      stacked: true,
      grid: {
        drawTicks: false
      },
      ticks: {
        padding: 10,
      }
    }
  },
};

