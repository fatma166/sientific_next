import React, { useState } from 'react'
import * as Yup from 'yup';
import { ERRORS_STR, PASSWORD_REGEX } from "@/services/constants";
import { Alert, Button, Form, Input, message } from "antd";
import { useCallback, useMemo } from 'react';
import { useFormik } from 'formik';
import { ClientLink } from "@/components/shared";
import { useClientRouter, useLanguage } from "@/services/hooks";
import { GET_PROFILE_KEY, login } from "@/services/api";
import Cookies from "js-cookie";
import axios from "axios";
import clientApi from "@/services/api/clientApi";
import { useRouter } from "next/navigation";
import { useQueryClient } from "react-query";


interface FormData {
  email: string;
  password: string;
}


const LoginForm = () => {

  const router = useClientRouter();
  const { t } = useLanguage()
  const [errorMsg, setErrorMsg] = useState('');
  const queryClient = useQueryClient();

  const initialValues = useMemo(() => {
    return {
      email: '',
      password: '',
    };
  }, []);

  const validationSchema = useMemo(() => {
    // const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    return Yup.object().shape({
      email: Yup.string()
        .required(ERRORS_STR.FORM_REQUIRED)
        .email(ERRORS_STR.FORM_EMAIL),
      password: Yup.string()
        .required(ERRORS_STR.FORM_REQUIRED)
      // .min(8, ERRORS_STR.FORM_PASSWORD).matches(PASSWORD_REGEX, ERRORS_STR.FORM_PASSWORD)

    });
  }, []);


  const formik = useFormik({
    validateOnMount: false,
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {

        setErrorMsg('');

        const res = await login(values);

        if (res?.data?.accessToken) {
          message.success(t('login_success'));
          formik.resetForm();
          clientApi.defaults.headers.common['Authorization'] = `Bearer ${res?.data?.accessToken}`
          await axios.post('/api/auth/session', { token: res?.data?.accessToken })
          queryClient.invalidateQueries(GET_PROFILE_KEY);
          router.push('/bookshelf');

        }

      } catch (error: any) {
        setErrorMsg(error?.response?.data?.message || ERRORS_STR.INVALID_CREDENTIALS);
      }
    },
  });

  const handleErrorsMsg = useCallback(
    (
      key: keyof FormData
    ): { validateStatus: 'error' | ''; help: string } => {
      const errorMsg = formik.errors[key] || '';
      const isError = !!formik.errors[key] && !!formik.touched[key];

      return {
        validateStatus: isError ? 'error' : '',
        help: isError ? errorMsg : '',
      };
    },
    [formik.errors, formik.touched]
  );


  return (
    <div className="w-full">

      <Form
        layout="vertical"
        onSubmitCapture={formik.handleSubmit}

      >
        <Form.Item

          label={t('email')}
          className="!mb-6"
          {...handleErrorsMsg('email')}
        >
          <Input
            className="!mt-1"
            size="large"
            placeholder={t('email')}
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Form.Item

          label={t('password')}
          className="mb-1"
          {...handleErrorsMsg('password')}
        >
          <Input.Password
            className="  !mt-1"
            size="large"
            placeholder={t('password')}
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <p className="flex items-center justify-end">

          <ClientLink
            href="/forget-password"
            className="font-bold text-primary mb-4"
          >
            {t('forget_password')}
          </ClientLink>
        </p>

        {errorMsg && <Alert type="error" message={errorMsg} />}

        <div className="flex justify-center mt-3">
          <Button
            block
            type="primary"
            htmlType="submit"
            className="px-5 md:px-8 font-bold"
            size="large"
            loading={formik.isSubmitting}
            data-action='login'
          >
            {t('login')}
          </Button>
        </div>

      </Form>


    </div>
  )
}

export default LoginForm