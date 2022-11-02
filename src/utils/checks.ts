import { NewDiaryEntry, Weather, Visibility } from 'types/diaries'

const isString = (string: string): boolean => typeof string === 'string'
const isDate = (date: string): boolean => !!Date.parse(date)
const isWeather = (weather: any): boolean => {
  return Object.values(Weather).includes(weather)
}
const isVisibility = (visibility: any): boolean => {
  return Object.values(Visibility).includes(visibility)
}

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment.')
  }
  return commentFromRequest
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date.')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather.')
  }
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (
    !isString(visibilityFromRequest) ||
    !isVisibility(visibilityFromRequest)
  ) {
    throw new Error('Incorrect or missing visibility.')
  }
  return visibilityFromRequest
}

export const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility),
    comment: parseComment(object.comment)
  }

  return newEntry
}
