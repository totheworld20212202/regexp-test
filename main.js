//정규표현식
//https://regex101.com/
//https://regexr.com/
//https://regexper.com/
// const str = 'hello 
// world' 에러 
// const str = `hello 
// world`
let str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxyp
http
동해물과 백두산이 마르고_닳도록
d`

// const regexp = new RegExp('the','gi')
// g는 모든걸 검색, i 는 대소문자구분없이
// const regexp = /the/gi 
// console.log(str.match(regexp))

// const regexp = /fox/gi 
// console.log(regexp.test(str))

// const regexp = /HEROPY/gi 
// console.log(regexp.test(str))

// const regexp = /fox/gi
// // console.log(str.replace(regexp,'AAA'))
// str = str.replace(regexp,'AAA')
// console.log(str)

// const regexp = /the/gi 
// console.log(str.match(regexp))

// console.log(str.match(/\./gi))
// console.log(str.match(/\.$/gi)) //여기까지는 문장의 맨끝에 .이찍히는지 확인
// console.log(str.match(/\.$/gim)) // m옵션을 주면 모든 line마다 .으로 끝나는지확인한다. 

// console.log(
//     str.match(/d$/gm)
// )

// console.log(
//     str.match(/^t/gim)
// )

// console.log(
//     str.match(/./g)
// )

// console.log(
//     // str.match(/http/g)
//     str.match(/h..p/g)
// )

// console.log(
//     // str.match(/fox|dog/g)
//     str.match(/fox|dog/)
// )

// console.log(
         
//         str.match(/https?/g)
//     )
    
// console.log(
         
//     str.match(/\b\w{2,3}\b/g)   // \w 숫자를 포함한 영어알파벳
//                                 // \b는 경계를 의미함 
//                                 // 2개에서3개의 숫자영문이 경계에 쌓인것만 검색 
    
// )

// console.log(
//     str.match(/[0-9]{1,}/g)
    
// )
// console.log(
//     str.match(/[가-힣]{1,}/g)
    
// )
// console.log(str)

// console.log(
//     str.match(/\w/g)
    
// )
// console.log(
//     str.match(/\b/g)
    
// )
// console.log(
//     str.match(/\bf\w{1,}\b/g)
    
// )
// console.log(
//     str.match(/\d{1,}/g)
// )

// const h = `  the hello  world       !


// `
// console.log(
//     str.match(/\s/g)
// )
// console.log(
//     h.match(/\s/g)
// )
// console.log(
//     h.replace(/\s/g, '')
// )

// console.log(
//     str.match(/.{1,}(?=@)/g)
// )
console.log(
    str.match(/(?<=@).{1,}/g)
)
console.log(
    str
)