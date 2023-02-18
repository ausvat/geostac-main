import React from "react";
import { alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SwitchLeftIcon from '@mui/icons-material/SwitchLeft';
import SwitchRightIcon from '@mui/icons-material/SwitchRight';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import Checkbox from "@mui/material/Checkbox";


let css = {
  button: {
    width: "auto",
    color: "#000",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    "&:hover": {
      backgroundColor: alpha("#eee", 0.9)
    }
  }
};

/**
 * Component lets user view and use stac queries
 * @component
 * @example
 * <StacQueryConsole />
 */
export default function QueryConsole() {

  const [consoleAuto, setConsoleAuto] = React.useState(true);
  const [consoleAutoWkt, setConsoleAutoWkt] = React.useState(false);

  const handleConsoleAutoChange = (event) => {
    setConsoleAuto(event.target.checked);
  }

  const handleConsoleAutoWktChange = (event) => {
    setConsoleAutoWkt(event.target.checked);
  }

  return (
    <details id="query-console-container">
      <summary id="query-console-collapsed">
        <span id="query-console-title">
          <ArrowDropDownCircleIcon sx={{marginRight:1}}/> Query Console
        </span>
      </summary>
      <div id="query-console-expanded">
          <div id="query-textarea-container">
            <textarea id="query-textarea" placeholder="> Type Query Here"></textarea>
            <div id="query-command-bar">
              <ButtonGroup
                orientation="vertical"
                size="small"
                variant="contained">
                <Button id="copyCodeButton" sx={css.button} startIcon={<ContentCopyIcon />}>Copy Code</Button>
                <Button id="runQueryButton" sx={css.button} startIcon={<PlayArrowIcon />}>Run STAC Query</Button>
              </ButtonGroup>
            </div>
          </div>
      </div>
    </details>
  );
}
