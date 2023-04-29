import axios from 'axios'

export const Instanse = axios.create({
  baseURL: 'https://api.alquran.cloud/v1',
  timeout: 10000
})

export const InstanseSurahsTime = axios.create({
  baseURL: 'https://islomapi.uz/api',
  timeout: 10000
})