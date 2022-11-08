import React from "react";
import "./Table.css";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TransitionsModal from "./show_order";
import AddOrderModal from "./add_order";
// import { orderApi} from './service/config';
import { useDispatch, useSelector } from "react-redux";
import { loadorderStart } from "./redux/actions";
import { PieChart, Pie, Cell,Tooltip } from "recharts";

// const data = [
//   { name: "Waiting", value:4},
//   { name: "Processing", value: 1 },
//   { name: "Completed", value: 3 },
// ];


const dataForPieChart=(order_status_data)=>{
    const pieChartData=[];
    const status=[];
    order_status_data.map((i)=>{
        status.push(i["status"]);
        if(i["status"]==="Waiting"){
            pieChartData.push({name:i["status"],value:i["value"],color:"#FF5C5C"});
        }
        else if(i["status"]==="Processing"){
            pieChartData.push({name:i["status"],value:i["value"],color:"#FFBB28"});
        }
        else{
            pieChartData.push({name:i["status"],value:i["value"],color:"#00C49F"});
        }
    })
    return pieChartData;
}

// const COLORS = [, , "#00C49F"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Table = ({ item }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    dispatch(loadorderStart(item.id));
  };
  const handleClose = () => setOpen(false);

  const [openaddorder, setOrder] = React.useState(false);
  const handleaddorderOpen = () => {
    setOrder(true);
  };

  const handleaddorderClose = () => setOrder(false);
  console.log("$$$$",dataForPieChart(item.order_status));
  return (
    <div className="table">
      <div className="upper">
        <PieChart width={175} height={175}>
          <Pie
            data={dataForPieChart(item.order_status)}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={58}
            fill="#8884d8"
            dataKey="value"
          >
            {dataForPieChart(item.order_status).map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <TableRestaurantIcon className="icon" />
        <h1>{item.name}</h1>
      </div>

      <div className="bottom">
        <button onClick={handleOpen}>
          <VisibilityIcon />
        </button>
        <button onClick={handleaddorderOpen}>
          <AddCircleOutlineIcon />
        </button>
      </div>

      {open && (
        <TransitionsModal
          open={open}
          handleClose={handleClose}
          table={item}
          // handleSnakbarClick={handleSnakbarClick}
        />
      )}
      <AddOrderModal
        open={openaddorder}
        handleClose={handleaddorderClose}
        table={item}
        // handleSnakbarClick={handleSnakbarClick}
      />
    </div>
  );
};

export default Table;
