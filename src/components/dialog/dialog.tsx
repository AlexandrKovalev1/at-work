import * as DialogRadix from '@radix-ui/react-dialog'
import s from './dialog.module.scss'
import { CrossIcon } from '../../assets/icons/CrossIcon.tsx'
import { useEffect, useState } from 'react'
import { CheckedBox } from '../../assets/icons/CheckedBox.tsx'
import { Typography } from '../typography'
import { useAppSelector } from '../../app/providers/store/store.ts'
import { selectStatus } from '../../slices/app/app-slice.ts'

export const Dialog = () => {
  const status = useAppSelector(selectStatus)
  const [open, setOpen] = useState(true)

  useEffect(() => {
    if (status === 'succeeded') {
      if (!open) setTimeout(() => setOpen(false), 4000)
      setOpen(!open)
    }
  }, [status, setOpen])

  return (
    <DialogRadix.Root open={open}>
      <DialogRadix.Portal>
        <DialogRadix.Overlay className={s.dialogOverlay} />
        <DialogRadix.Content
          aria-describedby={'some'}
          className={s.dialogContent}
          onPointerDownOutside={e => {
            e.preventDefault()
          }}
        >
          <DialogRadix.DialogDescription className={s.hidden} />
          <DialogRadix.DialogTitle className={s.hidden} />
          <button className={s.crossButton} onClick={() => setOpen(false)}>
            <CrossIcon />
          </button>
          <CheckedBox />
          <Typography variant={'headline'}>Изменения сохранены!</Typography>
        </DialogRadix.Content>
      </DialogRadix.Portal>
    </DialogRadix.Root>
  )
}
