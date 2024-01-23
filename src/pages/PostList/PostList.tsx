import { FC, useEffect, useState } from 'react';
import Loader from '../../components/Loader/Loader';
import { IPost } from '../../models/models';
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from '../../components/Post/Post';
import { BASE_URL, postsPerPage } from '../../utils/constans';
import './PostList.css';

const PostList: FC = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0);

    const loadPosts = () => {
        if (loading) return;

        setLoading(true);

        fetch(`${BASE_URL}?_start=${offset}&_limit=${postsPerPage}`)
            .then(response => response.json())
            .then(data => {
                setPosts(prevVisiblePosts => [...prevVisiblePosts, ...data]);

                if (data.length < postsPerPage) {
                    setHasMore(false);
                }

                setOffset(prevOffset => prevOffset + postsPerPage);
                setLoading(false);
            })
            .catch(error => {
                console.error('Ошибка при загрузке данных:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        loadPosts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main>
            <InfiniteScroll
                dataLength={posts.length}
                next={loadPosts}
                hasMore={hasMore}
                loader={<Loader />}
                endMessage={<h2>The end!</h2>}
                className='scroll'
            >
                {posts?.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </InfiniteScroll>
        </main>
    );
}

export default PostList;
