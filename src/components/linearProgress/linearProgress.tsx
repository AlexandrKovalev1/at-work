import s from './linearProgress.module.scss'
import { useAppSelector } from '../../app/providers/store/store.ts'
import { selectStatus } from '../../slices/app/app-slice.ts'
export const LinearProgress = () => {
  const status = useAppSelector(selectStatus)

  return <>{status === 'loading' && <progress className={s.progress}></progress>}</>
}
