import { ClerkProvider } from '@clerk/react-router';
import { rootAuthLoader } from '@clerk/react-router/ssr.server';
import { Outlet } from 'react-router';
import type { Route } from '../../+types/root';

export async function loader(args: Route.LoaderArgs) {
  return rootAuthLoader(args);
}

export default function AuthLayout({ loaderData }: Route.ComponentProps) {
  return (
    <ClerkProvider
      loaderData={loaderData}
      signUpFallbackRedirectUrl="/sign-up"
      signInFallbackRedirectUrl="/sign-in"
    >
      <Outlet />;
    </ClerkProvider>
  );
}
