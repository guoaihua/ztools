/** 递归对象，去除相应属性， 支持路径 */
export type DeepOmit<T extends any, K extends string> = K extends `${infer F}.${infer R}` ? {
    [key in keyof T]: key extends F ? DeepOmit<T[key], R> : T[key]
} : Omit<T, K>

/** 元祖转联合类型 */
export type TupleToUnion<T extends any[]> = T[number]

/** 提取对象的特定属性 */
export type ExtractObjByProps<T extends {}, K extends keyof T> = T[K]

/** 简化联合类型 */
export type SimpleUnion<T extends {}> = {
    [key in keyof T]: T[key]
}

/** 去除以提供的参数开头的对象属性 */
export type ExcludeObjProps<T extends object, K extends string> = {
    [key in keyof T as Exclude<key, key extends `${K}${infer F}` ? key : never>]: T[key]
}

// 遍历数组，比较当前元素和剩下元素的联合类型
/** 判断元组中是否包含了重复元素 */
export type CheckRepeatedTuple<T extends any[]> =  T extends [infer F, ...infer R] ? F extends R[number] ? true : CheckRepeatedTuple<R> : false

type Merge<O1, O2> = {
    [key in keyof O1 | keyof O2]: PropOr<O1, key> | PropOr<O2, key>;
}


// 获取对象属性
type PropOr<Obj, Prop> = Prop extends keyof Obj
  ? Obj[Prop]
  : never

/** 合并对象，相同属性的值合并 */
export type MergeAll<T extends {}[], Prev extends {} =T > = T extends [infer F, ...infer R extends {}[]] ? MergeAll<R, Merge<F, Prev>> : Prev

 
/** 判断是否为奇数 */
export type isOdd<T extends number> = `${T}` extends  `${number | ''}${ 1 | 3 | 5 | 7 | 9}` ? true : false

/** 判断是否为偶数 */
export type isEven<T extends number> = `${T}` extends  `${number | ''}${ 0 | 2 | 4 | 6 | 8}` ? true : false


/** 获取一个联合类型的排列组合 */
export type Permutation<T, K = T> = [T] extends [never] ? [] : K extends K ? [K, ...Permutation<Exclude<T, K>>] : never


type StringToArray<T extends string> = T extends `${infer F}${infer R}` ? [F, ...StringToArray<R>] : []

export type StringLength<S extends string> = StringToArray<S>['length']


export type StringToUnion<T extends string> = T extends `${infer F}${infer R}` ? F | StringToUnion<R> : never

/** 驼峰 转 -类型 */
export type KebabCase<T extends string> = T extends `${infer F}${infer R}` ? 
    R extends Uncapitalize<R> 
    ? `${Uncapitalize<F>}${KebabCase<R>}` : `${Uncapitalize<F>}-${KebabCase<R>}`
    : T

type shiftArr<T extends any[]> = T extends [infer F, ...infer R] ? R : never

export type Zip<T extends any[], U extends any[]> = T extends [infer F, ...infer R] ? U extends {length: 0} ? [] : [[F,U[0]], ...Zip<R, shiftArr<U>>] : [] 
