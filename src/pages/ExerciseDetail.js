import React , {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import {Box } from '@mui/material';
import {exerciseOptions , fetchData , youtubeOptions} from '../utils/fetchData';
// import { Details } from '@mui/icons-material';
import ExerciseVideos from '../components/ExerciseVideos'
import Detail from '../components/Detail'
import SimilarExercise from '../components/SimilarExercise'
const ExerciseDetail = () => {
  const[exerciseDetail , setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    const fetchExerciseData = async () =>{
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}` , exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}` , youtubeOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equimentExercisesData);
    }
    fetchExerciseData();
  }, [id])
  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos  exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercise targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail;