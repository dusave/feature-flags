import { User } from "../../types/user";
import styles from "./ProfileCard.module.css";

type ProfileProps = {
  user: User;
};

export default function ProfileCard({ user }: ProfileProps) {
  const { name, role, email } = user;

  return (
    <div className={styles.profileCard}>
      <div className={styles.name}>{name}</div>
      <div className={styles.role}>{role}</div>
      <div className={styles.email}>{email}</div>
    </div>
  );
}
