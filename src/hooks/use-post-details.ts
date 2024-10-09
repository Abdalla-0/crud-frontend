import { useEffect } from "react";
import { actionGetPost } from "../store/posts/postsSlice";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../store/hook';


const usePostDetails = () => {
    const { post, loading, error } = useAppSelector((state) => state.posts);
    const dispatch = useAppDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(actionGetPost(id));
    }, [dispatch, id]);
    return { post, loading, error };
};

export default usePostDetails;