const successTemp = (result={}, msg='success') => (
  {code: 1, msg: msg, result: result}
)

const failTemp = (msg='fail') => ({code: 0, msg: msg})

export {
  successTemp,
  failTemp
}