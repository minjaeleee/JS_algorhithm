// # 문제16 : 로꾸거

// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

const getReverse = (arg) => {
  arg.toString()
  const result = arg.split('').reverse().join('')
  return result
}