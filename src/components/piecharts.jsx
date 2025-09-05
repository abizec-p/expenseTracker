import { px } from "motion/react";
import {BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Cell, CartesianGrid} from "recharts";


const data = [
{name:"Total Income", value:1200},
{name:"Total Expense", value:700},
{name:"Balance", value:500},
];


export default function BarGraph(){
    return(
<BarChart 
className="bar-chart-box"
width={530}
height={400}
data={data}
margin={{top:70,right:100,left:40,bottom:40}}>
<CartesianGrid strokeDasharray="3 3"/>
<XAxis dataKey="name"/>
<YAxis/>
<Tooltip/>
<Bar dataKey="value" barSize={50} radius={[10,10,0,0]}>
    <Cell fill="green" />
    <Cell fill="rgb(184,0,0)"/>
    <Cell fill="rgb(0, 94, 142)"/>

</Bar>
</BarChart>
    )
}