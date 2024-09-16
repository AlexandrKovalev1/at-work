import s from './edit-profile.module.scss'
import { Button, Card, Dialog, TextField, Typography } from '../../../components'
import { useOutletContext } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../app/providers/store/store.ts'
import { selectAllUsers, usersThunks } from '../../../slices/users/model/users-slice.ts'
import { useFormik } from 'formik'
import { showErrorMessage } from '../../../common/utils/showErrorMessage.ts'
import { EditUserData } from '../../../slices/users/user.types.ts'

export const EditProfile = () => {
  const id = useOutletContext<string>()
  const allUsers = useAppSelector(selectAllUsers)
  const currentUser = allUsers.find(u => u.id === +id)
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      id: id,
      name: currentUser!.name,
      nickName: currentUser!.username,
      email: currentUser!.email,
      city: currentUser!.address.city,
      phone: currentUser!.phone,
      company: currentUser!.company.name,
    },
    onSubmit: values => {
      dispatch(usersThunks.editUser(values))
    },
    validate: values => {
      const errors: Partial<EditUserData> = {}
      if (!values.company) errors.company = 'Поле не должно быть пустым'
      if (!values.phone) errors.phone = 'Поле не должно быть пустым'
      if (!values.city) errors.city = 'Поле не должно быть пустым'
      if (!values.email) errors.email = 'Поле не должно быть пустым'
      if (!values.nickName) errors.nickName = 'Поле не должно быть пустым'
      if (!values.name) errors.name = 'Поле не должно быть пустым'

      return errors
    },
  })

  const isDisableButton = Object.values(formik.errors).length > 0

  if (!currentUser) return

  return (
    <Card className={s.card}>
      <div className={s.categoryHeading}>
        <Typography as={'h2'} variant={'title'}>
          Данные профиля
        </Typography>
      </div>
      <form className={s.form} onSubmit={formik.handleSubmit}>
        <TextField
          label={'Имя'}
          {...formik.getFieldProps('name')}
          errorMessage={showErrorMessage(formik, 'name')}
        />
        <TextField
          label={'Никнейм'}
          {...formik.getFieldProps('nickName')}
          errorMessage={showErrorMessage(formik, 'nickName')}
        />
        <TextField
          label={'Почта'}
          {...formik.getFieldProps('email')}
          errorMessage={showErrorMessage(formik, 'email')}
        />
        <TextField
          label={'Город'}
          {...formik.getFieldProps('city')}
          errorMessage={showErrorMessage(formik, 'city')}
        />
        <TextField
          label={'Телефон'}
          {...formik.getFieldProps('phone')}
          errorMessage={showErrorMessage(formik, 'phone')}
        />
        <TextField
          label={'Название компании'}
          {...formik.getFieldProps('company')}
          errorMessage={showErrorMessage(formik, 'company')}
        />
        <Button type={'submit'} disabled={isDisableButton}>
          Сохранить
        </Button>
      </form>
      <Dialog />
    </Card>
  )
}
