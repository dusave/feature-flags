import { Metric, MetricType } from "../types/metric";

const METRICS: Record<MetricType, Metric> = {
  [MetricType.REVENUE]: {
    name: "Revenue",
    type: MetricType.REVENUE,
    last_month_total: 15234,
    current_month_total: 12433,
    current_year_total: 103406,
  },
  [MetricType.OCCUPANCY]: {
    name: "Occupancy",
    type: MetricType.OCCUPANCY,
    last_month_total: 1053,
    current_month_total: 987,
    current_year_total: 8705,
  },
  [MetricType.ENFORCEMENT]: {
    name: "Enforcement",
    type: MetricType.ENFORCEMENT,
    last_month_total: 315,
    current_month_total: 288,
    current_year_total: 4590,
  },
};

export class MetricService {
  private async simulateApiDelay(ms = 100): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async getRevenueMetrics(simulateDelay = true): Promise<Metric | null> {
    if (simulateDelay) await this.simulateApiDelay();
    return METRICS[MetricType.REVENUE] || null;
  }

  async getOccupancyMetrics(simulateDelay = true): Promise<Metric | null> {
    if (simulateDelay) await this.simulateApiDelay();
    return METRICS[MetricType.OCCUPANCY] || null;
  }

  async getEnforcementMetrics(simulateDelay = true): Promise<Metric | null> {
    if (simulateDelay) await this.simulateApiDelay();
    return METRICS[MetricType.ENFORCEMENT] || null;
  }
}
