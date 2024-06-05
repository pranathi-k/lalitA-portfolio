import { Sunburst } from "@ant-design/charts";
import { Card } from "antd";
import React from 'react';
import './css/navbar.css';


const Skills = () => {
    const data = {
        "name":"skills",
        "children": [
            {
                "name": "Domain Expertise",
                "value": 5,
                "children": [
                    {
                        "name": "Autonomous Systems Control",
                        "value": 1
                    },
                    {
                        "name": "Communication Systems",
                        "value": 1
                    },
                    {
                        "name": "Computer Vision",
                        "value": 1
                    },
                    {
                        "name": "Machine Learning",
                        "value": 1
                    },
                    {
                        "name": "Neural Networks",
                        "value": 1
                    },
                ]
            },
            {
                "name": "Programming",
                "value": 5,
                "children": [
                    {
                        "name": "Python",
                        "value": 1
                    },
                    {
                        "name": "C",
                        "value": 1
                    },
                    {
                        "name": "Embedded C",
                        "value": 1
                    },
                    {
                        "name": "Java",
                        "value": 1
                    },
                    {
                        "name": "System Verilog",
                        "value": 1
                    },
                ]
            },
            {
                "name": "Frameworks & Libraries",
                "value": 2,
                "children": [
                    {
                        "name": "OpenCV for Computer Vision",
                        "value": 1
                    },
                    {
                        "name": "GNS3 for network simulation",
                        "value": 1
                    }
                ]
            },
            {
                "name": "Simulation and Design tools",
                "value": 5,
                "children": [
                    {
                        "name": "ROS/ROS2",
                        "value": 1
                    },
                    {
                        "name": "Gazebo",
                        "value": 1
                    },
                    {
                        "name": "AirSim",
                        "value": 1
                    },
                    {
                        "name": "Unity",
                        "value": 1
                    },
                    {
                        "name": "Unreal Engine(UE5)",
                        "value": 1
                    },
                ]
            },
            {
                "name": "Hardware Platforms",
                "value": 3,
                "children": [
                    {
                        "name": "Jetson Nano",
                        "value": 1
                    },
                    {
                        "name": "Arduino",
                        "value": 1
                    },
                    {
                        "name": "Raspberry Pi",
                        "value": 1
                    }
                ]
            }
        ]
    };
    const config ={
    data: data,
    innerRadius: 0.3,
    interactions: [
      {
        type: 'element-active',
      },
    ],
    legend: true,
    label: {
        layout: [
          {
            type: 'limit-in-shape',
          },
        ],
        style: {
            fill: '#fff', // Change label text color
            fontSize: 7, // Change label text size
          },
      },
    };
    return (
        <div id="skills" class="transition-swipe" style={{paddingTop:'55px', backgroundColor:'black'}}>
        {/* <Card 
        style={{
            height: '900px',
            left:'10%',
            width: '80%',
            borderRadius:'5px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)',
            backgroundColor:'white',
        }}
        >            */}
        <Sunburst style={{ 
                    height: '850px',
                    left:'50%',
                    bottom:'20%'
                    }}
                {...config}/>

        {/* </Card>  */}
        </div>
    );
}

export default Skills;
