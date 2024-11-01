import { message } from "antd"

const messageDuration = 7

export const errorMessageLog = (error: Error | any) => {

  if (error?.response?.data?.detail) {
    const detailsErrors = error?.response?.data?.detail
    const errors: string[] = []
    if (Array.isArray(detailsErrors)) {
      detailsErrors.forEach(item => {

        if (item.msg || item.message) {
          const err = item.msg || item.message || ''
          errors.push(err)
        }
      })
    }
    if (errors?.length) {
      errors.forEach(err => message.error(err, messageDuration))
      return
    }
  }


  const errorMsg = error?.response?.data?.message || 'Something went wrong!'
  if (typeof errorMsg === 'string') {
    message.error(errorMsg, messageDuration)
  } else if (typeof errorMsg === 'object') {
    Object.keys(errorMsg).forEach((key: any) => {
      message.error(errorMsg[key], messageDuration)
    })

  } else {
    message.error(JSON.stringify(errorMsg), messageDuration)
  }
}

