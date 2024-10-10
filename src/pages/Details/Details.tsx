import { useEffect } from "react";
import Loading from "../../components/Feedback/Loading";
import usePostDetails from "../../hooks/use-post-details";
import { clearPost } from "../../store/posts/postsSlice";
import { useAppDispatch } from "../../store/hook";

const Details = () => {
  const dispatch = useAppDispatch();
  const { post, loading, error } = usePostDetails();

  useEffect(() => {
    dispatch(clearPost());
  }, [dispatch]);

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
