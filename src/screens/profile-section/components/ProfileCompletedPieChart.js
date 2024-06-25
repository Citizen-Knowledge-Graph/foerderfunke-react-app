import React from 'react';
import {green, yellow} from '@mui/material/colors';
import {PieChart} from "@mui/x-charts/PieChart";
import VStack from "../../../components/VStack";
const ProfileCompletedPieChart = () => {

    const data = [
        { id: 1, value: 100},
    ];

    return (
        <VStack sx={{ position: 'relative' }}>
            <PieChart
                colors={[green[500], yellow[500]]}
                series={[
                    {
                        data,
                        innerRadius: 60,
                        outerRadius: 100,
                        paddingAngle: 5,
                        cornerRadius: 5,
                        startAngle: 0,
                        endAngle: 360,
                        colors: [green[500], yellow[500]],
                        cy: 150,
                        cx: 145,
                    },
                ]}
                width={300}
                height={300}
            />
        </VStack>
    );
};

export default ProfileCompletedPieChart;
