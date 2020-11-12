/** @jsx jsx */
import { jsx } from '@emotion/react';
// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components
import CommonLayout from 'components/common/CommonLayout';

// Pages
import Home from 'pages/Home';

function App() {
  return (
    <div css={{ width: '100%' }}>
      <BrowserRouter basename={`/`}>
        <Switch>
          <CommonLayout>
            <Route path={`${process.env.PUBLIC_URL}/`} component={Home} />
          </CommonLayout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
