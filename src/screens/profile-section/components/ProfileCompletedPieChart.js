import React from 'react';
import {Typography} from '@mui/material';
import {green, yellow} from '@mui/material/colors';
import {PieChart} from "@mui/x-charts/PieChart";
import VStack from "../../../components/VStack";
import HStack from "../../../components/HStack";

const ProfileCompletedPieChart = ({completedSections, totalSections}) => {

    const data = [
        { id: 0, value: 10 },
        { id: 1, value: 90 },
    ];

    return (
        <VStack sx={{ position: 'relative' }}>
            <PieChart
                colors={[green[500], yellow[500]]}
                series={[
                    {
                        data,
                        innerRadius: 105,
                        outerRadius: 120,
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
            <HStack
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                }}
            >
                <Typography variant="h3">{completedSections}/{totalSections}</Typography>
            </HStack>
        </VStack>
    );
};

export default ProfileCompletedPieChart;
