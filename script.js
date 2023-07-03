class User {
    constructor(_firstname, _surname, _age, _location) {
      this.firstname = _firstname;
      this.surname = _surname;
      this.age = _age;
      this.location = _location;
    }
  
    compareAge = function (anotherPerson) {
      if (this.age > anotherPerson.age) {
        console.log("è più grande di " + anotherPerson.firstname);
      } else if (anotherPerson.age > this.age) {
        console.log(anotherPerson.firstname + " " + "è più grande di me");
      } else {
        console.log(anotherPerson.firstname + " " + "ha la mia età");
      }
    };
  }
  
  const x = new User("Gino", "Paoli", 57, "Italia");
  console.log(x);
  
  const y = new User("Orlando", "Furioso", 33, "Italia");
  console.log(x);
  
  y.compareAge(x);
  
  
  const petArray = [];
  
  const inputPetName = document.getElementById("pet-name");
  const inputOwnerName = document.getElementById("owner-name");
  const inputSpecies = document.getElementById("species");
  const inputBreed = document.getElementById("breed");
  
  class Pet {
    constructor(_petName, _ownerName, _species, _breed) {
      this.petName = _petName;
      this.ownerName = _ownerName;
      this.species = _species;
      this.breed = _breed;
    }
    owenerCopare = function (anotherOwener) {
      if (this.ownerName === anotherOwener.ownerName) {
        return true;
      } else {
        return false;
      }
    };
  }
  
  const addPet = function () {
    const petTarget = document.getElementById("elenco-pet");
    petTarget.innerHTML = "";
  
    petArray.forEach((pet) => {
      let sameOwner = pet.owenerCopare(`${petArray.length - 2}`);
      const li = document.createElement("li");
      li.innerText = `${pet.petName}, ${pet.ownerName}, ${pet.species}, ${pet.breed} ${sameOwner}`;
      petTarget.appendChild(li);
    });
  };
  
  const formPet = document.querySelector("form");
  
  formPet.addEventListener("submit", function (e) {
    e.preventDefault();
    const newPet = new Pet(
      inputPetName.value,
      inputOwnerName.value,
      inputSpecies.value,
      inputBreed.value
    );
  
    petArray.push(newPet);
    inputPetName.value = "";
    inputOwnerName.value = "";
    inputSpecies.value = "";
    inputBreed.value = "";
    addPet();
  });