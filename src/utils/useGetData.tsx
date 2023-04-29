import { useQuery } from "@tanstack/react-query"
import { Instanse, InstanseSurahsTime } from "./axiosInstanse"

type GetData = (keys: [string], url: string, option?: any) => any

export const useGetData: GetData = (keys, url, options) => {
  return useQuery(
    keys,
    () => Instanse(url)
      .then(res => res.data),
    { ...options });
}

export const useGetDataTime: GetData = (keys, url, options) => {
  return useQuery(
    keys,
    () => InstanseSurahsTime(url)
      .then(res => res.data),
    { ...options });
}