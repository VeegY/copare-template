export interface Clock {
    hours: number;
    minutes: number;
    seconds: number;
}

/** JUST A CODE CHANGE */
export function getTime(): Clock {
    const date = new Date();
    return {
        seconds: date.getUTCSeconds(),
        minutes: date.getUTCMinutes(),
        hours: date.getUTCHours()
    }
}


