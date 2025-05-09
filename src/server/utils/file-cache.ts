import { readFile, stat } from 'node:fs/promises'
import { join } from 'node:path'

interface CacheData {
  data: any
  timestamp: number
  fileMtime: number
}

export class FileCache {
  private cache = new Map<string, CacheData>()
  
  async get(filePath: string): Promise<any | null> {
    const cached = this.cache.get(filePath)
    
    if (cached) {
      try {
        const stats = await stat(filePath)
        
        if (cached.fileMtime !== stats.mtimeMs) {
          this.cache.delete(filePath)
          return null
        }
        
        return cached.data
      } catch (error) {
        console.error('Error checking file stats:', error)
        return null
      }
    }
    return null
  }

  async set(filePath: string, data: any): Promise<void> {
    try {
      const stats = await stat(filePath);
      console.log('SetCache', stats);
      this.cache.set(filePath, {
        data,
        timestamp: Date.now(),
        fileMtime: stats.mtimeMs
      })
    } catch (error) {
      console.error('Error setting cache:', error)
    }
  }
}

export const cache = new FileCache()