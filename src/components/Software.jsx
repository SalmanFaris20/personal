import bootstrap from "./../img/bootstrap.svg";
import css from "./../img/css.svg";
import figma from "./../img/figma.svg";
import firebase from "./../img/firebase.svg";
import git from "./../img/git.svg";
import gitlab from "./../img/gitlab.svg";
import html from "./../img/html.svg";
import js from "./../img/js.svg";
import mongo from "./../img/mongo.svg";
import mysql from "./../img/mysql.svg";
import node from "./../img/node.svg";
import postgree from "./../img/postgree.svg";
import react from "./../img/react.svg";
import tailwind from "./../img/tailwind.svg";

const Software = () => {
  return (
    <div className="mt-10">
      <div className="flex space-x-2 justify-center md:justify-end md:px-20 ">
        <div className="bg-orange h-0.5 w-5 mt-3"></div>
        <h4 className="text-orange">Software & Tools</h4>
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
      </div>
    </div>
  );
};

export default Software;
