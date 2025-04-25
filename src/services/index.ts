import FeatureFlagService from "./featureFlag";
import { MetricService } from "./metric";
import { UserService } from "./user";

export const featureFlagService = new FeatureFlagService();
export const userService = new UserService();
export const metricService = new MetricService();
