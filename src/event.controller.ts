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
import { CreateEventDto } from './create-event.dto';
import { UpdateEventDto } from './update-event.dto';
import { Event } from './event.entity';

@Controller('/event')
export class EventController {
  private events: Event[] = [
    {
      id: 1,
      name: 'First event',
      when: new Date('2021-01-01T00:00:00.000Z'),
      address: 'Rua A',
      description: 'Event description',
    },
    {
      id: 2,
      name: 'Second event',
      when: new Date('2021-01-01T00:00:00.000Z'),
      address: 'Rua B',
      description: 'Event description',
    },
  ];
  @Get()
  findAll() {
    return this.events;
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.events.find((event) => event.id === Number(id));
  }
  @Post()
  create(@Body() body: CreateEventDto) {
    const event: Event = {
      ...body,
      id: this.events.length + 1,
      when: new Date(body.when),
    };
    this.events.push(event);
    return event;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateEventDto) {
    const index = this.events.findIndex((event) => event.id === Number(id));
    this.events[index] = {
      ...this.events[index],
      ...body,
      when: body.when ? new Date(body.when) : this.events[index].when,
    };
    return this.events[index];
  }
  @Delete(':id')
  @HttpCode(204)
  delete(@Param('id') id: string) {
    this.events = this.events.filter((event) => event.id !== Number(id));
  }
}
