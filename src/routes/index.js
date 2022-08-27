import {HeaderOnly} from '~/components/Layout';
import routesConfig from '~/config/routes'

import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/Profile';
import Upload from '~/page/Upload';
import Search from '~/page/Search';

// Public Routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.following, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout : HeaderOnly },
    { path: routesConfig.search, component: Search, layout : null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
