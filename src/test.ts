type NaiveFlat<T> = T extends [] ? never : T extends [infer A, ...infer B] ? NaiveFlat<A> | NaiveFlat<B> : T


type NativeFlat1<T extends any[]> = {
    [K in keyof T]: T[K] extends any[] ? T[K][number] : T[K]
}[number]



// 测试用例：
type NaiveResult = NaiveFlat<[['a'], ['b', 'c'], ['d']]>
// NaiveResult的结果： "a" | "b" | "c" | "d"



type b = NativeFlat1<[['a'], ['b', 'c'], ['d']]>

type Deep = [['a'], ['b', 'c'], [['d']], [[[['e']]]]];


type a = NaiveFlat<Deep>

