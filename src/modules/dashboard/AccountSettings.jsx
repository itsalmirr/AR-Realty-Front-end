import { memo } from 'react'
import { AccSettingsForm } from '@components/app/Forms'

const AccountSettings = ({ settings, setSettings, user }) => {
  return (
    <div>
      {settings && (
        <AccSettingsForm
          settings={settings}
          setSettings={setSettings}
          user={user}
        />
      )}
    </div>
  )
}

export default memo(AccountSettings)
