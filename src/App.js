import React, { useEffect } from "react"
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import DailyWise from "./components/DailyWise"
import { fetchData } from "./redux/actions";
import  CategoryDistribution from "./components/CategoryDistribution";
import UserSatisfaction from "./components/UserSatisfaction";
import WeekWise from "./components/WeekWise";

function App() {
  // first we initialize useDispatch hook to dispatch actions
  const dispatch = useDispatch();
  // Extracting 'data' from Redux store state
  const data = useSelector(state => state.data);
// use useEffect hook to dispatch fetchData action
  useEffect(() => {
    // then dispatching fetchData action
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <h1 className="title">Chart Graph</h1>
        <div className="header">
          <DailyWise data={data} />
          <CategoryDistribution data={data}/>
          <UserSatisfaction data={data}/>
          <WeekWise data={data}/>
        </div>
    </>
  );
}
export default App;
