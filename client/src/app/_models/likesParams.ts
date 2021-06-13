import { User } from './user';
export class LikesParams {
    predicate: string = 'liked'
    pageNumber = 1;
    pageSize = 5;

    constructor(user:User) {
        this.predicate = 'liked' ? 'liked' : 'likedBy';
    }
}