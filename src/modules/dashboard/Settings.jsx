import React from 'react'

const Settings = () => {
  const tabs = [
    { name: 'General', path: '/settings/general' },
    { name: 'Security', path: '/settings/security' },
    { name: 'Notifications', path: '/settings/notifications' },
    { name: 'Billing', path: '/settings/billing' },
    { name: 'Integrations', path: '/settings/integrations' },
  ]

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(' ')
  }

    return (
      
  )
}

export default Settings
