/* eslint-disable @typescript-eslint/naming-convention */
export interface Card{
    card_image: string;
    name: string;
    colors: Array<string>;
    description: string;
    stats: string;
    types: string;
}

export interface User{
    username: string;
    password: string;
}

export interface FireUser {
    uid: string;
    email: string;
    displayName: string;
    photoURL: string;
    emailVerified: boolean;
 }

/*export interface ScrollBaseDetail {
    isScrolling: boolean;
}

export interface ScrollDetail extends GestureDetail, ScrollBaseDetail {
    scrollTop: number;
    scrollLeft: number;
}*/

