import { Route, Routes } from 'react-router-dom';
import { pages } from './helpers/pages.const';
import GuardRoutes from './helpers/GuardRoutes';
import useAppRoutes from './useAppRoutes';

const AppRoutes = () => {
  /**
   * handle all logic should be included when routes are initiated
   */
  useAppRoutes();

  const { CreateDevicePage,CreateGateWayPage,GatewayInfo,GatwaysListPage } = pages;

  return (
    <Routes>
      <Route
        path={CreateDevicePage.path}
        element={
          <GuardRoutes>
            {CreateDevicePage.component}
          </GuardRoutes>
        }
      />
      <Route
        path={CreateGateWayPage.path}
        element={
          <GuardRoutes>
            {CreateGateWayPage.component}
          </GuardRoutes>
        }
      />
      <Route
        path={GatewayInfo.path}
        element={
          <GuardRoutes>
            {GatewayInfo.component}
          </GuardRoutes>
        }
      />
      <Route
        path={GatwaysListPage.path}
        element={
          <GuardRoutes>
            {GatwaysListPage.component}
          </GuardRoutes>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
