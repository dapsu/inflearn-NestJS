import { OmitType } from '@nestjs/mapped-types';
import { Cat } from '../cats.schema';

export class CatCurrentDto extends OmitType(Cat, ['password'] as const) {}
