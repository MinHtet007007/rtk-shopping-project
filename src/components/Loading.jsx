import React from 'react'
import { Loader } from "@mantine/core";


const Loading = () => {
  return (
    <div className=' flex justify-center h-screen items-center'>
      <Loader color="violet" variant="bars" />;
    </div>
  );
}

export default Loading