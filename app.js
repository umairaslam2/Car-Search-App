const carsInPakistan = [
    {
      brand: "Suzuki",
      models: [
        {
          name: "Suzuki Alto",
          year: 2023,
          price: "PKR 2,251,000 - 2,935,000",
          engine: "658cc",
          transmission: "Manual/Automatic",
          pic: "./images/suzukiAlto.jpeg",
        },
        {
          name: "Suzuki Wagon R",
          year: 2023,
          price: "PKR 3,062,000 - 3,563,000",
          engine: "998cc",
          transmission: "Manual/Automatic",
          pic: "./images/suzukiwagonr.jpeg",
        },
        {
          name: "Suzuki Cultus",
          year: 2023,
          price: "PKR 3,718,000 - 4,366,000",
          engine: "998cc",
          transmission: "Manual/Automatic",
          pic: "./images/suzukiCultus.jpeg",
        },
        {
          name: "Suzuki Swift",
          year: 2023,
          price: "PKR 4,577,000 - 5,213,000",
          engine: "1197cc",
          transmission: "Manual/Automatic",
          pic: "./images/suzukiSwift.jpeg",
        },
        {
          name: "Suzuki Bolan",
          year: 2023,
          price: "PKR 1,940,000 - 2,050,000",
          engine: "796cc",
          transmission: "Manual",
          pic: "./images/suzukiBolan.jpeg",
        },
        {
          name: "Suzuki Ravi",
          year: 2023,
          price: "PKR 1,856,000 - 1,911,000",
          engine: "796cc",
          transmission: "Manual",
          pic: "./images/suzukiRavi.jpeg",
        },
        {
          name: "Suzuki Jimny",
          year: 2023,
          price: "PKR 7,156,000",
          engine: "1462cc",
          transmission: "Automatic",
          pic: "./images/suzukiJimny.jpeg",
        },
        {
          name: "Suzuki Vitara",
          year: 2023,
          price: "PKR 8,550,000",
          engine: "1586cc",
          transmission: "Automatic",
          pic: "./images/suzukiVitara.jpeg",
        },
        {
          name: "Suzuki Mehran",
          year: 2023,
          price: "PKR 9.0 - 11.0 lacs",
          engine: "800cc",
          transmission: "Manual",
          pic: "./images/suzukiMehran.jpeg",
        },
      ],
    },
    {
      brand: "Toyota",
      models: [
        {
          name: "Toyota Corolla",
          year: 2023,
          price: "PKR 6,169,000 - 7,799,000",
          engine: "1299cc - 1798cc",
          transmission: "Manual/Automatic",
          pic: "./images/toyotaCorolla.jpeg",
        },
        {
          name: "Toyota Yaris",
          year: 2023,
          price: "PKR 4,499,000 - 5,769,000",
          engine: "1329cc - 1496cc",
          transmission: "Manual/Automatic",
          pic: "./images/toyotaYaris.jpeg",
        },
        {
          name: "Toyota Fortuner",
          year: 2023,
          price: "PKR 15,809,000 - 21,089,000",
          engine: "2694cc - 2755cc",
          transmission: "Automatic",
          pic: "./images/toyotaFortuner.jpeg",
        },
        {
          name: "Toyota Hilux",
          year: 2023,
          price: "PKR 9,829,000 - 13,279,000",
          engine: "2755cc",
          transmission: "Manual/Automatic",
          pic: "./images/toyotaHilux.jpeg",
        },
        {
          name: "Toyota Camry",
          year: 2023,
          price: "PKR 23,319,000",
          engine: "2494cc",
          transmission: "Automatic",
          pic: "./images/toyotaCamry.jpeg",
        },
        {
          name: "Toyota Prius",
          year: 2023,
          price: "PKR 12,349,000",
          engine: "1798cc",
          transmission: "Automatic",
          pic: "./images/toyotaParius.jpeg",
        },
      ],
    },
    {
      brand: "Kia",
      models: [
        {
          name: "Kia Picanto",
          year: 2023,
          price: "PKR 3,750,000 - 4,100,000",
          engine: "1000cc",
          transmission: "Manual/Automatic",
          pic: "./images/kiaPicanto.jpeg",
        },
        {
          name: "Kia Sportage",
          year: 2023,
          price: "PKR 8,500,000 - 10,500,000",
          engine: "2000cc",
          transmission: "Automatic",
          pic: "./images/kiaSportage.jpeg",
        },
        {
          name: "Kia Sorento",
          year: 2023,
          price: "PKR 10,900,000 - 12,700,000",
          engine: "2400cc - 3500cc",
          transmission: "Automatic",
          pic: "./images/kiaSorento.jpeg",
        },
        {
          name: "Kia Stonic",
          year: 2023,
          price: "PKR 5,900,000 - 6,500,000",
          engine: "1400cc",
          transmission: "Automatic",
          pic: "./images/kiaStonic.jpeg",
        },
        {
          name: "Kia Carnival",
          year: 2023,
          price: "PKR 16,300,000 - 17,800,000",
          engine: "3500cc",
          transmission: "Automatic",
          pic: "./images/kiaCarnival.jpeg",
        },
        {
          name: "Kia Niro",
          price: "PKR 6,000,000",
          engine: "1580cc",
          transmission: "Automatic",
          pic: "./images/kiaNiro.jpeg",
        },
      ],
    },
  ];
  // DOM elements
  const brandSelect = document.getElementById("brand");
  const modelSelect = document.getElementById("model");
  const searchButton = document.getElementById("searchCar");
  const carDetailsSection = document.getElementById("carDetails");
  
  // Populate brand select options
  function populateBrands() {
    carsInPakistan.forEach((car) => {
      const option = document.createElement("option");
      option.value = car.brand;
      option.textContent = car.brand;
      brandSelect.appendChild(option);
    });
  }
  
  // Populate model select options based on selected brand
  function populateModels(brand) {
    modelSelect.innerHTML = '<option value="">SELECT MODEL</option>';
    const selectedBrand = carsInPakistan.find((car) => car.brand === brand);
    if (selectedBrand) {
      selectedBrand.models.forEach((model) => {
        const option = document.createElement("option");
        option.value = model.name;
        option.textContent = model.name;
        modelSelect.appendChild(option);
      });
    }
  }
  
  // Show car details based on selected brand and model
  function showCarDetails(brand, modelName) {
    carDetailsSection.innerHTML = "";
    const selectedBrand = carsInPakistan.find((car) => car.brand === brand);
    if (selectedBrand) {
      const selectedModel = selectedBrand.models.find(
        (model) => model.name === modelName
      );
      if (selectedModel) {
        const carDetail = document.createElement("div");
        carDetail.classList.add("box");
        carDetail.classList.add(`${modelName.replace(/\s+/g, "")}`);
        carDetail.innerHTML = `
          <div class="imgBox">
            <img src="${selectedModel.pic}" alt="${selectedModel.name}">
          </div>
          <div class="textBox">
            <h3>Name : <span>${selectedModel.name}</span></h3>
            <p>ENGINE: <span>${selectedModel.engine}</span></p>
            <p>TRANSMISSION: <span>${selectedModel.transmission}</span></p>
            <p>PRICE: <span>${selectedModel.price}</span></p>
          </div>
        `;
        carDetailsSection.appendChild(carDetail);
      }
    }
  }
  
  // Event listeners
  brandSelect.addEventListener("change", function () {
    const selectedBrand = this.value;
    if (selectedBrand !== "SELECT CAR") {
      populateModels(selectedBrand);
    } else {
      modelSelect.innerHTML = '<option value="">SELECT MODEL</option>';
      carDetailsSection.innerHTML = "";
    }
  });
  
  modelSelect.addEventListener("change", function () {
    const selectedBrand = brandSelect.value;
    const selectedModel = this.value;
    if (selectedBrand !== "SELECT CAR" && selectedModel !== "SELECT MODEL") {
      showCarDetails(selectedBrand, selectedModel);
    } else {
      carDetailsSection.innerHTML = "";
    }
  });
  
  searchButton.addEventListener("click", function () {
    const selectedBrand = brandSelect.value;
    const selectedModel = modelSelect.value;
    if (selectedBrand !== "SELECT CAR" && selectedModel !== "SELECT MODEL") {
      showCarDetails(selectedBrand, selectedModel);
    } else {
      carDetailsSection.innerHTML = "";
    }
  });
  
  // Initial population of brands
  populateBrands();
  
  
  // ################### list work ################### \\
  
  let list = document.querySelector(".navbar .list");
  let bars = document.querySelector(".navbar #bar");
  
  bars.addEventListener("click",()=>{
    if(list.style.top == "-600px"){
      list.style.top = "0px";
      bars.classList.add("fa-xmark");
      bars.classList.remove("fa-bars");
    }else{
      list.style.top = "-600px";
      bars.classList.add("fa-bars");
      bars.classList.remove("fa-xmark");
    }
  })