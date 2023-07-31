export const options = {
  plugins: {
    title: {
      display: false,
      text: '',
    },
  },
  aspectRatio: 1.5,
  responsive: true,
  maintainAspectRatio: true,
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