import { chapter } from './chapter';

export class subject
{
    id: number;
    name:string;
    no_of_chapters:number;
    no_of_videos:number;
    total_solved:number;
    total_attempt:number;
    completion:number;
    time_taken:number;
    accuracy:number;
    chapters:chapter[];

}