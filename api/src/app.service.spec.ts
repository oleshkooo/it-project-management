import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';
import { FrequencyAnalysisDto } from './dto/frequency-analysis.dto';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    service = module.get<AppService>(AppService);
  });

  describe('frequencyAnalysis', () => {
    it('should return an empty object if the text is empty', () => {
      const dto: FrequencyAnalysisDto = { text: '' };
      const result = service.frequencyAnalysis(dto);
      expect(result).toEqual({});
    });

    it('should correctly analyze word frequency in the text', () => {
      const dto: FrequencyAnalysisDto = { text: 'Hello world hello' };
      const expected = { hello: 2, world: 1 };
      const result = service.frequencyAnalysis(dto);
      expect(result).toEqual(expected);
    });

    it('should ignore punctuation and letter case', () => {
      const dto: FrequencyAnalysisDto = { text: 'NestJS, nestjs! NESTJS?' };
      const expected = { nestjs: 3 };
      const result = service.frequencyAnalysis(dto);
      expect(result).toEqual(expected);
    });

    it('should handle text with numbers and special characters', () => {
      const dto: FrequencyAnalysisDto = { text: '123 123 456' };
      const expected = { '123': 2, '456': 1 };
      const result = service.frequencyAnalysis(dto);
      expect(result).toEqual(expected);
    });

    it('should return an empty object if the text contains only special characters', () => {
      const dto: FrequencyAnalysisDto = { text: '!@#$%^&*()' };
      const result = service.frequencyAnalysis(dto);
      expect(result).toEqual({});
    });
  });
});
