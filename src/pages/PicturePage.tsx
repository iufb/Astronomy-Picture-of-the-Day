import { useEffect } from "react";
import { PageContent } from "../componets/PageContent";
import { Skeleton } from "../componets/Skeleton";
import { useGetData } from "../helpers/context/nasaApi.context";

export const PicturePage = (): JSX.Element => {
  const { customDate, loading, setCustomDate } = useGetData((state) => ({
    customDate: state.customDate,
    loading: state.loading,
    setCustomDate: state.setCustomDate,
  }));
  useEffect(() => {
    setCustomDate();
  }, []);
  if (loading) return <Skeleton />;
  return <>{customDate && <PageContent data={customDate} />}</>;
};
