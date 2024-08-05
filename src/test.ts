// /** 判断是否为奇数 */
// type isOdd<T extends number> = `${T}` extends  `${number | ''}${ 1 | 3 | 5 | 7 | 9}` ? true : false

// /** 判断是否为偶数 */
// type isEven<T extends number> = `${T}` extends  `${number | ''}${ 0 | 2 | 4 | 6 | 8}` ? true : false


// type CartesianProduct<A extends string | number> = A extends A ? [A] : never

// type Permutation<T, K = T> = [T] extends [never] ? [] : K extends K ? [K, ...Permutation<Exclude<T, K>>] : never

// type perm = Permutation<'A' | 'B' | 'C'>; // ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

// type LengthOfString<T, K extends []> = T extends `${infer F}` ? K[] : []


// type KebabCase<T extends string> = T extends `${infer F}${infer R}` ? 
//     R extends Uncapitalize<R> 
//     ? `${Uncapitalize<F>}${KebabCase<R>}` : `${Uncapitalize<F>}-${KebabCase<R>}`
//     : T


//     type CamelCase<T extends string>= T extends `${infer F}_${infer R}` ? `${F}${CamelCase<Capitalize<R>>}`: T
    
//     type camelCase1 = CamelCase<'foo__bar'> // expected to be 'foo_Bar'
//     type camelCase2 = CamelCase<'HELLO_WORLD_WITH_TYPES'> // expected to be same as previous one


//     type shiftArr<T extends any[]> = T extends [infer F, ...infer R] ? R : never
//     type Zip<T extends any[], U extends any[]> = T extends [infer F, ...infer R] ? U extends {length: 0} ? [] : [[F,U[0]], ...Zip<R, shiftArr<U>>] : [] 

//     type exp = Zip<[1, 2, 3], ['1', '2']> // expected to be [[1, true], [2, false]]


//     type aa = "ROM" extends string ? true : false



    type PersonInfo = {
        name: 'Tom'
        age: number
        married: false
        addr: {
          home: '123456'
          phone: '13111111111'
        }
        hobbies: ['sing', 'dance']
        readonlyArr: readonly ['test']
        fn: () => any
      }

      type ToPrimitive1<T extends {}> = {
        [ key in keyof T ]: T[key] extends {} ? true : false
      }


      type ac = number extends {} ? 1: 2
 
      type a = ToPrimitive1<PersonInfo>