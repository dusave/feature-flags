# **Feature Flag System Assignment**

## **Setup**
- **Node.js version:** `>=18`. You can run `nvm use` to switch to the correct version.
- Install dependencies: `npm install`
- Start the development server: `npm run dev`

## **Objective**
Build a feature flag system that controls feature availability based on:
- Global Toggles: Instantly enable or disable features across the entire system.
- User Roles: Define access levels and permissions based on a user's role.
- Percentage-Based Rollout: Gradually enable features for a percentage of users within specific roles.

## **Features Overview**
| Feature | Access Rules |
|---------|--------------|
| Profile | All users |
| Visitor Dashboard | Admin, Owner, 60% of Employees |
| Dynamic Price | Admin, 30% of Owners |
| Revenue Metrics | Admin, Owner |
| Occupancy Metrics | Admin, 50% of Owners |
| Enforcement Metrics | Admin, Owner, Employee, Enforcer |

**Important Notes:**
- All UI components are already built and rendered for every user
- Your task is to implement the logic that determines which features should be visible to each user
- Metrics are displayed in a carousel component, but not all users should see all metrics
- Once a user is included/excluded in a percentage-based feature, this decision must remain consistent

## **Getting Started**
1. First, examine `src/services/featureFlag.ts`, which contains the mock response simulating what the backend team is currently implementing.
2. Then implement the business logic in `src/utils/featureFlag.ts` to determine feature visibility for each user
3. Ensure your feature flag system follows the access rules defined in the Features Overview section

## **Project Structure**
```plaintext
src/
├── components/           # UI Components
│   ├── Carousel/         # Sliding component for metrics display
│   ├── FeatureCard/      # Card component for feature display
│   ├── FeatureMetrics/   # Container for metrics visualization
│   ├── MetricCard/       # Individual metric display component
│   └── ProfileCard/      # User profile information display
│
├── services/             # Data Services
│   ├── featureFlag.ts    
│   ├── index.ts          
│   ├── metric.ts         
│   └── user.ts           
│
├── types/                # TypeScript Type Definitions
│   ├── metric.ts         
│   └── user.ts          
│
├── utils/                # Utility Functions
│   ├── crypto.ts         # Hash function
│   └── featureFlag.ts    # Core feature flag implementation
│
├── App.module.css        
├── App.tsx               # Main application component
├── index.css             # Global styles
├── main.tsx              # Application entry point
└── vite-env.d.ts
```

## **Evaluation Criteria**
✅ **Code Quality** – Clean, modular, and well-structured.  
✅ **Scalability** – Easy to extend with new rules.  
✅ **Efficiency** – Well-optimized and performant solution.  

⏳ **Time Limit:** ~50 min. Focus on core functionality first! 🚀
