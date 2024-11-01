"use client"
import React from 'react'
import { Form, Input, message, } from "antd"
import { useCallback, useMemo } from 'react'


import * as Yup from 'yup';
import { ERRORS_STR } from "@/services/constants";
import { useFormik } from 'formik';

interface FormData {
  name: string
  email: string
  phone: string
  address: string
  city: string
  zone: string
}


const AddressForm = () => {

  const initialValues = useMemo(() => {
    return {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zone: '',
    };
  }, []);

  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      name: Yup.string().required(ERRORS_STR.FORM_REQUIRED),
      email: Yup.string().required(ERRORS_STR.FORM_REQUIRED).email(ERRORS_STR.FORM_EMAIL),
      phone: Yup.string().required(ERRORS_STR.FORM_REQUIRED),
      address: Yup.string().required(ERRORS_STR.FORM_REQUIRED),
      city: Yup.string().required(ERRORS_STR.FORM_REQUIRED),
      zone: Yup.string().required(ERRORS_STR.FORM_REQUIRED),
    });
  }, []);

  const formik = useFormik({
    validateOnMount: false,
    initialValues,
    validationSchema,
    onSubmit: async (values) => {

      try {
        // SUBMIT API 

      } catch (error: any) {
        const errorMsgs = error?.response?.data?.message
        if (Object.keys(errorMsgs).length) {

          Object.keys(errorMsgs).forEach((key: any) => {
            // eslint-disable-next-line no-prototype-builtins
            const errMsg = errorMsgs[key]
            const msg = Array.isArray(errMsg) ? errMsg[0] : errMsg
            formik.setFieldError(key, msg)
          })
        } else {
          message.error(error?.response?.data?.message || ERRORS_STR.WENT_WRONG)
        }
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
    <div>
      <Form
        layout="vertical"
        className="relative "

      >

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3  ">


          <Form.Item
            label="الإسم"
            className="!mb-4 font-semibold"
            {...handleErrorsMsg('name')}
          >
            <Input
              className="!placeholder-text-60  !rounded-lg !h-[55px] "
              size="middle"
              placeholder="الإسم"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>

          <Form.Item
            label="البريد الالكتروني"
            className="!mb-4 font-semibold"
            {...handleErrorsMsg('email')}
          >
            <Input

              className="!placeholder-text-60  !rounded-lg !h-[55px]  "
              size="middle"
              placeholder="البريد الألكتروني"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>



          <Form.Item
            label="الموبايل"
            className="!mb-4 font-semibold"
            {...handleErrorsMsg('phone')}
          >
            <Input

              className="!placeholder-text-60  !rounded-lg !h-[55px]"
              size="middle"
              placeholder="الموبايل"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>









          <Form.Item
            label="العنوان"
            className="!mb-4 font-semibold"
            {...handleErrorsMsg('address')}
          >
            <Input
              className="!placeholder-text-60  !rounded-lg"
              size="middle"
              placeholder="العنوان"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>

          <Form.Item
            label="المدينة"
            className="!mb-4 font-semibold"
            {...handleErrorsMsg('city')}
          >
            <Input
              className="!placeholder-text-60  !rounded-lg"
              size="middle"
              placeholder="المدينة"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>

          <Form.Item
            label="المنطقة"
            className="!mb-4 font-semibold"
            {...handleErrorsMsg('zone')}
          >
            <Input
              className="!placeholder-text-60  !rounded-lg"
              size="middle"
              placeholder="المنطقة"
              name="zone"
              value={formik.values.zone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </Form.Item>




        </div>


      </Form>
    </div>
  )
}

export default AddressForm