import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';

@Controller('/event')
export class EventController {
  @Get()
  findAll() {
    return [
      {
        id: 1,
        name: 'First event',
      },
      {
        id: 2,
        name: 'Second event',
      },
    ];
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return id;
  }
  @Post()
  create(@Body() body: any) {
    return body;
  }
  @Patch(':id')
  update(@Param('id') id: string) {
    return id;
  }
  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    return id;
  }
}
