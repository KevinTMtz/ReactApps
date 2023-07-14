import { Outlet } from 'react-router-dom';
import PostsList from '../components/post/PostsList';

const Posters = () => (
  <>
    <Outlet />
    <main>
      <PostsList />
    </main>
  </>
);

export default Posters;

export const loader = async () => {
  let resData = undefined;

  await fetch('http://localhost:8080/posts')
    .then((response) => response.json())
    .then((data) => {
      resData = data.posts;
    });

  return resData;
};
