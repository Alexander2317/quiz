const DELAY_TIMER = 500

const asyncCall = (callback, delay = DELAY_TIMER) => {
  const timerId = setTimeout(() => {
    callback()
    clearTimeout(timerId)
  }, delay)

  return timerId
}

export default asyncCall
