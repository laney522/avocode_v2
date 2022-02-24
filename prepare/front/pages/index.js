import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AppLayout from '../components/AppLayout';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';
import { LOAD_POSTS_REQUEST } from '../reducers/post';

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePost } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch({
      type: LOAD_POSTS_REQUEST,
    });
  }, []);

useEffect(() => {       
  function onScroll() {
   console.log(window.scrollY, document.documentElement.clientHeight, document.documentElement.scrollHeight);
   // scrollY : 얼마나 내렸는지
   // clientHeight: 화면 보이는 길이
   // scrollHeight: 총 길이
   if (window.scrollY + document.documentElement.clientHeight === document.documentElement.scrollHeight) {
     if (hasMorePost) {
       dispatch({
         type: LOAD_POSTS_REQUEST,
       });
     }
   }
  }
  window.addEventListener('scroll', onScroll);
  return () => {
    window.removeEventListener('scroll', onScroll);
  };
}, [hasMorePost]);


  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
    </AppLayout>
  );
};

export default Home;