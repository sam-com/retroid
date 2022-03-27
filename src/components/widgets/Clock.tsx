import {
  Battery20,
  Battery30,
  Battery50,
  Battery60,
  Battery80,
  Battery90,
  BatteryAlert,
  BatteryCharging20,
  BatteryCharging30,
  BatteryCharging50,
  BatteryCharging60,
  BatteryCharging80,
  BatteryCharging90,
  BatteryChargingFull,
  BatteryFull,
  SignalWifi4Bar,
} from "@mui/icons-material";
import { useBattery } from "react-use";

import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const getClosest = (goal: number, counts: number[]) =>
  counts.reduce((prev, curr) =>
    Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev
  );

const batteryLevels = {
  100: [<BatteryFull />, <BatteryChargingFull />],
  90: [<Battery90 />, <BatteryCharging90 />],
  80: [<Battery80 />, <BatteryCharging80 />],
  60: [<Battery60 />, <BatteryCharging60 />],
  50: [<Battery50 />, <BatteryCharging50 />],
  30: [<Battery30 />, <BatteryCharging30 />],
  20: [<Battery20 />, <BatteryCharging20 />],
  10: [<BatteryAlert />, <BatteryAlert />],
};

const getBatteryIcon = () => {
  const battery = useBattery();
  const levels = Object.keys(batteryLevels).map((level) => parseInt(level, 10));

  if (battery.isSupported && battery.fetched) {
    const closest = getClosest(battery.level * 100, levels);

    const iconIndex = battery.charging ? 1 : 0;
    return Object.entries(batteryLevels).find(
      ([level]) => parseInt(level, 10) === closest
    )?.[1]?.[iconIndex];
  }

  return null;
};

export function Clock() {
  const [dateState, setDateState] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  const battery = getBatteryIcon();

  return (
    <Stack direction="row" spacing={2} className="flex items-center">
      <Typography
        variant="h6"
        fontWeight="bold"
        color="text.primary"
        sx={{ userSelect: "none" }}
      >
        {dateState.toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
        })}
      </Typography>
      <Typography
        variant="h6"
        color="text.primary"
        className="flex items-center"
      >
        {battery}
      </Typography>
    </Stack>
  );
}
