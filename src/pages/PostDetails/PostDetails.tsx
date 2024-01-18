import { useParams } from 'react-router';
import { postApi } from '../../store/post/post.api';
import { Loader } from '../../components/Loader/Loader';
import Post from '../../components/Post/Post';
import './PostDetails.css';

export const PostDetails = () => {
    const { id } = useParams();
    const { data: post, isLoading } = postApi.useGetPostByIdQuery(Number(id));

    return (
        <main className="post-dettails">
            {isLoading ? (<Loader />) : (<Post key={post?.id} post={post} />)}
        </main>
    );
};