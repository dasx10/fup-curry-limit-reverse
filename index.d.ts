import type { CurryLimitReverseCore } from 'fup-curry-limit-reverse-core';
import type CurryLimitResultType      from 'fup-curry-limit-result-type';
import type TupleConsistentType       from 'fup-tuple-consistent-type';
import type TupleGainType             from 'fup-tuple-gain-type';
import type TupleReverseType          from 'fup-tuple-reverse-type';

export type CurryLimitReverse <
    ExpectedParameters extends readonly unknown[] = unknown[],
    ExpectedResult     extends unknown = unknown,
    ExpectedLimit      extends number  = number
> = CurryLimitReverseCore<ExpectedParameters, ExpectedResult, ExpectedLimit> & {

    <Limit extends ExpectedLimit>(limit: Limit): {
        <
            Parameters  extends ExpectedParameters,
            Result      extends ExpectedResult,
            Arguments   extends TupleConsistentType<TupleGainType<Limit, TupleReverseType<Parameters>>>
        >(executor: (...parameters: Parameters) => Result, ...arguments: Arguments): CurryLimitResultType<
            Limit,
            Arguments,
            TupleReverseType<Parameters>,
            Result
        >;
    };

    (): CurryLimitReverse<ExpectedParameters, ExpectedResult>;
}

/**
 * 
 */
declare const curryLimitReverse: CurryLimitReverse;
export default curryLimitReverse;