import { useKeyboardInput } from "@/hooks/useKeyboardInput";
import { useStateRef } from "@/hooks/useStateRef";
import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BgContainer } from "../layout/BgContainer";
import { Rom, roms } from "./roms";

interface RomTableProps {
  selectedRom: number;
  onClickRom: (romIndex: number) => void;
}

function RomTableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell align="left"></TableCell>
        <TableCell>Name</TableCell>
      </TableRow>
    </TableHead>
  );
}

function RomTableBody(props: RomTableProps) {
  return (
    <TableBody>
      {roms.map((rom, index) => (
        <RomListItem
          key={rom.id}
          index={index}
          rom={rom}
          selectedRom={props.selectedRom}
          onClick={props.onClickRom}
        />
      ))}
    </TableBody>
  );
}

const RomTable = (props: RomTableProps) => (
  <BgContainer>
    <TableContainer sx={{ flexGrow: 1, width: "auto" }}>
      <Table aria-label="roms table" size="small">
        <RomTableHeader />
        <RomTableBody {...props} />
      </Table>
    </TableContainer>
  </BgContainer>
);

export function RomListItem(props: {
  rom: Rom;
  index: number;
  selectedRom: number;
  onClick: (romIndex: number) => void;
}) {
  const { rom, index, selectedRom, onClick } = props;

  return (
    <TableRow
      hover
      selected={index === selectedRom}
      onClick={() => onClick(index)}
      className="cursor-pointer select-none"
    >
      <TableCell width={48}>
        <img src="/consoles/snes.png" style={{ maxWidth: "36px" }} />
      </TableCell>
      <TableCell>
        <Typography variant="body1" color="text.primary">
          {rom.name}
        </Typography>
      </TableCell>
    </TableRow>
  );
}

function RomArt(props: { selectedRom: number }) {
  const rom = roms[props.selectedRom];

  return (
    <BgContainer className="flex justify-center items-center">
      <img src={rom?.art} style={{ height: "fit-content" }} />
    </BgContainer>
  );
}

function RomDetails() {
  return (
    <BgContainer>
      <Typography variant="body1" color="text.primary">
        Rom Details
      </Typography>
    </BgContainer>
  );
}

function RomDescription() {
  return (
    <BgContainer>
      <Typography variant="body1" color="text.primary">
        Description
      </Typography>
    </BgContainer>
  );
}

const RomListLayout = (props: {
  romTable: ReactNode;
  romArt: ReactNode;
  romDetails: ReactNode;
  romDescription: ReactNode;
}) => (
  <Grid container spacing={2}>
    <Grid item xs={5}>
      {props.romTable}
    </Grid>
    <Grid item container xs={7} spacing={2}>
      <Grid item xs={12} height="65%">
        {props.romArt}
      </Grid>
      {/* <Grid item xs={5} height="65%">
        {props.romDetails}
      </Grid> */}
      <Grid item xs={12} height="35%">
        {props.romDescription}
      </Grid>
    </Grid>
  </Grid>
);

export function RomList() {
  const [selectedRom, setSelectedRom, selectedRomRef] = useStateRef(0);
  const handleClickRom = (romIndex: number) => setSelectedRom(romIndex);
  const navigate = useNavigate();

  const handleNavigate = () =>
    navigate(`/games/${roms[selectedRomRef.current].id}`);

  useKeyboardInput("Enter", handleNavigate);
  useKeyboardInput("ArrowUp", () =>
    setSelectedRom(
      selectedRomRef.current > 0 ? selectedRomRef.current - 1 : roms.length - 1
    )
  );
  useKeyboardInput("ArrowDown", () =>
    setSelectedRom((selectedRomRef.current + 1) % roms.length)
  );

  const romTable = (
    <RomTable selectedRom={selectedRom} onClickRom={handleClickRom} />
  );
  const romArt = <RomArt selectedRom={selectedRom} />;
  const romDetails = <RomDetails />;
  const romDescription = <RomDescription />;

  return (
    <RomListLayout
      romTable={romTable}
      romArt={romArt}
      romDetails={romDetails}
      romDescription={romDescription}
    />
  );
}
