import { useParams } from 'react-router';
import { postApi } from '../../store/post/post.api';
import Loader from '../../components/Loader/Loader';
import Post from '../../components/Post/Post';

export const PostDetails = () => {
    const { id } = useParams();
    const { data: post, isLoading } = postApi.useGetPostByIdQuery(Number(id));

    return (
        <main>
            {isLoading ? (<Loader />) : (<Post key={post?.id} post={post} />)}
        </main>
    );
};