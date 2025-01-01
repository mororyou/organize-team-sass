import { SignUp } from '@clerk/react-router';

export default function SignUpContainer() {
  return <SignUp forceRedirectUrl={'/mypage'} />;
}
