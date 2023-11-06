import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import dayjs from "dayjs";
import { useAppContext } from "./context/appContext";

export default function Project({project, openEditModal, setProjectToEdit}) {
  const {deleteProject, users, devices } = useAppContext();
  const projectUsers = users.filter(user => user.projectId === project.id)
  const projectDevices = devices.filter(device => device.projectId === project.id)
  
  return (
    <Grid item xs={6}>
    <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Duration : {`${dayjs(project.beginDate).format('DD/MM/YYYY')} - ${project.expirationDate ? dayjs(project.expirationDate).format('DD/MM/YYYY') : ""}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          users : {projectUsers.map((user,index) => <span key={index}>{`${user.firstName} ${user.lastName}, `} 
          </span>)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
      devices: {projectDevices.map((device, index) => <span key={index}>{device.serialNumber}, </span>)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => deleteProject(project.id)}> delete </Button>
        <Button size="small" onClick={() => {openEditModal(true); setProjectToEdit({...project, users: [...projectUsers], devices: [...projectDevices]})}}>edit</Button>
      </CardActions>
    </Card>
    </Grid>
  );
}