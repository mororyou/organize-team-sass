import { SignIn } from '@clerk/react-router';

export default function SignInContainer() {
  return <SignIn forceRedirectUrl={'/mypage'} />;
}
