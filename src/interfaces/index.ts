export interface User {
    email: string,
    password: string,
    username?:string,
    artistName?:string, 
    labelName?: string,
    location?: string,
    url?: string,
    //role?: enum,
    //refreshTokens[]?: string,
    googleId?: string
    picture?: string
}

