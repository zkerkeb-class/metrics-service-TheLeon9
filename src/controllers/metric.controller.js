// GET : http://localhost:4002/metrics
import os from "os";
import process from "process";

const formatUptime = (seconds) => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  return `${h}h ${m}m ${s}s`;
};

export const getMetrics = async (req, res) => {
  try {
    const uptime = os.uptime(); // seconds
    const totalMem = os.totalmem(); // bytes
    const freeMem = os.freemem(); // bytes
    const usedMem = totalMem - freeMem;

    const memoryUsage = {
      total: (totalMem / 1024 / 1024 / 1024).toFixed(2) + " GB",
      used: (usedMem / 1024 / 1024 / 1024).toFixed(2) + " GB",
      free: (freeMem / 1024 / 1024 / 1024).toFixed(2) + " GB",
    };

    const cpuLoad = os.loadavg(); // [1min, 5min, 15min]
    const cpuCount = os.cpus().length;

    const metrics = {
      timestamp: new Date().toISOString(),
      uptime: formatUptime(uptime),
      environment: process.env.NODE_ENV || "development",
      cpuCount,
      loadAverage: cpuLoad.map((l) => l.toFixed(2)),
      memoryUsage,
      platform: os.platform(),
      arch: os.arch(),
      nodeVersion: process.version,
      status: "🟢 Healthy",
    };

    res.json({ message: "✅ Metrics collected", data: metrics });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "❌ Failed to collect metrics" });
  }
};
