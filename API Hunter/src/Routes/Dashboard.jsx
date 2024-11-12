import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import ProductsTable from "../Components/ProductsTable";
import Loader from '../Components/Loader';


function Dashboard() {
  const { authState, logoutUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);

    axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products')
      .then((res) => {
        setData(res.data.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return loading ? <Loader /> : (
    <div>
      <h3>Dashboard</h3>
      <div>
        <button data-testid="logout-btn" onClick={logoutUser}>Logout</button>
        <p>
          Token:
          <b data-testid="user-token">{authState.token}</b>
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProductsTable data={data} />
      </div>
    </div>
  );
}

export default Dashboard;
