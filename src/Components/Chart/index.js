import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';
import Title from '../Title';
import axios from 'axios';

// Generate Sales Data
function createData(x, y) {
  return { x, y };
}

const data = [
  createData(1, 0),
  createData(2, 300),
  createData(3, 600),
  createData(4, 800),
  createData(5, 1500),
  createData(6, 2000),
  createData(7, 2400),
  createData(8, 2400),
  createData(9, undefined),
];



export default function Chart(props) {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>{props.contractAddress}</Title>
      <ResponsiveContainer >
        <LineChart
          data={props.data? props.data :data}
          margin={{
            top: 16,
            right: 16,
            bottom: 20,
            left: 24,
          }}
          
        >
          <XAxis
          dataKey="x"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
        
           
          >
           <Label
    
              position="bottom"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Submission 
            </Label>
          </XAxis>
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
            scale="linear"
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Accuracy
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="y"
            stroke={theme.palette.primary.main}
            dot={false}
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}