import React from 'react';
import { withRouter } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

const GoBack = ({ history }) => <Button onClick={() => history.goBack()} className='mr-2' variant='link' alt='Go Back'>Go Back</Button>;

export default withRouter(GoBack);

