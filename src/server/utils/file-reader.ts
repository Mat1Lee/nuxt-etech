import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { cache } from '~/server/utils/file-cache'

export async function readJsonFile<T>(fileName: string): Promise<T> {
  try {
    const runtimeConfig = useRuntimeConfig()
    // const filePath = join(`${runtimeConfig.DATA_PATH}/data`, fileName)
    const filePath = join(`${runtimeConfig.public.API_URL}/data`, fileName)

    const cachedData = await cache.get(filePath)
    if (cachedData) {
      console.log('Cache hit:', fileName)
      return cachedData
    }

    console.log('Cache miss, reading file:', fileName)
    const content = await readFile(filePath, 'utf-8')
    const data = JSON.parse(content)

    await cache.set(filePath, data)

    return data
  } catch (error) {
    console.error('Error reading file:', fileName, error)
    throw error
  }
}