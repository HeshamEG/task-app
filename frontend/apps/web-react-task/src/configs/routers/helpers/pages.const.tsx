import { CreateDevicePage, CreateGateWayPage, GatewayInfoPage, GatwaysListPage } from 'apps/web-react-task/src/app/modules';

export const pages = {
  GatwaysListPage:{
    path: "/",
    component: <GatwaysListPage></GatwaysListPage>
  },
  CreateGateWayPage:{
    path: "/gateway/create",
    component: <CreateGateWayPage></CreateGateWayPage>
  },
  CreateDevicePage:{
    path: "/device/create",
    component: <CreateDevicePage></CreateDevicePage>
  },
  GatewayInfo:{
    path: "/gateway/:id",
    component: <GatewayInfoPage></GatewayInfoPage>
  }
};


