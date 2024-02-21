import { useState } from 'react'

/**
 * results
 */
export type Results = string

export const useResults = (initial: Results[]) => useState<Results[]>(initial)
export type UseResultsType = ReturnType<typeof useResults>
export type ResultsType = UseResultsType[0]
export type SetResultType = UseResultsType[1]

/**
 * Count
 */
export type Count = number

export const useCount = (initial: Count) => useState<Count>(initial)
export type UseCountType = ReturnType<typeof useCount>
export type CountType = UseCountType[0]
export type SetCountType = UseCountType[1]

/**
 * FontSize
 */
export type FontSize = string | null

export const useFontSize = (initial: FontSize) => useState<FontSize>(initial)
export type UseFontSizeType = ReturnType<typeof useFontSize>
export type FontSizeType = UseFontSizeType[0]
export type SetFontSizeType = UseFontSizeType[1]