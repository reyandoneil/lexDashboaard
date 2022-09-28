import React from 'react';
import { ErrorContent, ErrorPageContainer } from './ErrorPageElements';
import {error404} from '../../Assets'

function ErrorPage() {
  return (
    <>
      <ErrorPageContainer>
        <ErrorContent src={error404}/>
      </ErrorPageContainer>
    </>
  );
}

export default ErrorPage;
