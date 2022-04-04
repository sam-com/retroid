import { useSound } from "@/hooks/useSound";
import { useStateRef } from "@/hooks/useStateRef";
import { useAppDispatch } from "@/redux/hooks";
import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { ReactNode, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { BgContainer } from "../layout/BgContainer";
import { FocusContainer } from "../layout/FocusContainer";
import { RomDetails } from "./RomDetails";
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

const RomTable = (props: RomTableProps) => {
  const tableRef = useRef<HTMLTableElement>(null);

  return (
    <BgContainer>
      <TableContainer
        id="abc123"
        sx={{ width: "auto", height: "100%", outline: "none" }}
      >
        <Table aria-label="roms table" size="small">
          <RomTableHeader />
          <RomTableBody {...props} />
        </Table>
      </TableContainer>
    </BgContainer>
  );
};

export function RomListItem(props: {
  rom: Rom;
  index: number;
  selectedRom: number;
  onClick: (romIndex: number) => void;
}) {
  const { rom, index, selectedRom, onClick } = props;
  const selected = index === selectedRom;
  const color = selected ? "primary.main" : "text.primary";

  return (
    <TableRow
      hover
      tabIndex={0}
      selected={index === selectedRom}
      onClick={() => onClick(index)}
      className="cursor-pointer select-none"
    >
      <TableCell width={48}>
        <img src="/consoles/snes.png" style={{ maxWidth: "48px" }} />
      </TableCell>
      <TableCell>
        <Typography variant="body1" fontWeight="bold" color={color}>
          {rom.name}
        </Typography>
      </TableCell>
    </TableRow>
  );
}

function RomArt(props: { selectedRom: number }) {
  const rom = roms[props.selectedRom];

  return (
    <BgContainer className="flex items-center justify-center p-8">
      <img
        src={rom?.art}
        className="h-fit rounded p-1 border-white border-2 border-opacity-50"
      />
    </BgContainer>
  );
}

const RomListLayout = (props: {
  romTable: ReactNode;
  romArt: ReactNode;
  romDetails: ReactNode;
}) => (
  <Grid container spacing={2}>
    <Grid item xs={7} height="100%">
      {props.romTable}
    </Grid>
    <Grid item container xs={5} spacing={2}>
      <Grid item xs={12} height="65%">
        {props.romArt}
      </Grid>
      <Grid item xs={12} height="35%">
        {props.romDetails}
      </Grid>
    </Grid>
  </Grid>
);

export function RomList() {
  const [selectedRom, setSelectedRom, selectedRomRef] = useStateRef(0);
  const navigate = useNavigate();
  const [play] = useSound("tab_1.m4a");

  const handleClickRom = (romIndex: number) => {
    play();
    setSelectedRom(romIndex);
  };

  const handleNavigate = () =>
    navigate(`/games/${roms[selectedRomRef.current].id}`);
  const handleMoveDown = () =>
    handleClickRom((selectedRomRef.current + 1) % roms.length);

  const handleMoveUp = () =>
    handleClickRom(
      selectedRomRef.current > 0 ? selectedRomRef.current - 1 : roms.length - 1
    );

  const inputHandlers = {
    Enter: { handler: handleNavigate, repeat: false },
    ArrowUp: { handler: handleMoveUp, repeat: true },
    ArrowDown: { handler: handleMoveDown, repeat: true },
  };

  const romTable = (
    <RomTable selectedRom={selectedRom} onClickRom={handleClickRom} />
  );
  const romArt = <RomArt selectedRom={selectedRom} />;
  const romDetails = <RomDetails />;

  return (
    <FocusContainer
      className="flex grow overflow-hidden"
      inputHandlers={inputHandlers}
    >
      <RomListLayout
        romTable={romTable}
        romArt={romArt}
        romDetails={romDetails}
      />
    </FocusContainer>
  );
}
