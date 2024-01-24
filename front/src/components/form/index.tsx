import React, { ReactNode } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  useForm,
  FieldValues,
  FormProvider,
  SubmitHandler,
} from 'react-hook-form';

interface FormProps {
  children: ReactNode;
  defaultValues?: FieldValues;
  onSubmit: SubmitHandler<FieldValues>;
  validationSchema?: Yup.AnyObjectSchema;
  mode?: 'onChange' | 'onBlur' | 'onSubmit' | 'all';
}

export function Form({
  children,
  onSubmit,
  defaultValues,
  validationSchema,
  mode = 'onSubmit',
}: FormProps) {
  const methods = useForm<FieldValues>({
    mode,
    defaultValues: defaultValues ?? {},
    resolver: yupResolver(validationSchema ?? Yup.object()),
  });

  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {React.Children.map(children, (child) => {
          return child && React.isValidElement(child) && child.props.name
            ? React.cloneElement(child, {
                ...child.props,
                key: child.props.name,
              })
            : child;
        })}
      </form>
    </FormProvider>
  );
}
