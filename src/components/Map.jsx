import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

const Map = () => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();

  const lat = params.get("lat");
  const lng = params.get("lng");
  return (
    <p className={styles.mapContainer} onClick={() => navigate("form")}>
      <span>
        Position: {lat}, {lng}
      </span>
    </p>
  );
};

export default Map;
