import { TechRadarLoaderResponse, TechRadarApi} from '@backstage/plugin-tech-radar';
import entries from './entries';
import rings from './rings';
import quadrants from './quadrants';

export const mock: TechRadarLoaderResponse = {
  entries,
  quadrants,
  rings,
};

export class cpeRadar implements TechRadarApi {
  async load() {
    return mock;
  }
}
