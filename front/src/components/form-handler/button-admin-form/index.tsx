import { useFormContext } from 'react-hook-form';

import { ButtonAdmin } from '@/components';
import { getDisabled } from '@/utils/helpers';
import { IButton } from '@/components/admins-component/btn-admin/type';

export const ButtonAdminForm = ({ text, type, ...rest }: IButton) => {
  const {
    formState: { errors },
  } = useFormContext();

  const isDisabled = getDisabled(errors);

  return (
    <ButtonAdmin {...rest} text={text} type={type} disabled={isDisabled} />
  );
};
