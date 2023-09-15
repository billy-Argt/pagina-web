import { validateStartDate } from '@/utils/validationFunctions'

const { useEffect } = require('react')

const useHandleStartDateChange = (methods, duration, i18n, hours) => {
  useEffect(() => {
    if (duration || methods.watch('start_date')) {
      const updatedDates = validateStartDate(methods.watch('start_date'), methods, duration, i18n, hours)
      if (updatedDates.startDate) {
        methods.setValue('start_date', updatedDates.startDate)
      }
      if (updatedDates.endDate) {
        methods.setValue('end_date', updatedDates.endDate)
      }
    }
  }, [duration, methods.watch('start_date')])
}

export default useHandleStartDateChange
