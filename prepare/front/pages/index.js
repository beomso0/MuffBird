import { useSelector } from 'react-redux';
import React from 'react';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';
import PostFrom from '../components/PostForm';

const Home = () => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayout>
      {me && <PostFrom />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </AppLayout>
  );
};

export default Home;
