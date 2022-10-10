import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, BodyParam, HeaderParam } from 'routing-controllers'
import { findAll, findOne } from './service'

@JsonController('/suportfly')
export class getAllTasks {
  @Get('/tasks')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }

}


@JsonController('/suportfly')
export class getTaskById {
  @Get('/tasks/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getWithFilter(@Param('id') id: string) {
    return findOne(id)
  }
}

/*
@Post('')
@HttpCode(201)
@OnUndefined(500)
post(@Body({ validate: true }) fromTosRequest: FromToRequest) {
  return create(fromTosRequest)
}
*/