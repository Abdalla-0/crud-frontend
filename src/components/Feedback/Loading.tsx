import { TLoading } from "../../types";
type TLoadingProps = {
  loading: TLoading;
  error: string | null;
  children: React.ReactNode;
};

const Loading = ({ children, loading, error }: TLoadingProps) => {
  return (
    <>
      {loading === "pending" ? (
        <h2 className="text-center mt-5">Loading please wait...</h2>
      ) : error ? (
        <h2 className="text-center mt-5">Can not find your page (404)</h2>
      ) : (
        children
      )}
    </>
  );
};

export default Loading;
