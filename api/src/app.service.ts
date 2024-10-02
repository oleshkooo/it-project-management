import { Injectable } from '@nestjs/common'
import { FrequencyAnalysisDto } from './dto/frequency-analysis.dto'

@Injectable()
export class AppService {
    frequencyAnalysis({ text }: FrequencyAnalysisDto): Record<string, number> {
        if (!text) {
            return {}
        }

        const cleanedText = text.toLowerCase().replace(/[^\w\s]/g, '')
        const words = cleanedText.split(/\s+/)
        const frequencyMap: Map<string, number> = new Map()

        words.forEach(word => {
            if (word) {
                const currentCount = frequencyMap.get(word) || 0
                frequencyMap.set(word, currentCount + 1)
            }
        })

        return Object.fromEntries(frequencyMap)
    }
}
