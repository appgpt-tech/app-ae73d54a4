//Source code generated by AppGPT (www.appgpt.tech)
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { customDataProvider } from './dataProvider';
import fakeDataProvider from 'ra-data-fakerest';
import { Dashboard } from './dashboard';
import { authProvider, apInitialize } from './authProvider';
import { i18nProvider } from './i18nProvider';
import LoginPage, { Login } from './Login';
import data from './data';
import { usersList, usersCreate, usersEdit } from './resources/users';
import {
  departmentsList,
  departmentsCreate,
  departmentsEdit,
} from './resources/departments';
import {
  initiativesList,
  initiativesCreate,
  initiativesEdit,
} from './resources/initiatives';
import { goalsList, goalsCreate, goalsEdit } from './resources/goals';
import {
  emissionSourcesList,
  emissionSourcesCreate,
  emissionSourcesEdit,
} from './resources/emissionSources';
import {
  resourceUsageList,
  resourceUsageCreate,
  resourceUsageEdit,
} from './resources/resourceUsage';
import usersIcon from '@mui/icons-material/Person';
import departmentsIcon from '@mui/icons-material/Business';
import initiativesIcon from '@mui/icons-material/Flag';
import goalsIcon from '@mui/icons-material/Call';
import emissionSourcesIcon from '@mui/icons-material/SmokeFree';
import resourceUsageIcon from '@mui/icons-material/BatteryChargingFull';
// SUPERTOKENS
import React from 'react';
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from 'supertokens-auth-react';
import ThirdPartyPasswordless from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import Session from 'supertokens-auth-react/recipe/session';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + '/auth',
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: 'EMAIL',
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === 'true') {
  dataProvider = customDataProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      '/proxy',
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/ae73d54a4">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != 'DEV' ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
      >
        <Resource
          name="users"
          options={{ label: 'Users' }}
          list={usersList}
          create={usersCreate}
          edit={usersEdit}
          recordRepresentation="userName"
          icon={usersIcon}
        />
        <Resource
          name="departments"
          options={{ label: 'Departments' }}
          list={departmentsList}
          create={departmentsCreate}
          edit={departmentsEdit}
          recordRepresentation="departmentName"
          icon={departmentsIcon}
        />
        <Resource
          name="initiatives"
          options={{ label: 'Initiatives' }}
          list={initiativesList}
          create={initiativesCreate}
          edit={initiativesEdit}
          recordRepresentation="name"
          icon={initiativesIcon}
        />
        <Resource
          name="goals"
          options={{ label: 'Goals' }}
          list={goalsList}
          create={goalsCreate}
          edit={goalsEdit}
          recordRepresentation="name"
          icon={goalsIcon}
        />
        <Resource
          name="emissionSources"
          options={{ label: 'Emission Sources' }}
          list={emissionSourcesList}
          create={emissionSourcesCreate}
          edit={emissionSourcesEdit}
          recordRepresentation="sourceType"
          icon={emissionSourcesIcon}
        />
        <Resource
          name="resourceUsage"
          options={{ label: 'Resource Usage' }}
          list={resourceUsageList}
          create={resourceUsageCreate}
          edit={resourceUsageEdit}
          recordRepresentation="resourceType"
          icon={resourceUsageIcon}
        />
        <CustomRoutes noLayout>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          {/*Your app routes*/}
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;
