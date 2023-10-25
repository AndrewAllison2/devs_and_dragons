<template>
  <div class="container-fluid about-page bg-black">
    <div class="row justify-content-around ">
      <div class="col-12 pt-md-5 pb-3 mt-2 d-flex justify-content-center ">
        <img class="hero-img img-fluid rounded-4" :src="dndLogo" alt="">
      </div>

      <div class="col-12 text-center project-tools text-light  mx-3">
        <div>
          <p>Languages and Tools
            used on this project:</p>
          <p>• JavaScript</p>
          <p>• HTML</p>
          <p>• CSS</p>
          <p>• Vue</p>
          <p>• Git</p>
          <p>• MongoDB</p>
          <p>• node.js</p>
          <p>• Bootstrap</p>
          <p>• Auth0</p>
        </div>
      </div>
    </div>



    <div class="row my-3 justify-content-center">
      <div class="col-12 col-md-9 card align-items-center justify-content-center">
        <h1 class="d-flex text-light quote-img ">
          “Never fear quarrels, but seek hazardous adventures.”― Alexandre Dumas, The Three Musketeers
        </h1>
      </div>
    </div>


    <div class="container card-names text-center">
      <div class="row justify-content-center text-light mt-5">
        <div class="col-12 col-md-5 card-name m-2 p-2 align-items-center">
          <div class="mt-4">Devryn Zub</div>
          <div>
            <a class="mdi mdi-github mx-2 fs-2" title="To Devryn's Github" href=""></a>
            <a class="mdi mdi-linkedin fs-2" title="To Devryn's LinkedIn" href=""></a>
          </div>
        </div>
        <div class="col-12 col-md-5 card-name m-2 p-2 align-items-center">
          <div class="mt-4">Andrew Allison</div>
          <div>
            <a class="mdi mdi-github mx-2 fs-2" title="To Andrew's Github" href="https://github.com/AndrewAllison2"></a>
            <a class="mdi mdi-linkedin fs-2" title="To Andrew's LinkedIn"
              href="https://www.linkedin.com/in/andrew-allison-91a213288/"></a>
          </div>
        </div>
      </div>
      <div class="row justify-content-center text-light">
        <div class="col-12 col-md-5 card-name m-2 p-2 align-items-center">
          <div class="mt-4">Jeremy Olds</div>
          <div>
            <a class="mdi mdi-github mx-2 fs-2" title="To Jeremy's Github" href=""></a>
            <a class="mdi mdi-linkedin fs-2" title="To Jeremy's LinkedIn" href=""></a>
          </div>
        </div>
        <div class="col-12 col-md-5 card-name m-2 p-2 align-items-center">
          <div class="mt-4">Riley Thomas</div>
          <div>
            <a class="mdi mdi-github mx-2 fs-2" title="To Riley's Github" href="https://github.com/Rilezzz"></a>
            <a class="mdi mdi-linkedin fs-2" title="To Riley's LinkedIn"
              href="https://www.linkedin.com/in/idahosuperiorcustoms/"></a>
          </div>
        </div>
        <div class="col-12 col-md-5 card-name m-2 p-2 align-items-center">
          <div class="mt-4">Brandon Riggs</div>
          <div>
            <a class="mdi mdi-github mx-2 fs-2" title="To Brandon's Github"
              href="https://github.com/BrandonRiggs-0104"></a>
            <a class="mdi mdi-linkedin fs-2" title="To Brandon's LinkedIn" href=""></a>
          </div>
        </div>
      </div>
    </div>




  </div>
</template>

<script>
import dndLogo from "../assets/img/DnD_logo2-removebg-preview.png"
import { AppState } from "../AppState.js"
export default {
  setup() {
    return {
      dndLogo
    }
  }
}
</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");


h1 {
  font-family: "Montserrat Medium";
  text-align: center;
  transform: scale(.9);
  animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
  // padding-left: 15%;
}

@keyframes scale {
  100% {
    transform: scale(1);
  }
}

span {
  display: inline-block;
  opacity: 0;
  filter: blur(4px);
}

span:nth-child(1) {
  animation: fade-in 0.8s 0.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(2) {
  animation: fade-in 0.8s 0.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(3) {
  animation: fade-in 0.8s 0.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(4) {
  animation: fade-in 0.8s 0.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(5) {
  animation: fade-in 0.8s 0.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(6) {
  animation: fade-in 0.8s 0.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(7) {
  animation: fade-in 0.8s 0.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(8) {
  animation: fade-in 0.8s 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(9) {
  animation: fade-in 0.8s 0.9s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(10) {
  animation: fade-in 0.8s 1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(11) {
  animation: fade-in 0.8s 1.1s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(12) {
  animation: fade-in 0.8s 1.2s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(13) {
  animation: fade-in 0.8s 1.3s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(14) {
  animation: fade-in 0.8s 1.4s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(15) {
  animation: fade-in 0.8s 1.5s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(16) {
  animation: fade-in 0.8s 1.6s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(17) {
  animation: fade-in 0.8s 1.7s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

span:nth-child(18) {
  animation: fade-in 0.8s 1.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
}

@keyframes fade-in {
  100% {
    opacity: 1;
    filter: blur(0);
  }
}





.card {
  background-color: rgb(0, 0, 0);
  //   border: 1px double rgba(255, 72, 0, 0.578);
  //   box-shadow: 2px 0px 4px rgb(255, 72, 0, 0.578);
  // border-radius: 16px;
  color: white;

}

.card-name {
  background-color: rgb(0, 0, 0);
  border: 1px double rgba(255, 72, 0, 0.578);
  box-shadow: 1px 3px 2px rgb(255, 72, 0, 0.578);
  border-radius: 16px;
  color: white;
  background-image: linear-gradient(rgba(41, 39, 39, 0.541) 50%, rgba(105, 104, 104, 0.363) 80%, rgba(146, 146, 146, 0.747) 90%);
  // background-image: linear-gradient(rgba(146, 146, 146, 0.747) 15%, rgba(105, 104, 104, 0.541) 20%, rgba(41, 39, 39, 0.541) 35%);

}

.project-tools {

  font-size: 25px;
  margin-top: 2.5%;
  border-radius: 16px;
  // box-shadow: 2px 0px 4px rgb(255, 72, 0, 0.578);
  // border: 1px solid rgba(255, 72, 0, 0.578);
  margin-left: -1.5%
}


.quote-img {
  font-size: 30px;
  padding-top: 5%;
}


.about-page {
  background-color: #000000;
  // background-image:
  // background-attachment: fixed;
  // background-repeat: no-repeat;
  // background-size: cover;
  font-family: 'Courier New', Courier, monospace;
}

.hero-img {
  // max-height: 95vh;
  max-width: 75vh;
  // margin-left: 15%;
  // padding-top: 5%;
  border: 1px double rgba(255, 72, 0, 0.578);
  box-shadow: 4px 5px 13px rgb(255, 72, 0, 0.578);
  background-color: rgb(224, 190, 35);
}




@media(max-width: 767px) {
  .hero-img {
    max-width: 100%;
    margin-top: 12%;
    padding-top: 3%;
  }

  .project-tools {
    margin-top: 5%;
    margin-right: 5%;
    margin-left: 5%;
    padding: 3%;
    max-width: 89%;

  }

  .quote-img {
    font-size: 20px;
    padding-top: 3%;
    margin-left: 0%;
  }



}
</style>







