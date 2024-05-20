import { Controller, Get, HttpCode, Post, Res, Req } from "@nestjs/common";

@Controller("hero")
export class HeroController {
    @Get("index")
    index() {
        return 'Hero index'
    }
    @Get("get")
    @HttpCode(200)
    get(@Res() response: any) {
        response.json({
            title: 'Hero get'
        })
    }
    @Get("create")
    create(@Res({ passthrough: true }) response: any) {
        response.cookie("name", "Fajrul")
        return 'Create hero'
    }
    @Post("store")
    store(@Req() request: any, @Res() response: any) {
        response.status(200).json(request.body)
    }
}