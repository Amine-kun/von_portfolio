const loadingPace = (setIsLoading) => {

  console.log('check')
 
  Pace.on("start", function () {
    console.log('check2')
    // document.querySelector("#preloader").classList.remove("isdone");
    // document.querySelector(".loading").classList.remove("isdone");
    setIsLoading(false);

    setTimeout(()=>{
      setIsLoading(true)
    },1000)
  });
  // Pace.on("done", function () {
  //   console.log('check_ldone')
  //   // document.querySelector("#preloader").classList.add("isdone");
  //   // document.querySelector(".loading").classList.add("isdone"); 
  //   setIsLoading(true)
  // });

  if (document.querySelector("body").classList.contains("pace-done")) {
    // document.querySelector("#preloader").classList.add("isdone");
    // document.querySelector(".loading").classList.add("isdone");
  setIsLoading(true)
  }

  window.addEventListener("load", () => {
    console.log('check_load')
    // document.querySelector("#preloader").classList.add("isdone");
    // document.querySelector(".loading").classList.add("isdone");
    setIsLoading(true)
    if (document.querySelector('.pace-running.pace-running')) {
      document.querySelector('.pace-running.pace-running').classList.remove('pace-running')
    }
  });
};

export default loadingPace;
