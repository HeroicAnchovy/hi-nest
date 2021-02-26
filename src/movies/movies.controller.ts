import { Controller, Delete, Get, Param, Body, Patch, Post, Query } from '@nestjs/common';

@Controller('movies')
export class MoviesController {

    @Get()
    getAllMovies(){
        return 'This will return all movies';
    }

    @Get('/serach')
    serach(@Query('year') serachingYear: string) {
        return `We are searching for a movie with atitle: ${serachingYear}`;
    }

    @Get('/:id')
    getOneMovie(@Param('id') id: string) {
        return `This will return one movie with the id: ${id}`;
    }

    @Post()
    create(@Body() movieData) {
        console.log(movieData);
        return movieData;
    }

    @Delete('/:id')
    remove(@Param('id') movieId:string ) {
        return `this will delete a movie with the id: ${movieId}`;
    }

    @Patch('/:id')
    path(@Param('id') movieId: string, @Body() updateData) {
        return {
            updatedMovie: movieId,
            ...updateData,
        };
    }
}
