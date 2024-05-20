import { Controller, Get, HttpCode, Post, Res, Req, Header, Redirect } from "@nestjs/common";

const heros = [
    {
        id: 1,
        name: "Hero 1"
    }, 
    {
        id: 2,
        name: "Hero 2"
    }
]

@Controller("hero")
export class HeroController {
    @Get("index")
    index() {
        return 'Hero index'
    }
    @Get("get")
    @HttpCode(200)
    @Header('Content-Type', "application/json")
    get(@Res() response: any) {
        response.json({
            title: 'Hero get',
            data: heros
        })
    }
    @Get("create")
    create(@Res({ passthrough: true }) response: any) {
        response.cookie("name", "Fajrul")
        return 'Create hero'
    }
    @Post("store")
    store(@Req() request: any, @Res() response: any) {
        const { id, name } = request.body
        heros.push({ id, name })
        response.status(200).json(heros)
    }
    @Get('welcome')
    @Redirect('https://fajrulaslim.com')
    welcom() {
        return 'Welcome'
    }
}