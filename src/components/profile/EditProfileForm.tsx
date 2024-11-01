import React, { useState } from 'react'
import * as Yup from 'yup';
import { ERRORS_STR, PASSWORD_REGEX } from "@/services/constants";
import { Alert, Button, Form, Input, message } from "antd";
import { useCallback, useMemo } from 'react';
import { useFormik } from 'formik';
import { useLanguage } from "@/services/hooks";
import { updateProfile } from "@/services/api";

import PhoneSelect from "@/components/shared/PhoneSelect";
import { UserProfile } from "@/services/types";


interface FormData {
  name: string;
  user_name: string;
  password: string;
  phone: string;
}
const EditProfileForm = ({ close, profile, refetch }: { close: () => void, profile: UserProfile, refetch: () => Promise<any> }) => {

  const { t } = useLanguage()
  const [errorMsg, setErrorMsg] = useState('');

  const initialValues = useMemo(() => {
    return {
      password: '',
      phone: profile?.phone,
      name: profile?.name,
      user_name: profile?.user_name,
    };
  }, [profile]);

  const validationSchema = useMemo(() => {
    // const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
    return Yup.object().shape({
      password: Yup.string(),
      phone: Yup.string(),
      name: Yup.string(),
      user_name: Yup.string().matches(/^(\S+$)/g, '* This field cannot contain only blankspaces'),
    });
  }, []);


  const formik = useFormik({
    validateOnMount: false,
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      try {

        setErrorMsg('');

        const body: Partial<FormData> = {}

        if (values.password) body.password = values.password
        if (values.phone) body.phone = values.phone
        if (values.name) body.name = values.name
        if (values.user_name) body.user_name = values.user_name


        await updateProfile(body)
        await refetch()
        message.success(t('profile_updated_success'));
        close()



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


  const isDataChanged = useMemo(() => {
    let changed = false

    if (profile?.name !== formik?.values?.name) changed = true
    if (profile?.user_name !== formik?.values?.user_name) changed = true
    if (profile?.phone !== formik?.values?.phone) changed = true

    return changed
  }, [formik?.values, profile])



  return (
    <div className="p-4">
      <Form
        layout="vertical"
        onSubmitCapture={formik.handleSubmit}

      >

        <Form.Item

          label={t('full_name')}
          className="!mb-6 font-bold"
          {...handleErrorsMsg('name')}
        >
          <Input
            className="!mt-1"
            size="large"
            placeholder={t('full_name')}
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>

        <Form.Item

          label={t('user_name')}
          className="!mb-6 font-bold"
          {...handleErrorsMsg('user_name')}
        >
          <Input
            className="!mt-1"
            size="large"
            placeholder={t('user_name')}
            name="user_name"
            value={formik.values.user_name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </Form.Item>
        <Form.Item

          label={t('password')}
          className="mb-1 font-bold"
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

        <Form.Item
          required
          label={t('phone')}
          className="mb-4 font-bold"
          {...handleErrorsMsg('phone')}
        >
          {/* <MInput
            className="bg-bg-gray"
            placeholder={t('auth.phone') || ''}
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          /> */}

          <PhoneSelect
            country={'sa'}
            onChange={(value) => formik.setFieldValue('phone', value)}
            onBlur={() => formik.setFieldTouched('phone', true)}
            value={formik.values.phone}
            className="py-3"

          />
        </Form.Item>

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
            disabled={!isDataChanged}
          >
            {t('edit_profile')}
          </Button>
        </div>

      </Form>
    </div>
  )
}

export default EditProfileForm