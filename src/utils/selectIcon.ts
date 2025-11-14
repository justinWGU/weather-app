import { imgArr } from "./images";
// 0	Clear sky
// 80, 81, 82	Rain showers: Slight, moderate, and violent
// 1, 2, 3	Mainly clear, partly cloudy, and overcast
// 51, 53, 55	Drizzle: Light, moderate, and dense intensity
// 56, 57	Freezing Drizzle: Light and dense intensity
// 61, 63, 65	Rain: Slight, moderate and heavy intensity
// 80, 81, 82	Rain showers: Slight, moderate, and violent
// 95 *	Thunderstorm: Slight or moderate
// Array<string> = [sunny, cloudy, rain, lightning, partlyCloudy];

export function selectIcon(WMOCode: number) { // TODO: more efficient checks; More precise weather icons.
    if (WMOCode == 0) return imgArr[0];
    else if (WMOCode == 1) return imgArr[4];
    else if (WMOCode == 2 || WMOCode == 3) return imgArr[1]; 
    else if (WMOCode == 61 || WMOCode == 63 || WMOCode == 65 || WMOCode == 51 || WMOCode == 53 || WMOCode == 55 || WMOCode == 80 || WMOCode == 81 || WMOCode == 82) return imgArr[2]; 
    else if (WMOCode == 95 || WMOCode == 96 || WMOCode == 99) return imgArr[3];
  } 