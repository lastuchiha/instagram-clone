import { Route, Routes } from 'react-router-dom';
import './App.css'
import useAuthListener from './hooks/auth-listener';
import UserContext from './contexts/user';
import * as ROUTES from "./constants/routes"
import { lazy, Suspense } from 'react';
import Loading from './components/loading';
import ProtectedRoute from './components/protected-route'
import RedirectRoute from './components/redirect-route'
import 'react-loading-skeleton/dist/skeleton.css'
import Layout from './layouts';


export default function App() {
  const Home = lazy(() => import('./pages/home'))
  const SignIn = lazy(() => import('./pages/signin'))
  const Signup = lazy(() => import('./pages/signup'))
  const Profile = lazy(() => import('./pages/profile'))
  const Edit = lazy(() => import('./pages/edit'))

  const user = useAuthListener();

  return (
    <UserContext.Provider value={user}>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path={ROUTES.LOGIN} element={<RedirectRoute redirectURL={ROUTES.DASHBOARD}><SignIn /></RedirectRoute>} />
          <Route path={ROUTES.SIGNUP} element={<RedirectRoute redirectURL={ROUTES.DASHBOARD}><Signup /></RedirectRoute>} />
          <Route element={<Layout />}>
            <Route path={ROUTES.DASHBOARD} element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path={ROUTES.EDIT} element={<ProtectedRoute><Edit /></ProtectedRoute>} />
            <Route path={ROUTES.PROFILE} element={<Profile />} />
          </Route>
        </Routes>
      </Suspense>
    </UserContext.Provider>

  );
}


