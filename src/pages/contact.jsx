import axios from 'axios'
import { useState } from 'react'

import { Layout } from '@components/layouts'
import { ContactInfo, ContactForm } from '@modules/contact'
import { toast } from 'react-toastify'

const ContactPage = () => {
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
      const { data } = await axios.post('/api/businessinquiries/', {
        ...formState,
      })

      data.success && toast.success('Successfully submited request!')
    } catch (err) {
      toast.error('Oops! Something went wrong!')
      toast.info("You can't make two inquiries.")
    }
  }

  return (
    <Layout title='Contact Page'>
      <div className='bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24'>
        <ContactForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formState={formState}
          agreed={agreed}
          setAgreed={setAgreed}
        />
        <ContactInfo />
      </div>
    </Layout>
  )
}

export default ContactPage
