const SMALL = 425;
const MEDIUM = 768;
const LARGE = 1200;

enum DeviceSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  XLARGE = 'XLARGE'
}

const getDevice = (): DeviceSize => {
  if (window.innerWidth <= SMALL) {
    return DeviceSize.SMALL;
  } else if (window.innerWidth <= MEDIUM) {
    return DeviceSize.MEDIUM;
  } else if (window.innerWidth <= LARGE) {
    return DeviceSize.LARGE;
  }
  return DeviceSize.XLARGE;
};

const isDeviceSize = (deviceSize: DeviceSize): boolean => {
  return getDevice() === deviceSize;
};

export { DeviceSize, isDeviceSize };
