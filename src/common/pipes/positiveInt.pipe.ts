import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  HttpException,
} from '@nestjs/common';

@Injectable()
export class PositiveIntPipe implements PipeTransform {
  transform(value: number, metadata: ArgumentMetadata) {
    if (value < 0) {
      throw new HttpException('value shoule be positive int!', 400);
    }
    return value;
  }
}
