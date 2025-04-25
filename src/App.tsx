import { useEffect, useState } from "react";
import FeatureCard from "./components/FeatureCard/FeatureCard";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import styles from "./App.module.css";
import { User } from "./types/user";
import { userService } from "./services";
import FeatureMetrics from "./components/FeatureMetrics/FeatureMetrics";

function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const res = await userService.getUser();
      setUser(res);
    }

    fetchUser();
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {/* Feature should be enable/disable base on the feature flag service response */}
      <ProfileCard user={user} />
      <FeatureCard title="Dynamic Price" />
      <FeatureCard title="Visitors" />
      <FeatureMetrics user={user} />
    </div>
  );
}

export default App;
