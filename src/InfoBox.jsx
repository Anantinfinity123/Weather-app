import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function infoBox({ info }) {
    const HOT_URL = "https://wallpapers.com/images/hd/summer-season-daytime-2s1eg1mymb6g3skt.jpg";
    const COLD_URL = "https://cff2.earth.com/uploads/2016/10/27135812/extreme-cold-copy-2.jpg";
    const RAINY_URL = "https://i.redd.it/dr3l9hv12rf01.jpg"; 

    return (
        <div className="Infobox">
            {/* <h1>{info.feels_like}</h1> */}
            <div className='cardContainer'>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 140 }}
                        image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city} {info.humidity > 80 ?  <ThunderstormIcon/>: info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" component={"span"}>
                            <p>Temperature:{info.temp}</p>
                            <p>Humidity:{info.humidity}</p>
                            <p>Min temp:{info.tempMin}</p>
                            <p>Max temp:{info.tempMax}</p>
                            <p>The weather can be described as: <i>{info.weather}</i> and feelsLike : <i>{info.feelsLike}</i></p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}