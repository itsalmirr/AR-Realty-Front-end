import { toast } from 'react-toastify'
import { useState } from 'react'

import { Layout } from '@components/layouts'
import { submitInquiry } from '@common/queries/inquiries'
import { ContactInfo, ContactForm } from '@modules/contact'

const clearForm = (setFormState) => {
  setFormState({
    first_name: '',
    last_name: '',
    company_name: '',
    email: '',
    phone: '',
    message: '',
  })
}

function ContactPage() {
  const [formState, setFormState] = useState({
    first_name: '',
    last_name: '',
    company_name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [agreed, setAgreed] = useState(false)
  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!agreed) {
      toast.warning('Please agree to our Privacy Policy')
      return
    }
    try {
      const inquiry = await submitInquiry(formState, '/api/businessinquiries/')
      inquiry.success && toast.success('Successfully submited request!')
      clearForm(setFormState)
    } catch (err) {
      toast.error('Oops! Something went wrong!')
      toast.info("Have you already made an inquiry? If so, we'll be in touch!")
      clearForm(setFormState)
    }
  }

  return (
    <Layout title='Contact Page'>
      <div className='py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24'>
        <ContactForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formState={formState}
          agreed={agreed}
          setAgreed={setAgreed}
        />
        <div className='mt-32'>
          <ContactInfo />
        </div>
      </div>
    </Layout>
  )
}

export default ContactPage
