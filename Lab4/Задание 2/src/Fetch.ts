import { Api, CommentDTO, PostDTO } from "./Api";

const api = new Api();

/**
 * Необходимо реализовать функцию для получения первых 5 постов с нечётными id
 */
export async function getOddPosts(): Promise<PostDTO[]> {
   const api = new Api();
   const posts = await api.getPosts();
   return posts.filter((post: any) => post.id % 2 !== 0).slice(0,5);
};

/**
 * Необходимо реализовать функцию для получения первых 5 комментариев с чётными id
 */
export async function getEvenComments(): Promise<CommentDTO[]> {
   const api = new Api();
   const comments = await api.getComments();
   return comments.filter((comment: any) => comment.id % 2 === 0).slice(0,5);
}