import React from "react";
import ProjectContainer from "../components/ProjectContainer";
import Project from "../components/Project";
import Brew2YouImg from "../img/brew2you.png";
import CodingQuizImg from "../img/coding_quiz.png";
import DayPlannerImg from "../img/day_planner.png";
import BookLineSinkerImg from "../img/booklineandsinker.png";
import GoogleBooksSearchImg from "../img/googlebookssearch.png";
import EmployeeDirectoryImg from "../img/employeedirectory.png";
import VideoStarImg from "../img/videostar.png";

const Portfolio = () => {
  return (
    <ProjectContainer>
      <Project
        projectName="Brew 2 You"
        image={Brew2YouImg}
        altText={"brew 2 you"}
        hostedLink={"https://zackapotamus.github.io/Brew-2-You/"}
        githubLink={"https://github.com/zackapotamus/Brew-2-You"}
      />
      <Project
        projectName="Book Line and Sinker"
        image={BookLineSinkerImg}
        altText={"book line and sinker"}
        hostedLink={"https://salty-sea-30078.herokuapp.com/"}
        heroku={true}
        githubLink={"https://github.com/fmiusov/Book-Line-And-Sinker"}
      />
      <Project
        projectName="Google Books Search"
        image={GoogleBooksSearchImg}
        altText={"brew 2 you"}
        hostedLink={"https://react-gbs-app.herokuapp.com/"}
        githubLink={"https://github.com/zackapotamus/google-books-search"}
      />
      <Project
        projectName="Employee Directory"
        image={EmployeeDirectoryImg}
        altText={"employee directory"}
        githubLink={"https://github.com/zackapotamus/employee-directory"}
        hostedLink={"https://zackapotamus.github.io/employee-directory/"}
      />
      <Project
        projectName="Day Planner"
        image={DayPlannerImg}
        altText={"day planner"}
        githubLink={"https://github.com/zackapotamus/Day-Planner"}
        hostedLink={"https://zackapotamus.github.io/Day-Planner/"}
      />
      <Project
        projectName="Coding Quiz"
        image={CodingQuizImg}
        altText={"coding quiz"}
        githubLink={"https://github.com/zackapotamus/Code-Quiz/"}
        hostedLink={"https://zackapotamus.github.io/Code-Quiz/"}
      />
      <Project
        projectName="Video Star"
        image={VideoStarImg}
        altText={"coding quiz"}
        githubLink={"https://github.com/zackapotamus/video-star"}
        hostedLink={"https://video-star.herokuapp.com"}
        heroku={true}
      />
    </ProjectContainer>
  );
};

export default Portfolio;
