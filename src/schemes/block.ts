/* eslint-disable import/prefer-default-export */
import { IsInt, IsDefined } from 'class-validator';
import { Type } from 'class-transformer';

class GetBlockByNumber {
  @IsDefined()
  @IsInt()
  @Type(() => Number)
  blockNumber!: string;
}

export default {
  getBlockByNumber: {
    params: GetBlockByNumber,
  },
};
