import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBook, faCameraRetro, faClapperboard, faPlane } from "@fortawesome/free-solid-svg-icons";

function Profile() {
  
  return (
    <main className="container">
      <div className="profileImg">
        <div className="roof">
          Profile
        </div>
        <div className="navhome">
          <Link to="/">
            <span className="mobileNav">
              <div></div>
              mintchoco<br/>icecream
            </span>
          </Link>
        </div>
        <div className="projectsNav">
          <Link to="/Projects">Projects</Link>
          <Link to="/Contact">Contact</Link>
        </div>
        <div className="profileMyImg"></div>
        <div className="profileWrites">
          <p>나는 그 텅 빈 방을 우리가 언제나 계획하고 꿈꿔왔던 실험실과 비교하지 않고, 그 자체로 받아들이고, 열심히 노력하면 얼마든지 바꿀 수 있는 가능성을 본 빌의 눈에 감탄했다. 과거의 꿈과 현재의 현실 사이에 커다란 격차가 있었지만 그는 우리의 새 삶을 사랑할 준비가 되어 있었다. 나도 그 삶을 사랑하기 위해 노력해보겠다고 결심했다.
          </p>
          <p>- Lab Girl 中, Hope Jahren</p>
        </div>
        <h3 className="profileName">Name : 서현정 (Seo Hyunjeong)</h3>
        <div className="profileSkills">
          <div className="skillsName">
            <span>Javascript</span>
            <span>ReactJS</span>
            <span>NextJS</span>
            <span>Typescript</span>
            <span>CSS3</span>
            <span>Python</span>
          </div>

        </div>
        <div className="profileHobby">
          <span>Fav♥rites</span>
          <div>
            <p><FontAwesomeIcon icon={faCameraRetro}/>Film Camera</p>
            <p><FontAwesomeIcon icon={faPlane}/>Travel</p>
            <p><FontAwesomeIcon icon={faBook}/>Reading Books</p>
            <p><FontAwesomeIcon icon={faClapperboard}/>Watching Movies</p>
          </div>
        </div>
        <a className="github" href="https://github.com/mintchocoicecream">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className="notion" href="https://www.notion.so/mintchocoicecream/Dev-133e8a6d037449aeb49f616cc9836f78">
          <div className="profileNotion"></div>
        </a>
      </div>
    </main>
      );
}

export default Profile;