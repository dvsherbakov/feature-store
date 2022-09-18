export const getMonthDays = (year: number, month: number) => {
  let curDate = new Date(year, month, 1)
  let result: Date[] = []

  while (curDate.getMonth() === month) {
    result.push(new Date(curDate))
    curDate.setDate(curDate.getDate() + 1)
  }

  curDate = new Date(result[0])
  curDate.setDate(curDate.getDate() - 1)
  while (curDate.getDay() !== 0) {
    result = [new Date(curDate), ...result]
    curDate.setDate(curDate.getDate() - 1)
  }

  curDate = new Date(result[result.length - 1])
  curDate.setDate(curDate.getDate() + 1)
  while (curDate.getDay() !== 1) {
    result = [...result, new Date(curDate)]
    curDate.setDate(curDate.getDate() + 1)
  }

  return result
}
