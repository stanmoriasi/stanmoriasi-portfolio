import { useEffect } from 'react';

function Profile() {
  useEffect(() => {
    document.title = "Stan Moriasi | Profile";
  }, []);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">Hello, my name is Stan Moriasi</h1>
        <p className="mt-4 text-lg text-gray-400">A passionate fullstack developer well versed in ReactJS, Typescript, Javascript, NodeJS and different web development techonologies</p>
      <p>Also this one here</p>
      <p>Aquinas said so</p>
      </div>
    </div>
  );
}

export default Profile;