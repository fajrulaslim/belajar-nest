import { Controller, Get, HttpCode, Post, Put, Res, Req, Param, Body, Header, Redirect, Delete } from "@nestjs/common";
import { CreateHeroDto } from "./dto/create-hero.dto";
import { UpdateHeroDto } from "./dto/update-hero.dto";
import { HeroService } from "./hero.service";

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
    constructor(private heroService: HeroService) {}

    @Get("index")
    index() {
        return 'Hero index'
    }
    @Get("get")
    @HttpCode(200)
    @Header('Content-Type', "application/json")
    get(@Res() response: any) {
        // response.json({
        //     title: 'Hero get',
        //     data: heros
        // })
        response.json(this.heroService.findAll())
    }
    @Get("detail/:id")
    detail(@Param("id") id: number) {
        const hero = heros?.find((item) => { return item.id==id })
        return hero
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
    @Post("store2")
    store2(@Req() request: any, @Body('name') name: any, @Res({ passthrough: true }) response: any) {
        return name
    }
    @Post("store_dto")
    store_dto(@Req() request: any, @Body() createHeroDto: CreateHeroDto, @Res({ passthrough: true }) response: any) {
        this.heroService.create(createHeroDto)
        return this.heroService.findAll()
    }
    @Get('welcome')
    @Redirect('https://fajrulaslim.com')
    welcom() {
        return 'Welcome'
    }
    @Put("update/:id")
    update(@Param('id') id:number, @Body() updateHeroDto: UpdateHeroDto) {
        const hero = heros?.find((item) => {
            if(item.id == id) {
                item.name = updateHeroDto.name            
            }
        })
        return heros
    }
    @Delete("delete/:id")
    delete(@Param('id') id:number) {
        const hero = heros?.filter((item) => {
            return item.id != id
        })
        return hero
    }
}