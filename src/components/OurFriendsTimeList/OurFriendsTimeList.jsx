import { Tooltip } from "@mui/material";
import { theme } from "../../services/theme";
import { styled } from "@mui/material/styles";
// import { tooltipClasses } from "@mui/material/Tooltip";
import { TimeListRow, TimeListTable } from "./OurFriendsTimeList.styled";
import { useState } from "react";

const WEEK = ["MN", "TU", "WE", "TH", "FR", "SA", "SU"];

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip
    {...props}
    // disableTouchListener="true"
    classes={{ popper: className }}
  />
  // ))(() => ({
  //   [`& .${tooltipClasses.tooltip}`]: {
  //     backgroundColor: "white",
  //     border: `1px solid ${theme.colors.accent}`,
  //     boxShadow: theme.shadows.time,
  //     borderRadius: 5,
  //     color: theme.colors.black,
  //     margin: "0",
  //   },
  // }));
))`
  &.MuiTooltip-popper[data-popper-placement="bottom"] {
    margin-top: 0;
  }
  & .MuiTooltip-tooltipPlacementBottom {
    background: white;
    border: 1px solid ${theme.colors.accent};
    box-shadow: ${theme.shadows.time};
    border-radius: 8px;
    color: ${theme.colors.black};
    margin: 0;
    padding: 0;
  }
`;

export default function OurFriendsTimeList({
  workDays,
  dayOfTheWeek,
  children,
}) {
  const [isOpenTime, setIsOpenTime] = useState(false);

  const handlerOpenTime = () => {
    setIsOpenTime((prev) => !prev);
  };

  return (
    <LightTooltip
      sx={{ backgroundColor: "transparent" }}
      open={isOpenTime}
      onClick={handlerOpenTime}
      placement="bottom-start"
      title={
        workDays ? (
          <TimeListTable>
            <tbody>
              {workDays.map((item, index) => (
                <TimeListRow
                  key={item._id}
                  style={{
                    color:
                      index === dayOfTheWeek
                        ? theme.colors.accent
                        : theme.colors.black,
                  }}
                >
                  <td style={{ paddingRight: "14px" }}>{WEEK[index]}</td>
                  <td>{item.from}</td>
                  <td>-</td>
                  <td>{item.to}</td>
                </TimeListRow>
              ))}
            </tbody>
          </TimeListTable>
        ) : (
          ""
        )
      }
    >
      {children}
    </LightTooltip>
  );
}
