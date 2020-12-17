import { Controller, Get, Param, Query } from "@nestjs/common";
import { ApiParam } from "@nestjs/swagger";
import { AppService } from './app.service';
import { FooEnum } from "./dto/foo.enum";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/:foo/')
  @ApiParam({
    name: 'foo',
    enum: FooEnum,
    enumName: 'FooEnum',
  })
  getHello(@Param('foo') foo: FooEnum): string {
    return this.appService.getHello();
  }
}
