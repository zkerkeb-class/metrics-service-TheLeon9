// GET : http://localhost:4002/metrics
const generateFakeMetrics = () => {
  return {
    cpuUsage: (Math.random() * 100).toFixed(2) + "%",
    memoryUsage: (Math.random() * 16).toFixed(2) + " GB",
    diskUsage: (Math.random() * 1000).toFixed(2) + " GB",
    temperature: (Math.random() * 70 + 30).toFixed(1) + "°C",
    uptime: (Math.random() * 10000).toFixed(0) + " sec",
  };
};

export const getMetrics = async (req, res) => {
  try {
    const metrics = generateFakeMetrics();
    res.json({ message: "✅ Metrics generated", data: metrics });
  } catch (err) {
    res.status(500).json({ error: "❌ Failed to generate metrics" });
  }
};
