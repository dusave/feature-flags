import { useEffect, useState } from "react";
import { User } from "../../types/user";
import Carousel from "../Carousel/Carousel";
import MetricCard from "../MetricCard/MetricCard";
import { Feature } from "../../utils/featureFlag";
import { Metric } from "../../types/metric";
import { metricService } from "../../services";

type FeatureMetricsProps = {
  user: User;
};

type MetricsState = { [key in Feature]?: Metric | null };

export default function FeatureMetrics({ user }: FeatureMetricsProps) {
  const [metrics, setMetrics] = useState<MetricsState>({});

  useEffect(() => {
    async function fetchMetrics() {
      const results: MetricsState = {};

      results[Feature.REVENUE_METRICS] = await metricService.getRevenueMetrics();
      results[Feature.OCCUPANCY_METRICS] = await metricService.getOccupancyMetrics();
      results[Feature.ENFORCEMENT_METRICS] = await metricService.getEnforcementMetrics();

      setMetrics(results);
    }

    fetchMetrics();
  }, [user]);

  return (
    <Carousel
      elements={Object.values(metrics)
        .filter(Boolean) // Removes null values
        .map((metric, index) => <MetricCard key={index} metric={metric!} />)}
    />
  );
}
