export interface Video {
    name: string;
    source: string;
}

export interface VideosByCountry {
    [country: string]: Video[];
}
