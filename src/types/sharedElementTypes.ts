export interface NavigationOptions {
    headerStyle: any,
    headerLeft: () => React.ReactNode,
    headerRight: () => React.ReactNode,
    headerTitle: string
}

export interface ExplorePressInfo extends ExploreCardInfo {
    y: number,

}

export interface ExploreCardInfo {
    imageInfo: any,
    title: string,
    backgroundColor: string,
    url: string,
    category: string,
}
export interface ImageInfo {
    id: number,
    url: string
}

export interface IconInfo {
    id: number,
    name: string,
    description: string,
    url: string
}

export type TransitionString = 'default' | 'forward' | 'reversing' | 'finished'