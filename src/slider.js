const slider = document.getElementById("slider");
const dots = document.getElementById("dots");
const slides = [
  { img: "./assets/spain.jpg", name: "Spain" },
  { img: "./assets/japan.jpg", name: "Japan" },
  { img: "./assets/usa.jpg", name: "USA" },
];

let activeDot;

const changeSlide = (i) => {
  if (activeDot !== undefined) {
    const oldActiveDot = document.getElementById(`dot${activeDot}`);
    oldActiveDot.classList.remove("dot-active");
  }
  activeDot = i;
  const newActiveDot = document.getElementById(`dot${i}`);
  newActiveDot.classList.add("dot-active");

  console.log(window.innerWidth);
  switch (i) {
    case 0: {
      slider.style.transform = `translateX(${860}px)`;
      break;
    }
    case 1: {
      slider.style.transform = "translateX(0px)";
      break;
    }
    case 2: {
      slider.style.transform = `translateX(${-860}px)`;
      break;
    }
  }
};

const createSlide = (i) => {
  const { img, name } = slides[i];
  const slide = document.createElement("div");
  Object.assign(slide.style, {
    width: "800px",
    height: "800px",
    borderRadius: "16px",
    background: `url(${img})`,
    backgroundRepeat: "no-repeat",
    minWidth: "800px",
    backgroundSize: "100%",
  });

  slider.append(slide);
};

const createDot = (i) => {
  const dot = document.createElement("div");
  dot.onclick = () => changeSlide(i);
  dot.classList.add("dot");
  dot.id = `dot${i}`;
  dots.append(dot);
};

for (let i = 0; i < slides.length; i++) {
  createSlide(i);
  createDot(i);
}

changeSlide(1);
