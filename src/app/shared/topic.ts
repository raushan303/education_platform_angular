import { subtopic } from './subtopic';

export class topic
{
    id: number;
    name:string;
    no_of_subtopic:number;
    no_of_videos:number;
    total_solved:number;
    total_attempt:number;
    completion:number;
    time_taken:number;
    accuracy:number;
    subtopics:subtopic[];
}