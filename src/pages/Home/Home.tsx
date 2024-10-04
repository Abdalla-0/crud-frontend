import { actionGetPosts } from "../../store/posts/postsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import Post from "../../components/ui/Post/Post";
import { useEffect } from "react";
const Home = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.posts);

  useEffect(() => {
    dispatch(actionGetPosts());
  }, [dispatch]);

  return (
    <>
      <Post data={data} loading={loading} error={error} />
    </>
  );
};

export default Home;
