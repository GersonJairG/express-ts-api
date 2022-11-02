import {
  DiaryEntry,
  NewDiaryEntry,
  NonSensitiveInfoDiaryEntry
} from 'types/diaries'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = () => diaries

export const findNonSensitiveInfoById = (
  id: number
): NonSensitiveInfoDiaryEntry | undefined => {
  const entry = diaries.find((diary) => diary.id === id)
  if (entry) {
    const { comment, ...restProps } = entry
    return restProps
  }
  return undefined
}

export const getEntriesWithoutSensitiveInfo =
  (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => ({
      id,
      date,
      weather,
      visibility
    }))
  }

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map((diary) => diary.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newDiary)
  return newDiary
}
