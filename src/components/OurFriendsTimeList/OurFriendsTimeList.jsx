import { Tooltip } from "@mui/material";
import { theme } from "../../services/theme";
import { styled } from "@mui/material/styles";
// import { tooltipClasses } from "@mui/material/Tooltip";
import { TimeListRow, TimeListTable } from "./OurFriendsTimeList.styled";

const WEEK = ["MN", "TU", "WE", "TH", "FR", "SA", "SU"];

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
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
  &.MuiTooltip-popper[data-popper-placement*="bottom"] {
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
  return (
    <LightTooltip
      sx={{ backgroundColor: "transparent" }}
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
