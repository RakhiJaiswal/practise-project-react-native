import React from 'react';
import {View} from 'react-native';
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
} from 'react-native-responsive-linechart';
import {ResponsiveSize} from '../utils/ResponsiveSize';

const Charts = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Chart
        style={{height: ResponsiveSize(200), width: ResponsiveSize(400)}}
        data={[
          {x: -2, y: 15},
          {x: -1, y: 10},
          {x: 0, y: 12},
          {x: 1, y: 7},
          {x: 2, y: 6},
          {x: 3, y: 8},
          {x: 4, y: 10},
          {x: 5, y: 8},
          {x: 6, y: 12},
          {x: 7, y: 14},
          {x: 8, y: 12},
          {x: 9, y: 13.5},
          {x: 10, y: 18},
        ]}
        padding={{left: 40, bottom: 20, right: 20, top: 20}}
        xDomain={{min: -2, max: 10}}
        yDomain={{min: 0, max: 20}}>
        <VerticalAxis
          tickCount={11}
          theme={{labels: {formatter: v => v.toFixed(2)}}}
        />
        <HorizontalAxis
          tickCount={10}
          theme={{labels: {formatter: v => v.toFixed(1)}}}
        />
        <Area
          theme={{
            gradient: {
              from: {color: '#ffa502'},
              to: {color: '#ffa502', opacity: 0.4},
            },
          }}
        />
        <Line
          theme={{
            stroke: {color: '#ffa502', width: 5},
            scatter: {default: {width: 4, height: 4, rx: 2}},
          }}
        />
      </Chart>
      <Chart
        style={{
          height: ResponsiveSize(200),
          width: '100%',
          marginTop: ResponsiveSize(40),
        }}
        data={[
          {x: 5, y: 15},
          {x: 6, y: 6},
          {x: 7, y: 15},
          {x: 8, y: 3},
        ]}
        padding={{left: 40, bottom: 20, right: 20, top: 20}}
        xDomain={{min: 5, max: 8}}>
        <VerticalAxis
          tickValues={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
          theme={{
            axis: {stroke: {color: '#aaa', width: 2}},
            ticks: {stroke: {color: '#aaa', width: 2}},
            labels: {formatter: (v: number) => v.toFixed(2)},
          }}
        />
        <HorizontalAxis
          tickCount={9}
          theme={{
            axis: {stroke: {color: '#aaa', width: 2}},
            ticks: {stroke: {color: '#aaa', width: 2}},
            labels: {label: {rotation: 50}, formatter: v => v.toFixed(1)},
          }}
        />

        <Line theme={{stroke: {color: 'red', width: 2}}} />
        <Line
          smoothing="bezier"
          tension={0.15}
          theme={{stroke: {color: 'blue', width: 2}}}
        />

        <Line
          smoothing="bezier"
          tension={0.3}
          theme={{stroke: {color: 'green', width: 2}}}
        />
        <Line
          smoothing="cubic-spline"
          tension={0.3}
          theme={{stroke: {color: 'orange', width: 2}}}
        />
      </Chart>
    </View>
  );
};

export default [{screenName: 'Charts', componentName: Charts}];
