import { JsonController, Post, Param, HttpCode, OnUndefined, Get, Body, Patch } from 'routing-controllers'
import { findAll, findOne, create, update} from './service'
import { taskValitador } from './request'

@JsonController('/suportfy')
export class taskController {
  @Get('/task')
  @HttpCode(200)
  @OnUndefined(400)
  getAll() {
    return findAll()
  }

  @Get('/task/:id')
  @HttpCode(200)
  @OnUndefined(400)
  getById(@Param('id') id: string) {
    return findOne(id)
  }

  @Post('/task')
  @OnUndefined(400)
  postProject(@Body({ "required": true, "validate": true}) taskCreation: taskValitador) {
    return create(taskCreation)
  }

  @Patch('/task/:id')
  @OnUndefined(200)
  patchProject(@Param('id') id: number, @Body() taskRequest: taskValitador) {
    return update(taskRequest, id)
  }
}


