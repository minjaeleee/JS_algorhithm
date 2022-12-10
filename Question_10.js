// 문제 10: 별 찍기

// 입력
// 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********

const level = 5

for (let i = 1; i <= level; i++) {
  let tree = ""
  for (let k = 1; k < 6 - i; k++) {
    tree += " "
  }
  for (let j = 1; j <= (2 * i - 1); j++) {
    tree += "*"
  }
}