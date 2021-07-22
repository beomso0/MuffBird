import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import AppLayout from '../components/AppLayout';
import PostCard from '../components/PostCard';
import PostFrom from '../components/PostForm';
import { LOAD_POST_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';

const Home = () => {
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePost, loadPostLoading, retweetError, retweetDone, addPostDone } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  useEffect(() => {
    if (retweetError) {
      alert(retweetError);
    }
  }, [retweetError]);

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    dispatch({
      type: LOAD_POST_REQUEST,
    });
  }, []); // useEffect의 배열 안의 인자는 검사 대상?을 가리킴. 빈 배열 넣으면 --> 처음 렌더링 시 한 번만 실행.

  useEffect(() => { // infinite scroll 구현
    function onScroll() {
      // console.log(
      //   window.scrollY,
      //   document.documentElement.clientHeight,
      //   document.documentElement.scrollHeight,
      // );
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        if (hasMorePost && !loadPostLoading) {
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_POST_REQUEST,
            lastId,
          });
        }
      }
    }

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    }; // return을 안해주면 메모리에 계속 상주해서 성능 저하될 수 있으니 주의
  }, [hasMorePost, loadPostLoading, mainPosts]);

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
