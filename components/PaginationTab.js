import { useRouter } from "next/router";
import { Button } from "react-bootstrap";
import styles from "./PaginationTab.module.scss";

export function PaginationTab() {
  const router = useRouter();
  let items = [];
  for (let number = 1; number <= 3; number++) {
    items.push(
      <Button
        className="m-2 rounded-pill shadow p-3 "
        variant="outline-secondary"
        size="lg"
        onClick={() => router.push(`/posts/${number}`)}
      >
        {number}
      </Button>
    );
  }
  return <div className={styles.buttons}>{items}</div>;
}
