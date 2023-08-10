export interface Video {
  name: string;
  source: string;
}

export interface VideosByRegion {
  [region: string]: Video[];
}

export interface WebcamLocation {
  name: string;
  country: string;
}
