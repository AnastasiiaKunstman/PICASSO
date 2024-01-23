import { FC } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { IPost } from "../../models/models";
import Button from "../Button/Button";
import './Post.css';

type PropsType = {
    post?: IPost;
};

const Post: FC<PropsType> = ({ post }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const truncatedBody = location.pathname === '/' && post?.body
        ? (post.body.length > 50 ? `${post.body.substring(0, 50)}...` : post.body)
        : post?.body;

    const buttonText = location.pathname === '/' ? 'Просмотр' : 'Назад';
    const buttonAction = () => navigate(location.pathname === '/' ? `/posts/${post?.id}` : '/');

    return (
        <div className='post'>
            <div className='post__title'>
                {post?.id}. {post?.title}
            </div>
            <div className='post__text'>
                {truncatedBody}
            </div>
            <div className='post__button' onClick={buttonAction}>
                <Button>{buttonText}</Button>
            </div>
        </div>
    );
};

export default Post;