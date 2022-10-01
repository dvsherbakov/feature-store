import React, { useCallback, useEffect, useState } from 'react'
import styles from './datapicker.module.scss'
import { getMonthDays } from './getMonthDays'
import { months, TDatePickerProps } from './types'
import {
  FillArrowDown,
  FillArrowLeft,
  FillArrowRight,
  FillArrowUp,
} from '../SvgShapes/Shapes'
import { CustomInput } from './CustomInput'

export const DatePicker = ({
  defaultDate = new Date(),
  timeout = 3,
}: TDatePickerProps) => {
  const [month, setMonth] = useState<number>(defaultDate.getMonth())
  const [selectedDate, setSelectedDate] = useState<Date>(defaultDate)
  const [visible, setVisible] = useState<boolean>(false)
  const [year, setYear] = useState<number>(defaultDate.getFullYear())

  useEffect(() => {
    if (visible && timeout)
      setTimeout(() => {
        setVisible(false)
      }, timeout * 1000)
  }, [selectedDate]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleNextMonth = useCallback(() => {
    setMonth(month === 11 ? 0 : cur => cur + 1)
  }, [month])

  const handlePrevMonth = useCallback(() => {
    setMonth(month === 0 ? 11 : cur => cur - 1)
  }, [month])

  const handlePrevYear = useCallback(() => {
    setYear(y => y - 1)
  }, [])

  const handleNextYear = useCallback(() => {
    setYear(y => y + 1)
  }, [])

  const visibleSwitcher = useCallback(() => {
    setVisible(v => !v)
  }, [])

  const m = getMonthDays(year, month)

  const dataViewer = m.map((itm, idx) => (
    <div
      key={idx.toString()}
      className={[
        styles['dayViewer'],
        itm.getDay() === 0 ? styles['sunDay'] : '',
        itm.getMonth() !== month ? styles['vicarious'] : '',
      ].join(' ')}
      onClick={() => setSelectedDate(itm)}
    >
      {itm.getDate()}
    </div>
  ))

  return (
    <div className={styles['datePicker']}>
      <div className={styles['selectedViewer']}>
        <CustomInput value={selectedDate} />
        <button onClick={visibleSwitcher}>
          {visible ? <FillArrowUp /> : <FillArrowDown />}
        </button>
      </div>
      {visible && (
        <section>
          <div className={styles['monthYearArea']}>
            <div className={styles['yearArea']}>
              <span>{year}</span>
              <div className={styles['buttons']}>
                <button onClick={handleNextYear}>
                  <FillArrowUp />
                </button>
                <button onClick={handlePrevYear}>
                  <FillArrowDown />
                </button>
              </div>
            </div>
            <div className={styles['monthArea']}>
              <button onClick={handlePrevMonth}>
                <FillArrowLeft />
              </button>
              {months[month]}
              <button onClick={handleNextMonth}>
                <FillArrowRight />
              </button>
            </div>
          </div>
          <div className={styles['dataViewer']}> {dataViewer} </div>
        </section>
      )}
    </div>
  )
}
