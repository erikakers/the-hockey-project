import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class ClientController {
  @Get('*')
  public render(@Res() response: Response, @Req() request: Request) {
    response.send('the hockey project');
  }
}
