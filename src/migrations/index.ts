import * as migration_20260907_085225 from './20260907_085225';

export const migrations = [
  {
    up: migration_20260907_085225.up,
    down: migration_20260907_085225.down,
    name: '20260907_085225'
  },
];
