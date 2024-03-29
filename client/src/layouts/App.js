import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Landing from "./Landing";
import StudentRegister from "../components/StudentRegister";
import TeacherRegister from "../components/TeacherRegister";
import VideoFill from "../components/VideoFill";
import MarketPlace from "../pages/Marketplace";
import Provider from "../context/FormOpen";
import StudentClass from "../pages/StudentClass";
import TeacherDashboard from "../pages/TeacherDashboard";
import TeacherClass from "../pages/TeacherClass";
import AddQuestions from "../pages/AddQuestions";
import Certificate from "../components/Certificate";
import Container from "../components/container/Container";
import StudentContainer from "../components/studentContainer/StudentContainer";
import { ReactSession } from "react-client-session";
import WatchVideo from "../components/WatchVideo";
import AssignmentContent from "../components/AssignmentContent";
import StudentDashboard from "../pages/StudentDashboard";
import Notes from "../pages/Notes";
import Questions from "../pages/Questions";
import Passed from "../pages/Passed";
import Failed from "../pages/Failed";

export default function App(props) {
  ReactSession.setStoreType("sessionStorage");
  function checker(type) {
    if (
      ReactSession.get("data") === undefined ||
      ReactSession.get("data") === ""
    ) {
      return true;
    }
    if (type === "") {
      return false;
    }
    if (ReactSession.get("data").type !== type) {
      return true;
    }
  }

  // React router here
  return (
    <Provider>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Landing />}>
            <Route
              exact
              path="/studentregister"
              element={<StudentRegister />}
            />
            <Route path="/teacherregister" element={<TeacherRegister />} />
          </Route>
          <Route path="videofill" element={<VideoFill />} />
          <Route
            path="marketplace"
            element={<Dashboard component={<MarketPlace />} />}
          />
          <Route path="studentclass" element={<StudentClass />} />
          <Route path="/teacher/questions/:code" element={<AddQuestions />} />
          <Route path="/certificate/:cred" element={<Certificate />} />
        </Route>

        <Route path="/whiteboard" element={<Container />} />
        <Route path="/student-whiteboard" element={<StudentContainer />} />
        <Route path="/watchvideo/:code" element={<WatchVideo />} />
        <Route path="/assignment" element={<AssignmentContent />} />
        <Route
          path="/teacher"
          element={<TeacherDashboard checker={() => checker("teacher")} />}
        />
        <Route
          path="/student"
          element={<StudentDashboard checker={() => checker("student")} />}
        />
        <Route path="/teacher/class/:code" element={<TeacherClass />} />
        <Route path="/student/class/:code" element={<StudentClass />} />
        <Route path="/teacher/Notes/:id" element={<Notes />} />
        <Route path="/student/Notes/:id" element={<Notes />} />
        <Route path="/student/Quiz/:code" element={<Questions />} />
        <Route path="/passed" element={<Passed />} />
        <Route path="/failed" element={<Failed />} />
      </Routes>
    </Provider>
  );
}
