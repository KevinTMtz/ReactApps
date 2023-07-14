import { useState } from 'react';

import MainHeader from './components/MainHeader';
import PostsList from './components/post/PostsList';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const hideModal = () => setModalVisible(false);

  return (
    <>
      <MainHeader onCreatePost={() => setModalVisible(true)} />
      <main>
        <PostsList modalVisible={modalVisible} hideModal={hideModal} />
      </main>
    </>
  );
};

export default App;
