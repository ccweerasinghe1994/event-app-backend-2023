import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller('/event')
export class EventController {
  @Get()
  findAll() {}
  @Get()
  findOne() {}
  @Post()
  create() {}
  @Patch()
  update() {}
  @Delete()
  delete() {}
}
