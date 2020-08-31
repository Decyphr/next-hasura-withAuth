import Head from "next/head";

import Login from "../components/Auth/Login";
import DashBoard from "../components/Dashboard/Dashboard";
import { useFetchUser } from "../lib/user";
import { withApollo } from "../lib/withApollo";

import styles from "../styles/Home.module.css";

// TODO: solve error JWT not sending correctly

function IndexPage() {
  const { user, loading } = useFetchUser({ required: true });
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!loading && !user) {
    return <Login />;
  }

  return (
    <div className={styles.container}>
      <DashBoard />
    </div>
  );
}

export default withApollo({ ssr: true })(IndexPage);
