import Loading from "../../components/Feedback/Loading";
import usePostDetails from "../../hooks/use-post-details";

const Details = () => {
  const { post, loading, error } = usePostDetails();

  return (
    <div>
      <Loading loading={loading} error={error}>
        <p>Title : {post?.title}</p>
        <p>Description : {post?.description}</p>
      </Loading>
    </div>
  );
};

export default Details;
