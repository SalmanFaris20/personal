import bootstrap from "./../img/svg/bootstrap.svg";
import css from "./../img/svg/css.svg";
import figma from "./../img/svg/figma.svg";
import firebase from "./../img/svg/firebase.svg";
import git from "./../img/svg/git.svg";
import gitlab from "./../img/svg/gitlab.svg";
import html from "./../img/svg/html.svg";
import js from "./../img/svg/js.svg";
import mongo from "./../img/svg/mongo.svg";
import mysql from "./../img/svg/mysql.svg";
import node from "./../img/svg/node.svg";
import postgree from "./../img/svg/postgree.svg";
import react from "./../img/svg/react.svg";
import tailwind from "./../img/svg/tailwind.svg";
import mui from "./../img/svg/mui.svg";
import redux from "./../img/svg/redux.svg";

const Software = () => {
  return (
    <div
      className="mt-10"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >
      <div className="flex space-x-2 justify-center md:justify-end md:px-20 ">
        <div className="bg-orange h-0.5 w-5 mt-3"></div>
        <h4 className="text-birutua dark:text-orange">Software & Tools</h4>
      </div>
      <div class="flex flex-wrap space-x-5 justify-center  mt-10 items-center px-5 ">
        <img src={bootstrap} alt="bootstrap" />
        <img src={css} alt="css" />
        <img src={figma} alt="figma" />
        <img src={firebase} alt="firebase" />
        <img src={git} alt="git" />
        <img src={gitlab} alt="gitlab" />
        <img src={html} alt="html" />
        <img src={js} alt="js" />
        <img src={mongo} alt="mongo" />
        <img src={mysql} alt="mysql" />
        <img src={node} alt="node" />
        <img src={postgree} alt="postgree" />
        <img src={react} alt="react" />
        <img src={tailwind} alt="tailwind" />
        <img src={mui} alt="mui" />
        <img src={redux} alt="redux" />
      </div>
    </div>
  );
};

export default Software;
