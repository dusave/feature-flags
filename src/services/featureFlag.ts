import { UserRole } from "../types/user";
import { Feature } from "../utils/featureFlag";

type FeatureFlagConfig = {
  name: Feature;
  enable: boolean;
  roles: { [key in UserRole]?: number };
}

export default class FeatureFlagService {
  private async simulateApiDelay(ms = 100): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async getFlags(): Promise<FeatureFlagConfig[]> {
    await this.simulateApiDelay();

    return [
      {
        name: Feature.PROFILE,
        enable: true,
        roles: {
          [UserRole.ADMIN]: 1,
          [UserRole.DRIVER]: 1,
          [UserRole.EMPLOYEE]: 1,
          [UserRole.OWNER]: 1,
          [UserRole.ENFORCER]: 1,
          [UserRole.VISITOR]: 1,
        }
      },
      {
        name: Feature.VISITOR_DASHBOARD,
        enable: true,
        roles: {
          [UserRole.ADMIN]: 1,
          [UserRole.OWNER]: 1,
          [UserRole.EMPLOYEE]: 0.6,
        }
      },
      {
        name: Feature.DYNAMIC_PRICE,
        enable: true,
        roles: {
          [UserRole.ADMIN]: 1,
          [UserRole.OWNER]: 0.3,
        }
      },
      {
        name: Feature.REVENUE_METRICS,
        enable: true,
        roles: {
          [UserRole.ADMIN]: 1,
          [UserRole.OWNER]: 1,
        }
      },
      {
        name: Feature.OCCUPANCY_METRICS,
        enable: true,
        roles: {
          [UserRole.ADMIN]: 1,
          [UserRole.OWNER]: 0.5,
        }
      },
      {
        name: Feature.ENFORCEMENT_METRICS,
        enable: true,
        roles: {
          [UserRole.ADMIN]: 1,
          [UserRole.OWNER]: 1,
          [UserRole.EMPLOYEE]: 1,
          [UserRole.ENFORCER]: 1,
        }
      }
    ];
  }
}
