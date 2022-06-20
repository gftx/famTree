import { toast } from 'react-toastify'

function notification(message = 'Что-то пошло не так', error: boolean) {
  if (error) {
    return (
      toast.error(message || 'Что-то пошло не так')
    )
  } else {
    return (
      toast.success(message || 'Что-то пошло не так')
    )
  }
}

export default notification
