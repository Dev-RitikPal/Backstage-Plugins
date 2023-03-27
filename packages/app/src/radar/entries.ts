import {
  RadarEntry,
} from '@backstage/plugin-tech-radar';
import data from './entries.json';

const newData = data.map(entry => ({
    ...entry,
    timeline: entry.timeline.map(timeline => ({
      ...timeline,
      date: new Date(timeline.date)
    })
)}
));


const entries: Array<RadarEntry> = newData;

export default entries;
