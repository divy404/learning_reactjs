import { create, StateCreator } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface UserSlice {
    username: string;
    email: string;
    setUsername: (username: string) => void;
    setEmail: (email: string) => void;
}

export const createUserSlice : StateCreator<UserSlice> = (set) => ({
    username: 'Divyansh',
            email: 'divyanshj360@gmail.com',
            setUsername: (username: string) => set(() => ({ username })),
            setEmail: (email: string) => set(() => ({ email })),

})

export interface PostsSlice {
    usernames: string;
}

export const createPostsSlice: StateCreator<PostsSlice> = (set) => ({
    usernames:"divy2.0", 
})

export const useAppStore = create<UserSlice & PostsSlice>()(
    devtools(
        (...a) => ({
            ...createUserSlice(...a),
            ...createPostsSlice(...a),
        }) 
    )
);
 
