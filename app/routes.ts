import {
  type RouteConfig,
  index,
  layout,
  route,
} from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  layout('routes/_auth/layout.tsx', [
    route('sign-in/*', 'routes/_auth/sign-in.tsx'),
    route('sign-up/*', 'routes/_auth/sign-up.tsx'),
    route('mypage', 'routes/_auth/mypage.tsx'),
  ]),
] satisfies RouteConfig;
