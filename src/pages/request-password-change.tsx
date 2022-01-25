import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { requestChangePasswordLink } from '../api/accounts';
import { ChangePasswordRequest } from '../components/shared/pages/Login/ChangePaswordRequest/ChangePaswordRequest';

const RequestPasswordChangePage: NextPage = () => {
  const { push } = useRouter();

  const requestPasswordChangeMutation = useMutation(
    (email: string) => requestChangePasswordLink(email),
    {
      onSettled: () => push('/'),
    },
  );

  return (
    <ChangePasswordRequest onSubmit={requestPasswordChangeMutation.mutate} />
  );
};

export default RequestPasswordChangePage;
