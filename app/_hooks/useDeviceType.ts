import { useEffect, useState } from "react"

export enum DeviceType {
  Android = "Android",
  IOS = "IOS",
  Other = "Unknown",
}

const DEVICES = [
  { deviceType: DeviceType.Android, regex: /Android/ },
  { deviceType: DeviceType.IOS, regex: /(iPhone|iPod|iPad)/ },
]

export default function useDeviceType() {
  const [deviceType, setDeviceType] = useState(DeviceType.Other)

  useEffect(() => {
    const device = DEVICES.find((d) => navigator.userAgent.match(d.regex))
    const _deviceType = device?.deviceType
    if (_deviceType) {
      setDeviceType(_deviceType)
    }
  }, [deviceType])

  return deviceType
}
