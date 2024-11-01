'use client'
import React from 'react'
import { Form, Input, message, } from "antd"
import { useCallback, useMemo } from 'react'


import * as Yup from 'yup';
import { ERRORS_STR } from "@/services/constants";
import { useFormik } from 'formik';
import { ButtonGradient } from "@/components/ui";
import { useTranslations } from "next-intl";
import { submitContactForm } from "@/services/api";


interface FormData {
  name: string
  email: string
  phone: string
  message: string
}


const ContactForm = () => {



  const initialValues = useMemo(() => {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
    };
  }, []);

  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      name: Yup.string().required(ERRORS_STR.FORM_REQUIRED),
      email: Yup.string().required(ERRORS_STR.FORM_REQUIRED).email(ERRORS_STR.FORM_EMAIL),
      phone: Yup.string().required(ERRORS_STR.FORM_REQUIRED),
      message: Yup.string().required(ERRORS_STR.FORM_REQUIRED),
    });
  }, []);

  const formik = useFormik({
    validateOnMount: false,
    initialValues,
    validationSchema,
    onSubmit: async (values) => {

      try {
        // SUBMIT API 

        await submitContactForm({
          email: values.email,
          name: values.name,
          phone: values.phone,
          text: values.message
        })

        message.success(t('contact_success'))
        formik.resetForm()
      } catch (error: any) {
        const errorMsgs = error?.response?.data?.message
        if (Object.keys(errorMsgs).length) {

          Object.keys(errorMsgs).forEach((key: any) => {
            // eslint-disable-next-line no-prototype-builtins
            const errMsg = errorMsgs[key]
            const msg = Array.isArray(errMsg) ? errMsg[0] : errMsg
            formik.setFieldError(key, msg)
          })
        }
        message.error(error?.response?.data?.message || ERRORS_STR.WENT_WRONG)


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

  const t = useTranslations()

  return (
    <div className="p-6 pr-0 flex flex-col gap-6 rounded-2xl">

      <div>

        <h2 className=" text-primary text-xl lg:text-2xl font-bold mb-1">
          دعنا نتواصل مع بعضنا البعض.
        </h2>

        <p className=" ">
          إذا كنت مهتمًا بالعمل معنا، يرجى التواصل معنا.
        </p>
      </div>

      <div>
        <Form
          layout="vertical"
          className="relative "

        >

          <div className="grid grid-cols-1  ">


            <Form.Item

              className="!mb-4 font-semibold"
              {...handleErrorsMsg('name')}
            >
              <Input
                className="!placeholder-text-60  !rounded-lg !h-[55px]"
                size="middle"
                placeholder={t('name')}
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Item>

            <Form.Item

              className="!mb-4 font-semibold"
              {...handleErrorsMsg('email')}
            >
              <Input
                dir="ltr"
                className="!placeholder-text-60  !rounded-lg !h-[55px]"
                size="middle"
                placeholder={t('e-mail')}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Item>



            <Form.Item

              className="!mb-4 font-semibold"
              {...handleErrorsMsg('phone')}
            >
              <Input
                dir="ltr"
                className="!placeholder-text-60  !rounded-lg !h-[55px]"
                size="middle"
                placeholder={t('phone')}
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Item>









            <Form.Item

              className="!mb-4 font-semibold"
              {...handleErrorsMsg('message')}
            >
              <Input.TextArea
                className="!placeholder-text-60  !rounded-lg"
                size="middle"
                placeholder={t('message')}
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </Form.Item>




          </div>




          <div className='w-full '>
            <ButtonGradient
              loading={formik.isSubmitting}
              onClick={() => formik.submitForm()}
              className='!shadow-none min-w-40'
              htmlType='submit'
              block
            >
              {formik.isSubmitting ? ' ' : (
                <div className="flex items-center justify-center gap-2 font-medium text-sm">
                  Submit
                </div>
              )}
            </ButtonGradient>
          </div>

        </Form>
      </div>


    </div>
  )
}

export default ContactForm