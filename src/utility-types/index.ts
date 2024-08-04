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
type ExcludeObjProps<T extends object, K extends string> = {
    [key in keyof T as Exclude<key, key extends `${K}${infer F}` ? key : never>]: T[key]
}

// 遍历数组，比较当前元素和剩下元素的联合类型
/** 判断元组中是否包含了重复元素 */
type CheckRepeatedTuple<T extends any[]> =  T extends [infer F, ...infer R] ? F extends R[number] ? true : CheckRepeatedTuple<R> : false


type Merge<O1, O2> = {
    [key in keyof O1 | keyof O2]: PropOr<O1, key> | PropOr<O2, key>;
}


type PropOr<Obj, Prop> = Prop extends keyof Obj
  ? Obj[Prop]
  : never


type MergeAll<T extends {}[], Prev extends {} =T > = T extends [infer F, ...infer R extends {}[]] ? MergeAll<R, Merge<F, Prev>> : Prev

 
