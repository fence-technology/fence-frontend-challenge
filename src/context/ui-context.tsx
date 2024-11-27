'use client'

import {
  ModalAlert,
  ModalAlertProps
} from '@/components/modals/modal-alert/modal-alert'
import { SimpleNotification } from '@/components/notification/simple-notification'
import React, { createContext, useContext, useState } from 'react'

type TAlert = Omit<ModalAlertProps, 'onClose'> | null

type TUIContext = {
  asideOpen: boolean
  setAsideOpen: (open: boolean) => void
  loader: boolean
  setLoader: (show: boolean) => void
  alert: TAlert
  setAlert: (alert: TAlert) => void
}

export const UIContext = createContext<TUIContext>({
  asideOpen: false,
  setAsideOpen: () => {},
  loader: false,
  setLoader: () => {},
  alert: null,
  setAlert: () => {}
})

interface Props {
  children: React.ReactNode
  initialLoading?: boolean
}

export const UIContextProvider: React.FC<Props> = ({
  children,
  initialLoading = false
}: Props) => {
  const [asideOpen, setAsideOpen] = useState<boolean>(false)
  const [loader, setLoader] = useState<boolean>(initialLoading)
  const [alert, setAlert] = useState<TAlert>(null)

  return (
    <UIContext.Provider
      value={{
        asideOpen,
        setAsideOpen,
        loader,
        setLoader,
        alert,
        setAlert
      }}>
      {children}

      <SimpleNotification />

      {alert && (
        <ModalAlert
          title={alert.title}
          description={alert.description}
          text={alert.text}
          onAccept={async () => {
            await alert.onAccept()
            setAlert(null)
          }}
          onClose={() => setAlert(null)}
        />
      )}
    </UIContext.Provider>
  )
}

export const useUiContext = (): TUIContext => {
  return useContext(UIContext)
}
