import {
  actionDeletePosts,
  actionGetPosts,
} from "../../store/posts/postsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import Post from "../../components/ui/Post/Post";
import { useCallback, useEffect } from "react";
import Loading from "../../components/Feedback/Loading";
const Home = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.posts);
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  const deleteDataHandler = useCallback(
    async (id: string) => await dispatch(actionDeletePosts(id)),
    [dispatch]
  );

  useEffect(() => {
    dispatch(actionGetPosts());
  }, [dispatch]);

  return (
    <>
      {!isLoggedIn ? (
        <h1 className="text-center fs-3">
          Plese login first to add posts
        </h1>
      ) : data.length > 0 ? (
        <Loading loading={loading} error={error}>
          <Post
            data={data}
            deleteDataHandler={deleteDataHandler}
            isLoggedIn={isLoggedIn}
          />
        </Loading>
      ) : (
        <h1 className="text-center fs-3">
          Plese add your firest post
        </h1>
      )}
    </>
  );
};

export default Home;
