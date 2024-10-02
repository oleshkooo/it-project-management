import { Body, Controller, Post } from '@nestjs/common'
import { AppService } from './app.service'
import { FrequencyAnalysisDto } from './dto/frequency-analysis.dto'

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Post('frequency')
    frequencyAnalysis(@Body() frequencyAnalysisDto: FrequencyAnalysisDto): Record<string, number> {
        return this.appService.frequencyAnalysis(frequencyAnalysisDto)
    }
}
