import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export default function UserLoader() {
  return (
    <LoaderWrapper>
      <ThreeDots
        height="140"
        width="140"
        radius="10"
        color="#F59256"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderWrapper>
  );
}
