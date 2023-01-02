import { toast } from 'react-toastify'
import { submitInquiry } from '@common/queries/inquiries'

export const handleInquirySubmit = async (formState, setFormState, toggle) => {
  try {
    const inquiry = await submitInquiry(formState)
    inquiry.success && toast.success(inquiry.message)

    setFormState({
      listing: '',
      name: '',
      email: '',
      message: '',
      phone: '',
    })
    toggle(true)
  } catch (err) {
    toast.error(
      'Opps! Something went wrong. Maybe you already made an inquiry?'
    )
  }
}
