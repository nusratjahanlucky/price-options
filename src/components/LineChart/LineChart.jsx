import { LineChart as LChart,Line,XAxis,YAxis } from 'recharts';
const LineChart = () => {
    const subjectMarksData =[
        { id:1, name:'alice', physics:82,chemistry:82, math:78 },
        { id:2, name:'Bob', physics:98,chemistry:99,  math:85 },
        { id:3, name:'Charlie', physics:90,chemistry:89,  math:80 },
        { id:4, name:'David', physics:86,chemistry:87,  math:91 },
        { id:5, name:'Emma', physics:97,chemistry:95,  math:99 },
        { id:6, name:'Frank', physics:99,chemistry:90,  math:90 },
        { id:7, name:'Grace', physics:89,chemistry:98,  math:78 },
        { id:8, name:'Isaac', physics:88,chemistry:92,  math:88 },
        { id:9, name:'alice', physics:87,chemistry:90,  math:70 },
        { id:10, name:'jack', physics:99,chemistry:88,  math:98 },

    ]
    return (
        <div>
            <LChart width={800} height={400} data={subjectMarksData}>
            <XAxis dataKey="name"/> 
            <YAxis/>  
                <Line dataKey="math"></Line>
                <Line dataKey="physics" stroke="green"></Line>
                <Line dataKey="chemistry"stroke="red"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;