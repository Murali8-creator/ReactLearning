import PageContent from './PageContent';
import {useRouteError} from 'react-router-dom'

function ErrorPage() {
    const error = useRouteError();
    
    let title = 'An error occured';
    let message = 'Something wen wrong';

    if(error.status === 500){
        message = error.data.message;
    }
    if(error.status === 404){
        title = 'Not found';
        message = 'Could not find resource or page';
    }
  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}

export default ErrorPage;
