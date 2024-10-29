import {useState} from "react";
import NewProject from "./components/NewProject.jsx";
import ProjectsSideBar from "./components/ProjectsSideBar.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({    
    selectedProjectId: undefined,
    projects: []
  });

  function handleStartAddProject(){
    setProjectsState(prevState => {
      return { //使用 ...prevState 沿用上一个state的其他内容，仅更新声明的新内容
        ...prevState,
        selectedProjectId:null,

      };
    });
  }

  let content;
  if(projectsState.selectedProjectId === null){
    content = <NewProject />;
  }else if(projectsState.selectedProjectId === undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar onStartAddProject={handleStartAddProject}/>
      {content}
    </main>
  );
}

export default App;
