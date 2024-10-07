import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { actionGetPost } from "../../store/posts/postsSlice";
import { useParams } from "react-router-dom";

const Details = () => {
  const { post, loading, error } = useAppSelector((state) => state.posts);

  const dispatch = useAppDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(actionGetPost(id));
  }, [dispatch, id]);
  return <div>Details</div>;
};

export default Details;
