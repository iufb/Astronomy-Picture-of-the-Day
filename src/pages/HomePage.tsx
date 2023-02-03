import { useEffect } from "react";
import { PageContent } from "../componets/PageContent";
import { Skeleton } from "../componets/Skeleton";
import { useGetData } from "../helpers/context/nasaApi.context";

export const Home = (): JSX.Element => {
  const { today, loading, setToday } = useGetData((state) => ({
    today: state.today,
    loading: state.loading,
    setToday: state.setToday,
  }));
  useEffect(() => {
    setToday();
  }, []);
  if (loading) return <Skeleton />;
  return <>{today && <PageContent data={today} />}</>;
};
